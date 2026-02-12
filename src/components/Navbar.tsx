"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const textColor = isHomePage ? "text-white" : "text-primary";

    return (
        <header
            className="absolute top-0 left-0 w-full z-[1000] flex justify-between items-center px-[5%] py-8 bg-transparent"
        >
            <div className="logo">
                <Link href="/">
                    <h1 className={`text-2xl font-extrabold cursor-pointer tracking-tight ${textColor}`}>
                        Farmtech Academy
                    </h1>
                </Link>
            </div>
            <div className="flex items-center gap-8">
                <Link href="/login" className={`${textColor} font-semibold hover:opacity-70 transition-opacity`}>
                    Login
                </Link>
                <Link href="/contact">
                    <button className="bg-secondary text-white border-none py-3 px-10 rounded-full font-semibold font-outfit cursor-pointer transition-all duration-300 hover:bg-accent hover:-translate-y-0.5 shadow-[0_4px_12px_rgba(16,185,129,0.3)] hover:shadow-[0_6px_16px_rgba(245,158,11,0.4)] whitespace-nowrap">
                        Contact Us
                    </button>
                </Link>
            </div>
        </header>
    );
}
