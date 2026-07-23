import React, { useState, useEffect, useRef } from 'react';
import { X, Lock, Loader2, CheckCircle2, CreditCard } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

// Endpoint do backend (robo-tennis-prospecta) que cria a assinatura no Galax Pay.
const CHECKOUT_API =
  import.meta.env.VITE_CHECKOUT_API ??
  'https://robo-tennis-prospecta.vercel.app/api/checkout/celcash';

// SDK de tokenização (o número do cartão é criptografado no browser e nunca trafega cru).
const SDK_URL = 'https://js.cel.cash/checkout-v2.min.js';

// false = chave sandbox / true = chave de produção. Validar no ambiente real ao publicar.
const CELCASH_PRODUCTION = false;

const PLAN_INFO = {
  mensal: { label: 'Plano Mensal', price: 'R$ 297/mês' },
  trimestral: { label: 'Plano Trimestral', price: 'R$ 697/trimestre' },
};

function loadSdk() {
  return new Promise((resolve, reject) => {
    if (typeof window !== 'undefined' && window.BaasCard) return resolve();
    const existing = document.querySelector(`script[src="${SDK_URL}"]`);
    if (existing) {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject(new Error('Falha ao carregar o SDK de pagamento')));
      if (window.BaasCard) resolve();
      return;
    }
    const s = document.createElement('script');
    s.src = SDK_URL;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Falha ao carregar o SDK de pagamento'));
    document.head.appendChild(s);
  });
}

const onlyDigits = (v) => (v || '').replace(/\D/g, '');

function formatCpf(v) {
  const d = onlyDigits(v).slice(0, 11);
  return d
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}
function formatCard(v) {
  return onlyDigits(v).slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 ');
}
function formatExpiry(v) {
  const d = onlyDigits(v).slice(0, 6); // MMAAAA
  if (d.length <= 2) return d;
  return `${d.slice(0, 2)}/${d.slice(2)}`;
}
function formatPhone(v) {
  const d = onlyDigits(v).slice(0, 11);
  if (d.length <= 10) return d.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3').trim();
  return d.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').trim();
}

