import {
    ArrowLeft,
    Calendar,
    Trophy,
    Users,
    CheckCircle2,
    ChevronRight,
    Flame
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ChallengeDetail = () => {
    const navigate = useNavigate();

    return (
        <div className="pb-32 min-h-screen bg-slate-50">
            {/* Hero Image */}
            <div className="relative h-96 w-full">
                <img
                    src="/src/assets/challenge_lamp.png"
                    alt="Eco Challenge"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/20 to-transparent" />

                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-8 left-6 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white active:scale-90 transition-all shadow-2xl"
                >
                    <ArrowLeft size={24} />
                </button>

                <div className="absolute bottom-8 left-6 right-6">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="bg-emerald-500 text-[11px] font-black py-1.5 px-4 rounded-full text-white uppercase tracking-tighter shadow-lg">Eco Challenge</span>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter leading-none">Lampu Botol Estetik</h1>
                </div>
            </div>

            <div className="px-6 space-y-10 -mt-2 relative z-10">
                {/* Quick Info */}
                <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white p-4 rounded-[28px] border border-slate-100 flex flex-col items-center gap-2 shadow-sm">
                        <Flame className="text-orange-500" size={20} />
                        <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Popular</p>
                    </div>
                    <div className="bg-white p-4 rounded-[28px] border border-slate-100 flex flex-col items-center gap-2 shadow-sm">
                        <Calendar className="text-emerald-500" size={20} />
                        <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase">3 Hari</p>
                    </div>
                    <div className="bg-white p-4 rounded-[28px] border border-slate-100 flex flex-col items-center gap-2 shadow-sm">
                        <Trophy className="text-amber-500" size={20} />
                        <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase">5k PTS</p>
                    </div>
                </div>

                {/* Description */}
                <div className="space-y-4">
                    <h2 className="text-xl font-black text-slate-900 tracking-tight">Detail Tantangan</h2>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">
                        Tantangan kali ini mengajak Anda untuk mengubah limbah botol plastik menjadi karya seni lampu hias yang estetik. Gunakan minimal 3 botol plastik transparan, tambahkan lampu LED, dan hias sekreatif mungkin.
                    </p>
                </div>

                {/* Rules */}
                <div className="space-y-4">
                    <h2 className="text-xl font-black text-slate-900 tracking-tight">Cara Mengikuti</h2>
                    <div className="space-y-3">
                        {[
                            'Kumpulkan 3-5 botol plastik bersih.',
                            'Buat kreasi lampu hias (pemanis ruangan).',
                            'Ambil foto hasil karya Anda.',
                            'Unggah ke menu "Selesaikan Tantangan".'
                        ].map((rule, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-100">
                                <CheckCircle2 className="text-emerald-500 mt-0.5 shrink-0" size={18} />
                                <span className="text-slate-700 text-sm font-bold leading-snug">{rule}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Community Proof */}
                <div className="space-y-4 pb-10">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-black text-slate-900 tracking-tight">Peserta Lainnya</h2>
                        <div className="flex items-center gap-1 text-emerald-600 font-black text-[10px] uppercase tracking-widest">
                            <Users size={14} /> 1,2k Ikut
                        </div>
                    </div>
                    <div className="flex -space-x-3 overflow-hidden p-1">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="inline-block h-12 w-12 rounded-2xl ring-4 ring-slate-50 bg-slate-200 flex items-center justify-center text-xl shadow-lg">
                                👤
                            </div>
                        ))}
                        <div className="inline-block h-12 w-12 rounded-2xl ring-4 ring-slate-50 bg-slate-900 flex items-center justify-center text-[11px] font-black text-white shadow-lg">
                            +1K
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Action Button */}
            <div className="fixed bottom-6 left-6 right-6 z-50">
                <button
                    className="w-full h-16 bg-emerald-600 text-white rounded-[24px] font-black shadow-2xl shadow-emerald-900/40 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
                >
                    Ikuti Tantangan Sekarang <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default ChallengeDetail;
