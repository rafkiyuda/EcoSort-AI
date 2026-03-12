import {
    User,
    ArrowRight,
    TrendingUp,
    Award,
    ChevronRight,
    Droplets,
    MapPin,
    FileText,
    Leaf
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import challengeLamp from '../assets/challenge_lamp.png';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="pb-32 pt-6 px-5 space-y-8 min-h-screen bg-slate-50">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-slate-500 text-sm font-medium">Selamat siang,</p>
                    <h1 className="text-2xl font-black text-slate-900 tracking-tight">Eco Sort</h1>
                </div>
                <button
                    onClick={() => navigate('/profile')}
                    className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center relative overflow-hidden active:scale-95 transition-all"
                >
                    <User className="w-6 h-6 text-slate-600" />
                </button>
            </div>

            {/* Main Stats Card (Portfolio Style) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bento-card-green bg-silhouette"
            >
                <div className="relative z-10 text-white">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <p className="text-emerald-100 text-xs font-bold opacity-80 uppercase tracking-widest">Total Eco-Points</p>
                            <h2 className="text-4xl font-black mt-1 text-white tracking-tighter">12,450 <span className="text-xl font-medium opacity-80 antialiased">PTS</span></h2>
                        </div>
                        <div className="glass-pill flex items-center gap-1 text-[10px] text-white">
                            <TrendingUp className="w-3 h-3" />
                            <span>+9.1% ALL TIME</span>
                        </div>
                    </div>

                    <button
                        onClick={() => navigate('/wallet')}
                        className="w-full py-4 bg-white text-emerald-600 rounded-2xl font-black text-sm shadow-xl shadow-emerald-900/10 hover:bg-emerald-50 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                    >
                        Tukar Poin <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </motion.div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
                <motion.div
                    onClick={() => navigate('/map')}
                    whileTap={{ scale: 0.98 }}
                    className="bento-card bg-white cursor-pointer group col-span-2 flex flex-row items-center gap-6"
                >
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors shrink-0">
                        <MapPin className="w-7 h-7 text-emerald-500 group-hover:text-white" />
                    </div>
                    <div>
                        <h3 className="text-xl font-black text-slate-900 leading-tight">Cari RVM Terdekat</h3>
                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mt-1">Temukan lokasi di sekitar Anda</p>
                    </div>
                    <ChevronRight className="ml-auto text-slate-300" />
                </motion.div>

                <motion.div
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate('/activity')}
                    className="bento-card bg-white cursor-pointer group"
                >
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                        <Droplets className="w-6 h-6 text-blue-500 group-hover:text-white" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 leading-tight">5.2kg</h3>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mt-1">Plastik</p>
                </motion.div>

                <motion.div
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate('/activity')}
                    className="bento-card bg-white cursor-pointer group"
                >
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                        <FileText className="w-6 h-6 text-amber-500 group-hover:text-white" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 leading-tight">3.8kg</h3>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mt-1">Kertas</p>
                </motion.div>

                <motion.div
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate('/activity')}
                    className="bento-card bg-white cursor-pointer group col-span-2 flex flex-row items-center gap-6"
                >
                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                        <Leaf className="w-7 h-7 text-emerald-600 group-hover:text-white" />
                    </div>
                    <div>
                        <h3 className="text-xl font-black text-slate-900 leading-tight">1.5kg Food Waste</h3>
                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mt-1">Terkomposisi minggu ini</p>
                    </div>
                    <ChevronRight className="ml-auto text-slate-300" />
                </motion.div>
            </div>

            {/* ECO Challenge */}
            <div className="space-y-4">
                <div className="flex justify-between items-center px-1">
                    <h2 className="text-xl font-black text-slate-900 tracking-tight">Tantangan Hijau</h2>
                    <button
                        onClick={() => navigate('/challenge/1')}
                        className="text-emerald-600 text-xs font-black uppercase tracking-widest"
                    >
                        Lihat Semua
                    </button>
                </div>

                <motion.div
                    onClick={() => navigate('/challenge/1')}
                    whileTap={{ scale: 0.98 }}
                    className="relative rounded-[40px] overflow-hidden group shadow-2xl shadow-emerald-900/10 cursor-pointer"
                >
                    <img
                        src={challengeLamp}
                        alt="Eco Challenge"
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-8">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="bg-emerald-500 text-[10px] font-black py-1.5 px-3.5 rounded-full text-white uppercase tracking-tighter">Eco Challenge</span>
                            <span className="text-emerald-100 text-[10px] font-black uppercase tracking-widest">3 HARI LAGI</span>
                        </div>
                        <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Lampu Botol Estetik</h3>
                        <p className="text-white/80 text-sm font-medium leading-snug">Buat kerajinan lampu dari botol dan menangkan 5,000 PTS!</p>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate('/challenge/1');
                            }}
                            className="mt-6 bg-white py-3.5 text-slate-900 rounded-[20px] font-black text-xs w-max px-8 flex items-center gap-2 shadow-lg active:scale-95 transition-all outline-none"
                        >
                            Ikuti Sekarang <ChevronRight className="w-4 h-4 text-emerald-600" />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Recent Activity */}
            <div className="space-y-4">
                <div className="flex justify-between items-center px-1">
                    <h2 className="text-xl font-black text-slate-900 tracking-tight">Aktivitas Terbaru</h2>
                    <button
                        onClick={() => navigate('/activity')}
                        className="text-emerald-600 text-xs font-black uppercase tracking-widest flex items-center gap-1 active:translate-x-1 transition-transform"
                    >
                        Riwayat <ChevronRight className="w-3 h-3 text-emerald-600" />
                    </button>
                </div>

                <div className="space-y-3">
                    {[
                        { label: 'Setor Plastik RVM-01', date: 'Hari ini, 10:24 AM', points: '+250', type: 'in' },
                        { label: 'Tukar Voucher GrabFood', date: 'Kemarin, 06:12 PM', points: '-2000', type: 'out' }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            onClick={() => navigate('/activity')}
                            className="flex items-center justify-between p-5 bg-white rounded-[32px] border border-slate-100 shadow-sm active:bg-slate-50 active:scale-[0.98] transition-all cursor-pointer"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-2xl ${item.type === 'in' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'} flex items-center justify-center`}>
                                    {item.type === 'in' ? <TrendingUp className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-800 text-sm tracking-tight">{item.label}</h4>
                                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">{item.date}</p>
                                </div>
                            </div>
                            <span className={`font-black text-sm ${item.type === 'in' ? 'text-emerald-600' : 'text-slate-900'}`}>
                                {item.points}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
