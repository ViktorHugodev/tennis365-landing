import React, { useState } from 'react';
import { ChevronDown, ShieldCheck, FileText, Lock, Sliders } from 'lucide-react';

const OBJECTIONS = [
  {
    id: 1,
    question: 'Preciso deixar o computador ou celular ligado no modo automático?',
    answer: 'Não. No modo automático, o robô processa as ordens em servidores dedicados em nuvem. Você configura suas regras uma única vez no painel e o sistema executa sem consumir bateria ou exigir conexões locais ativas.',
    tag: 'Operação em Nuvem'
  },
  {
    id: 2,
    question: 'O que acontece se uma aposta não for executada?',
    answer: 'Tudo é registrado com transparência. Se uma aposta não for processada — por exemplo, se a odd cair abaixo da odd mínima que você configurou no painel — o status exato e o motivo ficam visíveis no seu histórico de ordens.',
    tag: 'Automação Sem Caixa-Preta'
  },
  {
    id: 3,
    question: 'Como funciona o envio de tips no Telegram?',
    answer: 'Você recebe uma notificação instantânea no canal com o evento de tênis, o mercado selecionado, a odd recomendada e a sugestão de stake. Se preferir o modo manual, basta copiar a entrada e apostar na sua casa de preferência.',
    tag: 'Modo Manual & Telegram'
  },
  {
    id: 4,
    question: 'Como mantenho o controle sobre minha banca e stake?',
    answer: 'Você possui autonomia total. No painel de controle, é possível definir a porcentagem exata de stake sobre a sua banca, estabelecer limite de odd mínima e alternar o modo de operação a qualquer momento.',
    tag: 'Gestão de Risco'
  },
  {
    id: 5,
    question: 'O produto possui garantia legal e nota fiscal?',
    answer: 'Sim. Todas as assinaturas acompanham emissão formal de Nota Fiscal no seu e-mail e garantem o direito de arrependimento em até 7 dias corridos, em conformidade com o Código de Defesa do Consumidor (Art. 49 da Lei 8.078/90).',
    tag: 'Segurança Legal & CDC'
  }
];

export default function ObjectionSection() {
  const [openId, setOpenId] = useState(2); // Keep Q2 (Transparency) open by default

  return (
    <section id="duvidas" className="py-24 bg-[#080b12] border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
            <Sliders className="w-3.5 h-3.5" />
            <span>TRANSPARÊNCIA TOTAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Perguntas Frequentes sobre o Funcionamento
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Respostas claras sobre envio de tips, modo automático em nuvem, controle no painel e conformidade legal.
          </p>
        </div>

        {/* Asymmetric Accordion Layout (8:4 split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Accordion List (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {OBJECTIONS.map((obj) => {
              const isOpen = openId === obj.id;
              return (
                <div
                  key={obj.id}
                  className={`rounded-2xl border transition-all ${
                    isOpen
                      ? 'bg-slate-900/90 border-emerald-500/40 shadow-xl shadow-emerald-950/20'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : obj.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                        {obj.tag}
                      </span>
                      <h3 className="text-base sm:text-lg font-display font-bold text-white">
                        {obj.question}
                      </h3>
                    </div>

                    <div className={`p-2 rounded-xl bg-slate-800 text-slate-300 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-emerald-500/20 text-emerald-400' : ''
                    }`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 border-t border-slate-800/60 mt-2">
                      <p className="text-sm text-slate-300 leading-relaxed pt-4">
                        {obj.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Support & Trust */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 space-y-6">
              <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-400" />
                <span>Garantia de Segurança Legal</span>
              </h3>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Garantia CDC (7 Dias)</strong>
                    <p className="text-slate-400 text-[11px] mt-0.5">Direito incondicional de reembolso previsto no Art. 49 do CDC.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <FileText className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Emissão de Nota Fiscal</strong>
                    <p className="text-slate-400 text-[11px] mt-0.5">Enviada de forma automatizada no seu e-mail no ato da compra.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <Lock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Transparência em Nuvem</strong>
                    <p className="text-slate-400 text-[11px] mt-0.5">Status rastreado de cada tip e ordem processada no painel.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-1">
                <p className="text-xs font-bold text-emerald-400">Dúvidas sobre o produto?</p>
                <p className="text-[11px] text-slate-300">Nosso time orienta a configuração do painel e do Telegram.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
