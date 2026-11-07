import React from 'react';
import { Download, MessageCircle, Clock, ShieldCheck, MapPin, Sparkles, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenDownload: () => void;
  onOpenWhatsApp: () => void;
  onScrollToDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload, onOpenWhatsApp, onScrollToDemo }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-[#faf8f5] via-[#f4f7f4] to-[#faf8f5]">
      {/* Subtle organic background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200/80 text-xs font-semibold text-[#144229]">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>Del puesto del mercado a tu casa en Lima</span>
              <span className="text-emerald-400">·</span>
              <span className="text-emerald-700 font-normal">Sin intermediarios caros</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#144229] font-display tracking-tight leading-[1.1] text-balance">
              La frescura de tu mercado, en tu puerta en <span className="text-[#f95700] underline decoration-[#f95700]/30 decoration-wavy decoration-2">60 min</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              ¿Sin tiempo para ir al mercado? Tu <strong className="text-slate-900 font-semibold">caserita de confianza</strong> escoge a mano las verduras y frutas más frescas del día, a precio justo de puesto, y un mototaxi de tu barrio te lo lleva de volada.
            </p>

            {/* Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Google Play CTA */}
              <button
                onClick={onOpenDownload}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-[#144229] hover:bg-[#0f3824] text-white font-bold text-sm shadow-md hover:shadow-xl transition-all group cursor-pointer"
              >
                <svg className="w-5 h-5 text-emerald-300 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a2.003 2.003 0 01-.61-.951V2.765c.14-.383.364-.725.609-.951zm11.246 11.248l2.457 2.457-11.7 6.756 9.243-9.213zm2.457-4.124l-2.457 2.457-9.243-9.213 11.7 6.756zm1.096 1.096l3.36 1.94c.91.525.91 1.385 0 1.91l-3.36 1.94-2.146-2.145 2.146-2.145z"/>
                </svg>
                <div className="text-left leading-tight">
                  <span className="block text-[10px] uppercase tracking-wider text-emerald-300 font-medium">Descárgala en</span>
                  <span className="text-base font-bold">Google Play Store</span>
                </div>
              </button>

              {/* WhatsApp Business CTA */}
              <button
                onClick={onOpenWhatsApp}
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-white hover:bg-emerald-50/60 text-[#144229] font-bold text-sm border-2 border-[#144229]/20 hover:border-[#144229]/50 shadow-xs transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>Pedir por WhatsApp</span>
              </button>
            </div>

            {/* Quick interactive trigger */}
            <div className="pt-1">
              <button
                onClick={onScrollToDemo}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#144229] transition-colors"
              >
                <span>¿Quieres ver cómo funciona la app antes de descargar?</span>
                <span className="text-[#f95700] underline flex items-center">
                  Probar simulador en vivo <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </span>
              </button>
            </div>

            {/* Micro proof badges */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#f95700]" />
                <span>Envíos a todo Lima</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Entrega en 60 minutos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-1">
                  <span className="px-1.5 py-0.5 bg-[#742284] text-white rounded text-[10px] font-bold">Yape</span>
                  <span className="px-1.5 py-0.5 bg-[#00a8e8] text-white rounded text-[10px] font-bold">Plin</span>
                </div>
                <span>Pago al instante</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase (Market photo + Live app frame snippet) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                
                {/* Hero Market Photo */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src="/assets/aistudio/image_cddd1f9c.png"
                    alt="Puesto de mercado tradicional en Lima con verduras frescas y caserita sonriente"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Photo overlay text */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                      Mercado 10 de Canto Grande & San Roque
                    </span>
                    <h3 className="text-base font-bold leading-snug">
                      Puestos afiliados con stock diario verificado
                    </h3>
                  </div>
                </div>

                {/* Lower snippet showcasing app screens and quick action */}
                <div className="p-4 bg-[#faf8f5] space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold text-xs">
                        TJ
                      </div>
                      <div>
                        <div className="font-bold text-slate-800">Tía Juanita · Vegetales</div>
                        <div className="text-[11px] text-slate-500">⭐ 4.8 (120 reseñas) · Surco</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-semibold rounded-md">
                      Abierto hoy
                    </span>
                  </div>

                  {/* Sample items pill row */}
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2 bg-white rounded-xl border border-slate-200/80 shadow-2xs flex flex-col items-center">
                      <div className="w-9 h-9 rounded-lg overflow-hidden bg-slate-100 mb-1 border border-slate-100">
                        <img
                          src="/assets/aistudio/image_a84d173e.png"
                          alt="Tomates frescos"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="font-semibold text-slate-800 text-[11px]">Tomates</div>
                      <div className="text-[10px] text-emerald-700 font-bold">S/ 4.50 kg</div>
                    </div>
                    <div className="p-2 bg-white rounded-xl border border-slate-200/80 shadow-2xs flex flex-col items-center">
                      <div className="w-9 h-9 rounded-lg overflow-hidden bg-slate-100 mb-1 border border-slate-100">
                        <img
                          src="/assets/aistudio/image_c5a259c7.png"
                          alt="Palta fuerte"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="font-semibold text-slate-800 text-[11px]">Palta fuerte</div>
                      <div className="text-[10px] text-emerald-700 font-bold">S/ 6.00 un</div>
                    </div>
                    <div className="p-2 bg-white rounded-xl border border-slate-200/80 shadow-2xs flex flex-col items-center">
                      <div className="w-9 h-9 rounded-lg overflow-hidden bg-slate-100 mb-1 border border-slate-100">
                        <img
                          src="/assets/aistudio/image_cf06c03a.png"
                          alt="Limones"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="font-semibold text-slate-800 text-[11px]">Limones</div>
                      <div className="text-[10px] text-emerald-700 font-bold">S/ 5.00 kg</div>
                    </div>
                  </div>

                  <button
                    onClick={onScrollToDemo}
                    className="w-full py-2 px-3 bg-[#144229] hover:bg-[#0f3824] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Abrir Simulador de Pedido en la App</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Floating Pill Accent */}
              <div className="absolute -bottom-5 -left-4 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 max-w-[240px]">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-xl shrink-0">
                  🛵
                </div>
                <div className="text-xs">
                  <div className="font-bold text-slate-800">Moto-taxi de barrio</div>
                  <div className="text-[11px] text-slate-500">Entrega rápida en tu puerta</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
