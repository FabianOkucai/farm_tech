

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
    };

    return (
        <main className="min-h-screen bg-[#F9FAFB] relative">
            <Navbar />

            <section className="max-w-[500px] mx-auto pt-40 pb-24 px-6">
                <div className="flex flex-col items-center gap-2 mb-12 text-center">
                    <h2 className="text-[3rem] mb-4 text-primary font-extrabold">Welcome Back</h2>
                    <p className="text-text-muted text-[1.1rem]">
                        Login to manage your poultry records and sales.
                    </p>
                </div>

                <div className="bg-white p-10 rounded-[30px] shadow-lg border border-black/5">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-outfit font-semibold text-sm text-primary">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="email@example.com"
                                required
                                className="w-full p-4 rounded-[12px] border border-black/10 font-montserrat text-base transition-all focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 bg-[#fdfdfd]"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="font-outfit font-semibold text-sm text-primary">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                required
                                className="w-full p-4 rounded-[12px] border border-black/10 font-montserrat text-base transition-all focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 bg-[#fdfdfd]"
                            />
                        </div>
                        <button type="submit" className="bg-primary hover:bg-secondary text-white border-none py-4 px-8 rounded-[12px] font-semibold font-outfit cursor-pointer transition-all duration-200 w-full text-base tracking-wide hover:scale-[1.02]">
                            Login
                        </button>
                        <p className="text-center mt-4 text-text-muted font-medium">
                            Don't have an account?{" "}
                            <Link to="/register" className="text-secondary font-bold hover:underline">
                                Register
                            </Link>
                        </p>
                    </form>
                </div>
            </section>

            {/* Toast Notification */}
            <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-primary text-white py-4 px-10 rounded-full font-medium shadow-lg z-[2000] transition-transform duration-600 whitespace-nowrap ${showToast ? "translate-y-0" : "translate-y-[100px]"}`}>
                Login successful! Redirecting to dashboard...
            </div>

            <Footer />
        </main>
    );
}
