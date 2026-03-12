import { ArrowLeft, Award, Lock, ShieldCheck, Star, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Badges = () => {
    const navigate = useNavigate();

    const badges = [
        { id: 1, name: 'Eco Starter', desc: 'Setor sampah pertama kali', icon: Award, color: 'bg-emerald-500', unlocked: true },
        { id: 2, name: 'Plastic Ninja', desc: 'Setor 5kg plastik', icon: ShieldCheck, color: 'bg-blue-500', unlocked: true },
        { id: 3, name: 'Green Warrior', desc: 'Selesaikan 3 tantangan', icon: Star, color: 'bg-amber-500', unlocked: true },
        { id: 4, name: 'Recycle Master', desc: 'Setor 20kg sampah', icon: Users, color: 'bg-purple-500', unlocked: false },
        { id: 5, name: 'Planet Guardian', desc: 'Level 10 tercapai', icon: Award, color: 'bg-slate-800', unlocked: false },
        { id: 6, name: 'Early Adopter', desc: 'Gabung di tahun 2026', icon: ShieldCheck, color: 'bg-rose-500', unlocked: true },
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
                    <h1 className="text-xl font-black text-slate-900 tracking-tight">Koleksi Eco</h1>
                </div>
            </div>

            <div className="p-6 space-y-8">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex flex-col items-center gap-2">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Badge Didapat</p>
                        <h2 className="text-3xl font-black text-slate-900">4<span className="text-sm font-bold text-slate-300 ml-1">/12</span></h2>
                    </div>
                    <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex flex-col items-center gap-2">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Rank Global</p>
                        <h2 className="text-3xl font-black text-emerald-600">#128</h2>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 gap-4">
                    {badges.map((badge, idx) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            key={badge.id}
                            className={`relative p-6 rounded-[40px] border flex flex-col items-center text-center gap-4 transition-all ${badge.unlocked
                                    ? 'bg-white border-slate-100 shadow-xl shadow-slate-200/50'
                                    : 'bg-slate-100/50 border-slate-200/50 opacity-60 grayscale'
                                }`}
                        >
                            <div className={`w-16 h-16 rounded-3xl ${badge.unlocked ? badge.color : 'bg-slate-200'} flex items-center justify-center text-white shadow-lg`}>
                                {badge.unlocked ? <badge.icon size={32} /> : <Lock size={24} className="text-slate-400" />}
                            </div>
                            <div>
                                <h3 className="font-black text-slate-800 text-sm tracking-tight">{badge.name}</h3>
                                <p className="text-[10px] text-slate-400 font-bold leading-tight mt-1 px-2 uppercase tracking-tighter">{badge.desc}</p>
                            </div>
                            {!badge.unlocked && (
                                <div className="absolute top-4 right-4 text-slate-400">
                                    <Lock size={14} />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="bg-emerald-50 p-6 rounded-[32px] border border-emerald-100 flex items-center justify-between">
                    <div className="space-y-1">
                        <h4 className="font-black text-emerald-900 text-sm tracking-tight">Kumpulkan Semua!</h4>
                        <p className="text-[11px] text-emerald-700 font-medium">Selesaikan tantangan untuk mendapatkan badge langka.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Badges;
