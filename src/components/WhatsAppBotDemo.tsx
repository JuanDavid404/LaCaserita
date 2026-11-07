import React, { useState } from 'react';
import { Send, Bot, Check, CheckCheck, Sparkles, MessageCircle, RefreshCw } from 'lucide-react';
import { ChatMessage } from '../types';

interface WhatsAppBotDemoProps {
  onOpenDownload: () => void;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'm1',
    sender: 'bot',
    text: '¡Hola caserito(a)! 🌿 Bienvenido al bot de atención de La Caserita en Lima. ¿En qué mercado o distrito estás hoy para conectarte con el puesto más fresco?',
    timestamp: '9:40 am',
    quickReplies: [
      '¿Tienen palta fuerte hoy?',
      '¿A qué distritos llegan?',
      '¿Cómo pago con Yape o Plin?',
      '¿Cómo afilio mi puesto de verduras?',
    ],
  },
];

export const WhatsAppBotDemo: React.FC<WhatsAppBotDemoProps> = ({ onOpenDownload }) => {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Bot intelligence matching Peruvian market logic
    setTimeout(() => {
      let botReply = '';
      let nextReplies: string[] = [];
      const lower = textToSend.toLowerCase();

      if (lower.includes('palta')) {
        botReply = '🥑 ¡Sí caserito! Tía Juanita en el Mercado San Roque (Surco) tiene palta fuerte cremosita a S/ 6.00 la unidad. La escoge al punto para comer hoy o madurar en 2 días. ¿Deseas que te la reservemos?';
        nextReplies = ['Pedir 2 paltas fuertes', 'Ver precio de tomates', 'Descargar la App'];
      } else if (lower.includes('distrito') || lower.includes('cobertura') || lower.includes('llegan')) {
        botReply = '📍 Actualmente cubrimos con mototaxis locales en: Santiago de Surco, Jesús María, San Juan de Lurigancho (Mercado 10), Lince, Magdalena, Pueblo Libre y San Miguel. ¡Llegamos en 60 minutos!';
        nextReplies = ['¿Cuánto cuesta el envío?', 'Pedir en Surco', 'Descargar App'];
      } else if (lower.includes('yape') || lower.includes('plin') || lower.includes('pago')) {
        botReply = '📱 Puedes pagar 100% al instante con Yape o Plin al número de La Caserita o directo al QR de tu casera. También admitimos efectivo contra entrega al mototaxi.';
        nextReplies = ['Probar compra en demo', '¿Tienen frutas de estación?'];
      } else if (lower.includes('afilio') || lower.includes('puesto') || lower.includes('vendedor')) {
        botReply = '🏪 ¡Bienvenido casero(a)! Afiliar tu puesto es 100% GRATIS. No cobramos mensualidad; solo te conectamos con pedidos matutinos para que no botes verduras en la tarde. Te enseñamos en 10 minutos.';
        nextReplies = ['Quiero que me contacten', 'Ver requisitos de puesto'];
      } else if (lower.includes('envío') || lower.includes('delivery') || lower.includes('costo')) {
        botReply = '🛵 El delivery en moto-taxi del barrio cuesta solo S/ 3.00 planos dentro de tu zona. ¡Y tu primer pedido tiene ENVÍO GRATIS usando la app o este bot!';
        nextReplies = ['Descargar App Gratis', 'Hacer pedido ahora'];
      } else {
        botReply = `🌿 ¡Anotado caserito! Tu consulta sobre "${textToSend}" ya está registrada. Nuestros puestos aliados reciben verduras frescas todos los días a las 5:00 am. ¿Deseas explorar los productos en la app o pedir por WhatsApp?`;
        nextReplies = ['Ver catálogo de hoy', 'Descargar en Play Store', 'Hablar con una persona'];
      }

      const botMsg: ChatMessage = {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        quickReplies: nextReplies,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <section className="py-16 md:py-20 bg-white border-b border-emerald-950/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Bot className="w-3.5 h-3.5 text-emerald-600" />
            <span>Gestión MVP con Bot de Atención</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#144229] font-display tracking-tight text-balance">
            Prueba cómo atiende nuestro Bot de WhatsApp
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Para clientes sin tiempo de navegar o que prefieren WhatsApp, nuestro bot asiste en segundos, consulta stock del mercado y despacha tu orden.
          </p>
        </div>

        {/* WhatsApp Chat Container */}
        <div className="max-w-xl mx-auto bg-[#efeae2] rounded-3xl overflow-hidden shadow-xl border border-slate-300">
          
          {/* WhatsApp Header */}
          <div className="bg-[#075e54] text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center text-white font-bold text-sm">
                  🌱
                </div>
                <div className="w-3 h-3 rounded-full bg-emerald-400 absolute bottom-0 right-0 border-2 border-[#075e54]"></div>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">La Caserita · Bot de Pedidos</h4>
                <p className="text-[11px] text-emerald-200">En línea · Respuesta inmediata</p>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="p-1.5 text-emerald-200 hover:text-white rounded-lg hover:bg-emerald-800/40 transition-colors"
              title="Reiniciar chat"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="p-4 space-y-3.5 h-[340px] overflow-y-auto bg-[radial-gradient(#0000000a_1px,transparent_1px)] [background-size:16px_16px]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs shadow-xs relative leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#d9fdd3] text-slate-900 rounded-tr-xs'
                      : 'bg-white text-slate-900 rounded-tl-xs'
                  }`}
                >
                  <p>{msg.text}</p>
                  <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-slate-400">
                    <span>{msg.timestamp}</span>
                    {msg.sender === 'user' && <CheckCheck className="w-3 h-3 text-sky-500" />}
                  </div>
                </div>

                {/* Quick replies for bot messages */}
                {msg.quickReplies && msg.quickReplies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                    {msg.quickReplies.map((reply, i) => (
                      <button
                        key={i}
                        onClick={() => handleSendMessage(reply)}
                        className="px-2.5 py-1 bg-white hover:bg-emerald-50 text-emerald-900 rounded-full text-[11px] font-semibold border border-emerald-300 shadow-2xs transition-colors"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-2 bg-white rounded-xl w-16 text-slate-400 text-xs shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce delay-100" />
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce delay-200" />
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-2.5 bg-[#f0f2f5] border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              placeholder="Escribe tu mensaje a la caserita..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputText)}
              className="flex-1 px-3 py-2 bg-white rounded-xl text-xs border border-slate-300 focus:outline-hidden focus:ring-1 focus:ring-emerald-600"
            />
            <button
              onClick={() => handleSendMessage(inputText)}
              disabled={!inputText.trim()}
              className="p-2 bg-[#075e54] hover:bg-[#128c7e] text-white rounded-xl disabled:opacity-40 transition-colors"
              aria-label="Enviar mensaje"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
