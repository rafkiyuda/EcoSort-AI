import {
    Trash2,
    Flame,
    User,
    ArrowRight,
    TrendingUp,
    Award,
    ChevronRight,
    Zap,
    Droplets
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="pb-32 pt-6 px-5 space-y-8 min-h-screen bg-slate-50">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-slate-500 text-sm font-medium">Selamat siang,</p>
                    <h1 className="text-2xl font-bold text-slate-900">Eco Sort</h1>
                </div>
                <button
                    onClick={() => navigate('/profile')}
                    className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center relative overflow-hidden"
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
                            <h2 className="text-4xl font-bold mt-1 text-white">12,450 <span className="text-xl font-normal opacity-80">PTS</span></h2>
                        </div>
                        <div className="glass-pill flex items-center gap-1 text-[10px] text-white">
                            <TrendingUp className="w-3 h-3" />
                            <span>+9.1% ALL TIME</span>
                        </div>
                    </div>

                    <button className="w-full py-3 bg-white text-emerald-600 rounded-2xl font-bold text-sm shadow-lg hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2">
                        Tukar Poin <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </motion.div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
                <motion.div
                    whileTap={{ scale: 0.98 }}
                    className="bento-card bg-white"
                >
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
                        <Droplets className="w-5 h-5 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">5.2kg</h3>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Sampah Plastik</p>
                </motion.div>

                <motion.div
                    whileTap={{ scale: 0.98 }}
                    className="bento-card bg-white"
                >
                    <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center mb-4">
                        <Zap className="w-5 h-5 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">12kg</h3>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Sisa Makanan</p>
                </motion.div>
            </div>

            {/* ECO Challenge */}
            <div className="space-y-4">
                <div className="flex justify-between items-center px-1">
                    <h2 className="text-lg font-bold text-slate-900 font-sans tracking-tight">Tantangan Hijau</h2>
                    <button className="text-emerald-600 text-sm font-semibold">Semua</button>
                </div>

                <motion.div
                    whileTap={{ scale: 0.98 }}
                    className="relative rounded-[32px] overflow-hidden group shadow-xl shadow-emerald-900/10"
                >
                    <img
                        src="/src/assets/challenge_lamp.png"
                        alt="Eco Challenge"
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-6">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-emerald-500 text-[9px] font-black py-1 px-3 rounded-full text-white uppercase tracking-tighter">Eco Challenge</span>
                            <span className="text-emerald-100 text-[9px] font-bold">3 HARI LAGI</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">Mulai Perjalanan Hijau Anda</h3>
                        <p className="text-white/80 text-xs font-medium">Buat Lampu dari Botol Plastik & Menangkan Hadiah!</p>
                        <button className="mt-4 bg-white py-2.5 text-slate-900 rounded-xl font-bold text-xs w-max px-6 flex items-center gap-2">
                            Ikuti Tantangan <ChevronRight className="w-4 h-4 text-emerald-600" />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Recent Activity */}
            <div className="space-y-4">
                <div className="flex justify-between items-center px-1">
                    <h2 className="text-lg font-bold text-slate-900 tracking-tight">Aktivitas Terbaru</h2>
                    <button className="text-emerald-600 text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                        Riwayat <ChevronRight className="w-3 h-3 text-emerald-600" />
                    </button>
                </div>

                <div className="space-y-3">
                    {[
                        { label: 'Setor Plastik RVM-01', date: 'Hari ini, 10:24 AM', points: '+250', type: 'in' },
                        { label: 'Tukar Voucher GrabFood', date: 'Kemarin, 06:12 PM', points: '-2000', type: 'out' }
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-[24px] border border-slate-100 shadow-sm active:bg-slate-50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className={`w-11 h-11 rounded-2xl ${item.type === 'in' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'} flex items-center justify-center`}>
                                    {item.type === 'in' ? <TrendingUp className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm tracking-tight">{item.label}</h4>
                                    <p className="text-[11px] text-slate-400 font-medium">{item.date}</p>
                                </div>
                            </div>
                            <span className={`font-bold text-sm ${item.type === 'in' ? 'text-emerald-600' : 'text-slate-900'}`}>
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
