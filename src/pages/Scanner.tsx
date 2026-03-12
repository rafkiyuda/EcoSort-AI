import { Camera, X, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Scanner() {
    const navigate = useNavigate();

    return (
        <div className="relative h-screen bg-black overflow-hidden">
            {/* Camera View Simulator */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-b from-transparent via-gray-900/20 to-black" />
                {/* Scanning Square */}
                <div className="relative w-64 h-64 border-2 border-emerald-500 rounded-3xl overflow-hidden shadow-[0_0_20px_rgba(46,204,113,0.5)]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500 shadow-[0_0_15px_rgba(46,204,113,0.8)] animate-scan" />
                </div>
            </div>

            {/* UI Overlay */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex items-center justify-between mt-8">
                    <button onClick={() => navigate(-1)} className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                        <X size={24} />
                    </button>
                    <div className="bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 px-4 py-1 rounded-full flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest">Active</span>
                    </div>
                    <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                        <Zap size={24} />
                    </button>
                </div>

                <div className="mb-24 text-center space-y-4">
                    <p className="text-white font-medium">Scan RVM QR Code</p>
                    <p className="text-gray-400 text-xs px-12">Point your camera at the QR code on the Ecosort Machine to start disposing waste.</p>
                    <div className="flex justify-center pt-4">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/30 cursor-pointer hover:bg-white/30 transition-all">
                            <Camera className="text-white" size={32} />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
      `}</style>
        </div>
    );
}
