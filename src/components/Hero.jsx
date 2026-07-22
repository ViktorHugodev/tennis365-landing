import React from 'react';
import { ArrowRight, Send, PlayCircle, ShieldCheck, Zap, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import LiveTerminalMockup from './LiveTerminalMockup';

export default function Hero() {
  const scrollToPlans = () => {
    const el = document.getElementById('planos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHow = () => {
    const el = document.getElementById('como-funciona');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-38 lg:pb-28 overflow-hidden border-b border-slate-800/60">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Urgency & Innovation Banner */}
        <div className="mb-8 p-3.5 rounded-2xl bg-gradient-to-r from-emerald-500/15 via-slate-900 to-emerald-500/15 border border-emerald-500/30 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-emerald-400 font-bold">
            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>LUCRO 100% DO CLIENTE • NOVO SISTEMA INTELIGENTE (Contas 4 a 5x mais duradouras)</span>
          </div>
          <div className="flex items-center gap-2 text-amber-400 font-semibold">
            <Clock className="w-3.5 h-3.5 shrink-0" />
            <span>VAGAS LIMITADAS (Abertura dia 27 para preservar liquidez)</span>
          </div>
        </div>

        {/* Asymmetric 12-Column Grid Layout (5:7 split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (5 Cols) - Value Proposition */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold shadow-lg shadow-emerald-950/40">
              <Send className="w-3.5 h-3.5 text-emerald-400" />
              <span>AUTOMÁTICO OU MANUAL • ESTRATÉGIA DESDE 2021</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[45px] font-display font-extrabold text-white leading-[1.12] tracking-tight">
              A tip chega pronta. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200">Você decide quem executa.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Receba entradas de tênis no Telegram, opere manualmente ou deixe o Tennis365 processar tudo em nuvem — com <strong className="text-emerald-400">100% do lucro para você</strong> e sem banca mínima obrigatória.
            </p>

            {/* Core Strength Highlights Pill Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-200">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Lucro 100% seu</strong> (Zero taxa de comissão)</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Sem Banca Mínima</strong> (Recomendado 2k+)</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Contas duram 4 a 5x mais</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pinnacle, Bet365, Betano + 8 Casas</span>
              </div>
            </div>

            {/* Actions CTA Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={scrollToPlans}
                className="px-7 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-display font-extrabold text-base tracking-wide flex items-center justify-center gap-3 transition-all shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Conhecer os Planos</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={scrollToHow}
                className="px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-display font-semibold text-sm border border-slate-800 flex items-center justify-center gap-2 transition-all hover:border-slate-700 cursor-pointer"
              >
                <PlayCircle className="w-4 h-4 text-emerald-400" />
                <span>Ver como funciona</span>
              </button>
            </div>

            {/* Scarcity & Proof Bar */}
            <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>🔒 Abertura dia 27 • Preservação de liquidez</span>
              <span className="text-emerald-400 font-bold">Vagas Limitadas</span>
            </div>

          </div>

          {/* Right Column (7 Cols) - Interactive Flow & Terminal Preview */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Live Terminal / Operational Flow Mockup */}
            <LiveTerminalMockup />

            {/* Official Logo Banner */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <img 
                  src="/tennis365-logo.png" 
                  alt="Tennis365 Logo Oficial" 
                  className="h-7 w-auto object-contain shrink-0"
                />
                <div>
                  <p className="font-semibold text-white">Estratégia em Tênis Lucrativa Desde 2021</p>
                  <p className="text-slate-400 text-[11px]">Robô em nuvem 30 dias • Lucro 100% do cliente.</p>
                </div>
              </div>
              <span className="hidden sm:inline-block font-mono text-[10px] px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                100% Automático
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
