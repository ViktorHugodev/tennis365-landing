import React from 'react';
import { Cpu, CheckCircle2, Send, Sliders, RefreshCw } from 'lucide-react';

export default function LiveTerminalMockup() {
  const logs = [
    {
      id: 1,
      time: '15:42',
      tournament: 'ATP Masters 1000',
      match: 'C. Alcaraz vs J. Sinner',
      selection: 'Vencedor: C. Alcaraz',
      odd: '1.85',
      stake: '1.5%',
      mode: 'Nuvem',
      status: 'PROCESSADA',
      statusColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
    },
    {
      id: 2,
      time: '15:20',
      tournament: 'WTA 500 Stuttgart',
      match: 'I. Swiatek vs A. Sabalenka',
      selection: 'Vencedor: I. Swiatek',
      odd: '1.92',
      stake: '2.0%',
      mode: 'Manual (Telegram)',
      status: 'EXECUTADA MANUALMENTE',
      statusColor: 'text-sky-400 border-sky-500/30 bg-sky-500/10'
    },
    {
      id: 3,
      time: '14:55',
      tournament: 'ATP 500 Barcelona',
      match: 'S. Tsitsipas vs R. Nadal',
      selection: 'Vencedor: S. Tsitsipas',
      odd: '1.62',
      stake: '1.0%',
      mode: 'Nuvem',
      status: 'NÃO EXECUTADA — ODD ABAIXO DO MÍNIMO CONFIGURADO (1.75)',
      statusColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10'
    }
  ];

  return (
    <div className="relative rounded-2xl bg-[#090d16] border border-slate-800/80 shadow-2xl shadow-emerald-950/20 overflow-hidden font-sans">
      
      {/* Terminal Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0c121e] border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 font-mono text-xs text-slate-300 font-semibold flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            PAINEL_TENNIS365 — RASTREAMENTO EM TEMPO REAL
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-mono text-[11px] text-emerald-400 font-medium uppercase tracking-wider">
            Nuvem & Telegram Ativos
          </span>
        </div>
      </div>

      {/* Terminal Status Sub-header */}
      <div className="grid grid-cols-3 divide-x divide-slate-800 bg-[#070a11] py-3 px-2 border-b border-slate-800 text-center">
        <div>
          <p className="text-[10px] font-mono text-slate-400 uppercase">Tip Telegram</p>
          <p className="font-mono text-xs font-bold text-sky-400 flex items-center justify-center gap-1 mt-0.5">
            <Send className="w-3 h-3" />
            Enviada no Canal
          </p>
        </div>
        <div>
          <p className="text-[10px] font-mono text-slate-400 uppercase">Processamento Nuvem</p>
          <p className="font-mono text-xs font-bold text-emerald-400 flex items-center justify-center gap-1 mt-0.5">
            <CheckCircle2 className="w-3 h-3" />
            Automático
          </p>
        </div>
        <div>
          <p className="text-[10px] font-mono text-slate-400 uppercase">Registro em Painel</p>
          <p className="font-mono text-xs font-bold text-amber-400 flex items-center justify-center gap-1 mt-0.5">
            <Sliders className="w-3 h-3" />
            100% Transparente
          </p>
        </div>
      </div>

      {/* Terminal Body / Active Operational Log */}
      <div className="p-4 bg-[#06080e] min-h-[270px] font-mono text-xs space-y-3">
        <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1 border-b border-slate-800/60">
          <span>FLUXO DE OPERAÇÕES & STATUS RASTREADOS</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <RefreshCw className="w-3 h-3 animate-spin" /> Atualizando...
          </span>
        </div>

        {logs.map((log) => (
          <div 
            key={log.id} 
            className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/30 transition-colors space-y-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-semibold">
                  {log.tournament}
                </span>
                <span className="text-slate-400 text-[11px]">{log.time}</span>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${log.statusColor}`}>
                {log.status}
              </span>
            </div>

            <div className="flex items-center justify-between pt-0.5">
              <span className="text-slate-100 font-semibold text-sm">{log.match}</span>
              <span className="text-white font-bold text-xs bg-slate-800 px-2 py-0.5 rounded">
                Odd: {log.odd} • Stake: {log.stake}
              </span>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800/40">
              <span>Seleção: <strong className="text-emerald-300">{log.selection}</strong></span>
              <span>Modo: <strong className="text-slate-200">{log.mode}</strong></span>
            </div>
          </div>
        ))}
      </div>

      {/* Terminal Footer */}
      <div className="px-4 py-2.5 bg-[#090e18] border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
        <span>Você mantém controle sobre stake, banca e modo de operação.</span>
        <span className="text-emerald-400 font-semibold">Automação Sem Caixa-Preta</span>
      </div>

    </div>
  );
}
