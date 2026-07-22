import React from 'react';
import { ShieldCheck, Award, Lock, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';

export default function GuaranteeBanner() {
  return (
    <section className="py-14 bg-[#090d16] border-b border-slate-800 relative overflow-hidden">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-r from-slate-900 via-[#0a111f] to-slate-900 rounded-3xl border-2 border-emerald-500/60 p-8 sm:p-10 shadow-2xl shadow-emerald-950/40 space-y-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Guarantee Description (8 cols) */}
            <div className="lg:col-span-8 space-y-4 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>GARANTIA DE PERFORMANCE • MÊS SEGUINTE GRÁTIS</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight">
                Se você não obtiver lucro no mês, o <span className="text-emerald-400 underline underline-offset-4 decoration-emerald-500/40">próximo mês é por nossa conta</span>.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Assumimos o compromisso com os seus resultados. Além da garantia CDC de 7 dias para reembolso integral, mantemos o compromisso: se o seu mês não fechar com lucro, o próximo mês de assinatura sai por <strong>R$ 0,00</strong>.
              </p>

              {/* Scarcity & Day 27 Note */}
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Vagas EXTREMAMENTE limitadas! As vagas só abriram a partir do dia 27 exclusivamente para preservar a liquidez das odds do mercado.</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs font-medium text-slate-200">
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sem lucro no mês = Próxima mensalidade grátis</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Novo sistema inteligente (Contas duram 4-5x mais)</span>
                </div>
              </div>

            </div>

            {/* Right Badge / Guarantee Seal (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-inner">
                <Award className="w-8 h-8" />
              </div>

              <div>
                <p className="font-display font-extrabold text-lg text-white">
                  RISCO DE LUCRO ASSUMIDO
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Mês sem lucro = Próximo R$ 0,00
                </p>
              </div>

              <div className="pt-2 text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <Lock className="w-3.5 h-3.5" />
                <span>Pagamento Criptografado 256-bit</span>
              </div>
            </div>

          </div>

          {/* Discrete Responsible Gambling Notice */}
          <div className="pt-3 border-t border-slate-800/60 text-center text-xs text-slate-400 font-mono flex items-center justify-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Apostas envolvem risco. Jogue com responsabilidade. 18+</span>
          </div>

        </div>

      </div>
    </section>
  );
}
