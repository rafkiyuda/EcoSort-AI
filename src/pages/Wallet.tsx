import {
    Wallet as WalletIcon,
    History,
    ArrowUpRight,
    ArrowDownLeft,
    Gift,
    CreditCard,
    ChevronRight,
    ShieldCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Wallet() {
    return (
        <div className="pb-32 pt-6 px-5 space-y-8 min-h-screen bg-slate-50">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Dompet Eco</h1>
                <p className="text-slate-500 text-sm font-medium tracking-tight">Kelola poin dan penukaran hadiah</p>
            </div>

            {/* Balance Hero Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bento-card-green bg-silhouette text-white"
            >
                <div className="flex justify-between items-start mb-8 text-white relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                        <WalletIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="glass-pill flex items-center gap-1 text-[10px] text-white">
                        <ShieldCheck className="w-3 h-3" />
                        <span>TERVERIFIKASI</span>
                    </div>
                </div>

                <div className="relative z-10">
                    <p className="text-emerald-100 text-xs font-bold opacity-80 uppercase tracking-widest">Saldo Poin Anda</p>
                    <div className="flex items-baseline gap-2 mt-1">
                        <h2 className="text-4xl font-bold tracking-tight text-white">12,450</h2>
                        <span className="text-emerald-100 font-bold text-sm tracking-wide">PTS</span>
                    </div>
                    <p className="text-emerald-100/70 text-[11px] mt-1 font-bold tracking-widest">≈ Rp 124.500</p>

                    <div className="grid grid-cols-2 gap-3 mt-8">
                        <button className="flex items-center justify-center gap-2 py-3 bg-white text-emerald-600 rounded-2xl font-bold text-sm shadow-md active:scale-95 transition-all">
                            <Gift className="w-4 h-4" /> Tukar Hadiah
                        </button>
                        <button className="flex items-center justify-center gap-2 py-3 bg-white/15 backdrop-blur-md text-white border border-white/25 rounded-2xl font-bold text-sm active:scale-95 transition-all">
                            <History className="w-4 h-4 text-white" /> Riwayat
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Quick Access Menu */}
            <div className="grid grid-cols-4 gap-4 px-1">
                {[
                    { icon: CreditCard, label: 'Laporan', color: 'bg-blue-50 text-blue-600' },
                    { icon: Gift, label: 'Promo', color: 'bg-red-50 text-red-600' },
                    { icon: ShieldCheck, label: 'Lencana', color: 'bg-emerald-50 text-emerald-600' },
                    { icon: History, label: 'Bantuan', color: 'bg-slate-50 text-slate-600' }
                ].map((item, idx) => (
                    <button key={idx} className="flex flex-col items-center gap-2">
                        <div className={`w-14 h-14 rounded-[22px] ${item.color} flex items-center justify-center shadow-sm active:scale-90 transition-all border border-transparent hover:border-slate-200`}>
                            <item.icon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">{item.label}</span>
                    </button>
                ))}
            </div>

            {/* Redeem Options */}
            <div className="space-y-4">
                <div className="flex justify-between items-center px-1">
                    <h2 className="text-lg font-bold text-slate-900 tracking-tight">Penukaran Terpopuler</h2>
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {[
                        { name: 'Gopay', value: '2k', points: '2.000', color: 'bg-blue-500' },
                        { name: 'OVO Cash', value: '2k', points: '2.000', color: 'bg-purple-600' },
                        { name: 'Grab Voucher', value: '50%', points: '5.000', color: 'bg-emerald-600' },
                        { name: 'ShopeePay', value: '5k', points: '5.000', color: 'bg-orange-500' },
                    ].map((v, i) => (
                        <motion.div
                            whileTap={{ scale: 0.98 }}
                            key={i}
                            className="bento-card bg-white p-5 border border-slate-100"
                        >
                            <div className={`w-11 h-11 rounded-2xl ${v.color} mb-4 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-black/5`}>
                                {v.name[0]}
                            </div>
                            <h3 className="font-bold text-slate-900 text-sm tracking-tight">{v.name} {v.value}</h3>
                            <p className="text-[11px] text-emerald-600 font-extrabold mt-1 tracking-widest">{v.points} PTS</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Recent Transactions */}
            <div className="space-y-4">
                <h2 className="text-lg font-bold text-slate-900 px-1 tracking-tight">Transaksi Terakhir</h2>
                <div className="space-y-3">
                    {[
                        { label: 'Setor RVM-01', type: 'in', points: '+320', date: 'Mar 12, 2026' },
                        { label: 'Tukar Voucher OVO', type: 'out', points: '-2000', date: 'Mar 10, 2026' }
                    ].map((tx, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-white rounded-[24px] border border-slate-100 shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className={`w-11 h-11 rounded-2xl ${tx.type === 'in' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'} flex items-center justify-center`}>
                                    {tx.type === 'in' ? <ArrowDownLeft className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm tracking-tight">{tx.label}</h4>
                                    <p className="text-[11px] text-slate-400 font-medium">{tx.date}</p>
                                </div>
                            </div>
                            <span className={`font-bold text-sm ${tx.type === 'in' ? 'text-emerald-600' : 'text-slate-900'}`}>{tx.points}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
