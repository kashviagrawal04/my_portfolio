import React, { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";
import { navLinks, navIcons } from "#constants/index.js";
import { useWindowContext } from "#context/WindowContext.jsx";
import { AppleMenu } from "#components/index.js";

const Navbar = () => {
    const [time, setTime] = useState(new Date());
    const [isAppleMenuOpen, setIsAppleMenuOpen] = useState(false);
    const { openWindow } = useWindowContext();
    const appleBtnRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <nav className="fixed top-0 w-full z-[9990] flex justify-between items-center bg-white/50 backdrop-blur-3xl p-1 px-5 select-none text-sm font-medium">
            <div className="flex items-center gap-5">
                <div 
                    ref={appleBtnRef}
                    className={`p-1 px-2 rounded cursor-pointer transition-colors ${isAppleMenuOpen ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
                    onClick={() => setIsAppleMenuOpen(!isAppleMenuOpen)}
                >
                    <img src="/images/apple-logo.png" alt="Apple" className="w-[40px] h-[40px] object-contain" />
                </div>
                {isAppleMenuOpen && <AppleMenu onClose={() => setIsAppleMenuOpen(false)} btnRef={appleBtnRef} />}
            </div>
            
            <div>
            <ul className="flex items-center gap-4">
                {navIcons.map(({ id, img }) => (
                    <li key={id}>
                        <img
                            src={img}
                            className="icon-hover cursor-pointer w-[40px] h-[40px] object-contain"
                            alt={`icon-${id}`}
                            onClick={() => {
                                if (img.includes('search')) {
                                    openWindow('spotlight');
                                }
                            }}
                        />
                    </li>
                ))}
            </ul>
            </div>
            <time className="mr-2">
                    {dayjs(time).format("ddd MMM D h:mm A")}
            </time>
        </nav>
    );
};

export default Navbar;
