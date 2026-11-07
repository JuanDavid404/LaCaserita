import React from 'react';
import { Smartphone, ShoppingBasket, Bike, Check, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenDownload: () => void;
  onScrollToDemo: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenDownload, onScrollToDemo }) => {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-[#e8f5e9]/70 border-b border-emerald-950/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header matching prototype */}
        <div className="text-center space-y-2 mb-12">
          <p className="text-xs font-bold tracking-widest text-emerald-800 uppercase font-display">
            Es Fácil
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#144229] font-display tracking-tight text-balance">
            Cómo funciona
          </h2>
          <p className="text-base sm:text-lg text-emerald-900/80 font-medium max-w-xl mx-auto">
            En 3 pasos simples, recibes lo mejor del mercado en tu mesa
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          {/* Step 1 */}
          <div className="bg-white/90 backdrop-blur-xs p-6 rounded-2xl border border-emerald-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-[#f95700] flex items-center justify-center font-bold text-xl mb-4">
                <Smartphone className="w-7 h-7" />
              </div>
              <div className="text-xs font-bold text-[#f95700] uppercase tracking-wider mb-1">Paso 1</div>
              <h3 className="text-lg font-bold text-[#144229] font-display">
                1. Eliges tus productos
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Explora puestos cercanos en Surco, San Juan de Lurigancho o Jesús María. Mira fotos del día, precios por kilo o unidad y añade al carrito.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Stock en tiempo real</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white/90 backdrop-blur-xs p-6 rounded-2xl border border-emerald-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl mb-4">
                <ShoppingBasket className="w-7 h-7" />
              </div>
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">Paso 2</div>
              <h3 className="text-lg font-bold text-[#144229] font-display">
                2. La caserita compra por ti
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Tu casera de confianza selecciona tomate firme, palta al punto y verduras limpias como si fuera para su propia familia.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Cuidado y cariño artesanal</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white/90 backdrop-blur-xs p-6 rounded-2xl border border-emerald-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-[#f95700] flex items-center justify-center font-bold text-xl mb-4">
                <Bike className="w-7 h-7" />
              </div>
              <div className="text-xs font-bold text-[#f95700] uppercase tracking-wider mb-1">Paso 3</div>
              <h3 className="text-lg font-bold text-[#144229] font-display">
                3. Recibes en 60 min
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Un moto-taxi formal de tu barrio lo lleva directo a tu puerta en bolsas ecológicas de papel kraft. Paga con Yape o Plin al instante.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Entrega rápida y sin daño</span>
            </div>
          </div>

        </div>

        {/* Interactive CTA buttons below steps */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onScrollToDemo}
            className="w-full sm:w-auto px-6 py-3 bg-[#144229] hover:bg-[#0f3824] text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>Ver cómo se ve la app en vivo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenDownload}
            className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-emerald-50 text-[#144229] font-bold text-sm rounded-xl border border-emerald-300 transition-all text-center"
          >
            Descargar La Caserita en Google Play
          </button>
        </div>

      </div>
    </section>
  );
};
