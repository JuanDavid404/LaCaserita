import React, { useState } from 'react';
import { 
  Store, Camera, CheckCircle2, AlertCircle, TrendingUp, 
  Package, Bike, DollarSign, X, Check, RefreshCw 
} from 'lucide-react';

interface VendorAdminMiniProps {
  isOpen: boolean;
  onClose: () => void;
}

interface OrderItem {
  id: string;
  customer: string;
  address: string;
  items: string;
  total: number;
  payment: 'Yape' | 'Plin';
  status: 'preparando' | 'en_camino' | 'entregado';
  mototaxi: string;
  time: string;
}

export const VendorAdminMini: React.FC<VendorAdminMiniProps> = ({ isOpen, onClose }) => {
  const [photoUpdated, setPhotoUpdated] = useState(true);
  const [stockStatus, setStockStatus] = useState<Record<string, boolean>>({
    tomates: true,
    lechuga: true,
    limones: true,
    palta: true,
    choclo: true,
    papas: true,
  });

  const [orders, setOrders] = useState<OrderItem[]>([
    {
      id: 'LC-4821',
      customer: 'Valeria Castro (Surco)',
      address: 'Av. Benavides 1234, Dpto 201',
      items: '1kg Tomates, 1 unid Lechuga, 1kg Limones',
      total: 12.5,
      payment: 'Yape',
      status: 'en_camino',
      mototaxi: 'Don Lucho (Unidad #412)',
      time: 'Hace 8 min',
    },
    {
      id: 'LC-4820',
      customer: 'Jorge Ramos (Surco)',
      address: 'Calle Los Sauces 445',
      items: '2 unid Palta Fuerte, 1kg Papas Amarillas',
      total: 16.5,
      payment: 'Plin',
      status: 'entregado',
      mototaxi: 'Raúl Mendoza (#108)',
      time: 'Hace 25 min',
    },
    {
      id: 'LC-4822',
      customer: 'Carla Mendoza (Surco)',
      address: 'Av. Caminos del Inca 780',
      items: '1kg Tomates, 2 unid Choclo Tierno',
      total: 9.5,
      payment: 'Yape',
      status: 'preparando',
      mototaxi: 'Buscando moto disponible',
      time: 'Hace 2 min',
    },
  ]);

  if (!isOpen) return null;

  const toggleStock = (key: string) => {
    setStockStatus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const advanceOrderStatus = (orderId: string) => {
    setOrders((prev) =>
      prev.map((ord) => {
        if (ord.id !== orderId) return ord;
        if (ord.status === 'preparando') return { ...ord, status: 'en_camino', mototaxi: 'Don Lucho (#412)' };
        if (ord.status === 'en_camino') return { ...ord, status: 'entregado' };
        return ord;
      })
    );
  };

  const totalEarningsToday = orders.reduce((sum, o) => sum + o.total, 0) + 115.0; // Simulated base + orders

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl overflow-hidden bg-[#faf8f5] rounded-3xl shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header */}
        <div className="bg-[#144229] px-6 py-4 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl">
              🏪
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base font-display">Panel de Caserita · Tía Juanita</h3>
                <span className="text-[10px] bg-emerald-700 text-emerald-100 px-2 py-0.5 rounded-full font-semibold">
                  Mercado San Roque · Puesto 14
                </span>
              </div>
              <p className="text-xs text-emerald-200">Control de inventario diario y pedidos en tiempo real</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-emerald-100 hover:text-white rounded-lg hover:bg-emerald-800/60 transition-colors"
            aria-label="Cerrar panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Top Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
              <span className="text-xs font-semibold text-slate-500">Ventas Hoy (Yape/Plin)</span>
              <div className="text-2xl font-bold text-[#144229] font-mono tabular-nums mt-1">
                S/ {totalEarningsToday.toFixed(2)}
              </div>
              <span className="text-[11px] text-emerald-700 font-medium">9 pedidos despachados</span>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
              <span className="text-xs font-semibold text-slate-500">Mermas Desechadas</span>
              <div className="text-2xl font-bold text-emerald-700 font-mono tabular-nums mt-1">
                0.0 kg
              </div>
              <span className="text-[11px] text-emerald-600 font-medium">Todo vendido antes del mediodía</span>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
              <span className="text-xs font-semibold text-slate-500">Foto del Puesto</span>
              <div className="flex items-center gap-2 mt-1">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-bold text-slate-800">Actualizada 5:45 am</span>
              </div>
              <button
                onClick={() => setPhotoUpdated(!photoUpdated)}
                className="mt-1 text-[11px] text-emerald-800 underline hover:text-emerald-950 font-semibold flex items-center gap-1"
              >
                <Camera className="w-3 h-3" /> Subir nueva foto diaria
              </button>
            </div>
          </div>

          {/* Quick Inventory Stock Toggles */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900 font-display">
                  Inventario Rápido del Día (Surco)
                </h4>
                <p className="text-xs text-slate-500">
                  Desactiva si se agotó un producto para que los vecinos no lo ordenen.
                </p>
              </div>
              <span className="text-xs text-emerald-800 font-semibold bg-emerald-50 px-2 py-1 rounded-lg">
                Sincronizado con la App
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
              {[
                { key: 'tomates', label: 'Tomates Frescos (1kg)', price: 'S/ 4.50' },
                { key: 'lechuga', label: 'Lechuga Crujiente', price: 'S/ 3.00' },
                { key: 'limones', label: 'Limones Jugo (1kg)', price: 'S/ 5.00' },
                { key: 'palta', label: 'Palta Fuerte', price: 'S/ 6.00' },
                { key: 'choclo', label: 'Choclo Serrano', price: 'S/ 2.50' },
                { key: 'papas', label: 'Papa Amarilla Yungay (1kg)', price: 'S/ 4.50' },
              ].map((item) => {
                const inStock = stockStatus[item.key];
                return (
                  <button
                    key={item.key}
                    onClick={() => toggleStock(item.key)}
                    className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                      inStock
                        ? 'border-emerald-300 bg-emerald-50/50 text-slate-900'
                        : 'border-slate-200 bg-slate-100 text-slate-400 opacity-60'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold">{item.label}</div>
                      <div className="text-[11px] font-semibold text-emerald-800">{item.price}</div>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                        inStock ? 'bg-emerald-200 text-emerald-900' : 'bg-slate-300 text-slate-700'
                      }`}
                    >
                      {inStock ? 'En stock' : 'Agotado'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Incoming Orders Stream */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-900 font-display">
                Pedidos en Curso (Despacho a Domicilio)
              </h4>
              <span className="text-xs text-slate-500 font-medium">Actualización automática</span>
            </div>

            <div className="space-y-3">
              {orders.map((ord) => (
                <div
                  key={ord.id}
                  className="p-4 rounded-xl border border-slate-200 bg-[#faf8f5] hover:border-emerald-400 transition-colors space-y-2.5 text-xs"
                >
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-slate-900">#{ord.id}</span>
                      <span className="font-medium text-slate-700">{ord.customer}</span>
                      <span className="text-slate-400">· {ord.time}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md font-bold text-[11px] bg-purple-100 text-purple-800">
                        {ord.payment} Verificado
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-md font-bold text-[11px] uppercase ${
                          ord.status === 'preparando'
                            ? 'bg-amber-100 text-amber-800'
                            : ord.status === 'en_camino'
                            ? 'bg-sky-100 text-sky-800'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        {ord.status === 'preparando' ? 'Preparando bolsa' : ord.status === 'en_camino' ? 'En mototaxi' : 'Entregado'}
                      </span>
                    </div>
                  </div>

                  <div className="text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200/80">
                    <div><strong>Productos:</strong> {ord.items}</div>
                    <div className="mt-0.5 text-slate-500"><strong>Dirección:</strong> {ord.address}</div>
                    <div className="mt-0.5 text-emerald-800 font-medium"><strong>Repartidor:</strong> {ord.mototaxi}</div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-sm font-bold text-[#144229]">
                      Total: S/ {ord.total.toFixed(2)}
                    </span>
                    {ord.status !== 'entregado' && (
                      <button
                        onClick={() => advanceOrderStatus(ord.id)}
                        className="px-3 py-1.5 bg-[#144229] hover:bg-[#0f3824] text-white rounded-lg text-xs font-semibold transition-colors"
                      >
                        {ord.status === 'preparando' ? 'Entregar a Mototaxi →' : 'Marcar como Entregado ✓'}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span>La Caserita MVP · Panel Administrativo para Comerciantes</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg font-semibold"
          >
            Cerrar Panel
          </button>
        </div>
      </div>
    </div>
  );
};
