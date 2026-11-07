import React, { useState } from 'react';
import { 
  Search, Star, MapPin, Clock, Plus, Minus, ShoppingBag, 
  ChevronRight, ArrowLeft, Heart, Share2, Check, CheckCircle2,
  Bike, ExternalLink, Sparkles, Smartphone
} from 'lucide-react';
import { MARKET_STALLS, PRODUCTS } from '../data/marketData';
import { Product, Stall, CartItem } from '../types';

interface InteractiveAppDemoProps {
  onOpenDownload: () => void;
}

export const InteractiveAppDemo: React.FC<InteractiveAppDemoProps> = ({ onOpenDownload }) => {
  // Navigation inside the phone mockup: 'stalls' | 'stall_detail' | 'cart' | 'tracking'
  const [activeScreen, setActiveScreen] = useState<'stalls' | 'stall_detail' | 'cart' | 'tracking'>('stall_detail');
  const [selectedStall, setSelectedStall] = useState<Stall>(MARKET_STALLS[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPayment, setSelectedPayment] = useState<'yape' | 'plin'>('yape');
  const [viewOriginalMockup, setViewOriginalMockup] = useState(false);

  // Initial cart items matching prototype (Tomates, Lechuga, Limones)
  const [cart, setCart] = useState<CartItem[]>([
    { product: PRODUCTS[0], quantity: 1 }, // Tomates S/ 4.50
    { product: PRODUCTS[1], quantity: 1 }, // Lechuga S/ 3.00
    { product: PRODUCTS[2], quantity: 1 }, // Limones S/ 5.00
  ]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === productId);
      if (!existing) return prev;
      if (existing.quantity <= 1) {
        return prev.filter((item) => item.product.id !== productId);
      }
      return prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const getItemQuantity = (productId: string) => {
    return cart.find((item) => item.product.id === productId)?.quantity || 0;
  };

  const totalItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const deliveryFee = 3.0;
  const promoDiscount = totalItemCount > 0 ? 3.0 : 0.0; // Primer envío gratis
  const total = Math.max(0, subtotal + deliveryFee - promoDiscount);

  // Filter products
  const filteredProducts = PRODUCTS.filter((p) => {
    if (selectedCategory !== 'todos' && p.category !== selectedCategory) return false;
    if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <section id="demo-app" className="py-16 md:py-24 bg-[#faf8f5] border-b border-emerald-950/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#144229] uppercase font-display mb-1">
              <span>📱 Experiencia Móvil Interactiva</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#144229] font-display tracking-tight">
              Así de simple compras en La Caserita
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Diseñada especialmente para ser intuitiva, rápida y cercana. Prueba el simulador interactivo abajo o descarga la app completa en Play Store.
            </p>
          </div>

          {/* Controls toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setViewOriginalMockup(!viewOriginalMockup)}
              className="px-3.5 py-2 text-xs font-semibold rounded-xl border border-slate-300 hover:border-emerald-700 bg-white text-slate-700 hover:text-[#144229] transition-colors flex items-center gap-1.5"
            >
              <Smartphone className="w-4 h-4 text-emerald-600" />
              <span>{viewOriginalMockup ? 'Ver Simulador Interactivo' : 'Ver Capturas de Prototipo'}</span>
            </button>
            <button
              onClick={onOpenDownload}
              className="px-4 py-2 text-xs font-bold rounded-xl bg-[#f95700] hover:bg-[#ea580c] text-white shadow-xs transition-colors flex items-center gap-1.5"
            >
              <span>Instalar en Android</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Alternate view: Original Mockup from user */}
        {viewOriginalMockup ? (
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-sm font-bold text-slate-800">Prototipo Original de La Caserita App</span>
              <span className="text-xs text-slate-500">Diseño oficial para tiendas y compradores</span>
            </div>
            <div className="overflow-hidden rounded-2xl bg-slate-100">
              <img
                src="/assets/aistudio/image_c954837c.png"
                alt="Pantallas del prototipo de La Caserita App con puestos, catálogo y carrito"
                className="w-full h-auto object-contain max-h-[600px] mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-center pt-2">
              <button
                onClick={() => setViewOriginalMockup(false)}
                className="text-xs font-bold text-emerald-800 hover:text-emerald-950 underline"
              >
                Volver a interactuar con el simulador en vivo →
              </button>
            </div>
          </div>
        ) : (
          /* Interactive Mockup Container */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Quick screen switcher tabs & instructions */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <h3 className="text-sm font-bold text-slate-900 font-display uppercase tracking-wider text-xs">
                  Pantallas de la App
                </h3>
                <p className="text-xs text-slate-600">
                  Haz clic en cualquiera de las fases para interactuar en el celular de la derecha:
                </p>

                <div className="space-y-2 pt-1">
                  <button
                    onClick={() => setActiveScreen('stalls')}
                    className={`w-full text-left p-3 rounded-xl text-xs font-medium transition-all flex items-center justify-between border ${
                      activeScreen === 'stalls'
                        ? 'bg-emerald-50 border-emerald-600 text-[#144229] font-bold shadow-2xs'
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                        1
                      </span>
                      <div>
                        <div className="font-semibold">Puestos de Mercado Cercanos</div>
                        <div className="text-[11px] text-slate-500 font-normal">Surco, SJL, Jesús María</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>

                  <button
                    onClick={() => setActiveScreen('stall_detail')}
                    className={`w-full text-left p-3 rounded-xl text-xs font-medium transition-all flex items-center justify-between border ${
                      activeScreen === 'stall_detail'
                        ? 'bg-emerald-50 border-emerald-600 text-[#144229] font-bold shadow-2xs'
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                        2
                      </span>
                      <div>
                        <div className="font-semibold">Catálogo y Verduras Frescas</div>
                        <div className="text-[11px] text-slate-500 font-normal">Tía Juanita · Añade tomates, palta, limones</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>

                  <button
                    onClick={() => setActiveScreen('cart')}
                    className={`w-full text-left p-3 rounded-xl text-xs font-medium transition-all flex items-center justify-between border ${
                      activeScreen === 'cart'
                        ? 'bg-emerald-50 border-emerald-600 text-[#144229] font-bold shadow-2xs'
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                        3
                      </span>
                      <div>
                        <div className="font-semibold">Carrito y Pago Yape / Plin</div>
                        <div className="text-[11px] text-slate-500 font-normal">
                          {totalItemCount} productos · S/ {total.toFixed(2)}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>
                </div>
              </div>

              {/* Highlight callout */}
              <div className="p-4 bg-emerald-900 text-white rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>La ventaja de la caserita</span>
                </div>
                <p className="text-xs text-emerald-100 leading-relaxed">
                  A diferencia de plataformas genéricas impersonales, en La Caserita compras con cercanía y trato directo: puedes dejar indicaciones precisas como <em>"Caserita, mándeme la palta lista para hoy en la noche y los tomates bien rojitos"</em>, sabiendo que tu vendedora de confianza seleccionará lo mejor para tu hogar.
                </p>
              </div>
            </div>

            {/* Right: The Phone Mockup Frame */}
            <div className="lg:col-span-8 flex justify-center">
              <div className="w-full max-w-[390px] bg-slate-900 p-3 rounded-[44px] shadow-2xl border-4 border-slate-800 relative">
                
                {/* Dynamic island / speaker grill */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-end pr-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800/80"></div>
                </div>

                {/* Inner screen content */}
                <div className="bg-[#faf8f5] rounded-[36px] overflow-hidden min-h-[640px] max-h-[660px] flex flex-col relative text-slate-800 font-sans border border-slate-200">
                  
                  {/* Status Bar */}
                  <div className="h-10 px-6 pt-2 flex items-center justify-between text-xs font-semibold text-slate-800 z-20 shrink-0">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5 text-xs">
                      <span>5G</span>
                      <span className="text-emerald-700 font-bold">100%</span>
                    </div>
                  </div>

                  {/* SCREEN 1: STALLS LIST */}
                  {activeScreen === 'stalls' && (
                    <div className="flex-1 overflow-y-auto px-4 pb-20 space-y-4">
                      {/* Brand Header */}
                      <div className="pt-2">
                        <h3 className="text-xl font-extrabold text-[#144229] font-display">
                          La Caserita App
                        </h3>
                        <p className="text-xs text-slate-500">Productos frescos directo del mercado a tu puerta</p>
                        <div className="flex items-center gap-1 text-[11px] text-slate-600 mt-1 font-medium">
                          <MapPin className="w-3 h-3 text-[#f95700]" />
                          <span>Surco, Lima · Ahora abierto</span>
                        </div>
                      </div>

                      {/* Search Bar */}
                      <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Busca puestos, productos..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 bg-white rounded-xl text-xs border border-slate-200 shadow-2xs focus:outline-hidden focus:ring-1 focus:ring-emerald-600"
                        />
                      </div>

                      {/* Stalls title */}
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                            Puestos afiliados cerca de ti
                          </h4>
                          <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
                            3 abiertos ahora
                          </span>
                        </div>

                        <div className="mt-3 space-y-3">
                          {MARKET_STALLS.map((stall) => (
                            <div
                              key={stall.id}
                              onClick={() => {
                                setSelectedStall(stall);
                                setActiveScreen('stall_detail');
                              }}
                              className="bg-white p-3 rounded-2xl border border-slate-200/90 shadow-2xs hover:border-emerald-500 transition-all cursor-pointer group"
                            >
                              <div className="relative h-28 rounded-xl overflow-hidden mb-2 bg-slate-100">
                                <img
                                  src={stall.image}
                                  alt={stall.name}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                  referrerPolicy="no-referrer"
                                />
                                {stall.isPopular && (
                                  <span className="absolute top-2 right-2 bg-emerald-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                                    Más vendido
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center justify-between">
                                <h5 className="font-bold text-sm text-slate-900 group-hover:text-emerald-800 transition-colors">
                                  {stall.name}
                                </h5>
                                <div className="flex items-center gap-1 text-xs font-bold text-slate-700">
                                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                  <span>{stall.rating}</span>
                                </div>
                              </div>
                              <div className="text-[11px] text-slate-500 mt-0.5">
                                {stall.specialty}
                              </div>
                              <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 pt-2 border-t border-slate-100">
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-2.5 h-2.5" /> {stall.distance} · {stall.marketName}
                                </span>
                                <span className="text-emerald-700 font-semibold">{stall.schedule}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SCREEN 2: STALL DETAIL & PRODUCE CATALOG */}
                  {activeScreen === 'stall_detail' && (
                    <div className="flex-1 overflow-y-auto px-4 pb-24 space-y-3">
                      {/* Top Nav inside phone */}
                      <div className="flex items-center justify-between pt-1">
                        <button
                          onClick={() => setActiveScreen('stalls')}
                          className="p-1 rounded-lg text-slate-600 hover:bg-slate-200"
                        >
                          <ArrowLeft className="w-5 h-5" />
                        </button>
                        <div className="flex items-center gap-3 text-slate-600">
                          <Heart className="w-4 h-4 hover:text-red-500" />
                          <Share2 className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Stall Header */}
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 font-display">
                          {selectedStall.name}
                        </h3>
                        <p className="text-xs text-slate-500">{selectedStall.specialty}</p>
                        <div className="flex items-center gap-2 text-xs text-slate-600 mt-1">
                          <span className="flex items-center text-amber-500 font-bold">
                            <Star className="w-3.5 h-3.5 fill-current mr-0.5" /> {selectedStall.rating}
                          </span>
                          <span>·</span>
                          <span className="text-slate-500">{selectedStall.reviewCount} reseñas</span>
                          <span>·</span>
                          <span className="text-emerald-700 font-semibold">Abierto hoy</span>
                        </div>
                      </div>

                      {/* Category Filters matching prototype */}
                      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar">
                        {[
                          { id: 'todos', label: 'Todos' },
                          { id: 'verduras', label: 'Verduras' },
                          { id: 'hierbas', label: 'Hierbas' },
                          { id: 'tuberculos', label: 'Tubérculos' },
                          { id: 'frutas', label: 'Frutas' },
                        ].map((cat) => (
                          <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                              selectedCategory === cat.id
                                ? 'bg-[#144229] text-white shadow-2xs'
                                : 'bg-slate-200/70 text-slate-700 hover:bg-slate-200'
                            }`}
                          >
                            {cat.label}
                          </button>
                        ))}
                      </div>

                      {/* Products Grid matching 2-column layout in prototype */}
                      <div className="grid grid-cols-2 gap-2.5 pt-1">
                        {filteredProducts.map((product) => {
                          const qty = getItemQuantity(product.id);
                          return (
                            <div
                              key={product.id}
                              className="bg-white p-2.5 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col justify-between group"
                            >
                              <div className="h-24 bg-slate-100 rounded-xl mb-2 relative overflow-hidden">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  referrerPolicy="no-referrer"
                                />
                                <span className="absolute bottom-1 right-1 text-[9px] bg-white/90 backdrop-blur-xs px-1.5 py-0.5 rounded text-slate-700 font-semibold shadow-2xs">
                                  {product.freshness.split(' ')[0]}
                                </span>
                              </div>
                              <div>
                                <h5 className="font-bold text-xs text-slate-900 leading-tight">
                                  {product.name}
                                </h5>
                                <p className="text-[10px] text-slate-500 mt-0.5">{product.unit}</p>
                              </div>
                              <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-100">
                                <span className="text-xs font-bold text-slate-900">
                                  S/ {product.price.toFixed(2)}
                                </span>
                                {qty === 0 ? (
                                  <button
                                    onClick={() => addToCart(product)}
                                    className="w-6 h-6 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center transition-colors shadow-2xs"
                                    aria-label="Agregar producto"
                                  >
                                    <Plus className="w-3.5 h-3.5" />
                                  </button>
                                ) : (
                                  <div className="flex items-center gap-1.5 bg-emerald-50 px-1 py-0.5 rounded-md border border-emerald-200">
                                    <button
                                      onClick={() => removeFromCart(product.id)}
                                      className="text-emerald-800 hover:text-emerald-950 font-bold"
                                    >
                                      <Minus className="w-3 h-3" />
                                    </button>
                                    <span className="text-xs font-bold text-emerald-900">{qty}</span>
                                    <button
                                      onClick={() => addToCart(product)}
                                      className="text-emerald-800 hover:text-emerald-950 font-bold"
                                    >
                                      <Plus className="w-3 h-3" />
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* SCREEN 3: CART & CHECKOUT */}
                  {activeScreen === 'cart' && (
                    <div className="flex-1 overflow-y-auto px-4 pb-20 space-y-3">
                      {/* Top Nav inside cart */}
                      <div className="flex items-center justify-between pt-1">
                        <button
                          onClick={() => setActiveScreen('stall_detail')}
                          className="p-1 rounded-lg text-slate-600 hover:bg-slate-200"
                        >
                          <ArrowLeft className="w-5 h-5" />
                        </button>
                        <h3 className="text-base font-bold text-slate-900 font-display">
                          Carrito
                        </h3>
                        <span className="w-5" />
                      </div>

                      {/* Items list */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Tu compra ({totalItemCount} productos)
                        </h4>

                        {cart.length === 0 ? (
                          <div className="text-center py-8 text-slate-400 text-xs">
                            <ShoppingBag className="w-8 h-8 mx-auto mb-2 opacity-40" />
                            El carrito está vacío. Agrega verduras del puesto.
                          </div>
                        ) : (
                          cart.map((item) => (
                            <div
                              key={item.product.id}
                              className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-between text-xs"
                            >
                              <div className="flex items-center gap-2.5">
                                <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                                  <img
                                    src={item.product.image}
                                    alt={item.product.name}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                                <div>
                                  <div className="font-bold text-slate-900">{item.product.name}</div>
                                  <div className="text-[10px] text-slate-500">
                                    {item.product.unit} · Tia Juanita
                                  </div>
                                  <div className="text-[11px] font-bold text-emerald-800">
                                    S/ {item.product.price.toFixed(2)}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 bg-slate-100 px-2 py-1 rounded-lg">
                                <button
                                  onClick={() => removeFromCart(item.product.id)}
                                  className="text-slate-600 hover:text-black font-bold"
                                >
                                  -
                                </button>
                                <span className="font-bold text-slate-900 text-xs px-1">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => addToCart(item.product)}
                                  className="text-slate-600 hover:text-black font-bold"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          ))
                        )}
                      </div>

                      {/* Order Summary */}
                      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs space-y-1.5 text-xs">
                        <h5 className="font-bold text-slate-800 border-b border-slate-100 pb-1">Resumen</h5>
                        <div className="flex justify-between text-slate-600">
                          <span>Subtotal</span>
                          <span className="font-medium">S/ {subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-slate-600">
                          <span>Delivery (Moto-taxi de barrio)</span>
                          <span className="font-medium">S/ {deliveryFee.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-emerald-700 font-medium">
                          <span>Descuento (Promo bienvenida)</span>
                          <span>- S/ {promoDiscount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm font-bold text-slate-900 pt-1.5 border-t border-slate-100">
                          <span>Total a pagar</span>
                          <span className="text-base text-[#144229]">S/ {total.toFixed(2)}</span>
                        </div>
                      </div>

                      {/* Payment method selection: Yape vs Plin */}
                      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs space-y-2">
                        <h5 className="font-bold text-xs text-slate-800">Método de pago</h5>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => setSelectedPayment('yape')}
                            className={`p-2 rounded-lg border text-left transition-all flex items-center justify-between ${
                              selectedPayment === 'yape'
                                ? 'border-[#742284] bg-purple-50/50 ring-1 ring-[#742284]'
                                : 'border-slate-200 hover:bg-slate-50'
                            }`}
                          >
                            <div className="flex items-center gap-1.5">
                              <span className="px-1.5 py-0.5 bg-[#742284] text-white rounded text-[10px] font-bold">
                                Yape
                              </span>
                              <div className="text-[10px] font-bold text-slate-800">Yapear</div>
                            </div>
                            {selectedPayment === 'yape' && <Check className="w-3.5 h-3.5 text-[#742284]" />}
                          </button>

                          <button
                            onClick={() => setSelectedPayment('plin')}
                            className={`p-2 rounded-lg border text-left transition-all flex items-center justify-between ${
                              selectedPayment === 'plin'
                                ? 'border-[#00a8e8] bg-sky-50/50 ring-1 ring-[#00a8e8]'
                                : 'border-slate-200 hover:bg-slate-50'
                            }`}
                          >
                            <div className="flex items-center gap-1.5">
                              <span className="px-1.5 py-0.5 bg-[#00a8e8] text-white rounded text-[10px] font-bold">
                                Plin
                              </span>
                              <div className="text-[10px] font-bold text-slate-800">Plin</div>
                            </div>
                            {selectedPayment === 'plin' && <Check className="w-3.5 h-3.5 text-[#00a8e8]" />}
                          </button>
                        </div>
                      </div>

                      {/* Delivery address */}
                      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs text-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-800 flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-[#f95700]" /> Dirección de entrega
                          </span>
                          <span className="text-[10px] text-emerald-700 font-semibold cursor-pointer">Cambiar</span>
                        </div>
                        <p className="text-slate-600 font-medium">Av. Benavides 1234, Surco</p>
                        <p className="text-[10px] text-slate-400">Depto 201 · Referencia: frente al parque</p>
                      </div>

                      {/* Pay Button */}
                      <button
                        onClick={() => setActiveScreen('tracking')}
                        disabled={cart.length === 0}
                        className="w-full py-3 bg-[#144229] hover:bg-[#0f3824] text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5 disabled:opacity-50"
                      >
                        <span>🔒 Pagar S/ {total.toFixed(2)} con {selectedPayment === 'yape' ? 'Yape' : 'Plin'}</span>
                      </button>
                      <p className="text-[10px] text-slate-400 text-center">
                        Al pagar aceptas los Términos y Política de Privacidad
                      </p>
                    </div>
                  )}

                  {/* SCREEN 4: ORDER SIMULATOR & MOTOTAXI TRACKER */}
                  {activeScreen === 'tracking' && (
                    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 text-center">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#144229] font-display">
                          ¡Pedido Confirmado!
                        </h4>
                        <p className="text-xs text-slate-600 mt-1">
                          Tu orden #LC-4821 fue enviada a <strong>Tía Juanita</strong>
                        </p>
                      </div>

                      {/* Mototaxi tracking card */}
                      <div className="bg-white p-4 rounded-2xl border border-emerald-200 shadow-xs text-left space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-xl">
                            🛵
                          </div>
                          <div>
                            <div className="font-bold text-xs text-slate-900">Don Lucho (Mototaxi #412)</div>
                            <div className="text-[11px] text-emerald-700 font-semibold">En camino a tu casa · 22 min</div>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-1">
                          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                            <div className="bg-[#f95700] h-full w-2/3 rounded-full animate-pulse" />
                          </div>
                          <div className="flex justify-between text-[10px] text-slate-400">
                            <span>Puesto del mercado</span>
                            <span className="font-bold text-slate-700">En ruta</span>
                            <span>Tu puerta</span>
                          </div>
                        </div>

                        <div className="p-2.5 bg-slate-50 rounded-xl text-[11px] text-slate-600 space-y-1">
                          <div><strong>Pago:</strong> S/ {total.toFixed(2)} verificado por Yape</div>
                          <div><strong>Bolsas:</strong> Papel kraft sellado con tu nombre</div>
                        </div>
                      </div>

                      <div className="space-y-2 pt-2">
                        <button
                          onClick={onOpenDownload}
                          className="w-full py-2.5 bg-[#f95700] hover:bg-[#ea580c] text-white rounded-xl text-xs font-bold transition-colors shadow-xs"
                        >
                          Descargar App en Google Play para ordenar real
                        </button>
                        <button
                          onClick={() => setActiveScreen('stall_detail')}
                          className="w-full py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                        >
                          ← Volver a explorar productos
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Bottom Floating Bar when in stall detail with items in cart */}
                  {activeScreen === 'stall_detail' && totalItemCount > 0 && (
                    <div className="absolute bottom-12 left-3 right-3 z-20">
                      <button
                        onClick={() => setActiveScreen('cart')}
                        className="w-full py-2.5 px-4 bg-[#144229] hover:bg-[#0f3824] text-white rounded-xl shadow-lg flex items-center justify-between text-xs font-bold transition-all"
                      >
                        <div className="flex items-center gap-2">
                          <ShoppingBag className="w-4 h-4 text-emerald-300" />
                          <span>{totalItemCount} productos · S/ {subtotal.toFixed(2)}</span>
                        </div>
                        <span className="flex items-center gap-1 text-emerald-300">
                          Ver carrito <ChevronRight className="w-4 h-4" />
                        </span>
                      </button>
                    </div>
                  )}

                  {/* Bottom Navigation Bar */}
                  <div className="h-14 bg-white border-t border-slate-200 px-6 flex items-center justify-between text-[10px] font-medium text-slate-500 z-10 shrink-0">
                    <button
                      onClick={() => setActiveScreen('stalls')}
                      className={`flex flex-col items-center gap-0.5 ${activeScreen === 'stalls' ? 'text-emerald-800 font-bold' : ''}`}
                    >
                      <span className="text-base">🏠</span>
                      <span>Inicio</span>
                    </button>
                    <button
                      onClick={() => setActiveScreen('stall_detail')}
                      className={`flex flex-col items-center gap-0.5 ${activeScreen === 'stall_detail' ? 'text-emerald-800 font-bold' : ''}`}
                    >
                      <span className="text-base">🔍</span>
                      <span>Buscar</span>
                    </button>
                    <button
                      onClick={() => setActiveScreen('cart')}
                      className={`flex flex-col items-center gap-0.5 relative ${activeScreen === 'cart' ? 'text-emerald-800 font-bold' : ''}`}
                    >
                      <span className="text-base">🛒</span>
                      <span>Carrito</span>
                      {totalItemCount > 0 && (
                        <span className="absolute -top-1 -right-2 bg-[#f95700] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                          {totalItemCount}
                        </span>
                      )}
                    </button>
                    <button
                      onClick={onOpenDownload}
                      className="flex flex-col items-center gap-0.5 text-slate-500"
                    >
                      <span className="text-base">👤</span>
                      <span>Perfil</span>
                    </button>
                  </div>

                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
