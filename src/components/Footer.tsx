import React from 'react';
import { DISTRICTS } from '../data/marketData';

interface FooterProps {
  onOpenVendorPanel: () => void;
  onOpenDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenVendorPanel, onOpenDownload }) => {
  return (
    <footer className="bg-[#144229] text-white pt-14 pb-8 border-t border-emerald-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand info */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2 text-xl font-bold font-display text-white">
              <span className="text-2xl">🌱</span>
              <span>La Caserita</span>
            </div>
            <p className="text-xs text-emerald-200 leading-relaxed">
              La plataforma que conecta a los vecinos con los puestos tradicionales de su mercado de barrio en Lima. Frescura garantizada, precios justos y apoyo al comercio local.
            </p>
            <div className="pt-1 text-xs text-emerald-300 font-semibold">
              @lacaserita.pe · Lima, Perú
            </div>
          </div>

          {/* Districts Covered */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Distritos con Cobertura
            </h4>
            <ul className="text-xs text-emerald-100/90 space-y-1.5">
              {DISTRICTS.slice(0, 6).map((dist) => (
                <li key={dist} className="hover:text-white transition-colors cursor-default">
                  • {dist}
                </li>
              ))}
              <li className="text-emerald-400 font-semibold">+ Más distritos pronto</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Navegación
            </h4>
            <ul className="text-xs text-emerald-100/90 space-y-2">
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="#demo-app" className="hover:text-white transition-colors">
                  Probar app interactiva
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-white transition-colors">
                  Beneficios y comparación
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-white transition-colors">
                  Calculadora de ahorro
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenVendorPanel}
                  className="hover:text-white text-emerald-300 font-semibold transition-colors text-left"
                >
                  Panel de la Caserita (Control de Puesto)
                </button>
              </li>
            </ul>
          </div>

          {/* Download & Play Store */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Descarga Oficial
            </h4>
            <p className="text-xs text-emerald-200">
              Disponible para Android y pedidos rápidos vía WhatsApp Business.
            </p>
            <button
              onClick={onOpenDownload}
              className="w-full py-2.5 px-3 bg-white text-[#144229] hover:bg-emerald-50 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <span>Descargar en Google Play</span>
            </button>
            <div className="flex items-center gap-2 text-[11px] text-emerald-300 pt-1">
              <span>Pago verificado con Yape y Plin</span>
            </div>
          </div>

        </div>

        {/* Bottom bar matching prototype */}
        <div className="pt-6 border-t border-emerald-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300">
          <div className="flex items-center gap-2">
            <span>Hecho con ❤️ en Lima, Perú</span>
            <span>·</span>
            <span>© {new Date().getFullYear()} La Caserita</span>
          </div>

          <div className="flex items-center gap-4 text-emerald-200 text-xs">
            <a href="#" className="hover:text-white transition-colors">Términos del Servicio</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Políticas de Privacidad</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Libro de Reclamaciones</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
