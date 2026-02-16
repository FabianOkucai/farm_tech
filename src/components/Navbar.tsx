import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const textColor = isHomePage ? "text-white" : "text-primary";
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInitial, setUserInitial] = useState("");

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setIsLoggedIn(true);
            const userData = JSON.parse(user);
            setUserInitial(userData.fullname?.charAt(0).toUpperCase() || "U");
        } else {
            setIsLoggedIn(false);
        }
    }, [location]);

    return (
        <header
            className="absolute top-0 left-0 w-full z-[1000] flex justify-between items-center px-[5%] py-8 bg-transparent"
        >
            <div className="logo">
                <Link to="/">
                    <h1 className={`text-2xl font-extrabold cursor-pointer tracking-tight ${textColor}`}>
                        Farmtech Academy
                    </h1>
                </Link>
            </div>
            <div className="flex items-center gap-8">
                {isLoggedIn ? (
                    <Link to="/profile" className={`${textColor} font-semibold hover:opacity-70 transition-opacity flex items-center gap-2`}>
                        <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-sm uppercase">
                            {userInitial}
                        </div>
                        Profile
                    </Link>
                ) : (
                    <Link to="/login" className={`${textColor} font-semibold hover:opacity-70 transition-opacity`}>
                        Login
                    </Link>
                )}
                <Link to="/contact">
                    <button className="bg-secondary text-white border-none py-3 px-10 rounded-full font-semibold font-outfit cursor-pointer transition-all duration-300 hover:bg-accent hover:-translate-y-0.5 shadow-[0_4px_12px_rgba(16,185,129,0.3)] hover:shadow-[0_6px_16px_rgba(245,158,11,0.4)] whitespace-nowrap">
                        Contact Us
                    </button>
                </Link>
            </div>
        </header>
    );
}
