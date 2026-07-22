import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SupportedBookmakers from './components/SupportedBookmakers';
import MechanismSection from './components/MechanismSection';
import SocialProofSection from './components/SocialProofSection';
import StrategiesSection from './components/StrategiesSection';
import ObjectionSection from './components/ObjectionSection';
import GuaranteeBanner from './components/GuaranteeBanner';
import PricingSection from './components/PricingSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import { BarChart3 } from 'lucide-react';

export default function App() {
  const [showAnalytics, setShowAnalytics] = useState(false);

  useEffect(() => {
    // Check if URL contains #analytics or /analytics
    const checkHash = () => {
      if (window.location.hash === '#analytics' || window.location.pathname === '/analytics') {
        setShowAnalytics(true);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  if (showAnalytics) {
    return <AnalyticsDashboard onBack={() => setShowAnalytics(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#06080d] text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 relative">
      
      {/* Floating Admin Button to access Analytics Dashboard */}
      <button
        onClick={() => setShowAnalytics(true)}
        className="fixed bottom-5 right-5 z-50 px-3.5 py-2 rounded-full bg-slate-900/90 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold flex items-center gap-2 shadow-2xl backdrop-blur hover:bg-slate-800 hover:border-emerald-400 transition-all cursor-pointer group"
        title="Ver Painel de Métricas e Cliques"
      >
        <BarChart3 className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline">Métricas & Cliques</span>
      </button>

      <Navbar />
      <main>
        <Hero />
        <SupportedBookmakers />
        <MechanismSection />
        <SocialProofSection />
        <StrategiesSection />
        <ObjectionSection />
        <GuaranteeBanner />
        <PricingSection />
        <FinalCTASection />
      </main>
      <Footer onOpenAnalytics={() => setShowAnalytics(true)} />
    </div>
  );
}
