import React from 'react';
import { Home, Store, Check, X, Shield, HeartHandshake, Zap, Sparkles } from 'lucide-react';

export const ValuePropositionBenefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-white border-b border-emerald-950/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header matching prototype */}
        <div className="text-center space-y-2 mb-14">
          <p className="text-xs font-bold tracking-widest text-[#f95700] uppercase font-display">
            Ganamos Todos
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#144229] font-display tracking-tight text-balance">
            Beneficios para todos
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto">
            Un círculo virtuoso que une la mesa de las familias limeñas con el corazón del mercado popular.
          </p>
        </div>

        {/* 2 Main Benefit Boxes matching the prototype's pastel colors and icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Box 1: Para el vecino */}
          <div className="p-7 rounded-3xl bg-[#fff7ed] border border-orange-200 shadow-xs space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-200/70 text-[#f95700] flex items-center justify-center">
                <Home className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-orange-700 uppercase tracking-wider">Amas de casa y profesionales</span>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Para el vecino
                </h3>
              </div>
            </div>

            <ul className="space-y-3.5 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 font-bold" />
                </span>
                <span>
                  <strong>Ahorra tiempo y evita colas:</strong> Olvídate de cargar bultos pesados bajo el sol y del tráfico de Lima.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 font-bold" />
                </span>
                <span>
                  <strong>Solo productos frescos del día:</strong> Cosecha de la madrugada seleccionada a mano por tu casera favorita.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 font-bold" />
                </span>
                <span>
                  <strong>Precios justos de mercado:</strong> Paga el valor real del kilo de tomate o palta, sin el 40% de sobreprecio de las grandes cadenas.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 font-bold" />
                </span>
                <span>
                  <strong>En tu puerta en 60 minutos:</strong> Entrega rápida en mototaxis formales y seguros de tu propio barrio.
                </span>
              </li>
            </ul>
          </div>

          {/* Box 2: Para la caserita */}
          <div className="p-7 rounded-3xl bg-[#e8f5e9]/70 border border-emerald-200 shadow-xs space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-200/70 text-emerald-800 flex items-center justify-center">
                <Store className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Puestos de verduras y frutas</span>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Para la caserita
                </h3>
              </div>
            </div>

            <ul className="space-y-3.5 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 font-bold" />
                </span>
                <span>
                  <strong>Vende más sin perder clientes:</strong> Los vecinos que ya no pueden venir al mercado siguen comprando en tu puesto.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 font-bold" />
                </span>
                <span>
                  <strong>Cero pérdidas por descomposición:</strong> Vende tus verduras temprano antes de que maduren y evita botar mercadería al tacho.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 font-bold" />
                </span>
                <span>
                  <strong>Ingresos extra y pagos por Yape:</strong> Recibe tu dinero al instante o semanalmente sin comisiones abusivas de apps extranjeras.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 font-bold" />
                </span>
                <span>
                  <strong>Capacitación y apoyo digital:</strong> Te enseñamos a usar WhatsApp Business y la app en 15 minutos, sin complicaciones.
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Unfair Advantage Comparison Table: La Caserita vs Apps Tradicionales */}
        <div className="bg-[#faf8f5] p-6 sm:p-8 rounded-3xl border border-slate-200">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#144229] uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#f95700]" /> Nuestra Ventaja Injusta
            </span>
            <h3 className="text-2xl font-bold text-slate-900 font-display">
              ¿Por qué La Caserita y no las apps típicas?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Las aplicaciones genéricas y grandes cadenas comerciales aplican comisiones elevadas y carecen del trato personal del mercado. Nosotros preservamos la confianza y frescura de toda la vida.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase text-[11px]">
                  <th className="py-3 px-3">Característica</th>
                  <th className="py-3 px-3 text-[#144229] bg-emerald-50 rounded-t-xl font-extrabold text-sm">
                    🌱 La Caserita
                  </th>
                  <th className="py-3 px-3 text-slate-500">Supermercados</th>
                  <th className="py-3 px-3 text-slate-500">Apps Tradicionales</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-slate-800">Frescura de la verdura</td>
                  <td className="py-3.5 px-3 bg-emerald-50/70 font-bold text-emerald-900">
                    Del día (cosechada hoy 5 am)
                  </td>
                  <td className="py-3.5 px-3 text-slate-500">Envasada hace 3–6 días</td>
                  <td className="py-3.5 px-3 text-slate-500">Depende de la tienda afiliada</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-slate-800">Precios de compra</td>
                  <td className="py-3.5 px-3 bg-emerald-50/70 font-bold text-emerald-900">
                    Precio justo de puesto de mercado
                  </td>
                  <td className="py-3.5 px-3 text-slate-500">+35% a +50% más caros</td>
                  <td className="py-3.5 px-3 text-slate-500">Precios inflados con comisiones</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-slate-800">Confianza y selección</td>
                  <td className="py-3.5 px-3 bg-emerald-50/70 font-bold text-emerald-900">
                    Tu propia casera de confianza
                  </td>
                  <td className="py-3.5 px-3 text-slate-500">Personal anónimo</td>
                  <td className="py-3.5 px-3 text-slate-500">Repartidor apresurado</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-slate-800">Comisión para el vendedor</td>
                  <td className="py-3.5 px-3 bg-emerald-50/70 font-bold text-emerald-900">
                    Micro-comisión justa y transparente
                  </td>
                  <td className="py-3.5 px-3 text-slate-500">Ganancia para corporación</td>
                  <td className="py-3.5 px-3 text-slate-500">25% a 30% abusivo</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-slate-800">Impacto en el barrio</td>
                  <td className="py-3.5 px-3 bg-emerald-50/70 font-bold text-emerald-900">
                    Moto-taxi local y caseras del vecindario
                  </td>
                  <td className="py-3.5 px-3 text-slate-500">Cadenas multinacionales</td>
                  <td className="py-3.5 px-3 text-slate-500">Flotas tercerizadas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
