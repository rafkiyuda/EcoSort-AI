import { Award, Share2, Users, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Profile() {
    return (
        <div className="p-6 pb-32 space-y-8">
            <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-300 p-1">
                        <div className="w-full h-full rounded-full bg-[#1a1a1a] flex items-center justify-center text-3xl">
                            👤
                        </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-1 rounded-full border-4 border-[#1a1a1a]">
                        <ShieldCheck size={20} />
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">Eco Warrior</h2>
                    <p className="text-emerald-500 text-sm font-medium">Planet Guardian Level 4</p>
                </div>
            </div>

            {/* Eco Tier Card */}
            <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] border border-white/10 rounded-3xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Award className="text-yellow-500" size={20} />
                        <span className="text-white font-semibold">Eco-Tier Progression</span>
                    </div>
                    <span className="text-xs text-gray-500">Exp: 2450/3000</span>
                </div>
                <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[81%]" />
                </div>
                <p className="text-[10px] text-gray-400 text-center">Setor 2kg sampah lagi untuk naik ke Planet Guardian Lvl 5!</p>
            </div>

            {/* Referral System */}
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-3xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                        <Users className="text-emerald-500" size={24} />
                    </div>
                    <div>
                        <p className="text-white font-bold">Invite friends, get points!</p>
                        <p className="text-emerald-500/70 text-xs">Dapatkan 500pts untuk setiap teman.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="flex-1 bg-black/20 border border-white/10 p-3 rounded-2xl text-xs text-gray-400 font-mono flex items-center justify-between">
                        ECO-69420-WAR
                        <Share2 size={14} className="text-emerald-500" />
                    </div>
                    <button className="bg-emerald-500 text-white px-6 rounded-2xl font-bold text-sm">
                        Share
                    </button>
                </div>
            </div>

            {/* Settings/Menu */}
            <div className="space-y-2">
                {[
                    { label: 'Security & Password', icon: ShieldCheck },
                    { label: 'Payment Methods', icon: Award },
                    { label: 'Help Center', icon: Users },
                ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl">
                        <div className="flex items-center gap-3">
                            <item.icon className="text-gray-400" size={20} />
                            <span className="text-white text-sm">{item.label}</span>
                        </div>
                        <ChevronRight className="text-gray-600" size={18} />
                    </div>
                ))}
            </div>

            <button className="w-full py-4 text-red-400 text-sm font-bold bg-red-500/5 rounded-2xl border border-red-500/10 mt-4">
                Logout
            </button>
        </div>
    );
}
