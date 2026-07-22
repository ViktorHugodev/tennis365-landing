import React from 'react';
import { Eye, ShieldCheck, CheckCircle2, FileText } from 'lucide-react';

export default function SocialProofSection() {
  return (
    <section id="prova-social" className="py-24 bg-[#080b12] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
            <Eye className="w-3.5 h-3.5" />
            <span>TRANSPARÊNCIA & RASTREAMENTO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Resultados visíveis. Operações rastreáveis.
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Acompanhe cada entrada e consulte o histórico pelo painel. Transparência antes, durante e depois da operação.
          </p>
        </div>

        {/* Social Proof Showcase Card with Image 1 */}
        <div className="max-w-5xl mx-auto bg-gradient-to-b from-slate-900 via-[#0a0f1d] to-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl shadow-emerald-950/20 space-y-8">
          
          {/* Proof Image Display */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#05070c] p-2 sm:p-4 group">
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"></div>
            
            <img 
              src="/social-proof.png" 
              alt="Material de Prova Social e Resultados Rastreáveis do Tennis365" 
              className="w-full h-auto object-contain rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-[1.01]"
              loading="lazy"
            />
          </div>

          {/* Micro Proof Trust Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-xs sm:text-sm font-semibold">Registro em Tempo Real</strong>
                <p className="text-slate-400 text-xs mt-0.5">Cada entrada emitida no Telegram é espelhada com status no painel.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-3">
              <FileText className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-xs sm:text-sm font-semibold">Motivo de Status Claro</strong>
                <p className="text-slate-400 text-xs mt-0.5">Saiba exatamente por qual motivo uma aposta foi executada ou ignorada.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-xs sm:text-sm font-semibold">Controle do Usuário</strong>
                <p className="text-slate-400 text-xs mt-0.5">Ajuste limites de banca, stake e altere entre automático e manual.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
