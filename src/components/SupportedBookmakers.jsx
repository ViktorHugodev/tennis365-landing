import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function SupportedBookmakers() {
  const bookmakers = [
    { name: 'Bet365', tag: 'Disponível' },
    { name: 'Betano', tag: 'Disponível' },
    { name: 'Pinnacle', tag: 'Sem Limitação' },
    { name: 'Superbet', tag: 'Disponível' },
    { name: 'Blaze', tag: 'Disponível' },
    { name: 'Betvip', tag: 'Disponível' },
    { name: 'Jonbet', tag: 'Disponível' },
    { name: 'Flabet', tag: 'Disponível' },
    { name: 'KingPanda', tag: 'Disponível' },
    { name: '7K Bet', tag: 'Disponível' },
    { name: 'R7 Bet', tag: 'Disponível' },
  ];

  return (
    <div className="py-12 bg-[#05070c] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>COMPATIBILIDADE AMPLA</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-2">
              Casas de Apostas e Corretoras Suportadas
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Configure sua conta no painel e ligue seu robô — o sistema executa de forma 100% automática.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800 shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Disponível em todas as principais casas do mercado</span>
          </div>
        </div>

        {/* Bookmakers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-2.5 pt-2">
          {bookmakers.map((bm) => (
            <div 
              key={bm.name}
              className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center hover:border-emerald-500/40 hover:bg-slate-900 transition-all group"
            >
              <p className="font-display font-bold text-sm text-white group-hover:text-emerald-400 transition-colors">
                {bm.name}
              </p>
              <span className={`text-[9px] font-mono block mt-1 px-1.5 py-0.5 rounded ${
                bm.tag === 'Sem Limitação' 
                  ? 'bg-amber-500/15 text-amber-400 border border-amber-500/20' 
                  : 'bg-emerald-500/10 text-emerald-400'
              }`}>
                {bm.tag}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
