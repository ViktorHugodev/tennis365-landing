import React from 'react';
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

export default function App() {
  return (
    <div className="min-h-screen bg-[#06080d] text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
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
      <Footer />
    </div>
  );
}
