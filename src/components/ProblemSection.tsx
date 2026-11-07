import React from 'react';
import { Clock, Carrot, CalendarX, Trash2, AlertCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white border-y border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-12">
          <p className="text-xs font-bold tracking-widest text-[#f95700] uppercase font-display">
            El Problema
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#144229] font-display tracking-tight text-balance">
            Sabemos que ir al mercado es complicado
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Comprar verduras frescas en Lima no debería significar perder medio día ni terminar pagando el doble en un supermercado.
          </p>
        </div>

        {/* 3 Main Problem Cards matching the prototype's orange accented style */}
        <div className="space-y-4">
          
          {/* Card 1 */}
          <div className="relative p-5 sm:p-6 bg-[#faf8f5] hover:bg-[#fff7ed] rounded-2xl border border-slate-200/80 shadow-xs transition-colors flex items-start gap-4 sm:gap-5 overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center shrink-0 text-[#f95700]">
              <Clock className="w-6 h-6" />
            </div>
            <div className="flex-1 pr-6">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                Colas largas bajo el sol y tráfico
              </h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Horas esperando, lidiar con el tráfico de Lima, cargar bolsas pesadas de papas y cebollas en transporte público o gastar en taxi para regresar a casa.
              </p>
            </div>
            {/* Right side orange curved accent bracket from prototype */}
            <div className="absolute right-0 top-0 bottom-0 w-3 bg-[#f95700] rounded-l-md" />
          </div>

          {/* Card 2 */}
          <div className="relative p-5 sm:p-6 bg-[#faf8f5] hover:bg-[#fff7ed] rounded-2xl border border-slate-200/80 shadow-xs transition-colors flex items-start gap-4 sm:gap-5 overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center shrink-0 text-[#f95700]">
              <Carrot className="w-6 h-6" />
            </div>
            <div className="flex-1 pr-6">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                Supermercados con verduras caras y viejas
              </h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Empaquetadas en bandejas de tecnopor hace 4 días, sin aroma, sin sabor casero y con un sobreprecio de hasta 40% sobre el valor del mercado real.
              </p>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-3 bg-[#f95700] rounded-l-md" />
          </div>

          {/* Card 3 */}
          <div className="relative p-5 sm:p-6 bg-[#faf8f5] hover:bg-[#fff7ed] rounded-2xl border border-slate-200/80 shadow-xs transition-colors flex items-start gap-4 sm:gap-5 overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center shrink-0 text-[#f95700]">
              <CalendarX className="w-6 h-6" />
            </div>
            <div className="flex-1 pr-6">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                No tienes tiempo en tu rutina diaria
              </h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                El trabajo de oficina, el cuidado de la casa o los estudios no te permiten llegar al mercado a las 7:00 am cuando está lo mejor de la cosecha.
              </p>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-3 bg-[#f95700] rounded-l-md" />
          </div>

        </div>

        {/* The hidden side: The vendor's problem (connecting buyer persona) */}
        <div className="mt-8 p-5 bg-emerald-50/70 border border-emerald-200 rounded-2xl flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
            <Trash2 className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-[#144229]">
              Y mientras tanto, los puestos de mercado botan comida a diario
            </h4>
            <p className="text-xs sm:text-sm text-emerald-800 mt-0.5">
              Un puesto promedio de verduras en Lima desecha hasta el <strong>15% al 20% de sus productos perecibles</strong> que maduran al atardecer por falta de clientes. Con La Caserita, esos productos se venden frescos antes del mediodía.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
