import { ArrowLeft, Ticket, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Promos = () => {
    const navigate = useNavigate();

    const promos = [
        { id: 1, title: 'Cashback 20% GOPAY', desc: 'Setor 5kg botol plastik hari ini', code: 'ECOGOPAY20', color: 'bg-blue-500' },
        { id: 2, title: 'Voucher Makan GraFood', desc: 'Selesaikan tantangan ECO-WEEK', code: 'GRAFOOD50', color: 'bg-emerald-500' },
        { id: 3, title: 'Diskon Belanja Sayurur', desc: 'Khusus pengguna Level 4 keatas', code: 'SAYUR25', color: 'bg-amber-500' },
    ];

    return (
        <div className="pb-32 min-h-screen bg-slate-50">
            <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-100 p-6">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 active:scale-90 transition-all"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <h1 className="text-xl font-black text-slate-900 tracking-tight">Promo Menarik</h1>
                </div>
            </div>

            <div className="p-6 space-y-6">
                {promos.map((promo, idx) => (
                    <motion.div
                        key={promo.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative overflow-hidden bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex items-center gap-6 group hover:border-emerald-200 transition-colors"
                    >
                        <div className={`w-16 h-16 rounded-3xl ${promo.color} text-white flex items-center justify-center shrink-0 shadow-lg`}>
                            <Ticket size={32} />
                        </div>
                        <div className="flex-grow">
                            <h3 className="font-black text-slate-900 text-sm tracking-tight">{promo.title}</h3>
                            <p className="text-[11px] text-slate-500 font-medium leading-snug">{promo.desc}</p>
                            <div className="mt-3 inline-block px-3 py-1.5 bg-slate-50 border border-dashed border-slate-300 rounded-xl text-[10px] font-black text-slate-600 tracking-widest uppercase">
                                {promo.code}
                            </div>
                        </div>
                    </motion.div>
                ))}

                <div className="bg-emerald-600 p-8 rounded-[40px] text-white space-y-4 relative overflow-hidden shadow-2xl">
                    <Zap className="absolute top-0 right-0 -mr-4 -mt-4 opacity-10" size={120} />
                    <h3 className="text-xl font-black tracking-tight">Misi Harian!</h3>
                    <p className="text-emerald-50/80 text-xs font-medium leading-relaxed">Selesaikan setor sampah hari ini dan dapatkan tiket undian berhadiah iPhone 15 Pro Max!</p>
                    <button className="bg-white text-emerald-600 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl active:scale-95 transition-all">
                        Ikuti Sekarang
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Promos;
