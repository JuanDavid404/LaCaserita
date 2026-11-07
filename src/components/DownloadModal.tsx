import React, { useState } from 'react';
import { X, Smartphone, QrCode, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { DISTRICTS } from '../data/marketData';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDistrict?: string;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose, defaultDistrict }) => {
  const [selectedDistrict, setSelectedDistrict] = useState(defaultDistrict || 'Santiago de Surco');
  const [phone, setPhone] = useState('');
  const [smsSent, setSmsSent] = useState(false);

  if (!isOpen) return null;

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim().length >= 9) {
      setSmsSent(true);
      setTimeout(() => setSmsSent(false), 5000);
    }
  };

  const handleOpenPlayStore = () => {
    // In production this navigates to the real Play Store URL:
    window.open('https://play.google.com/store/apps/details?id=pe.lacaserita.app', '_blank', 'noopener,noreferrer');
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(`¡Hola Caserita! Quiero pedir verduras frescas del mercado en mi distrito (${selectedDistrict}).`);
    window.open(`https://wa.me/51987654321?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg overflow-hidden bg-white rounded-2xl shadow-2xl border border-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Header with vibrant green brand bar */}
        <div className="bg-[#144229] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌱</span>
            <div>
              <h3 className="font-bold text-lg font-display tracking-tight text-white">Descargar La Caserita</h3>
              <p className="text-xs text-emerald-200">Verdura fresca en tu puerta en 60 minutos</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-emerald-100 hover:text-white rounded-lg hover:bg-emerald-800/60 transition-colors"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[85vh] overflow-y-auto">
          {/* Main Google Play button */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Instalación Oficial</p>
            <button
              onClick={handleOpenPlayStore}
              className="w-full flex items-center justify-between p-4 bg-[#0f3824] hover:bg-[#144229] text-white rounded-xl shadow-md hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.003 2.003 0 01-.61-.951V2.765c.14-.383.364-.725.609-.951zm11.246 11.248l2.457 2.457-11.7 6.756 9.243-9.213zm2.457-4.124l-2.457 2.457-9.243-9.213 11.7 6.756zm1.096 1.096l3.36 1.94c.91.525.91 1.385 0 1.91l-3.36 1.94-2.146-2.145 2.146-2.145z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[11px] uppercase tracking-wider text-emerald-300 font-medium">Disponible en</div>
                  <div className="text-base font-bold leading-tight">Google Play Store</div>
                </div>
              </div>
              <span className="px-3 py-1 bg-white/15 rounded-lg text-xs font-medium text-emerald-200 group-hover:bg-white/25 transition-colors">
                Descargar Gratis
              </span>
            </button>
          </div>

          {/* QR Code + Mobile Link */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200/80">
            <div className="flex flex-col items-center justify-center p-3 bg-white rounded-lg border border-slate-200 text-center">
              {/* Stylized QR Code container */}
              <div className="relative w-28 h-28 p-2 bg-white rounded-md flex items-center justify-center shadow-xs">
                <svg className="w-full h-full text-slate-800" viewBox="0 0 100 100" fill="currentColor">
                  {/* Top-left position block */}
                  <rect x="5" y="5" width="28" height="28" rx="4" />
                  <rect x="9" y="9" width="20" height="20" fill="white" rx="2" />
                  <rect x="13" y="13" width="12" height="12" rx="1" />

                  {/* Top-right position block */}
                  <rect x="67" y="5" width="28" height="28" rx="4" />
                  <rect x="71" y="9" width="20" height="20" fill="white" rx="2" />
                  <rect x="75" y="13" width="12" height="12" rx="1" />

                  {/* Bottom-left position block */}
                  <rect x="5" y="67" width="28" height="28" rx="4" />
                  <rect x="9" y="71" width="20" height="20" fill="white" rx="2" />
                  <rect x="13" y="75" width="12" height="12" rx="1" />

                  {/* Data dots */}
                  <rect x="38" y="10" width="8" height="8" />
                  <rect x="50" y="10" width="8" height="8" />
                  <rect x="38" y="22" width="8" height="8" />
                  <rect x="50" y="22" width="8" height="8" />
                  <rect x="10" y="38" width="8" height="8" />
                  <rect x="22" y="38" width="8" height="8" />
                  <rect x="38" y="38" width="8" height="8" />
                  <rect x="60" y="38" width="8" height="8" />
                  <rect x="75" y="38" width="8" height="8" />
                  <rect x="38" y="50" width="8" height="8" />
                  <rect x="50" y="50" width="8" height="8" />
                  <rect x="75" y="50" width="8" height="8" />
                  <rect x="85" y="50" width="8" height="8" />
                  <rect x="38" y="65" width="8" height="8" />
                  <rect x="65" y="65" width="8" height="8" />
                  <rect x="80" y="65" width="8" height="8" />
                  <rect x="38" y="80" width="8" height="8" />
                  <rect x="55" y="80" width="8" height="8" />
                  <rect x="70" y="80" width="8" height="8" />
                  <rect x="85" y="80" width="8" height="8" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-6 h-6 bg-[#144229] rounded-md text-white text-[10px] flex items-center justify-center font-bold">
                    LC
                  </span>
                </div>
              </div>
              <p className="mt-2 text-[11px] font-medium text-slate-600">Escanea con tu cámara</p>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-semibold text-slate-800">¿Estás en tu computadora?</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Ingresa tu número de WhatsApp o celular y te enviamos el enlace directo de descarga:
                </p>
              </div>

              <form onSubmit={handleSendLink} className="mt-2 space-y-2">
                <input
                  type="tel"
                  placeholder="Ej: 987 654 321"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  type="submit"
                  className="w-full py-1.5 px-3 bg-[#f95700] hover:bg-[#ea580c] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1"
                >
                  <span>Enviar Link por SMS/WhatsApp</span>
                </button>
                {smsSent && (
                  <p className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> ¡Enlace enviado a tu celular!
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Alternative: Order directly via WhatsApp Business */}
          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/70">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-emerald-950">¿Prefieres no instalar nada?</h4>
                  <span className="text-[10px] bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded-full font-semibold">
                    Catálogo WhatsApp
                  </span>
                </div>
                <p className="text-xs text-emerald-800 mt-1">
                  También puedes pedir directamente por WhatsApp Business. Tu caserita del mercado te manda la foto del día y pagas con Yape al recibir.
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <select
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    className="text-xs bg-white border border-emerald-300 rounded-lg px-2.5 py-1.5 text-slate-700 font-medium focus:outline-hidden"
                  >
                    {DISTRICTS.map((dist) => (
                      <option key={dist} value={dist}>{dist}</option>
                    ))}
                  </select>
                  <button
                    onClick={handleOpenWhatsApp}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors"
                  >
                    <span>Pedir por WhatsApp</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Garantía de frescura o cambio</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#742284]">Yape</span>
              <span className="text-slate-300">·</span>
              <span className="font-bold text-[#00a8e8]">Plin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
