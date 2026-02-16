

import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RegisterPage() {
    const [showToast, setShowToast] = useState(false);
    const [fullname, setFullname] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await fetch('http://localhost:3002/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fullname, phone, password }),
            });
            const data = await response.json();
            if (response.ok) {
                setShowToast(true);
                setTimeout(() => {
                    setShowToast(false);
                    navigate("/login");
                }, 2000);
            } else {
                setError(data.error || "Registration failed");
            }
        } catch (err) {
            setError("Cannot connect to server");
        }
    };

    return (
        <main className="min-h-screen bg-[#F9FAFB] relative">
            <Navbar />

            <section className="max-w-[500px] mx-auto pt-40 pb-24 px-6">
                <div className="flex flex-col items-center gap-2 mb-12 text-center">
                    <h2 className="text-[3rem] mb-4 text-primary font-extrabold">Join the Future</h2>
                    <p className="text-text-muted text-[1.1rem]">
                        Create an account to start your digital farming journey.
                    </p>
                </div>

                <div className="bg-white p-10 rounded-[30px] shadow-lg border border-black/5">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        {error && (
                            <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-semibold border border-red-100">
                                {error}
                            </div>
                        )}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="font-outfit font-semibold text-sm text-primary">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                                placeholder="Enter your full name"
                                required
                                className="w-full p-4 rounded-[12px] border border-black/10 font-montserrat text-base transition-all focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 bg-[#fdfdfd]"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone" className="font-outfit font-semibold text-sm text-primary">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="e.g. 0712345678"
                                required
                                className="w-full p-4 rounded-[12px] border border-black/10 font-montserrat text-base transition-all focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 bg-[#fdfdfd]"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="font-outfit font-semibold text-sm text-primary">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                                className="w-full p-4 rounded-[12px] border border-black/10 font-montserrat text-base transition-all focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 bg-[#fdfdfd]"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="confirm-password" className="font-outfit font-semibold text-sm text-primary">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm-password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                                className="w-full p-4 rounded-[12px] border border-black/10 font-montserrat text-base transition-all focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 bg-[#fdfdfd]"
                            />
                        </div>
                        <button type="submit" className="bg-primary hover:bg-secondary text-white border-none py-4 px-8 rounded-[12px] font-semibold font-outfit cursor-pointer transition-all duration-200 w-full text-base tracking-wide hover:scale-[1.02]">
                            Create Account
                        </button>
                        <p className="text-center mt-4 text-text-muted font-medium">
                            Already have an account?{" "}
                            <Link to="/login" className="text-secondary font-bold hover:underline">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </section>

            {/* Toast Notification */}
            <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-primary text-white py-4 px-10 rounded-full font-medium shadow-lg z-[2000] transition-transform duration-600 whitespace-nowrap ${showToast ? "translate-y-0" : "translate-y-[100px]"}`}>
                Registration successful! Welcome to the Academy.
            </div>

            <Footer />
        </main>
    );
}
