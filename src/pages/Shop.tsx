import { useState } from 'react';
import { ShoppingCart, Plus, Star, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Shop = () => {
    const [activeCategory, setActiveCategory] = useState('Semua');

    const products = [
        { name: 'Pupuk Organik', points: 1500, rating: 4.8, category: 'Pupuk', img: '🌱' },
        { name: 'Tote Bag Daur Ulang', points: 3000, rating: 4.9, category: 'Aksesoris', img: '👜' },
        { name: 'Tumblr Bambu', points: 4500, rating: 4.7, category: 'Aksesoris', img: '🧴' },
        { name: 'Sedotan Stainless', points: 800, rating: 4.6, category: 'Alat Makan', img: '🥢' },
    ];

    const categories = ['Semua', 'Pupuk', 'Aksesoris', 'Alat Makan', 'Alat Tulis'];

    return (
        <div className="pb-32 pt-6 px-5 space-y-8 min-h-screen bg-slate-50">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-black text-slate-900 tracking-tight">Eco Market</h1>
                <div className="relative">
                    <button className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 active:scale-90 transition-all">
                        <ShoppingCart className="w-6 h-6" />
                    </button>
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full text-[10px] font-bold text-white flex items-center justify-center">2</span>
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
                            <button className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-lg active:scale-90 transition-all">
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Promo Banner */}
            <button className="w-full relative rounded-[32px] overflow-hidden group shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-400 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 p-6 flex items-center justify-between text-white">
                    <div className="text-left">
                        <h3 className="text-lg font-black tracking-tight">Swap Your Waste!</h3>
                        <p className="text-xs text-emerald-50/80 font-medium tracking-tight text-white">Bawa 10 botol ke RVM & dapatkan diskon 20%</p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                        <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                </div>
            </button>
        </div>
    );
};

export default Shop;
