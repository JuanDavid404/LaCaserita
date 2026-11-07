import React, { useState } from 'react';
import { Menu, X, ArrowDownToLine } from 'lucide-react';

interface NavbarProps {
  onOpenDownload: () => void;
  onOpenBot: () => void;
  onOpenVendorPanel: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload, onOpenBot, onOpenVendorPanel }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#faf8f5]/95 backdrop-blur-md border-b border-emerald-950/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#144229] font-display whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
        >
          <span className="text-2xl" role="img" aria-label="Hoja verde">🌱</span>
          <span>La Caserita</span>
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700">
          <a href="#como-funciona" className="hover:text-[#144229] transition-colors whitespace-nowrap shrink-0">
            Cómo funciona
          </a>
          <a href="#demo-app" className="hover:text-[#144229] transition-colors whitespace-nowrap shrink-0">
            Puestos y App
          </a>
          <a href="#beneficios" className="hover:text-[#144229] transition-colors whitespace-nowrap shrink-0">
            Beneficios
          </a>
          <a href="#calculadora" className="hover:text-[#144229] transition-colors whitespace-nowrap shrink-0">
            Ahorro y Desperdicio
          </a>
          <a href="#testimonios" className="hover:text-[#144229] transition-colors whitespace-nowrap shrink-0">
            Caseritas
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenVendorPanel}
            className="px-3 py-1.5 text-xs font-semibold text-[#144229] hover:bg-emerald-50 rounded-lg transition-colors whitespace-nowrap shrink-0 border border-emerald-800/20"
          >
            Panel Caserita
          </button>
          <button
            onClick={onOpenDownload}
            className="px-4 py-2 text-sm font-semibold text-white bg-[#144229] hover:bg-[#0f3824] rounded-xl shadow-xs hover:shadow-md transition-all whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <ArrowDownToLine className="w-4 h-4 text-emerald-300" />
            <span>Descargar App</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenDownload}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-[#144229] rounded-lg"
          >
            Descargar
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#144229] rounded-lg"
            aria-label="Menú principal"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-[#faf8f5] px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <a
            href="#como-funciona"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-[#144229]"
          >
            Cómo funciona
          </a>
          <a
            href="#demo-app"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-[#144229]"
          >
            Puestos y App Móvil
          </a>
          <a
            href="#beneficios"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-[#144229]"
          >
            Beneficios para todos
          </a>
          <a
            href="#calculadora"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-[#144229]"
          >
            Calculadora de ahorro y mermas
          </a>
          <a
            href="#testimonios"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-[#144229]"
          >
            Testimonios del mercado
          </a>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVendorPanel();
              }}
              className="w-full py-2 text-xs font-semibold text-[#144229] bg-emerald-50 rounded-lg text-center"
            >
              Ver Panel Administrativo de Caserita
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBot();
              }}
              className="w-full py-2 text-xs font-semibold text-emerald-800 bg-white border border-emerald-300 rounded-lg text-center"
            >
              Consultar con Bot de Atención
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownload();
              }}
              className="w-full py-2.5 text-sm font-semibold text-white bg-[#144229] rounded-xl text-center"
            >
              Descargar en Google Play Gratis
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
