import { ArrowLeft, Bell, Globe, Moon, User, Volume2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Settings = () => {
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);

    const settings = [
        { icon: User, label: 'Informasi Profil', desc: 'Ubah nama, email, dan foto' },
        { icon: Bell, label: 'Notifikasi', desc: 'Kelola pemberitahuan aplikasi', toggle: true, value: notifications, setter: setNotifications },
        { icon: Moon, label: 'Mode Gelap', desc: 'Ganti tampilan ke mode malam', toggle: true, value: darkMode, setter: setDarkMode },
        { icon: Globe, label: 'Bahasa', desc: 'Indonesia (Default)' },
        { icon: Volume2, label: 'Suara & Getar', desc: 'Efek suara saat scan' },
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
                    <h1 className="text-xl font-black text-slate-900 tracking-tight">Pengaturan Akun</h1>
                </div>
            </div>

            <div className="p-6 space-y-3">
                {settings.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-5 bg-white rounded-[28px] border border-slate-100 shadow-sm active:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                                <item.icon size={20} />
                            </div>
                            <div>
                                <h4 className="font-black text-slate-800 text-sm tracking-tight">{item.label}</h4>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{item.desc}</p>
                            </div>
                        </div>
                        {item.toggle ? (
                            <button
                                onClick={() => item.setter && item.setter(!item.value)}
                                className={`w-12 h-6 rounded-full transition-all relative ${item.value ? 'bg-emerald-500' : 'bg-slate-200'}`}
                            >
                                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${item.value ? 'left-7' : 'left-1'}`} />
                            </button>
                        ) : (
                            <div className="text-slate-300">
                                <ArrowLeft className="rotate-180" size={18} />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-10 px-6">
                <button className="w-full py-5 text-red-500 text-xs font-black uppercase tracking-widest bg-red-50 rounded-[32px] border border-red-100 active:scale-95 transition-all">
                    Hapus Akun Selamanya
                </button>
            </div>
        </div>
    );
};

export default Settings;
