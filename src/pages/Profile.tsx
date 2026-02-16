import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface User {
    id: number;
    phone: string;
    fullname: string;
}

export default function ProfilePage() {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
            navigate('/login');
        } else {
            setUser(JSON.parse(storedUser));
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    if (!user) return null;

    return (
        <main className="min-h-screen bg-[#F9FAFB]">
            <Navbar />

            <section className="pt-40 pb-24 px-6 max-w-[800px] mx-auto">
                <div className="bg-white rounded-[40px] shadow-2xl border border-black/5 overflow-hidden">
                    <div className="bg-primary p-12 text-white">
                        <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-4xl font-bold mb-6">
                            {user.fullname.charAt(0)}
                        </div>
                        <h1 className="text-4xl font-extrabold font-outfit uppercase tracking-tight">
                            {user.fullname}
                        </h1>
                        <p className="text-white/70 font-light mt-1">
                            Premium Academy Member
                        </p>
                    </div>

                    <div className="p-12 space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-primary/40 uppercase tracking-widest">Phone Number</label>
                                <p className="text-xl font-semibold text-primary">{user.phone}</p>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-primary/40 uppercase tracking-widest">Account Status</label>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                    <p className="text-xl font-semibold text-primary">Active</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-black/5 pt-12">
                            <h3 className="text-xl font-bold text-primary mb-6 uppercase">Quick Actions</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <button className="p-6 rounded-3xl bg-[#F9FAFB] border border-black/5 text-left hover:border-secondary transition-all group">
                                    <h4 className="font-bold text-primary mb-1">My Enrolled Courses</h4>
                                    <p className="text-sm text-text-muted">Continue your learning journey</p>
                                </button>
                                <button className="p-6 rounded-3xl bg-[#F9FAFB] border border-black/5 text-left hover:border-secondary transition-all group">
                                    <h4 className="font-bold text-primary mb-1">Farm Records</h4>
                                    <p className="text-sm text-text-muted">Access your digital logs</p>
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-start">
                            <button
                                onClick={handleLogout}
                                className="bg-red-50 text-red-600 py-4 px-10 rounded-full font-bold hover:bg-red-600 hover:text-white transition-all"
                            >
                                Log Out of Account
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
