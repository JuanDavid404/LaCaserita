import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/marketData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-16 md:py-24 bg-[#faf8f5] border-b border-emerald-950/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header matching prototype */}
        <div className="text-center space-y-2 mb-12">
          <p className="text-xs font-bold tracking-widest text-[#f95700] uppercase font-display">
            Testimonio Real
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#144229] font-display tracking-tight text-balance">
            Lo dicen nuestras caseritas y vecinos
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Historias verdaderas de quienes compran y venden cada mañana en los mercados de Lima.
          </p>
        </div>

        {/* Featured Caserita Testimonial Card matching prototype */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Caserita Photo */}
            <div className="md:col-span-5 relative">
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-sm bg-slate-100">
                <img
                  src={TESTIMONIALS[0].image}
                  alt={TESTIMONIALS[0].name}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-3 left-3 bg-[#144229] text-emerald-200 text-[10px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                  {TESTIMONIALS[0].badge}
                </span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <blockquote className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed italic">
                "{TESTIMONIALS[0].quote}"
              </blockquote>

              <div className="pt-2 border-t border-slate-100">
                <div className="font-extrabold text-slate-900 text-base font-display">
                  — {TESTIMONIALS[0].name}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {TESTIMONIALS[0].role} · <strong className="text-emerald-800">{TESTIMONIALS[0].location}</strong>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2 Additional Testimonial Cards: Neighbor + Mototaxi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.slice(1).map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                    {t.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100 shrink-0">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{t.name}</div>
                  <div className="text-[11px] text-slate-500">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
