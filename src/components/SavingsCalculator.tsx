import React, { useState } from 'react';
import { Calculator, Sparkles, TrendingUp, Clock, Leaf, DollarSign } from 'lucide-react';

interface SavingsCalculatorProps {
  onOpenDownload: () => void;
}

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({ onOpenDownload }) => {
  const [calculatorMode, setCalculatorMode] = useState<'vecino' | 'caserita'>('vecino');
  
  // Vecino inputs
  const [weeklySpendSuper, setWeeklySpendSuper] = useState(90);
  const [familyMembers, setFamilyMembers] = useState(3);

  // Caserita inputs
  const [dailyUnsoldKg, setDailyUnsoldKg] = useState(15);
  const [daysOpenPerMonth, setDaysOpenPerMonth] = useState(26);

  // Vecino calculations
  // Market prices are ~35% cheaper than supermarkets for equal produce volume
  const monthlySuperSpend = weeklySpendSuper * 4.3;
  const estimatedMarketSpend = monthlySuperSpend * 0.65;
  const monthlySavingsSoles = Math.round(monthlySuperSpend - estimatedMarketSpend);
  const monthlyHoursSaved = Math.round(familyMembers * 2.5 * 1.2); // ~6-9 hrs saved per month
  const kgFreshProduceProtected = Math.round(familyMembers * 3.8 * 4.3);

  // Caserita calculations
  // Selling 70% of previously wasted produce at market price ~S/ 3.50/kg
  const recoveredKgPerMonth = Math.round(dailyUnsoldKg * 0.7 * daysOpenPerMonth);
  const extraRevenuePerMonth = Math.round(recoveredKgPerMonth * 3.8);

  return (
    <section id="calculadora" className="py-16 md:py-24 bg-[#faf8f5] border-b border-emerald-950/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-12">
          <p className="text-xs font-bold tracking-widest text-[#144229] uppercase font-display">
            Calculadora Interactiva
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#144229] font-display tracking-tight text-balance">
            Calcula cuánto ahorras y cuánto impacto generas
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Descubre en números reales el beneficio de comprar directo del mercado frente a pagar las tarifas infladas de los supermercados.
          </p>

          {/* Mode toggle */}
          <div className="inline-flex p-1 bg-slate-200/80 rounded-xl mt-4">
            <button
              onClick={() => setCalculatorMode('vecino')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                calculatorMode === 'vecino'
                  ? 'bg-white text-[#144229] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Soy Vecino Comprador
            </button>
            <button
              onClick={() => setCalculatorMode('caserita')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                calculatorMode === 'caserita'
                  ? 'bg-white text-[#144229] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Soy Caserita de Puesto
            </button>
          </div>
        </div>

        {/* VECINO CALCULATOR */}
        {calculatorMode === 'vecino' ? (
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sliders Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Slider 1: Gasto semanal */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold text-slate-800">
                  <label htmlFor="spend-slider">¿Cuánto gastas a la semana en verduras y frutas?</label>
                  <span className="text-[#144229] text-base font-extrabold font-mono tabular-nums">
                    S/ {weeklySpendSuper}
                  </span>
                </div>
                <input
                  id="spend-slider"
                  type="range"
                  min="30"
                  max="300"
                  step="5"
                  value={weeklySpendSuper}
                  onChange={(e) => setWeeklySpendSuper(Number(e.target.value))}
                  className="w-full accent-[#144229] h-2 bg-slate-100 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>S/ 30 (básico)</span>
                  <span>S/ 150 (promedio Lima)</span>
                  <span>S/ 300 (familiar)</span>
                </div>
              </div>

              {/* Slider 2: Personas en casa */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold text-slate-800">
                  <label htmlFor="family-slider">Personas que consumen en tu hogar</label>
                  <span className="text-[#144229] text-base font-extrabold font-mono tabular-nums">
                    {familyMembers} {familyMembers === 1 ? 'persona' : 'personas'}
                  </span>
                </div>
                <input
                  id="family-slider"
                  type="range"
                  min="1"
                  max="6"
                  step="1"
                  value={familyMembers}
                  onChange={(e) => setFamilyMembers(Number(e.target.value))}
                  className="w-full accent-[#144229] h-2 bg-slate-100 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>1 (solo)</span>
                  <span>3 (pareja con hijo)</span>
                  <span>6+ (familia grande)</span>
                </div>
              </div>

              <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200/70 text-xs text-emerald-900 flex items-center gap-2.5">
                <Leaf className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>
                  Los precios de mercado en La Caserita son hasta un <strong>35% más económicos</strong> que en supermercados, con calidad cosechada el mismo día.
                </span>
              </div>
            </div>

            {/* Results Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#144229] to-[#0d2e1c] text-white p-6 sm:p-7 rounded-2xl shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-emerald-800/80 pb-3">
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                  Tu Impacto Mensual Estimado
                </span>
                <Sparkles className="w-4 h-4 text-amber-300" />
              </div>

              <div className="space-y-4">
                {/* Soles saved */}
                <div>
                  <div className="text-xs text-emerald-200">Ahorro mensual en dinero</div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums mt-0.5">
                    S/ {monthlySavingsSoles}
                  </div>
                  <div className="text-[11px] text-emerald-300">
                    Aprox. S/ {(monthlySavingsSoles * 12).toLocaleString()} ahorrados cada año
                  </div>
                </div>

                {/* Hours saved */}
                <div className="flex items-center gap-3 pt-2 border-t border-emerald-800/60">
                  <div className="w-9 h-9 rounded-xl bg-emerald-800/60 flex items-center justify-center text-amber-300 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-base font-bold font-mono tabular-nums text-white">
                      +{monthlyHoursSaved} horas libres al mes
                    </div>
                    <div className="text-[11px] text-emerald-300">
                      Sin hacer colas ni cargar bolsas pesadas
                    </div>
                  </div>
                </div>

                {/* Waste prevented */}
                <div className="flex items-center gap-3 pt-2 border-t border-emerald-800/60">
                  <div className="w-9 h-9 rounded-xl bg-emerald-800/60 flex items-center justify-center text-emerald-300 shrink-0">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-base font-bold font-mono tabular-nums text-white">
                      ~{kgFreshProduceProtected} kg de verdura fresca
                    </div>
                    <div className="text-[11px] text-emerald-300">
                      Comprados a tiempo antes de vencer
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenDownload}
                className="w-full py-3 bg-[#f95700] hover:bg-[#ea580c] text-white rounded-xl text-xs font-bold transition-all shadow-md text-center mt-2"
              >
                Empezar a Ahorrar con La Caserita
              </button>
            </div>

          </div>
        ) : (
          /* CASERITA VENDOR CALCULATOR */
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold text-slate-800">
                  <label htmlFor="unsold-slider">¿Cuántos kilos de verdura o fruta te sobran o maduran al día?</label>
                  <span className="text-[#144229] text-base font-extrabold font-mono tabular-nums">
                    {dailyUnsoldKg} kg / día
                  </span>
                </div>
                <input
                  id="unsold-slider"
                  type="range"
                  min="5"
                  max="40"
                  step="1"
                  value={dailyUnsoldKg}
                  onChange={(e) => setDailyUnsoldKg(Number(e.target.value))}
                  className="w-full accent-[#144229] h-2 bg-slate-100 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>5 kg (puesto pequeño)</span>
                  <span>15 kg (promedio)</span>
                  <span>40 kg (puesto grande)</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold text-slate-800">
                  <label htmlFor="days-slider">Días que abres tu puesto al mes</label>
                  <span className="text-[#144229] text-base font-extrabold font-mono tabular-nums">
                    {daysOpenPerMonth} días
                  </span>
                </div>
                <input
                  id="days-slider"
                  type="range"
                  min="20"
                  max="30"
                  step="1"
                  value={daysOpenPerMonth}
                  onChange={(e) => setDaysOpenPerMonth(Number(e.target.value))}
                  className="w-full accent-[#144229] h-2 bg-slate-100 rounded-lg cursor-pointer"
                />
              </div>

              <div className="p-3.5 bg-orange-50 rounded-xl border border-orange-200 text-xs text-orange-900">
                La Caserita conecta tus pedidos matutinos directamente con los vecinos, permitiéndote vender antes del mediodía y reduciendo mermas a cero.
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-[#144229] to-[#0d2e1c] text-white p-6 sm:p-7 rounded-2xl shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-emerald-800/80 pb-3">
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                  Ingreso Recuperado Mensual
                </span>
                <TrendingUp className="w-4 h-4 text-amber-300" />
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-xs text-emerald-200">Ingreso extra estimado al mes</div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono tabular-nums mt-0.5">
                    + S/ {extraRevenuePerMonth}
                  </div>
                  <div className="text-[11px] text-emerald-300">
                    Dinero directo que antes se perdía en mermas
                  </div>
                </div>

                <div className="pt-2 border-t border-emerald-800/60">
                  <div className="text-base font-bold font-mono tabular-nums text-white">
                    {recoveredKgPerMonth} kg salvados al mes
                  </div>
                  <div className="text-[11px] text-emerald-300">
                    Alimentos que alimentan a vecinos en lugar de ir a la basura
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenDownload}
                className="w-full py-3 bg-[#f95700] hover:bg-[#ea580c] text-white rounded-xl text-xs font-bold transition-all shadow-md text-center mt-2"
              >
                Afiliar Mi Puesto Gratis
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
