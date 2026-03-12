import { Home, User, Scan, Wallet, ShoppingBag } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Wallet, label: 'Wallet', path: '/wallet' },
    { icon: Scan, label: 'Scan', path: '/scanner', isFab: true },
    { icon: ShoppingBag, label: 'Shop', path: '/shop' },
    { icon: User, label: 'Profile', path: '/profile' },
];

export default function BottomNav() {
    return (
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] bg-white/80 backdrop-blur-xl border-t border-slate-100 px-6 py-3 pb-8 flex items-center justify-between z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.02)]">
            {navItems.map((item) => {
                const Icon = item.icon;
                if (item.isFab) {
                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex flex-col items-center justify-center -mt-12 w-16 h-16 rounded-full shadow-lg transition-all duration-300 relative overflow-hidden group ${isActive
                                    ? 'bg-emerald-500 text-white scale-110'
                                    : 'bg-emerald-500/90 text-white shadow-emerald-200'
                                }`
                            }
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <Icon size={32} className="relative z-10" />
                        </NavLink>
                    );
                }
                return (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex flex-col items-center gap-1.5 transition-all duration-300 ${isActive ? 'text-emerald-600' : 'text-slate-400 hover:text-slate-600'}`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <div className={`transition-all duration-300 ${item.path === '/' ? 'relative' : ''}`}>
                                    <Icon size={24} className={`${isActive ? 'scale-110' : ''}`} />
                                </div>
                                <span className={`text-[9px] font-black uppercase tracking-widest transition-all ${isActive ? 'opacity-100 translate-y-0' : 'opacity-80'}`}>
                                    {item.label}
                                </span>
                            </>
                        )}
                    </NavLink>
                );
            })}
        </nav>
    );
}
