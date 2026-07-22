import React, { useState, useEffect } from 'react';
import { 
  BarChart3, MousePointerClick, Users, TrendingUp, Download, Trash2, 
  ArrowLeft, Clock, Smartphone, Monitor, Sparkles 
} from 'lucide-react';
import { getClickEvents, clearClickEvents, trackEvent } from '../utils/analytics';

export default function AnalyticsDashboard({ onBack }) {
  const [events, setEvents] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const loadEvents = () => {
    const data = getClickEvents();
    setEvents(data);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const handleClear = () => {
    if (window.confirm('Deseja realmente limpar todo o histórico de cliques local?')) {
      clearClickEvents();
      loadEvents();
    }
  };

  const handleSimulateEvents = () => {
    // Generate mock test clicks for demonstration
    const mockPlans = [
      { name: 'InitiateCheckout', plan: 'Mensal', price: 297, source: 'instagram', medium: 'storie' },
      { name: 'InitiateCheckout', plan: 'Trimestral', price: 697, source: 'instagram', medium: 'bio' },
      { name: 'InitiateCheckout', plan: 'Mensal', price: 297, source: 'google_ads', medium: 'cpc' },
      { name: 'InitiateCheckout', plan: 'Sem Risco (5k+)', price: 697, source: 'telegram', medium: 'canal' },
      { name: 'view_pricing_tab', plan: 'Sem Risco', price: 0, source: 'direto', medium: 'organico' },
    ];

    const random = mockPlans[Math.floor(Math.random() * mockPlans.length)];
    trackEvent(random.name, {
      plan: random.plan,
      price: random.price,
    });
    loadEvents();
  };

  const exportToCSV = () => {
    if (events.length === 0) {
      alert('Nenhum dado para exportar.');
      return;
    }

    const headers = ['ID', 'Data', 'Hora', 'Visitante ID', 'Evento', 'Plano', 'Preco', 'Origem (UTM Source)', 'Medio', 'Campanha', 'Dispositivo'];
    const rows = events.map(e => [
      e.id,
      e.formattedDate,
      e.formattedTime,
      e.visitorId,
      e.eventName,
      e.params?.plan || 'N/A',
      e.params?.price || 0,
      e.source,
      e.medium,
      e.campaign,
      e.device,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' 
      + [headers.join(','), ...rows.map(r => r.map(c => `"${c}"`).join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `tennis365_relatorio_cliques_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Derived Metrics
  const totalClicks = events.length;
  const checkoutClicks = events.filter(e => e.eventName === 'InitiateCheckout').length;
  const uniqueVisitors = new Set(events.map(e => e.visitorId)).size;
  
  // Plans Breakdown
  const mensalCount = events.filter(e => e.params?.plan === 'Mensal').length;
  const trimestralCount = events.filter(e => e.params?.plan === 'Trimestral').length;
  const semRiscoCount = events.filter(e => e.params?.plan?.includes('Sem Risco')).length;

  // Device Breakdown
  const mobileCount = events.filter(e => e.device === 'Mobile').length;
  const desktopCount = events.filter(e => e.device === 'Desktop').length;

  // Filtered Events Table
  const filteredEvents = events.filter(e => {
    const textMatch = 
      (e.eventName || '').toLowerCase().includes(filterText.toLowerCase()) ||
      (e.source || '').toLowerCase().includes(filterText.toLowerCase()) ||
      (e.visitorId || '').toLowerCase().includes(filterText.toLowerCase()) ||
      (e.params?.plan || '').toLowerCase().includes(filterText.toLowerCase());

    if (selectedCategory === 'checkout') return textMatch && e.eventName === 'InitiateCheckout';
    return textMatch;
  });

  return (
    <div className="min-h-screen bg-[#040609] text-slate-100 font-sans p-4 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 mb-2 cursor-pointer transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para a Landing Page</span>
            </button>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                Painel de Inteligência de Cliques & Leads
              </h1>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-bold animate-pulse">
                AO VIVO
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Rastreamento em tempo real de quem clicou, que horas, qual origem (UTM) e qual plano selecionou.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleSimulateEvents}
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-display font-bold text-slate-300 flex items-center gap-2 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Simular Clique de Teste</span>
            </button>

            <button
              onClick={exportToCSV}
              className="px-3.5 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-xs font-display font-bold text-emerald-300 flex items-center gap-2 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Exportar Relatório CSV</span>
            </button>

            <button
              onClick={handleClear}
              className="px-3.5 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 text-xs font-display font-bold text-rose-400 flex items-center gap-2 transition-all cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Limpar Logs</span>
            </button>
          </div>
        </div>

        {/* Top KPI Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* KPI 1: Total Clicks */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-mono font-medium">TOTAL DE CLIQUES</span>
              <MousePointerClick className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-display font-extrabold text-white">
              {totalClicks}
            </div>
            <p className="text-[11px] text-slate-400">Interações registradas no site</p>
          </div>

          {/* KPI 2: Checkout Clicks */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-mono font-medium">CLIQUES NO CHECKOUT</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-display font-extrabold text-emerald-400">
              {checkoutClicks}
            </div>
            <p className="text-[11px] text-slate-400">Intenções de compra enviadas à Kiwify</p>
          </div>

          {/* KPI 3: Unique Visitors */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-mono font-medium">VISITANTES ÚNICOS</span>
              <Users className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-display font-extrabold text-white">
              {uniqueVisitors}
            </div>
            <p className="text-[11px] text-slate-400">IDs de sessão ativos no período</p>
          </div>

          {/* KPI 4: Top Plan */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-mono font-medium">PLANO MAIS PROCURADO</span>
              <BarChart3 className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-xl font-display font-extrabold text-amber-400 truncate">
              {mensalCount >= trimestralCount && mensalCount >= semRiscoCount ? 'Plano Mensal' : trimestralCount >= semRiscoCount ? 'Plano Trimestral' : 'Plano Sem Risco'}
            </div>
            <p className="text-[11px] text-slate-400">Baseado nas escolhas ativas</p>
          </div>

        </div>

        {/* Breakdown Charts / Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Plans Distribution */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h3 className="text-sm font-display font-bold text-white flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-emerald-400" />
              <span>Distribuição por Plano Clicado</span>
            </h3>

            <div className="space-y-3 pt-2 text-xs">
              
              <div>
                <div className="flex justify-between text-slate-300 font-medium mb-1">
                  <span>Plano Mensal (R$ 297)</span>
                  <span className="font-bold text-white">{mensalCount} cliques</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 rounded-full transition-all" 
                    style={{ width: `${totalClicks ? (mensalCount / totalClicks) * 100 : 0}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-300 font-medium mb-1">
                  <span>Plano Trimestral (R$ 697)</span>
                  <span className="font-bold text-white">{trimestralCount} cliques</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div 
                    className="h-full bg-emerald-400 rounded-full transition-all" 
                    style={{ width: `${totalClicks ? (trimestralCount / totalClicks) * 100 : 0}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-300 font-medium mb-1">
                  <span>Plano Sem Risco (Banca 5k+)</span>
                  <span className="font-bold text-white">{semRiscoCount} cliques</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div 
                    className="h-full bg-amber-400 rounded-full transition-all" 
                    style={{ width: `${totalClicks ? (semRiscoCount / totalClicks) * 100 : 0}%` }}
                  ></div>
                </div>
              </div>

            </div>
          </div>

          {/* Device Distribution */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h3 className="text-sm font-display font-bold text-white flex items-center gap-2">
              <Monitor className="w-4 h-4 text-emerald-400" />
              <span>Distribuição por Dispositivo</span>
            </h3>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xl font-bold text-white">{mobileCount}</div>
                  <div className="text-[11px] text-slate-400">Mobile (Celular)</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-3">
                <Monitor className="w-6 h-6 text-sky-400 shrink-0" />
                <div>
                  <div className="text-xl font-bold text-white">{desktopCount}</div>
                  <div className="text-[11px] text-slate-400">Desktop (Computador)</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Detailed Events Log Audit Table */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-display font-bold text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Histórico Detalhado dos Cliques & Leads</span>
              </h3>
              <p className="text-xs text-slate-400">Registro cronológico completo com horário, visitante, origem e plano.</p>
            </div>

            {/* Filter Input */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Filtrar por termo, origem, ID..."
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-emerald-500/50"
                />
              </div>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-emerald-500/50 cursor-pointer"
              >
                <option value="todos">Todos Eventos</option>
                <option value="checkout">Somente Checkout</option>
              </select>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-semibold">
                  <th className="py-3 px-3">Data / Hora</th>
                  <th className="py-3 px-3">Visitante ID</th>
                  <th className="py-3 px-3">Evento</th>
                  <th className="py-3 px-3">Plano Clicado</th>
                  <th className="py-3 px-3">Origem (UTM Source)</th>
                  <th className="py-3 px-3">Dispositivo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredEvents.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="py-8 text-center text-slate-500">
                      Nenhum clique registrado ainda. Clique em <strong>"Simular Clique de Teste"</strong> acima ou navegue na landing page para gerar estatísticas!
                    </td>
                  </tr>
                ) : (
                  filteredEvents.map((evt) => (
                    <tr key={evt.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3 px-3 text-slate-300">
                        {evt.formattedDate} <span className="text-slate-500 font-bold">{evt.formattedTime}</span>
                      </td>
                      <td className="py-3 px-3 text-slate-400">
                        <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px]">
                          {evt.visitorId}
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                          evt.eventName === 'InitiateCheckout' 
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                            : 'bg-slate-800 text-slate-300'
                        }`}>
                          {evt.eventName}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-white font-bold">
                        {evt.params?.plan || 'Página Geral'}
                      </td>
                      <td className="py-3 px-3 text-emerald-400 font-semibold">
                        {evt.source || 'Direto'}
                      </td>
                      <td className="py-3 px-3 text-slate-400">
                        {evt.device}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </div>
  );
}
