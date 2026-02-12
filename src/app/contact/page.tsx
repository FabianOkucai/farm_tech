"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
        setFormState({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <main className="min-h-screen bg-[#F9FAFB] relative">
            <Navbar />

            <section className="max-w-[1200px] mx-auto pt-40 pb-24 px-6 md:px-0">
                <div className="flex flex-col items-center gap-2 mb-16 text-center">
                    <h2 className="text-[3.5rem] mb-4 text-primary font-extrabold">Get in Touch</h2>
                    <p className="text-text-muted text-[1.1rem] max-w-[600px]">
                        Have questions about our digital systems or poultry training? Reach out to our team of experts.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
                    <div className="bg-white p-12 rounded-[30px] shadow-lg">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="font-outfit font-semibold text-sm text-primary">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    required
                                    className="w-full p-4 rounded-[12px] border border-black/10 font-montserrat text-base transition-all focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 bg-[#fdfdfd]"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="font-outfit font-semibold text-sm text-primary">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="email@example.com"
                                    required
                                    className="w-full p-4 rounded-[12px] border border-black/10 font-montserrat text-base transition-all focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 bg-[#fdfdfd]"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="subject" className="font-outfit font-semibold text-sm text-primary">Subject</label>
                                <select
                                    id="subject"
                                    required
                                    className="w-full p-4 rounded-[12px] border border-black/10 font-montserrat text-base transition-all focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 bg-[#fdfdfd]"
                                    value={formState.subject}
                                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                >
                                    <option value="" disabled>Select a topic</option>
                                    <option value="product">Product Inquiry</option>
                                    <option value="training">Training Programs</option>
                                    <option value="support">Technical Support</option>
                                    <option value="feedback">Feedback</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="font-outfit font-semibold text-sm text-primary">Your Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    placeholder="How can we help you?"
                                    required
                                    className="w-full p-4 rounded-[12px] border border-black/10 font-montserrat text-base transition-all focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 bg-[#fdfdfd]"
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                ></textarea>
                            </div>
                            <button type="submit" className="bg-primary hover:bg-secondary text-white border-none py-4 px-8 rounded-[12px] font-semibold font-outfit cursor-pointer transition-all duration-200 w-full text-base tracking-wide hover:scale-[1.02]">
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="bg-primary text-white p-12 rounded-[30px] h-full">
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-2">
                                <h4 className="text-secondary text-lg font-bold uppercase tracking-wider">Physical Office</h4>
                                <p className="opacity-90 text-lg">Biashara Street, Nairobi, Kenya</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-secondary text-lg font-bold uppercase tracking-wider">Direct Line</h4>
                                <p className="opacity-90 text-lg">+254 723 852 270</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-secondary text-lg font-bold uppercase tracking-wider">Email Support</h4>
                                <p className="opacity-90 text-lg">sales@farmtechacademy.com</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-secondary text-lg font-bold uppercase tracking-wider">Working Hours</h4>
                                <p className="opacity-90 text-lg">Mon - Fri: 8:00 AM - 5:00 PM</p>
                                <p className="opacity-90 text-lg">Sat: 9:00 AM - 1:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Toast Notification */}
            <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-primary text-white py-4 px-10 rounded-full font-medium shadow-lg z-[2000] transition-transform duration-600 whitespace-nowrap ${showToast ? "translate-y-0" : "translate-y-[100px]"}`}>
                Message sent successfully! Our team will contact you soon.
            </div>

            <Footer />
        </main>
    );
}
