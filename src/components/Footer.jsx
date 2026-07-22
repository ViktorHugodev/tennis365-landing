import React from 'react';
import { ShieldCheck, Lock, FileText, ArrowUp, AlertTriangle } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04060a] border-t border-slate-800 text-slate-400 font-sans text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Col with Official Logo (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 flex items-center justify-center p-1 rounded-xl bg-slate-900/80 border border-slate-800">
                <img 
                  src="/tennis365-logo.png" 
                  alt="Tennis365 - Logo Oficial" 
                  className="h-8 w-auto object-contain max-w-[180px]"
                />
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Software de sinais e automação para operações no mercado de tênis (ATP & WTA). Oferece entrega de tips no Telegram, execução opcional em nuvem e painel de rastreamento com controle total do usuário sobre banca e stake.
            </p>

            <div className="flex items-center gap-4 text-slate-400 font-mono text-[11px] pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Nota Fiscal Emitida
              </span>
              <span className="flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 text-emerald-400" /> Garantia CDC
              </span>
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-emerald-400" /> LGPD Compliant
              </span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="font-display font-bold text-white text-sm">Navegação Rápida</p>
            <ul className="space-y-2">
              <li>
                <a href="#como-funciona" className="hover:text-emerald-400 transition-colors">Do sinal ao painel</a>
              </li>
              <li>
                <a href="#painel-rastreabilidade" className="hover:text-emerald-400 transition-colors">Rastreabilidade & Painel</a>
              </li>
              <li>
                <a href="#prova-social" className="hover:text-emerald-400 transition-colors">Resultados Rastreáveis</a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-emerald-400 transition-colors">Perguntas Frequentes</a>
              </li>
              <li>
                <a href="#planos" className="hover:text-emerald-400 transition-colors">Planos & Assinatura</a>
              </li>
            </ul>
          </div>

          {/* Legal Disclaimers & Responsible Gaming (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <p className="font-display font-bold text-white text-sm">Aviso Legal & Jogo Responsável</p>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              O Tennis365 atua estritamente como um software de análise estatística e automação de sinais. Operações no mercado esportivo envolvem risco financeiro. Mantenha gestão responsável de banca e jogue com disciplina.
            </p>
            
            {/* Responsible Gaming Notice */}
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-amber-400 font-mono text-[11px] flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Apostas envolvem risco. Jogue com responsabilidade. 18+</span>
            </div>

            <p className="text-[10px] text-slate-500 font-mono">
              Em conformidade com o Art. 49 do Código de Defesa do Consumidor (Lei 8.078/90).
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Tennis365. Todos os direitos reservados.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors border border-slate-800 cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
