import React from 'react';
import { Cloud, Send, CheckCircle2, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function StrategiesSection() {
  const scrollToPlans = () => {
    const el = document.getElementById('planos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="estrategias" className="py-24 bg-[#06080d] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>É A MELHOR FASE DO TENNIS365</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Controle total com tecnologia 4x a 5x mais duradoura
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Você não fica preso a uma automação cega. Escolha a praticidade do robô em nuvem com novo sistema inteligente ou a autonomia das apostas na Pinnacle sem limitação.
          </p>
        </div>

        {/* 3 Modes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Mode 1: Nuvem com Novo Sistema */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 via-[#0a0e19] to-slate-900 border-2 border-emerald-500/50 shadow-xl shadow-emerald-950/30 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold">
                  SISTEMA INTELIGENTE 4X-5X
                </span>
                <span className="p-2 rounded-xl bg-slate-800 text-emerald-400">
                  <Cloud className="w-5 h-5" />
                </span>
              </div>

              <h3 className="text-2xl font-display font-extrabold text-white">
                Execução em Nuvem Otimizada
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                As tips enviadas são processadas diretamente pelos servidores em nuvem com algoritmo inteligente que faz suas contas durarem <strong>4 a 5x mais tempo</strong>.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-slate-800/80 text-xs text-slate-200">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Contas duram 4 a 5x mais tempo</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sem consumo de bateria ou PC ligado</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Registro de status automático no painel</span>
                </div>
              </div>
            </div>

            <button
              onClick={scrollToPlans}
              className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-display font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 cursor-pointer"
            >
              <span>Usar Novo Sistema em Nuvem</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mode 2: Pinnacle Sem Limitação */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 via-[#0d1527] to-slate-900 border border-emerald-500/40 hover:border-emerald-500 transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-mono font-bold">
                  PINNACLE SEM LIMITAÇÃO
                </span>
                <span className="p-2 rounded-xl bg-slate-800 text-amber-400">
                  <ShieldCheck className="w-5 h-5" />
                </span>
              </div>

              <h3 className="text-2xl font-display font-extrabold text-white">
                Operação na Pinnacle
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Na Pinnacle, limitação de conta <strong>não existe</strong>. É a melhor fase do Tennis365 para bancas de qualquer tamanho. Vai perder?
              </p>

              <div className="space-y-2.5 pt-4 border-t border-slate-800/80 text-xs text-slate-200">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>Zero limitação de conta</strong> na Pinnacle</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Odds de alta liquidez profissional</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Preservação de banca de longo prazo</span>
                </div>
              </div>
            </div>

            <button
              onClick={scrollToPlans}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-display font-bold text-sm flex items-center justify-center gap-2 border border-slate-700 cursor-pointer"
            >
              <span>Operar sem Limites na Pinnacle</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mode 3: Tips Telegram */}
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-mono font-bold">
                  SINAIS MANUAIS
                </span>
                <span className="p-2 rounded-xl bg-slate-800 text-sky-400">
                  <Send className="w-5 h-5" />
                </span>
              </div>

              <h3 className="text-2xl font-display font-extrabold text-white">
                Tips no Telegram
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Receba a notificação da tip no Telegram com partida, odd recomendada, seleção e stake para apostar onde preferir.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-slate-800/80 text-xs text-slate-200">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Tip pronta com todos os parâmetros</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Liberdade para apostar em qualquer casa</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Controle total pelo painel</span>
                </div>
              </div>
            </div>

            <button
              onClick={scrollToPlans}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-display font-bold text-sm flex items-center justify-center gap-2 border border-slate-700 cursor-pointer"
            >
              <span>Usar Modo Manual</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
