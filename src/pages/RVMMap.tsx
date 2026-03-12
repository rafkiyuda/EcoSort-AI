import { MapPin, Navigation, ArrowLeft, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const locations = [
    { id: 1, name: 'Eco-Machine Sudirman', status: 'Ready', distance: '0.8km', fill: 45, address: 'Jl. Jend. Sudirman No. 1, Jakarta' },
    { id: 2, name: 'Grand Indonesia Mall', status: 'Full', distance: '1.2km', fill: 98, address: 'Lantai Ground, East Mall' },
    { id: 3, name: 'Menteng Central', status: 'Ready', distance: '2.5km', fill: 12, address: 'Jl. Menteng Raya No. 10' },
];

export default function RVMMap() {
    const navigate = useNavigate();

    return (
        <div className="pb-32 min-h-screen bg-slate-50">
            {/* Header */}
            <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-100 p-6 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/')}
                        className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 active:scale-90 transition-all"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <h1 className="text-xl font-black text-slate-900 tracking-tight">Locator</h1>
                </div>

                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Cari RVM terdekat..."
                        className="w-full h-12 pl-11 pr-4 bg-slate-100 border-none rounded-2xl text-sm font-medium placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    />
                </div>
            </div>

            <div className="p-6 space-y-8">
                {/* Mock Map View */}
                <div className="aspect-[4/5] bg-slate-200 rounded-[40px] relative overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/50">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,#27AE60_2px,transparent_2px)] bg-[length:32px_32px]" />

                    {/* Pulsing User Location */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-10 h-10 bg-emerald-500/20 rounded-full animate-ping" />
                        <div className="absolute inset-2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white shadow-2xl" />
                    </div>

                    {/* Machine Pins */}
                    {locations.map((loc, i) => (
                        <motion.div
                            key={loc.id}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className={`absolute ${i === 0 ? 'top-1/4 right-1/3' : i === 1 ? 'bottom-1/3 left-1/4' : 'top-1/3 left-1/2'}`}
                        >
                            <MapPin
                                className={`${loc.status === 'Full' ? 'text-red-500' : 'text-emerald-500'} drop-shadow-2xl`}
                                size={32}
                                fill="currentColor"
                                fillOpacity={0.2}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Location List */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center px-1">
                        <h3 className="text-lg font-black text-slate-900 tracking-tight">Terdekat Sekarang</h3>
                        <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">3 Hasil</span>
                    </div>

                    <div className="space-y-4">
                        {locations.map((loc) => (
                            <motion.div
                                whileTap={{ scale: 0.98 }}
                                key={loc.id}
                                className="bento-card bg-white p-5 cursor-pointer border border-slate-100 shadow-sm hover:shadow-md transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-colors">
                                        <Navigation
                                            className={`${loc.status === 'Full' ? 'text-red-400' : 'text-emerald-500'} group-hover:text-white transition-colors`}
                                            size={28}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-slate-900 font-black text-sm tracking-tight">{loc.name}</h4>
                                        <p className="text-slate-400 text-[11px] font-bold mt-0.5">{loc.distance} • <span className={loc.status === 'Full' ? 'text-red-500' : 'text-emerald-500'}>{loc.status}</span></p>
                                        <p className="text-slate-300 text-[10px] font-medium mt-1 truncate">{loc.address}</p>
                                    </div>
                                    <div className="flex flex-col items-end gap-1.5 ml-2">
                                        <div className="text-[9px] text-slate-400 font-black uppercase tracking-widest">Kapasitas</div>
                                        <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-50">
                                            <div
                                                className={`h-full rounded-full transition-all duration-500 ${loc.fill > 90 ? 'bg-red-500' : 'bg-emerald-500'}`}
                                                style={{ width: `${loc.fill}%` }}
                                            />
                                        </div>
                                        <span className="text-[10px] font-black text-slate-700">{loc.fill}%</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
