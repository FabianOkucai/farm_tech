import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ToolsPage() {
    // Feed Calculator State
    const [feedBirdCount, setFeedBirdCount] = useState<number>(100);
    const [birdType, setBirdType] = useState<string>('layer');

    // Profit Estimator State
    const [profitBirdCount, setProfitBirdCount] = useState<number>(500);
    const [eggPricePerTray, setEggPricePerTray] = useState<number>(350); // Default KES per tray

    // Constants
    const FEED_RATES: Record<string, number> = {
        chick: 0.05,  // kg per bird
        grower: 0.09, // kg per bird
        layer: 0.12,  // kg per bird
        broiler: 0.16 // kg per bird
    };

    const BIRD_LABELS: Record<string, string> = {
        chick: "Chicks (0-8 Weeks)",
        grower: "Growers (8-18 Weeks)",
        layer: "Layers (18+ Weeks)",
        broiler: "Broilers (Meat)"
    };

    // Feed Calculations
    const dailyFeed = (feedBirdCount * FEED_RATES[birdType]).toFixed(1);
    const weeklyFeed = (feedBirdCount * FEED_RATES[birdType] * 7).toFixed(1);
    const monthlyFeed = (feedBirdCount * FEED_RATES[birdType] * 30).toFixed(1);

    // Profit Calculations
    const LAYING_RATE = 0.90; // 90% production rate
    const eggsPerDay = Math.floor(profitBirdCount * LAYING_RATE);
    const traysPerDay = (eggsPerDay / 30).toFixed(1);
    const dailyRevenue = (parseFloat(traysPerDay) * eggPricePerTray).toLocaleString();
    const monthlyRevenue = (parseFloat(traysPerDay) * eggPricePerTray * 30).toLocaleString();

    return (
        <main className="min-h-screen bg-[#F9FAFB]">
            <Navbar />

            {/* Header */}
            <section className="py-40 text-center relative overflow-hidden bg-white text-primary">
                {/* Removed background image overlay for cleaner look as requested, or can be kept subtle. User asked "not have a green bg color". */}
                <div className="max-w-[800px] mx-auto px-6 relative z-10">
                    <span className="text-secondary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Smart Tools</span>
                    <h1 className="text-6xl font-extrabold mb-6 font-outfit uppercase tracking-tight text-primary">Farm Management Tools</h1>
                    <p className="text-xl text-text-muted font-light leading-relaxed">
                        Data-driven calculators to optimize your feeding schedules and forecast your profits.
                    </p>
                </div>
            </section>

            {/* Tools Grid */}
            <section className="max-w-[1200px] mx-auto py-24 px-6 md:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Feed Calculator */}
                    <div className="bg-white rounded-[32px] p-10 shadow-lg border border-black/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-primary mb-2 font-outfit">Feed Calculator</h2>
                            <p className="text-text-muted mb-8 text-sm">Estimate your flock's daily laying and growth feed usage.</p>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">Number of Birds</label>
                                    <input
                                        type="number"
                                        value={feedBirdCount}
                                        onChange={(e) => setFeedBirdCount(Math.max(0, parseInt(e.target.value) || 0))}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 font-outfit font-bold text-lg text-primary"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">Stage / Type</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {Object.entries(BIRD_LABELS).map(([key, label]) => (
                                            <button
                                                key={key}
                                                onClick={() => setBirdType(key)}
                                                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 border ${birdType === key
                                                    ? 'bg-primary text-white border-primary shadow-md'
                                                    : 'bg-white text-text-muted border-gray-200 hover:border-secondary hover:text-secondary'
                                                    }`}
                                            >
                                                {label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 bg-primary/5 rounded-[24px] p-8 border border-primary/10">
                                <h3 className="text-primary font-bold uppercase tracking-widest text-xs mb-6">Results Estimate</h3>
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <p className="text-3xl font-extrabold text-secondary font-outfit">{dailyFeed}<span className="text-sm font-normal text-text-muted ml-1">kg</span></p>
                                        <p className="text-xs font-bold text-primary/60 uppercase mt-1">Daily</p>
                                    </div>
                                    <div className="border-l border-primary/10">
                                        <p className="text-3xl font-extrabold text-secondary font-outfit">{weeklyFeed}<span className="text-sm font-normal text-text-muted ml-1">kg</span></p>
                                        <p className="text-xs font-bold text-primary/60 uppercase mt-1">Weekly</p>
                                    </div>
                                    <div className="border-l border-primary/10">
                                        <p className="text-3xl font-extrabold text-secondary font-outfit">{monthlyFeed}<span className="text-sm font-normal text-text-muted ml-1">kg</span></p>
                                        <p className="text-xs font-bold text-primary/60 uppercase mt-1">Monthly</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Profit Estimator */}
                    <div className="bg-primary rounded-[32px] p-10 shadow-lg border border-white/10 relative overflow-hidden group text-white">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-2 font-outfit">Profit Forecaster</h2>
                            <p className="text-white/60 mb-8 text-sm">Project earnings based on egg production rates (assuming 90% lay rate).</p>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wide">Total Layers</label>
                                    <input
                                        type="number"
                                        value={profitBirdCount}
                                        onChange={(e) => setProfitBirdCount(Math.max(0, parseInt(e.target.value) || 0))}
                                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 font-outfit font-bold text-lg text-white placeholder-white/30"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wide">Price per Tray (KES)</label>
                                    <input
                                        type="number"
                                        value={eggPricePerTray}
                                        onChange={(e) => setEggPricePerTray(Math.max(0, parseInt(e.target.value) || 0))}
                                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 font-outfit font-bold text-lg text-white placeholder-white/30"
                                    />
                                    <p className="text-xs text-white/40 mt-2 text-right">Running calculations with 30 eggs per tray</p>
                                </div>
                            </div>

                            <div className="mt-10 bg-black/20 backdrop-blur-sm rounded-[24px] p-8 border border-white/10">
                                <h3 className="text-secondary font-bold uppercase tracking-widest text-xs mb-6">Revenue Projection</h3>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-end border-b border-white/10 pb-4">
                                        <span className="text-white/70 font-medium">Daily Production</span>
                                        <span className="text-2xl font-bold font-outfit">{traysPerDay} <small className="text-sm font-normal opacity-60">Trays</small></span>
                                    </div>
                                    <div className="flex justify-between items-end border-b border-white/10 pb-4">
                                        <span className="text-white/70 font-medium">Daily Revenue</span>
                                        <span className="text-2xl font-bold font-outfit text-secondary">KES {dailyRevenue}</span>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <span className="text-white/70 font-medium">Monthly Revenue</span>
                                        <span className="text-4xl font-extrabold font-outfit text-white">KES {monthlyRevenue}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <Footer />
        </main>
    );
}
