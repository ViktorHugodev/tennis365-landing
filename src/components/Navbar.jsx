import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06080d]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-2xl shadow-black/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Principal Oficial */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="h-10 flex items-center justify-center p-1 rounded-xl bg-slate-900/80 border border-slate-800 group-hover:border-emerald-500/40 transition-all">
              <img 
                src="/tennis365-logo.png" 
                alt="Tennis365 - Logo Oficial" 
                className="h-8 w-auto object-contain max-w-[180px]"
              />
            </div>
          </div>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollTo('como-funciona')}
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollTo('painel-rastreabilidade')}
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Painel & Controle
            </button>
            <button
              onClick={() => scrollTo('prova-social')}
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Operações Rastreáveis
            </button>
            <button
              onClick={() => scrollTo('duvidas')}
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Dúvidas
            </button>
          </nav>

          {/* Right Action & Live Status */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-center gap-2 bg-slate-900/90 px-3 py-1.5 rounded-full border border-slate-800 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Modo Nuvem + Telegram</span>
            </div>

            <button
              onClick={() => scrollTo('planos')}
              className="relative group overflow-hidden rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-display font-bold text-sm px-5 py-2.5 transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                Conhecer o Tennis365
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800 cursor-pointer"
            aria-label="Alternar menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090d16] border-b border-slate-800 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <button
            onClick={() => scrollTo('como-funciona')}
            className="block w-full text-left text-base font-medium text-slate-200 py-2 border-b border-slate-800/50"
          >
            Como Funciona
          </button>
          <button
            onClick={() => scrollTo('painel-rastreabilidade')}
            className="block w-full text-left text-base font-medium text-slate-200 py-2 border-b border-slate-800/50"
          >
            Painel & Controle
          </button>
          <button
            onClick={() => scrollTo('prova-social')}
            className="block w-full text-left text-base font-medium text-slate-200 py-2 border-b border-slate-800/50"
          >
            Operações Rastreáveis
          </button>
          <button
            onClick={() => scrollTo('duvidas')}
            className="block w-full text-left text-base font-medium text-slate-200 py-2 border-b border-slate-800/50"
          >
            Dúvidas
          </button>
          <div className="pt-2 space-y-3">
            <button
              onClick={() => scrollTo('planos')}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-display font-bold text-base py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              Conhecer o Tennis365
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
