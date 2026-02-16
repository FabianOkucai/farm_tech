import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  stats,
  poultryFacts,
  testimonials,
  visionSection,
  innovationHighlights,
  educationalPath
} from "@/lib/data";

export default function Home() {
  const [previewFlockSize, setPreviewFlockSize] = useState(500);
  const [apiProducts, setApiProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:3002/api/products')
      .then(res => res.json())
      .then(data => setApiProducts(data))
      .catch(err => console.error('Failed to fetch products:', err));
  }, []);

  const previewDailyFeed = (previewFlockSize * 0.12).toFixed(1);
  const previewMonthlyRevenue = ((Math.floor(previewFlockSize * 0.9) / 30) * 350 * 30).toLocaleString();
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-screen flex flex-col justify-center items-center text-center px-[5%] text-white bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(4, 47, 46, 0.75), rgba(4, 47, 46, 0.6)), url('https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        <div className="max-w-[900px] flex flex-col items-center gap-6 mt-16 animate-fade-in-up">
          <span className="font-outfit font-semibold uppercase tracking-[0.3em] text-[0.85rem] text-secondary opacity-90">
            Excellence in Poultry & Tech
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] font-bold uppercase">
            Innovating Sustainable Agriculture
          </h2>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-white/90 max-w-[650px] font-light leading-relaxed">
            Premium supplies and technical training for modern poultry farmers.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap justify-evenly items-center gap-12 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex-1 min-w-[200px] transition-all duration-500 hover:scale-105">
                <h3 className="text-[3rem] text-primary font-extrabold mb-1 tracking-tighter">{stat.value}</h3>
                <p className="text-text-muted text-[0.85rem] font-bold uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational: Why Poultry Matters */}
      <section className="bg-[#F9FAFB] py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-0">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-[3.5rem] text-primary font-extrabold uppercase tracking-tight mb-4">Why Poultry Matters</h2>
            <p className="text-text-muted text-[1.1rem] max-w-[600px]">
              Understanding the vital role of poultry in modern nutrition, economics, and sustainability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {poultryFacts.map((fact, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[32px] shadow-sm border border-black/5 hover:border-secondary transition-colors group">
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{fact.title}</h3>
                <p className="text-text-muted leading-relaxed text-lg">{fact.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Learning Journey: Connection to Academy */}
      <section className="py-24 max-w-[1200px] mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[3.5rem] text-primary font-extrabold uppercase tracking-tight mb-6">The Learning Journey</h2>
            <p className="text-xl text-text-muted leading-relaxed mb-8">
              We don't just sell supplies; we build entrepreneurs. Our educational path is designed to take you from a curious beginner to a master of digital poultry farming.
            </p>
            <Link to="/academy">
              <button className="bg-primary text-white py-4 px-10 rounded-full font-bold hover:bg-secondary hover:scale-105 transition-all">
                Enter the Academy
              </button>
            </Link>
          </div>
          <div className="space-y-6">
            {educationalPath.map((path, idx) => (
              <div key={idx} className="flex gap-8 items-start p-8 rounded-[30px] bg-white border border-black/5 shadow-sm">
                <span className="text-4xl font-extrabold text-secondary/30">{path.step}</span>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2 uppercase">{path.title}</h4>
                  <p className="text-text-muted">{path.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Tools Section */}
      <section className="bg-primary py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-[3.5rem] font-extrabold uppercase tracking-tight">Data-Driven Success</h2>
            <p className="text-xl text-white/80 font-light leading-relaxed">
              Stop guessing. Use our professional calculators to precisely estimate feed requirements and project your farm's profitability.
            </p>
            <div className="pt-4">
              <Link to="/tools">
                <button className="bg-secondary text-white py-4 px-10 rounded-full font-bold hover:bg-white hover:text-primary hover:scale-105 transition-all shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                  Access Farm Tools
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-1 bg-white/10 backdrop-blur-md rounded-[32px] p-8 border border-white/20 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
              <span className="text-secondary font-bold uppercase tracking-widest text-sm">Interactive Preview</span>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
            </div>
            <div className="space-y-6 font-outfit">
              <div>
                <label className="block text-white/70 text-sm mb-2 uppercase tracking-wider font-bold">Try it: Enter Flock Size</label>
                <div className="relative">
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    step="10"
                    value={previewFlockSize}
                    onChange={(e) => setPreviewFlockSize(Number(e.target.value))}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-secondary mb-4"
                  />
                  <div className="flex justify-between items-center bg-white/10 rounded-xl px-4 py-3 border border-white/10">
                    <span className="text-white font-bold text-lg">{previewFlockSize}</span>
                    <span className="text-white/50 text-sm font-semibold uppercase">Birds</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/10">
                <div>
                  <span className="text-white/60 text-sm block mb-1">Daily Feed</span>
                  <span className="text-2xl font-bold text-secondary">{previewDailyFeed} kg</span>
                </div>
                <div>
                  <span className="text-white/60 text-sm block mb-1">Est. Revenue</span>
                  <span className="text-2xl font-bold text-white leading-tight">KES {previewMonthlyRevenue}</span>
                  <span className="text-white/40 text-[10px] block">/ month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="bg-[#F9FAFB] py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-0">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-[3.5rem] text-primary font-extrabold uppercase tracking-tight mb-4">What We Offer</h2>
            <p className="text-text-muted text-[1.1rem] max-w-[600px]">
              Comprehensive solutions designed to elevate your farm from traditional to professional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apiProducts.map((product, idx) => (
              <div key={idx} className="bg-white rounded-[24px] p-10 shadow-sm border border-black/5 flex flex-col hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-primary font-outfit">{product.title}</h3>
                <p className="text-text-muted leading-relaxed">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-primary py-24 text-white">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <h2 className="text-[3.5rem] font-extrabold uppercase tracking-tight mb-6">{visionSection.title}</h2>
          <p className="text-xl text-white/80 font-light leading-relaxed mb-10 max-w-[800px] mx-auto">
            {visionSection.desc}
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-md p-8 rounded-[30px] border border-white/20">
            <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">Our Mission</h4>
            <p className="text-2xl font-bold">{visionSection.mission}</p>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section id="innovation" className="max-w-[1200px] mx-auto py-24 px-6 md:px-0">
        <div className="flex flex-col items-center gap-2 mb-16 text-center">
          <h2 className="text-[3.5rem] mb-4 text-primary font-extrabold tracking-tight uppercase">Digital-First Farming</h2>
          <p className="text-text-muted text-[1.1rem] max-w-[600px]">
            We replace manual logs with intelligent algorithms to ensure zero mortality and maximum profit.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {innovationHighlights.map((highlight) => (
            <div key={highlight.id} className="border-l-[3px] border-l-secondary pl-8 transition-all duration-300 hover:border-l-accent hover:translate-x-2">
              <h4 className="text-xl font-bold text-primary mb-3 uppercase tracking-wider">{highlight.title}</h4>
              <p className="text-text-muted leading-relaxed font-light">{highlight.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#F9FAFB] py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-0">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-[3.5rem] text-primary font-extrabold uppercase tracking-tight mb-4">Community Voices</h2>
            <p className="text-text-muted text-[1.1rem]">Success stories from farmers who have joined the digital revolution.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[32px] shadow-sm italic relative">
                <span className="absolute top-6 right-8 text-[4rem] text-secondary/10 leading-none">"</span>
                <p className="text-text-muted mb-8 relative z-10">"{t.text}"</p>
                <div className="mt-auto">
                  <p className="text-primary font-bold not-italic">{t.name}</p>
                  <p className="text-secondary text-sm font-semibold not-italic">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