export default function CheckoutModal({ plan, onClose }) {
  const [form, setForm] = useState({
    name: '', cpf: '', email: '', phone: '',
    cardNumber: '', cardHolder: '', cardExpiry: '', cardCvv: '',
  });
  const [status, setStatus] = useState('idle'); // idle | processing | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const firstFieldRef = useRef(null);

  useEffect(() => {
    loadSdk().catch(() => setErrorMsg('Não foi possível iniciar o pagamento. Recarregue a página.'));
    firstFieldRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const set = (field) => (e) => {
    const raw = e.target.value;
    const map = { cpf: formatCpf, cardNumber: formatCard, cardExpiry: formatExpiry, phone: formatPhone };
    setForm((f) => ({ ...f, [field]: map[field] ? map[field](raw) : raw }));
  };

  const validateForm = () => {
    if (form.name.trim().length < 3) return 'Informe o nome completo.';
    if (onlyDigits(form.cpf).length !== 11) return 'CPF inválido.';
    if (!form.email.includes('@')) return 'E-mail inválido.';
    if (onlyDigits(form.phone).length < 10) return 'Telefone inválido.';
    if (onlyDigits(form.cardNumber).length < 13) return 'Número do cartão inválido.';
    if (form.cardHolder.trim().length < 3) return 'Nome impresso no cartão inválido.';
    if (onlyDigits(form.cardExpiry).length !== 6) return 'Validade no formato MM/AAAA.';
    if (onlyDigits(form.cardCvv).length < 3) return 'CVV inválido.';
    return null;
  };

  const tokenizeCard = async () => {
    await loadSdk();
    if (!window.BaasCard) throw new Error('SDK de pagamento indisponível.');
    const [mm, yyyy] = form.cardExpiry.split('/');
    const baas = new window.BaasCard(CELCASH_PRODUCTION);
    await baas._setPublicKey();
    const card = baas.newCard({
      number: onlyDigits(form.cardNumber),
      holder: form.cardHolder.trim().toUpperCase(),
      expiresAt: `${yyyy}-${mm}`, // formato YYYY-MM
      cvv: onlyDigits(form.cardCvv),
    });
    card.validate();
    const hash = await card.encrypt();
    if (!hash) throw new Error('Não foi possível validar o cartão.');
    return hash;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    const invalid = validateForm();
    if (invalid) return setErrorMsg(invalid);

    setStatus('processing');
    try {
      const cardHash = await tokenizeCard();
      const res = await fetch(CHECKOUT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan,
          cardHash,
          customer: {
            name: form.name.trim(),
            document: onlyDigits(form.cpf),
            email: form.email.trim().toLowerCase(),
            phone: onlyDigits(form.phone),
          },
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Pagamento não aprovado. Verifique os dados do cartão.');
      }
      const price = plan === 'trimestral' ? 697 : 297;
      trackEvent('Purchase', { plan: PLAN_INFO[plan]?.label, value: price, currency: 'BRL' });
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Erro ao processar o pagamento.');
    }
  };

  const info = PLAN_INFO[plan] ?? PLAN_INFO.mensal;
  const processing = status === 'processing';

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-md max-h-[92vh] overflow-y-auto rounded-2xl border border-slate-700 bg-[#0b0e14] p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-white transition"
          aria-label="Fechar"
        >
          <X size={22} />
        </button>

        {status === 'success' ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="mx-auto mb-4 text-emerald-400" size={56} />
            <h3 className="text-2xl font-bold text-white">Pagamento confirmado!</h3>
            <p className="mt-2 text-slate-300">
              Sua assinatura do <strong>{info.label}</strong> foi ativada. Você receberá o acesso no
              WhatsApp e e-mail informados.
            </p>
            <button
              onClick={onClose}
              className="mt-6 w-full rounded-lg bg-emerald-500 py-3 font-semibold text-black hover:bg-emerald-400 transition"
            >
              Concluir
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="mb-2">
              <div className="flex items-center gap-2 text-emerald-400">
                <CreditCard size={20} />
                <span className="text-sm font-semibold uppercase tracking-wide">Checkout seguro</span>
              </div>
              <h3 className="mt-1 text-xl font-bold text-white">{info.label}</h3>
              <p className="text-emerald-400 font-semibold">{info.price}</p>
            </div>

            <Field ref={firstFieldRef} label="Nome completo" value={form.name} onChange={set('name')} placeholder="Seu nome" disabled={processing} />
            <div className="grid grid-cols-2 gap-3">
              <Field label="CPF" value={form.cpf} onChange={set('cpf')} placeholder="000.000.000-00" inputMode="numeric" disabled={processing} />
              <Field label="Celular" value={form.phone} onChange={set('phone')} placeholder="(00) 00000-0000" inputMode="numeric" disabled={processing} />
            </div>
            <Field label="E-mail" type="email" value={form.email} onChange={set('email')} placeholder="voce@email.com" disabled={processing} />

            <div className="pt-2 border-t border-slate-800">
              <Field label="Número do cartão" value={form.cardNumber} onChange={set('cardNumber')} placeholder="0000 0000 0000 0000" inputMode="numeric" disabled={processing} />
              <Field label="Nome impresso no cartão" value={form.cardHolder} onChange={set('cardHolder')} placeholder="Como está no cartão" disabled={processing} />
              <div className="grid grid-cols-2 gap-3">
                <Field label="Validade (MM/AAAA)" value={form.cardExpiry} onChange={set('cardExpiry')} placeholder="12/2029" inputMode="numeric" disabled={processing} />
                <Field label="CVV" value={form.cardCvv} onChange={set('cardCvv')} placeholder="123" inputMode="numeric" maxLength={4} disabled={processing} />
              </div>
            </div>

            {errorMsg && (
              <p className="rounded-lg bg-red-500/10 border border-red-500/30 px-3 py-2 text-sm text-red-300">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={processing}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 py-3 font-bold text-black hover:bg-emerald-400 transition disabled:opacity-60"
            >
              {processing ? <Loader2 className="animate-spin" size={20} /> : <Lock size={18} />}
              {processing ? 'Processando...' : 'Pagar e ativar acesso'}
            </button>
            <p className="flex items-center justify-center gap-1.5 text-xs text-slate-500">
              <Lock size={12} /> Pagamento criptografado. Seus dados não passam pelo nosso servidor.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

const Field = React.forwardRef(function Field({ label, ...props }, ref) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-slate-400">{label}</span>
      <input
        ref={ref}
        {...props}
        className="w-full rounded-lg border border-slate-700 bg-[#11151d] px-3 py-2.5 text-white placeholder-slate-600 outline-none focus:border-emerald-500 disabled:opacity-60"
      />
    </label>
  );
});
