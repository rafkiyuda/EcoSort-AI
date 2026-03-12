import { useState, useRef, useEffect } from 'react';
import { X, Zap, AlertCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Scanner() {
    const navigate = useNavigate();
    const videoRef = useRef<HTMLVideoElement>(null);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [isScanning, setIsScanning] = useState(true);
    const [showSuccess, setShowSuccess] = useState(false);
    const [rewardPoints, setRewardPoints] = useState(0);

    useEffect(() => {
        async function startCamera() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: 'environment' }
                });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
                setHasPermission(true);
            } catch (err) {
                console.error("Camera access error:", err);
                setHasPermission(false);
            }
        }

        startCamera();

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const stream = videoRef.current.srcObject as MediaStream;
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    // Simulate scan success
    useEffect(() => {
        if (hasPermission) {
            const timer = setTimeout(() => {
                setIsScanning(false);
                const points = Math.floor(Math.random() * 400) + 100;
                setRewardPoints(points);
                setShowSuccess(true);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [hasPermission]);

    return (
        <div className="relative h-screen bg-black overflow-hidden flex flex-col items-center justify-center">
            {/* Real Camera Feed */}
            {hasPermission === true ? (
                <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
                />
            ) : hasPermission === false ? (
                <div className="flex flex-col items-center justify-center text-white p-8 text-center space-y-4 z-50">
                    <AlertCircle size={48} className="text-red-500" />
                    <h3 className="text-xl font-black">Akses Kamera Ditolak</h3>
                    <p className="text-slate-400 text-sm font-medium">EcoSort memerlukan akses kamera untuk memindai kode QR pada mesin RVM.</p>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-emerald-500 text-white px-8 py-3 rounded-2xl font-black text-sm"
                    >
                        Kembali ke Home
                    </button>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center text-white z-50">
                    <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
                </div>
            )}

            {/* Dark Overlay (Vignette) */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none z-10" />

            {/* Scanning Focus Area */}
            <div className="relative z-20 flex items-center justify-center w-full h-full pointer-events-none">
                <AnimatePresence>
                    {isScanning && (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1.2, opacity: 0 }}
                            className="relative w-72 h-72"
                        >
                            {/* Corner Borders */}
                            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-emerald-500 rounded-tl-3xl shadow-[0_0_15px_rgba(46,204,113,0.5)]" />
                            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-emerald-500 rounded-tr-3xl shadow-[0_0_15px_rgba(46,204,113,0.5)]" />
                            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-emerald-500 rounded-bl-3xl shadow-[0_0_15px_rgba(46,204,113,0.5)]" />
                            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-emerald-500 rounded-br-3xl shadow-[0_0_15px_rgba(46,204,113,0.5)]" />

                            {/* Scanning Line */}
                            <motion.div
                                animate={{ top: ['0%', '100%'] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                className="absolute left-4 right-4 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_rgba(46,204,113,0.8)]"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* UI Overlay */}
            <div className="absolute inset-x-0 top-0 p-8 flex items-center justify-between z-30">
                <button
                    onClick={() => navigate(-1)}
                    className="w-12 h-12 bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-white active:scale-90 transition-all"
                >
                    <X size={24} />
                </button>
                <div className="bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/30 px-5 py-2 rounded-full flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(46,204,113,1)]" />
                    <span className="text-emerald-500 text-[10px] font-black uppercase tracking-widest">Live Cam</span>
                </div>
                <button className="w-12 h-12 bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-white">
                    <Zap size={24} />
                </button>
            </div>

            <div className="absolute inset-x-0 bottom-24 text-center space-y-6 z-30 px-10">
                {!showSuccess && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h2 className="text-white text-xl font-black mb-2 tracking-tight">Scan RVM QR Code</h2>
                        <p className="text-slate-400 text-xs font-medium leading-relaxed">Arahkan kamera ke kode QR di mesin Ecosort untuk mulai menyetor sampah.</p>
                    </motion.div>
                )}
            </div>

            {/* Success Overlay - PREMIUM DESIGN */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-emerald-600 flex flex-col items-center justify-center p-8 text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', damping: 10 }}
                            className="w-32 h-32 bg-white rounded-[48px] flex items-center justify-center mb-8 shadow-2xl shadow-black/20"
                        >
                            <Zap size={64} className="text-emerald-500 fill-emerald-500" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-2"
                        >
                            <h2 className="text-4xl font-black text-white tracking-tighter">BOMBASTIS!</h2>
                            <p className="text-emerald-100 font-bold uppercase tracking-[0.2em] text-xs">Sampah Berhasil Terverifikasi</p>
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4, type: 'spring' }}
                            className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[40px] p-10 my-10 w-full"
                        >
                            <p className="text-emerald-100/80 text-sm font-bold mb-1">Anda Mendapatkan</p>
                            <h3 className="text-6xl font-black text-white tracking-tight">+{rewardPoints} <span className="text-xl opacity-80">PTS</span></h3>
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            onClick={() => navigate('/')}
                            className="w-full h-16 bg-white text-emerald-600 rounded-[24px] font-black shadow-2xl active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                        >
                            Ambil Hadiahnya <ArrowRight size={20} />
                        </motion.button>

                        <p className="text-emerald-100/50 text-[10px] font-bold mt-6 uppercase tracking-widest italic tracking-tight">
                            "Kecil bagi Anda, besar bagi bumi"
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
