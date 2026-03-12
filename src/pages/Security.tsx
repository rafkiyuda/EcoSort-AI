import { ArrowLeft, Fingerprint, Key, ShieldAlert, ShieldCheck, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Security = () => {
    const navigate = useNavigate();

    const securityItems = [
        { icon: Key, label: 'Ubah Kata Sandi', desc: 'Terakhir diubah 2 bulan lalu' },
        { icon: Fingerprint, label: 'Biometrik Login', desc: 'Scan wajah atau sidik jari', toggle: true },
        { icon: Smartphone, label: 'Perangkat Terhubung', desc: 'Kelola sesi aktif Anda' },
        { icon: ShieldAlert, label: 'Autentikasi Dua Faktor', desc: 'Keamanan ekstra untuk akun' },
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
                    <h1 className="text-xl font-black text-slate-900 tracking-tight">Security & Privasi</h1>
                </div>
            </div>

            <div className="p-6 space-y-6">
                {/* Security Score */}
                <div className="bg-emerald-600 p-8 rounded-[40px] text-white space-y-4 shadow-2xl shadow-emerald-900/20">
                    <div className="flex justify-between items-start">
                        <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/20">
                            <ShieldCheck size={32} />
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest">Security Score</p>
                            <h2 className="text-3xl font-black">Sangat Aman</h2>
                        </div>
                    </div>
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                        <div className="w-[95%] h-full bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                    </div>
                </div>

                <div className="space-y-3">
                    {securityItems.map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-5 bg-white rounded-[28px] border border-slate-100 shadow-sm active:bg-slate-50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                                    <item.icon size={20} />
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-800 text-sm tracking-tight">{item.label}</h4>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none mt-0.5">{item.desc}</p>
                                </div>
                            </div>
                            {item.toggle ? (
                                <button className="w-12 h-6 bg-emerald-500 rounded-full relative">
                                    <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full" />
                                </button>
                            ) : (
                                <div className="text-slate-300">
                                    <ArrowLeft className="rotate-180" size={18} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Security;
