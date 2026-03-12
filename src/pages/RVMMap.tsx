import { MapPin, Navigation } from 'lucide-react';

const locations = [
    { id: 1, name: 'Eco-Machine Sudirman', status: 'Ready', distance: '0.8km', fill: 45 },
    { id: 2, name: 'Grand Indonesia Mall', status: 'Full', distance: '1.2km', fill: 98 },
    { id: 3, name: 'Menteng Central', status: 'Ready', distance: '2.5km', fill: 12 },
];

export default function RVMMap() {
    return (
        <div className="p-6 pb-32 space-y-6">
            <h1 className="text-2xl font-bold text-white">Machine Locator</h1>

            {/* Mock Map View */}
            <div className="aspect-[4/5] bg-slate-800 rounded-3xl relative overflow-hidden border border-white/10">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_50%,#2ECC71_1px,transparent_1px)] bg-[length:24px_24px]" />

                {/* Pulsing User Location */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 bg-blue-500/30 rounded-full animate-ping" />
                    <div className="absolute inset-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg" />
                </div>

                {/* Machine Pins */}
                <div className="absolute top-1/4 right-1/3 group cursor-pointer">
                    <MapPin className="text-emerald-500 drop-shadow-lg" size={32} fill="currentColor" fillOpacity={0.2} />
                    <div className="absolute -top-12 -left-1/2 bg-white rounded-lg p-2 text-[10px] font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">Sudirman (45%)</div>
                </div>
                <div className="absolute bottom-1/3 left-1/4">
                    <MapPin className="text-red-500 drop-shadow-lg" size={32} fill="currentColor" fillOpacity={0.2} />
                </div>
            </div>

            {/* Location List */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Nearby RVMs</h3>
                <div className="space-y-3">
                    {locations.map((loc) => (
                        <div key={loc.id} className="bg-white/5 border border-white/10 p-4 rounded-3xl flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#2a2a2a] flex items-center justify-center border border-white/5">
                                    <Navigation className={loc.status === 'Full' ? 'text-red-400' : 'text-emerald-400'} size={24} />
                                </div>
                                <div>
                                    <p className="text-white text-sm font-medium">{loc.name}</p>
                                    <p className="text-gray-500 text-xs">{loc.distance} • <span className={loc.status === 'Full' ? 'text-red-400' : 'text-emerald-400'}>{loc.status}</span></p>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <div className="text-[10px] text-gray-500 font-medium">Capacity</div>
                                <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${loc.fill > 90 ? 'bg-red-500' : 'bg-emerald-500'}`}
                                        style={{ width: `${loc.fill}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
