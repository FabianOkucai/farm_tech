"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
    const phone1 = "+254741901637";
    const phone2 = "+254723852270";

    const handleWhatsApp = (phone: string) => {
        window.open(`https://wa.me/${phone.replace(/\s+/g, '')}`, '_blank');
    };

    const handleSMS = (phone: string) => {
        window.location.href = `sms:${phone}`;
    };

    const handleCall = (phone: string) => {
        window.location.href = `tel:${phone}`;
    };

    return (
        <main className="min-h-screen bg-[#F9FAFB] relative">
            <Navbar />

            <section className="max-w-[1200px] mx-auto pt-40 pb-24 px-6">
                <div className="flex flex-col items-center gap-2 mb-16 text-center">
                    <h2 className="text-[3.5rem] mb-4 text-primary font-extrabold">Contact Us</h2>
                    <p className="text-text-muted text-[1.1rem] max-w-[600px]">
                        Ready to order supplies or have questions? Reach out via WhatsApp, SMS, or call us directly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
                    {/* Contact Card 1 */}
                    <div className="bg-white p-10 rounded-[30px] shadow-lg">
                        <h3 className="text-2xl font-bold text-primary mb-6">Primary Contact</h3>
                        <p className="text-3xl font-bold text-secondary mb-8">+254 741 901 637</p>
                        <div className="flex flex-col gap-3">
                            <button 
                                onClick={() => handleWhatsApp(phone1)}
                                className="bg-[#25D366] hover:bg-[#20BA5A] text-white py-4 px-6 rounded-[12px] font-semibold transition-all hover:scale-[1.02]"
                            >
                                WhatsApp
                            </button>
                            <button 
                                onClick={() => handleSMS(phone1)}
                                className="bg-primary hover:bg-secondary text-white py-4 px-6 rounded-[12px] font-semibold transition-all hover:scale-[1.02]"
                            >
                                Send SMS
                            </button>
                            <button 
                                onClick={() => handleCall(phone1)}
                                className="bg-accent hover:bg-[#D97706] text-white py-4 px-6 rounded-[12px] font-semibold transition-all hover:scale-[1.02]"
                            >
                                Call Now
                            </button>
                        </div>
                    </div>

                    {/* Contact Card 2 */}
                    <div className="bg-white p-10 rounded-[30px] shadow-lg">
                        <h3 className="text-2xl font-bold text-primary mb-6">Alternative Contact</h3>
                        <p className="text-3xl font-bold text-secondary mb-8">+254 723 852 270</p>
                        <div className="flex flex-col gap-3">
                            <button 
                                onClick={() => handleWhatsApp(phone2)}
                                className="bg-[#25D366] hover:bg-[#20BA5A] text-white py-4 px-6 rounded-[12px] font-semibold transition-all hover:scale-[1.02]"
                            >
                                WhatsApp
                            </button>
                            <button 
                                onClick={() => handleSMS(phone2)}
                                className="bg-primary hover:bg-secondary text-white py-4 px-6 rounded-[12px] font-semibold transition-all hover:scale-[1.02]"
                            >
                                Send SMS
                            </button>
                            <button 
                                onClick={() => handleCall(phone2)}
                                className="bg-accent hover:bg-[#D97706] text-white py-4 px-6 rounded-[12px] font-semibold transition-all hover:scale-[1.02]"
                            >
                                Call Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-primary text-white p-12 rounded-[30px] max-w-[900px] mx-auto mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-2">
                            <h4 className="text-secondary text-lg font-bold uppercase tracking-wider">Physical Office</h4>
                            <p className="opacity-90 text-lg">Biashara Street, Nairobi, Kenya</p>
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
            </section>

            <Footer />
        </main>
    );
}
