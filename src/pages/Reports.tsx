import { ArrowLeft, BarChart3, Download, PieChart, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Reports = () => {
    const navigate = useNavigate();

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
                    <h1 className="text-xl font-black text-slate-900 tracking-tight">Laporan Dampak</h1>
                </div>
            </div>

            <div className="p-6 space-y-8">
                {/* Impact Cards */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-emerald-600 p-6 rounded-[32px] text-white space-y-2">
                        <TrendingUp size={24} />
                        <div>
                            <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest">Total CO2 Saved</p>
                            <h2 className="text-2xl font-black">12.4kg</h2>
                        </div>
                    </div>
                    <div className="bg-blue-600 p-6 rounded-[32px] text-white space-y-2">
                        <Download size={24} />
                        <div>
                            <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest">Energy Saved</p>
                            <h2 className="text-2xl font-black">45kWh</h2>
                        </div>
                    </div>
                </div>

                {/* Monthly Chart Placeholder */}
                <div className="bg-white p-6 rounded-[40px] border border-slate-100 shadow-sm space-y-6">
                    <div className="flex justify-between items-center">
                        <h3 className="font-black text-slate-900 tracking-tight">Kinerja Daur Ulang</h3>
                        <div className="flex gap-2">
                            <BarChart3 size={18} className="text-emerald-500" />
                            <PieChart size={18} className="text-slate-300" />
                        </div>
                    </div>

                    <div className="h-48 flex items-end justify-between gap-2 px-2">
                        {[40, 70, 45, 90, 65, 80].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                className="w-full bg-emerald-100 rounded-t-xl relative group"
                            >
                                <div className="absolute inset-0 bg-emerald-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex justify-between px-2 text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-[32px] border border-slate-100 flex items-center justify-between">
                    <div className="space-y-1">
                        <h4 className="font-black text-slate-900 text-sm tracking-tight">Unduh Laporan Lengkap</h4>
                        <p className="text-[11px] text-slate-400 font-medium">Format PDF untuk arsip pribadi Anda.</p>
                    </div>
                    <button className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                        <Download size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Reports;
