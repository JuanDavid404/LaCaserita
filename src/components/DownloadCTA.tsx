import React from 'react';
import { Download, ArrowDownToLine, Smartphone, QrCode, ShieldCheck, Sparkles } from 'lucide-react';

interface DownloadCTAProps {
  onOpenDownload: () => void;
}

export const DownloadCTA: React.FC<DownloadCTAProps> = ({ onOpenDownload }) => {
  return (
    <section className="py-16 md:py-24 bg-[#f95700] text-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-black/10 blur-2xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
        
        {/* Headline matching prototype */}
        <div className="space-y-3">
          <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold uppercase tracking-wider">
            Únete a la revolución del mercado
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white text-balance">
            Descárgala ahora y apoya al mercado local
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-xl mx-auto font-medium">
            Miles de familias en Lima ya compran fresco desde casa y decenas de caseritas aumentan sus ventas diarias.
          </p>
        </div>

        {/* Central Download Button matching prototype */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenDownload}
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-[#144229] font-extrabold text-base rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <svg className="w-6 h-6 text-emerald-700 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a2.003 2.003 0 01-.61-.951V2.765c.14-.383.364-.725.609-.951zm11.246 11.248l2.457 2.457-11.7 6.756 9.243-9.213zm2.457-4.124l-2.457 2.457-9.243-9.213 11.7 6.756zm1.096 1.096l3.36 1.94c.91.525.91 1.385 0 1.91l-3.36 1.94-2.146-2.145 2.146-2.145z"/>
            </svg>
            <div className="text-left leading-tight">
              <span className="block text-[10px] uppercase font-semibold text-slate-500">Google Play Store</span>
              <span className="text-base font-bold text-[#144229]">Descargar La Caserita Gratis</span>
            </div>
            <ArrowDownToLine className="w-5 h-5 text-[#f95700] ml-1" />
          </button>
        </div>

        {/* Payment and Trust Badges matching prototype */}
        <div className="pt-4 flex flex-col items-center justify-center gap-3">
          <div className="flex items-center gap-3">
            {/* Yape Logo Pill */}
            <div className="bg-[#742284] px-4 py-1.5 rounded-xl text-white font-black text-sm tracking-tight shadow-md flex items-center gap-1.5 border border-white/20">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span>Yape</span>
            </div>
            {/* Plin Logo Pill */}
            <div className="bg-[#00a8e8] px-4 py-1.5 rounded-xl text-white font-black text-sm tracking-tight shadow-md flex items-center gap-1.5 border border-white/20">
              <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
              <span>Plin</span>
            </div>
          </div>

          <div className="text-xs text-white/90 font-medium flex items-center gap-2">
            <span>Disponible en Android (Google Play) y WhatsApp Web</span>
            <span>·</span>
            <span>100% Seguro</span>
          </div>
        </div>

      </div>
    </section>
  );
};
