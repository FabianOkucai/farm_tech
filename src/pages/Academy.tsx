import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { poultryGuides } from "@/lib/data";

export default function AcademyPage() {
    return (
        <main className="min-h-screen bg-[#F9FAFB]">
            <Navbar />

            {/* Educational Header */}
            <section className="py-40 text-center relative overflow-hidden">
                <div className="max-w-[800px] mx-auto px-6 relative z-10">
                    <span className="text-secondary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Knowledge Center</span>
                    <h1 className="text-6xl font-extrabold mb-6 font-outfit uppercase tracking-tight text-primary">Poultry Management Guides</h1>
                    <p className="text-xl text-text-muted font-light leading-relaxed">
                        Practical, step-by-step guidance on how to raise healthy, productive chickens.
                    </p>
                </div>
            </section>

            {/* Practical Guides Section */}
            <section className="max-w-[1200px] mx-auto py-24 px-6 md:px-0">
                <div className="flex flex-col gap-20">
                    {poultryGuides.map((guide, idx) => (
                        <div key={guide.id} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="flex-1 w-full relative">
                                <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
                                    <img src={guide.image} alt={guide.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute -top-6 -left-6 bg-secondary text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                                    {guide.category[0]}
                                </div>
                            </div>
                            <div className="flex-1 space-y-8">
                                <div>
                                    <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">{guide.category}</span>
                                    <h2 className="text-4xl font-extrabold text-primary font-outfit uppercase">{guide.title}</h2>
                                </div>
                                <p className="text-text-muted text-lg leading-relaxed">
                                    {guide.content}
                                </p>
                                <div className="bg-white p-8 rounded-[30px] border border-black/5 shadow-sm">
                                    <h4 className="font-bold text-primary mb-4 uppercase text-sm tracking-wider">Pro Tips for Success:</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {guide.tips.map((tip, i) => (
                                            <li key={i} className="flex items-center gap-3 text-text-muted">
                                                <span className="text-secondary text-xl">✓</span>
                                                {tip}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Quick Action Section */}
            <section className="bg-white py-24 border-y border-black/5">
                <div className="max-w-[1200px] mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-primary mb-8 uppercase">Common Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        <div className="p-8 rounded-[24px] border border-black/5">
                            <h4 className="font-bold text-primary mb-2">How much should I feed?</h4>
                            <p className="text-text-muted text-sm italic">An adult layer typically needs about 120g of feed per day. Adjust based on breed and environment.</p>
                        </div>
                        <div className="p-8 rounded-[24px] border border-black/5">
                            <h4 className="font-bold text-primary mb-2">When do they start laying?</h4>
                            <p className="text-text-muted text-sm italic">Most breeds start laying daily between 18 and 22 weeks of age with proper calcium intake.</p>
                        </div>
                        <div className="p-8 rounded-[24px] border border-black/5">
                            <h4 className="font-bold text-primary mb-2">How to spot heat stress?</h4>
                            <p className="text-text-muted text-sm italic">Watch for panting (open-mouthed breathing) and wings held away from the body. Provide shade and cool water immediately.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Educational Resources Section */}
            <section className="py-24">
                <div className="max-w-[1000px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-primary mb-6 uppercase">Continue Your Learning Journey</h2>
                        <p className="text-text-muted text-lg">
                            Expand your knowledge with these essential poultry farming resources
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-10 rounded-[30px] shadow-lg border border-black/5">
                            <h3 className="text-2xl font-bold text-primary mb-4">Advanced Techniques</h3>
                            <p className="text-text-muted mb-6">
                                Learn about biosecurity protocols, disease prevention strategies, and optimal flock management systems.
                            </p>
                            <Link to="/contact">
                                <button className="text-secondary font-bold hover:underline">
                                    Request Training Materials →
                                </button>
                            </Link>
                        </div>
                        <div className="bg-white p-10 rounded-[30px] shadow-lg border border-black/5">
                            <h3 className="text-2xl font-bold text-primary mb-4">Expert Consultation</h3>
                            <p className="text-text-muted mb-6">
                                Get personalized advice from experienced poultry specialists on breed selection, housing design, and nutrition planning.
                            </p>
                            <Link to="/contact">
                                <button className="text-secondary font-bold hover:underline">
                                    Book a Consultation →
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
