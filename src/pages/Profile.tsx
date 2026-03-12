import {
    Award,
    Share2,
    Users,
    ShieldCheck,
    ChevronRight,
    Settings,
    LogOut,
    Package,
    History,
    Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';

export default function Profile() {
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);
    const [toastMsg, setToastMsg] = useState('');

    const triggerToast = (msg: string) => {
        setToastMsg(msg);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    const handleLogout = () => {
        triggerToast('Berhasil keluar akun!');
        setTimeout(() => navigate('/'), 1500);
    };

    return (
        <div className="pb-32 pt-6 px-5 space-y-8 min-h-screen bg-slate-50">
            {/* Header / Identity */}
            <div className="flex flex-col items-center text-center space-y-6 pt-4">
                <div className="relative">
                    <motion.div
                        initial={{ rotate: -10, scale: 0.9 }}
                        animate={{ rotate: 0, scale: 1 }}
                        className="w-32 h-32 rounded-[48px] bg-white shadow-2xl shadow-emerald-900/10 p-1 relative z-10 overflow-hidden"
                    >
                        <div className="w-full h-full rounded-[44px] bg-slate-100 flex items-center justify-center text-5xl">
                            🌱
                        </div>
                    </motion.div>
                    <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-2.5 rounded-2xl border-4 border-white shadow-lg shadow-emerald-500/30 z-20">
                        <ShieldCheck size={24} />
                    </div>
                    {/* Decorative Background Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/5 blur-3xl rounded-full" />
                </div>

                <div>
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">Rafa K.</h2>
                    <div className="flex items-center gap-2 mt-2 justify-center">
                        <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Planet Guardian</span>
                        <div className="flex items-center gap-1 bg-amber-50 text-amber-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                            <Star className="w-3 h-3 fill-amber-600" />
                            Level 4
                        </div>
                    </div>
                </div>
            </div>

            {/* Eco Tier Card (PlasticPay Style) */}
            <motion.div
                whileTap={{ scale: 0.98 }}
                className="bento-card bg-white p-7 shadow-xl shadow-slate-200/50"
            >
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                            <Award size={24} />
                        </div>
                        <span className="text-slate-900 font-extrabold tracking-tight">Progresi Eco-Tier</span>
                    </div>
                    <span className="text-[11px] font-black text-slate-400 tracking-widest uppercase">2450 / 3000 XP</span>
                </div>

                <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden border border-slate-50 p-0.5">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '81%' }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(46,204,113,0.3)]"
                    />
                </div>

                <p className="text-[11px] text-slate-500 font-bold mt-4 leading-relaxed bg-slate-50 p-3 rounded-2xl italic">
                    "Setor 2kg sampah lagi untuk naik ke Planet Guardian Lvl 5!"
                </p>
            </motion.div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-2 gap-4">
                <button
                    onClick={() => navigate('/badges')}
                    className="bento-card bg-white p-5 flex flex-col items-start gap-4 active:scale-95 transition-all text-left group"
                >
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Package size={24} />
                    </div>
                    <div>
                        <h4 className="font-black text-slate-800 text-sm tracking-tight">Koleksi Eco</h4>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Badge & Items</p>
                    </div>
                </button>

                <button
                    onClick={() => navigate('/activity')}
                    className="bento-card bg-white p-5 flex flex-col items-start gap-4 active:scale-95 transition-all text-left group"
                >
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <History size={24} />
                    </div>
                    <div>
                        <h4 className="font-black text-slate-800 text-sm tracking-tight">Riwayat</h4>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Log Aktivitas</p>
                    </div>
                </button>
            </div>

            {/* Referral System */}
            <div className="bg-emerald-600 rounded-[40px] p-8 space-y-6 shadow-2xl shadow-emerald-900/20 relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />

                <div className="flex items-center gap-4 relative z-10">
                    <div className="w-14 h-14 rounded-[22px] bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/20 shadow-xl">
                        <Users className="text-white" size={28} />
                    </div>
                    <div>
                        <p className="text-white font-black text-lg tracking-tight">Ajak Teman Hijau!</p>
                        <p className="text-emerald-100/70 text-xs font-bold uppercase tracking-widest">Dapatkan 500 PTS / Teman</p>
                    </div>
                </div>

                <div className="flex gap-3 relative z-10">
                    <button className="flex-1 bg-white/15 backdrop-blur-md border border-white/25 h-14 rounded-2xl font-black text-white text-sm tracking-widest shadow-inner active:scale-95 transition-all">
                        ECO-WARRIOR-2026
                    </button>
                    <button className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-xl active:scale-90 transition-all">
                        <Share2 size={24} />
                    </button>
                </div>
            </div>

            {/* Menu List */}
            <div className="space-y-3 px-1">
                {[
                    { label: 'Pengaturan Akun', icon: Settings, color: 'text-slate-400' },
                    { label: 'Security & Privasi', icon: ShieldCheck, color: 'text-slate-400' },
                    { label: 'Bantuan & FAQ', icon: Users, color: 'text-slate-400' },
                ].map((item) => (
                    <button
                        key={item.label}
                        onClick={() => triggerToast(`${item.label} akan segera hadir!`)}
                        className="w-full flex items-center justify-between p-5 bg-white rounded-[28px] border border-slate-100 active:bg-slate-50 transition-colors"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-emerald-600 transition-colors">
                                <item.icon size={20} />
                            </div>
                            <span className="text-slate-900 text-sm font-black tracking-tight">{item.label}</span>
                        </div>
                        <ChevronRight className="text-slate-300" size={20} />
                    </button>
                ))}
            </div>

            {/* Logout */}
            <button
                onClick={handleLogout}
                className="w-full py-5 text-red-500 text-sm font-black uppercase tracking-widest bg-red-50 rounded-[32px] border border-red-100 flex items-center justify-center gap-2 active:scale-95 transition-all mt-4"
            >
                <LogOut size={20} /> Keluar Akun
            </button>

            {/* Toast Notification */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed bottom-28 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-4 rounded-3xl shadow-2xl flex items-center gap-3 z-[100] border border-white/10"
                    >
                        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white scale-90">
                            <ShieldCheck size={16} />
                        </div>
                        <span className="text-xs font-black tracking-tight">{toastMsg}</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
