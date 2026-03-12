import { ArrowLeft, HelpCircle, Mail, MessageSquare, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Help = () => {
    const navigate = useNavigate();

    const faqs = [
        { q: 'Bagaimana cara menukar poin?', a: 'Anda dapat menukar poin di menu Wallet atau langsung di Eco Market.' },
        { q: 'Apa itu RVM?', a: 'RVM (Reverse Vending Machine) adalah mesin otomatis untuk mengumpulkan botol plastik.' },
        { q: 'Bagaimana cara ikut tantangan?', a: 'Buka menu Tantangan, pilih yang Anda minati, dan klik Join.' },
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
                    <h1 className="text-xl font-black text-slate-900 tracking-tight">Bantuan & FAQ</h1>
                </div>
            </div>

            <div className="p-6 space-y-8">
                {/* Support Channels */}
                <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white p-4 rounded-[28px] border border-slate-100 flex flex-col items-center gap-2 shadow-sm active:bg-slate-50 transition-colors cursor-pointer">
                        <MessageSquare className="text-emerald-500" size={20} />
                        <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Chat</p>
                    </div>
                    <div className="bg-white p-4 rounded-[28px] border border-slate-100 flex flex-col items-center gap-2 shadow-sm active:bg-slate-50 transition-colors cursor-pointer">
                        <Mail className="text-blue-500" size={20} />
                        <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Email</p>
                    </div>
                    <div className="bg-white p-4 rounded-[28px] border border-slate-100 flex flex-col items-center gap-2 shadow-sm active:bg-slate-50 transition-colors cursor-pointer">
                        <Phone className="text-purple-500" size={20} />
                        <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Call</p>
                    </div>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    <h2 className="text-lg font-black text-slate-900 tracking-tight px-1">Pertanyaan Populer</h2>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white p-5 rounded-[28px] border border-slate-100 shadow-sm space-y-2">
                                <div className="flex justify-between items-center">
                                    <h4 className="font-black text-slate-800 text-sm tracking-tight">{faq.q}</h4>
                                    <HelpCircle className="text-slate-300" size={18} />
                                </div>
                                <p className="text-slate-500 text-xs font-medium leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-900 p-8 rounded-[40px] text-white space-y-4">
                    <h3 className="text-xl font-black tracking-tight">Butuh panduan lengkap?</h3>
                    <p className="text-slate-400 text-xs font-medium leading-relaxed">Unduh buku panduan EcoSort untuk mempelajari cara kerja ekosistem kami secara mendalam.</p>
                    <button className="w-full bg-emerald-500 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-all">
                        Unduh PDF
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Help;
