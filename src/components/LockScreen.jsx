import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Power, RotateCcw, Moon } from "lucide-react";

import { useWindowContext } from "#context/WindowContext.jsx";

const LockScreen = () => {
    const { isLocked, setIsLocked } = useWindowContext();
    const [password, setPassword] = useState("");
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const handleLogin = () => {
        setIsAuthenticating(true);
        // Simulate a tiny delay for realism
        setTimeout(() => {
            setIsLocked(false);
            setIsAuthenticating(false);
        }, 600);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleLogin();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    if (!isLocked && !isAuthenticating) return null;

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/20 backdrop-blur-md select-none"
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }} // macOS slides up to unlock
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Background Wallpaper Base (to hide main app underneath) */}
            <div className="absolute inset-0 bg-[url('/images/wallpaper.png')] bg-cover bg-center bg-no-repeat -z-10" />
            <div className="absolute inset-0 bg-black/10 backdrop-blur-sm -z-10" />

            {/* Profile Section */}
            <div className="flex flex-col items-center -mt-20">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl mb-4 bg-gray-200">
                    {/* Make sure to use the user's actual image if available. Default to a placeholder if not. */}
                    <img 
                        src="/images/kashvi-garden.png" 
                        alt="Profile" 
                        className="w-full h-full object-cover" 
                    />
                </div>
                
                <h1 className="text-white text-3xl font-semibold tracking-wide drop-shadow-md mb-6">
                    Kashvi Agrawal
                </h1>

                {!isAuthenticating ? (
                    <motion.button
                        onClick={handleLogin}
                        className="flex items-center gap-2 px-8 py-1.5 bg-white/20 hover:bg-white/30 border border-white/30 rounded-full text-white font-medium transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14" />
                        </svg>
                        Sign In
                    </motion.button>
                ) : (
                    <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin mt-2" />
                )}
                
                <p className="text-white/70 text-sm mt-4 font-medium">
                    Press Enter to sign in
                </p>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-12 flex gap-12 sm:gap-20">
                <div className="flex flex-col items-center gap-2 group cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center bg-black/20 group-hover:bg-white/10 transition-colors">
                        <Moon size={20} className="text-white" />
                    </div>
                    <span className="text-white font-medium text-xs tracking-wider">Sleep</span>
                </div>
                
                <div className="flex flex-col items-center gap-2 group cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center bg-black/20 group-hover:bg-white/10 transition-colors">
                        <RotateCcw size={20} className="text-white" />
                    </div>
                    <span className="text-white font-medium text-xs tracking-wider">Restart</span>
                </div>
                
                <div className="flex flex-col items-center gap-2 group cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center bg-black/20 group-hover:bg-white/10 transition-colors">
                        <Power size={20} className="text-white" />
                    </div>
                    <span className="text-white font-medium text-xs tracking-wider">Shut Down</span>
                </div>
            </div>
        </motion.div>
    );
};

export default LockScreen;
