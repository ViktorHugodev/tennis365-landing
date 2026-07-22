import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, FileText, Sparkles, AlertTriangle, Clock, ShieldAlert, Award } from 'lucide-react';

export default function PricingSection() {
  const [selectedTab, setSelectedTab] = useState('padrao'); // 'padrao' or 'sem-risco'

  const handleCheckoutMensal = () => {
    window.location.href = 'https://pay.kiwify.com.br/D9E2ZlE';
  };

  const handleCheckoutTrimestral = () => {
    window.location.href = 'https://pay.kiwify.com.br/D9E2ZlE'; // Or trimestral link when available
  };

  return (
    <section id="planos" className="py-24 bg-[#06080d] relative overflow-hidden border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>VAGAS EXTREMAMENTE LIMITADAS • ABERTURA DIA 27</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Escolha o Seu Plano de Operação
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            <strong className="text-emerald-400">Lucro 100% do cliente</strong>. Sem taxa de comissão sobre seus ganhos. Escolha entre os Planos Padrão ou o exclusivo Plano Sem Risco de Prejuízo.
          </p>

          {/* Tab Switcher */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-inner">
              <button
                onClick={() => setSelectedTab('padrao')}
                className={`px-5 py-2.5 rounded-xl font-display text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedTab === 'padrao'
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Planos Padrão (Mensal & Trimestral)
              </button>
              <button
                onClick={() => setSelectedTab('sem-risco')}
                className={`px-5 py-2.5 rounded-xl font-display text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  selectedTab === 'sem-risco'
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <ShieldAlert className="w-4 h-4" />
                <span>Plano Sem Risco de Prejuízo (Banca 5k+)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Standard Plans (Mensal & Trimestral) */}
        {selectedTab === 'padrao' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch animate-in fade-in duration-300">
            
            {/* Plan 1: Mensal */}
            <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition-all flex flex-col justify-between space-y-8">
              
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-mono font-semibold text-emerald-400 uppercase">
                      LUCRO 100% DO CLIENTE
                    </span>
                    <h3 className="text-2xl font-display font-extrabold text-white mt-1">
                      Plano Mensal
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-mono text-xs border border-slate-700">
                    30 Dias Nuvem
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-extrabold font-display text-white">
                    R$ 297
                  </span>
                  <span className="text-slate-400 text-sm font-medium">/ mês</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs font-mono text-slate-300">
                  <span>💡 <strong>Não tem banca mínima</strong> (Recomendamos acima de R$ 2.000)</span>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3 pt-4 border-t border-slate-800/80 text-xs text-slate-200">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Robô automático em nuvem</strong> pelo período de 30 dias</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Casas disponíveis:</strong> Bet365, Betano, Pinnacle, Superbet, Blaze, Betvip, Jonbet, Flabet, KingPanda, 7K Bet e R7 Bet</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Novo sistema inteligente:</strong> Contas duram 4 a 5x mais</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Exclusiva estratégia em apostas de tênis, lucrativa desde 2021</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <strong className="text-emerald-400">Garantia: Mês negativo = Próxima mensalidade grátis</strong>
                  </div>
                </div>
              </div>

              {/* Action CTA Button */}
              <div className="space-y-3">
                <button
                  onClick={handleCheckoutMensal}
                  className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-display font-extrabold text-sm sm:text-base flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all cursor-pointer"
                >
                  <span>Garantir Vaga no Plano Mensal</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 font-medium pt-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Garantia CDC
                  </span>
                  <span className="flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-slate-400" /> Nota Fiscal
                  </span>
                </div>
              </div>

            </div>

            {/* Plan 2: Trimestral */}
            <div className="p-8 rounded-3xl border-2 border-emerald-400 bg-gradient-to-b from-slate-900 via-[#0a1222] to-slate-900 shadow-2xl shadow-emerald-950/40 ring-4 ring-emerald-500/20 flex flex-col justify-between space-y-8 relative overflow-hidden">
              
              <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-400 to-emerald-600 text-slate-950 font-display font-extrabold text-[11px] px-4 py-1.5 rounded-bl-xl uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                <Sparkles className="w-3.5 h-3.5" />
                MELHOR CUSTO BENEFÍCIO
              </div>

              <div className="space-y-6 pt-2">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-mono font-semibold text-emerald-400 uppercase">
                      LUCRO 100% DO CLIENTE
                    </span>
                    <h3 className="text-2xl font-display font-extrabold text-white mt-1">
                      Plano Trimestral
                    </h3>
                  </div>
                </div>

                {/* Price */}
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold font-display text-emerald-400">
                      R$ 697
                    </span>
                    <span className="text-slate-300 text-sm font-medium">/ trimestre</span>
                  </div>
                  <p className="text-xs text-emerald-400 font-mono">
                    Plano indicado com o melhor custo-benefício
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs font-mono text-slate-300">
                  <span>💡 <strong>Não tem banca mínima</strong> (Recomendamos acima de R$ 2.000)</span>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3 pt-4 border-t border-slate-800/80 text-xs text-slate-200">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Tudo do Plano Mensal inclusos</strong> com licença de 90 dias</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Casas disponíveis:</strong> Bet365, Betano, Pinnacle, Superbet, Blaze e todas as suportadas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Novo sistema inteligente:</strong> Contas duram 4 a 5x mais</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <strong className="text-emerald-400">Garantia: Mês negativo = +1 mês grátis na licença contratada</strong>
                  </div>
                </div>
              </div>

              {/* Action CTA Button */}
              <div className="space-y-3">
                <button
                  onClick={handleCheckoutTrimestral}
                  className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-display font-extrabold text-sm sm:text-base flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all cursor-pointer"
                >
                  <span>Garantir Vaga no Plano Trimestral</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-300 font-medium pt-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Garantia CDC
                  </span>
                  <span className="flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-emerald-400" /> Nota Fiscal Emitida
                  </span>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Exclusive VIP Plan: Plano Sem Risco de Prejuízo (Banca 5k+) */}
        {selectedTab === 'sem-risco' && (
          <div className="max-w-4xl mx-auto bg-gradient-to-b from-slate-900 via-[#101929] to-slate-900 rounded-3xl border-2 border-amber-500/60 p-8 sm:p-10 shadow-2xl shadow-amber-950/30 space-y-8 animate-in fade-in duration-300">
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
                  <Award className="w-4 h-4" />
                  <span>PLANO EXCLUSIVO DE PROTEÇÃO TOTAL</span>
                </div>
                <h3 className="text-3xl font-display font-extrabold text-white mt-2">
                  PLANO SEM RISCO DE PREJUÍZO
                </h3>
                <p className="text-xs text-amber-400 font-mono mt-1">
                  Lucro 100% do cliente • Se o mês fechar negativo, a empresa cobre todo valor perdido + mensalidade!
                </p>
              </div>

              <div className="px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold font-mono">
                Requisito: Banca de R$ 5.000
              </div>
            </div>

            {/* How Protection Works Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="text-emerald-400 font-mono text-xs font-bold uppercase">Cenário 1: Mês Negativo</div>
                <h4 className="text-sm font-bold text-white">Cobertura do Prejuízo + Mês Grátis</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Cliente ganha mais um mês sem custo. Se a somatória dos 2 meses resultar em prejuízo, <strong>a empresa paga o valor perdido + devolve a mensalidade</strong>.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="text-amber-400 font-mono text-xs font-bold uppercase">Cenário 2: Lucro &lt; Mensalidade</div>
                <h4 className="text-sm font-bold text-white">Pagamento da Diferença</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Cliente ganha mais um mês sem custo. Se a somatória resultar em lucro abaixo da mensalidade, <strong>nós pagamos a diferença entre o valor pago e o lucro obtido</strong>.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="text-sky-400 font-mono text-xs font-bold uppercase">Cenário 3: Lucro &gt; Mensalidade</div>
                <h4 className="text-sm font-bold text-white">Lucro 100% no Seu Bolso</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Todo o lucro obtido fica com o cliente. Você escolhe livremente se renova ou não para o próximo mês.
                </p>
              </div>

            </div>

            {/* Client Requirements Box */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Requisitos Transparentes do Plano Sem Risco de Prejuízo:</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 mt-1.5"></span>
                  <span>Ter banca de R$ 5.000 para nossa gestão e definição de stake recomendada.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 mt-1.5"></span>
                  <span>Não realizar apostas manuais na conta configurada (para não interferir na gestão).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 mt-1.5"></span>
                  <span>Caso a conta seja limitada, efetuar a troca imediata para manter as operações ativas.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 mt-1.5"></span>
                  <span>Manter sempre uma conta reserva disponível para garantir a continuidade das operações.</span>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
              <div>
                <p className="text-xs text-slate-400">Ideal para quem não quer correr riscos ou se sente inseguro em apostas esportivas.</p>
                <p className="text-xs font-bold text-amber-400 mt-0.5">Adquirindo esse plano, você não terá prejuízos financeiros em nenhum cenário.</p>
              </div>

              <button
                onClick={handleCheckoutMensal}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-display font-extrabold text-sm sm:text-base flex items-center justify-center gap-3 shadow-xl shadow-amber-500/20 transition-all cursor-pointer shrink-0"
              >
                <span>Quero o Plano Sem Risco de Prejuízo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        )}

        {/* Responsible Gaming Notice */}
        <div className="mt-10 max-w-4xl mx-auto p-4 rounded-2xl bg-slate-900/40 border border-slate-800 text-center">
          <p className="text-xs text-slate-400 font-mono flex items-center justify-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Apostas envolvem risco. Jogue com responsabilidade. 18+</span>
          </p>
        </div>

      </div>
    </section>
  );
}
