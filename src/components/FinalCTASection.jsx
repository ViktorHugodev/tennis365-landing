import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export default function FinalCTASection() {
  const scrollToPlans = () => {
    const el = document.getElementById('planos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#06080d] via-[#090e18] to-[#04060a] border-b border-slate-800/80 relative overflow-hidden">
      
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>É A MELHOR FASE DO TENNIS365</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Novo Sistema Inteligente. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200">
            Contas duram 4 a 5x mais. Pinnacle sem limitação.
          </span>
        </h2>

        {/* Text */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Vagas EXTREMAMENTE limitadas. As vagas só abriram a partir do dia 27 exclusivamente para preservar a liquidez do mercado. Se você não obtiver lucro no mês, o próximo mês é 100% por nossa conta.
        </p>

        {/* Action Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToPlans}
            className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-display font-extrabold text-base tracking-wide flex items-center justify-center gap-3 transition-all shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Garantir Vaga da Abertura do Dia 27</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Micro Trust Indicators */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-400 font-medium border-t border-slate-800/60 max-w-3xl mx-auto">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Contas duram 4 a 5x mais
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Pinnacle Sem Limitação
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Sem lucro = Próximo Mês Grátis
          </span>
        </div>

      </div>
    </section>
  );
}
