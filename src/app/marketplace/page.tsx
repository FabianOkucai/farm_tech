import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { liveStock } from "@/lib/data";

export default function MarketplacePage() {
    return (
        <main className="min-h-screen bg-[#F9FAFB]">
            <Navbar />

            <section className="bg-primary py-40 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1920&q=80" alt="bg" className="w-full h-full object-cover" />
                </div>
                <div className="max-w-[800px] mx-auto px-6 relative z-10">
                    <span className="text-secondary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Certified Quality</span>
                    <h1 className="text-6xl font-extrabold mb-6 font-outfit uppercase tracking-tight">Poultry Marketplace</h1>
                    <p className="text-xl text-white/80 font-light leading-relaxed">
                        Every bird we sell comes with a verified health passport and professional performance tracking.
                    </p>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="py-12 bg-white border-b border-black/5">
                <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-between gap-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary text-2xl">✓</div>
                        <div>
                            <h4 className="font-bold text-primary uppercase text-xs tracking-wider">Verified Health</h4>
                            <p className="text-text-muted text-xs">Full vaccination history included.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary text-2xl">📦</div>
                        <div>
                            <h4 className="font-bold text-primary uppercase text-xs tracking-wider">Safe Delivery</h4>
                            <p className="text-text-muted text-xs">Bio-secure transport guarantee.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary text-2xl">📊</div>
                        <div>
                            <h4 className="font-bold text-primary uppercase text-xs tracking-wider">Elite Genetics</h4>
                            <p className="text-text-muted text-xs">Proven high-yield breeding stock.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-[1200px] mx-auto py-24 px-6 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {liveStock.map((stock) => (
                        <div key={stock.id} className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-black/5 group hover:shadow-2xl transition-all flex flex-col">
                            <div className="relative h-72 overflow-hidden">
                                <img src={stock.image} alt={stock.breed} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-primary font-bold text-lg px-6 py-2 rounded-full shadow-lg">
                                    {stock.price}
                                </div>
                                {stock.guarantee && (
                                    <div className="absolute bottom-6 left-6 right-6 bg-primary/90 backdrop-blur-md text-white text-[0.65rem] font-bold uppercase py-2 px-4 rounded-xl text-center">
                                        🔒 {stock.guarantee}
                                    </div>
                                )}
                            </div>
                            <div className="p-10 flex-grow flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <span className="text-secondary font-bold uppercase tracking-widest text-[0.6rem] mb-1 block">{stock.purpose}</span>
                                        <h3 className="text-3xl font-extrabold text-primary font-outfit uppercase">{stock.breed}</h3>
                                    </div>
                                    <span className={`text-[0.6rem] font-bold uppercase px-3 py-1 rounded-full ${stock.stock === 'Available' ? 'bg-secondary text-white' : 'bg-accent text-white'}`}>
                                        {stock.stock}
                                    </span>
                                </div>

                                {/* Performance Specs - Educational Focus */}
                                <div className="grid grid-cols-1 gap-4 mb-8">
                                    {Object.entries(stock.specs || {}).map(([key, value]) => (
                                        <div key={key} className="flex justify-between items-center p-4 bg-[#F9FAFB] rounded-2xl border border-black/5">
                                            <span className="text-xs text-text-muted uppercase font-bold tracking-wider">{key}</span>
                                            <span className="text-sm font-bold text-primary">{value as string}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto pt-6 border-t border-black/5 flex justify-between items-center text-sm">
                                    <span className="text-text-muted">Batch Age: <strong className="text-primary">{stock.age}</strong></span>
                                    <Link href="/contact" className="text-secondary font-bold hover:underline">Inquire</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Educational Footer Link */}
            <section className="py-24 border-t border-black/5 bg-primary text-white">
                <div className="max-w-[800px] mx-auto px-6 text-center">
                    <h2 className="text-3xl font-extrabold mb-6 uppercase">Don't Waste Your Investment</h2>
                    <p className="text-white/70 text-lg mb-10">
                        Buying elite breeds is the first step. Proper management is the second. Ensure you have studied our Professional Guides to maintain zero mortality in your new batch.
                    </p>
                    <div className="flex justify-center gap-6">
                        <Link href="/academy">
                            <button className="bg-secondary text-white py-4 px-12 rounded-full font-bold hover:bg-accent transition-all hover:scale-105">
                                Go to Learning Center
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
