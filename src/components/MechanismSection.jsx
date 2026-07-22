import React from 'react';
import { Send, Sliders, Cloud, FileText, ShieldCheck, Sparkles, Zap, Lock } from 'lucide-react';

export default function MechanismSection() {
  const steps = [
    {
      number: '01',
      title: 'A oportunidade é identificada',
      description: 'O Tennis365 envia a tip com partida, seleção, odd e stake diretamente no canal do Telegram.',
      detail: 'Você recebe todos os dados da aposta com clareza instantânea.',
      icon: Send,
      badge: 'Telegram Instantâneo'
    },
    {
      number: '02',
      title: 'Você escolhe o modo',
      description: 'Copie e aposte manualmente na sua casa ou corretora (como Pinnacle) ou ative a execução automática.',
      detail: 'Pinnacle sem limitação de conta.',
      icon: Sliders,
      badge: 'Manual ou Automático'
    },
    {
      number: '03',
      title: 'Novo Sistema Inteligente em Nuvem',
      description: 'A nova arquitetura otimiza as ordens em nuvem para que suas contas durem 4 a 5x mais tempo.',
      detail: 'Não é necessário manter celular ou PC ligado.',
      icon: Cloud,
      badge: 'Contas Duram 4-5x Mais'
    },
    {
      number: '04',
      title: 'Tudo fica registrado',
      description: 'Consulte apostas processadas, status, histórico e motivos de operações não executadas no seu painel.',
      detail: 'Transparência completa sobre cada ordem.',
      icon: FileText,
      badge: 'Painel Rastreável'
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-[#06080d] border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>A MELHOR FASE DO TENNIS365</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Do sinal ao painel, com o novo sistema inteligente
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Você sabe exatamente o que acontece com o seu capital. Com a nova tecnologia, suas contas duram <strong className="text-emerald-400">4 a 5x mais</strong> e na Pinnacle a operação roda sem qualquer limitação.
          </p>

          {/* Liquidity Preservation Callout */}
          <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 max-w-2xl mx-auto text-xs text-amber-300 font-mono flex items-center justify-center gap-2">
            <Lock className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Vagas EXTREMAMENTE limitadas abertas dia 27 para preservar a liquidez das odds.</span>
          </div>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4 relative group hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-display font-extrabold text-emerald-400">
                      {step.number}
                    </span>
                    <span className="p-2 rounded-xl bg-slate-800 text-emerald-400 border border-slate-700">
                      <Icon className="w-5 h-5" />
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <span className="text-[11px] font-mono text-emerald-400 font-medium block">
                    • {step.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Operational Control Feature Highlight */}
        <div id="painel-rastreabilidade" className="mt-16 bg-[#090d16] rounded-2xl border border-slate-800 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                CONTROLE TOTAL DE OPERAÇÃO
              </span>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Seu painel: Rastreabilidade e durabilidade 4x a 5x maior
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Sem surpresas. Nosso novo algoritmo de roteamento desacelera os padrões de detecção das casas convencionais (aumentando a durabilidade das contas em 4 a 5x) e permite integração nativa com a Pinnacle, onde limitação não existe.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Novo sistema inteligente:</strong> Contas duram 4 a 5x mais tempo</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Pinnacle liberada:</strong> Operação de alta liquidez sem limitação</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Relatórios de status: Processada, Manual ou Não Executada (com motivo)</span>
                </div>
              </div>
            </div>

            {/* Dashboard Mockup Component Representation */}
            <div className="lg:col-span-6 bg-[#05070c] rounded-xl border border-slate-800 p-5 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-emerald-400" />
                  <span className="font-bold text-white">PAINEL_TENNIS365_v4_INTELIGENTE</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px]">
                  PINNACLE ATIVA
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <p className="text-[10px] text-slate-400">TECNOLOGIA</p>
                  <p className="text-base font-bold text-emerald-400 mt-0.5">Sistema 4x a 5x</p>
                  <p className="text-[10px] text-slate-400">Durabilidade Ampliada</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <p className="text-[10px] text-slate-400">GESTÃO DE LIQUIDEZ</p>
                  <p className="text-base font-bold text-white mt-0.5">Abertura Dia 27</p>
                  <p className="text-[10px] text-slate-400">Vagas Preservadas</p>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800 space-y-2">
                <p className="text-[10px] text-slate-400 uppercase">STATUS DE EXECUÇÃO EM TEMPO REAL</p>
                
                <div className="flex items-center justify-between text-slate-200">
                  <span>Pinnacle • ATP Alcaraz vs Sinner</span>
                  <span className="text-emerald-400 font-bold">Processada (Sem Limite)</span>
                </div>
                
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <span>Seleção: Vencedor Alcaraz (Odd 1.85)</span>
                  <span>Modo Inteligente</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
