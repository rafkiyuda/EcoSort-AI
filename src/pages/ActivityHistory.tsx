import { ArrowLeft, Clock, Award, ChevronRight, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ActivityHistory = () => {
    const navigate = useNavigate();

    const activities = [
        { id: 1, title: 'Setor Plastik RVM-01', date: 'Hari ini, 10:24 AM', points: '+250', type: 'in', category: 'Daur Ulang' },
        { id: 2, title: 'Tukar Voucher GrabFood', date: 'Kemarin, 06:12 PM', points: '-2000', type: 'out', category: 'Redeem' },
        { id: 3, title: 'Tantangan DIY Selesai', date: '12 Mar, 02:30 PM', points: '+5000', type: 'in', category: 'Challenge' },
        { id: 4, title: 'Setor RVM Menteng Tengah', date: '10 Mar, 09:15 AM', points: '+180', type: 'in', category: 'Daur Ulang' },
        { id: 5, title: 'Tukar Voucher Gopay', date: '08 Mar, 04:45 PM', points: '-2000', type: 'out', category: 'Redeem' },
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
                    <h1 className="text-xl font-black text-slate-900 tracking-tight">Riwayat Aktivitas</h1>
                </div>
            </div>

            <div className="p-6 space-y-8">
                {/* Growth Card */}
                <div className="bento-card bg-white p-6 shadow-xl shadow-slate-200/50 flex items-center justify-between">
                    <div className="space-y-1">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Aktivitas Bulan Ini</p>
                        <h2 className="text-3xl font-black text-slate-900">+7,430 <span className="text-xs font-bold text-emerald-500">PTS</span></h2>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500">
                        <TrendingUp size={24} />
                    </div>
                </div>

                {/* List */}
                <div className="space-y-4">
                    {activities.map((item, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            key={item.id}
                            className="flex items-center justify-between p-5 bg-white rounded-[32px] border border-slate-100 shadow-sm active:bg-slate-50 active:scale-[0.98] transition-all cursor-pointer group"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-2xl ${item.type === 'in' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    {item.type === 'in' ? <Award className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-800 text-sm tracking-tight">{item.title}</h4>
                                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">{item.date} • {item.category}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className={`font-black text-sm ${item.type === 'in' ? 'text-emerald-600' : 'text-slate-900'}`}>
                                    {item.points}
                                </span>
                                <ChevronRight size={16} className="text-slate-300" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ActivityHistory;
