import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowContext } from "#context/WindowContext.jsx";
import { apps } from "#constants/index.js";

const Launchpad = () => {
    const { windows, openWindow, closeWindow } = useWindowContext();
    const [searchText, setSearchText] = useState("");

    const isOpen = windows?.launchpad?.isOpen;

    const onClose = () => closeWindow("launchpad");

    const handleAppClick = (appId) => {
        if (appId !== "launchpad") {
            openWindow(appId);
        }
        onClose();
    };

    const filteredApps = apps.filter(app => 
        app.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[100] overflow-hidden"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
                    onClick={onClose}
                >
                    {/* Blur Backdrop */}
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-3xl saturate-200">
                        {/* Search Bar */}
                        <div className="flex justify-center mt-12">
                            <motion.div 
                                className="flex items-center bg-white/10 border border-white/20 rounded-xl px-4 py-1 backdrop-blur-xl w-64 h-10 shadow-inner"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.3 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <svg className="w-4 h-4 text-white/60 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input 
                                    type="text" 
                                    placeholder="Search" 
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                    className="bg-transparent border-none outline-none text-white text-sm font-medium w-full placeholder:text-white/50"
                                />
                            </motion.div>
                        </div>

                        {/* App Grid */}
                        <div className="max-w-4xl mx-auto mt-16 px-8 grid grid-cols-4 sm:grid-cols-6 gap-y-12 gap-x-4">
                            {filteredApps.map((app, index) => (
                                <motion.div
                                    key={app.id}
                                    className="flex flex-col items-center justify-start gap-2 cursor-pointer group"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleAppClick(app.id);
                                    }}
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ delay: index * 0.02 + 0.1, duration: 0.3 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 p-2 shadow-lg backdrop-blur-md border border-white/10 flex items-center justify-center">
                                        <img 
                                            src={app.icon} 
                                            alt={app.name} 
                                            className={`drop-shadow-md ${
                                                app.id === 'kashvigpt' ? 'w-[85%] h-[85%] object-cover rounded-xl bg-black/10' : 
                                                app.id === 'launchpad' ? 'w-full h-full object-contain scale-[1.15]' : 
                                                'w-full h-full object-contain'
                                            }`} 
                                        />
                                    </div>
                                    <span className="text-white text-xs sm:text-sm font-medium tracking-wide drop-shadow-md">
                                        {app.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Launchpad;
