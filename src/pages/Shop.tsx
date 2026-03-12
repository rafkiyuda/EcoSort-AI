import { useState } from 'react';
import { ShoppingCart, Plus, Star, Heart, Trash2, ShieldCheck, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Shop = () => {
    const [activeCategory, setActiveCategory] = useState('Semua');
    const [points, setPoints] = useState(12450);
    const [cart, setCart] = useState<{ name: string, points: number, img: string, id: number }[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const products = [
        { id: 1, name: 'Pupuk Organik', points: 1500, rating: 4.8, category: 'Pupuk', img: '🌱' },
        { id: 2, name: 'Tote Bag Daur Ulang', points: 3000, rating: 4.9, category: 'Aksesoris', img: '👜' },
        { id: 3, name: 'Tumblr Bambu', points: 4500, rating: 4.7, category: 'Aksesoris', img: '🧴' },
        { id: 4, name: 'Sedotan Stainless', points: 800, rating: 4.6, category: 'Alat Makan', img: '🥢' },
        { id: 5, name: 'Buku Catatan Daur Ulang', points: 1200, rating: 4.5, category: 'Alat Tulis', img: '📓' },
        { id: 6, name: 'Pen Green Eco', points: 500, rating: 4.4, category: 'Alat Tulis', img: '🖊️' },
    ];

    const categories = ['Semua', 'Pupuk', 'Aksesoris', 'Alat Makan', 'Alat Tulis'];

    const addToCart = (product: typeof products[0]) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (id: number) => {
        setCart(cart.filter((item, index) => cart.findIndex(i => i.id === id) !== index || item.id !== id));
    };

    const handleCheckout = () => {
        const total = cart.reduce((acc, item) => acc + item.points, 0);
        if (points >= total) {
            setPoints(points - total);
            setCart([]);
            setIsCartOpen(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        } else {
            alert('Poin tidak cukup!');
        }
    };

    return (
        <div className="pb-32 pt-6 px-5 space-y-8 min-h-screen bg-slate-50 relative">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-black text-slate-900 tracking-tight">Eco Market</h1>
                    <p className="text-emerald-600 font-black text-sm">{points.toLocaleString()} PTS Available</p>
                </div>
                <div className="relative">
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 active:scale-90 transition-all"
                    >
                        <ShoppingCart className="w-6 h-6" />
                    </button>
                    {cart.length > 0 && (
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full text-[10px] font-bold text-white flex items-center justify-center animate-bounce">
                            {cart.length}
                        </span>
                    )}
                </div>
            </div>

            {/* Categories Scroll */}
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all tracking-wide ${activeCategory === cat
                            ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200'
                            : 'bg-white text-slate-500 border border-slate-100 hover:bg-slate-50'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 gap-5">
                {products.filter(p => activeCategory === 'Semua' || p.category === activeCategory).map((product, idx) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ y: -5 }}
                        key={idx}
                        className="bento-card bg-white flex flex-col p-4 shadow-sm border border-slate-100 group"
                    >
                        <div className="relative aspect-square rounded-3xl bg-slate-50 mb-4 flex items-center justify-center text-4xl group-hover:bg-emerald-50 transition-colors text-slate-900">
                            <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center text-slate-300 hover:text-red-500 transition-colors">
                                <Heart className="w-4 h-4" />
                            </button>
                            {product.img}
                        </div>

                        <div className="flex items-center gap-1 mb-1">
                            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                            <span className="text-[10px] font-bold text-slate-400">{product.rating}</span>
                        </div>

                        <h3 className="font-bold text-slate-800 text-sm leading-tight mb-2 flex-grow">{product.name}</h3>

                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-emerald-600 font-extrabold text-sm tracking-tighter">{product.points.toLocaleString()} PTS</span>
                            <button
                                onClick={() => addToCart(product)}
                                className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-lg active:scale-90 transition-all hover:bg-emerald-600"
                            >
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Cart Sidebar/Overlay */}
            <AnimatePresence>
                {isCartOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsCartOpen(false)}
                            className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-[60]"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            className="fixed right-0 top-0 bottom-0 w-[85%] bg-white z-[70] shadow-2xl p-6 flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-xl font-black text-slate-900">Keranjang Saya</h2>
                                <button onClick={() => setIsCartOpen(false)} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="flex-grow overflow-y-auto space-y-4">
                                {cart.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                                        <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center text-slate-300">
                                            <ShoppingBag size={40} />
                                        </div>
                                        <p className="text-slate-400 font-bold">Keranjang kosong</p>
                                    </div>
                                ) : (
                                    cart.map((item, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                            <div className="flex items-center gap-4">
                                                <span className="text-2xl">{item.img}</span>
                                                <div>
                                                    <h4 className="font-black text-slate-800 text-sm">{item.name}</h4>
                                                    <p className="text-emerald-600 font-bold text-xs">{item.points} PTS</p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-400 p-2"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    ))
                                )}
                            </div>

                            {cart.length > 0 && (
                                <div className="mt-8 pt-6 border-t border-slate-100 space-y-6">
                                    <div className="flex justify-between items-center">
                                        <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">Total Poin</p>
                                        <p className="text-2xl font-black text-slate-900">{cart.reduce((acc, item) => acc + item.points, 0).toLocaleString()} <span className="text-sm">PTS</span></p>
                                    </div>
                                    <button
                                        onClick={handleCheckout}
                                        className="w-full py-5 bg-emerald-600 text-white rounded-[24px] font-black shadow-xl shadow-emerald-900/10 active:scale-[0.98] transition-all"
                                    >
                                        Konfirmasi Penukaran
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Success Feedback */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none px-10"
                    >
                        <div className="bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100 flex flex-col items-center text-center space-y-4">
                            <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
                                <ShieldCheck size={40} className="animate-bounce" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Tukar Berhasil!</h3>
                                <p className="text-slate-500 text-sm font-medium mt-1">Item Anda sedang diproses. Cek riwayat untuk detailnya.</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Shop;
