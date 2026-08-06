import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowContext } from "#context/WindowContext.jsx";
import { apps } from "#constants/index.js";

const Spotlight = () => {
    const { windows, closeWindow, openWindow } = useWindowContext();
    const [searchText, setSearchText] = useState("");
    const inputRef = useRef(null);

    const isOpen = windows?.spotlight?.isOpen;
    const onClose = () => {
        closeWindow("spotlight");
        setSearchText("");
    };

    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current.focus(), 100);
        }
    }, [isOpen]);

    // Handle ESC to close
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    const filteredApps = searchText 
        ? apps.filter(app => app.name.toLowerCase().includes(searchText.toLowerCase()))
        : [];

    const handleAppClick = (appId) => {
        if (appId !== "launchpad" && appId !== "spotlight") {
            openWindow(appId);
        }
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[20vh]" onClick={onClose}>
                    <motion.div
                        className="w-[600px] max-w-[90vw] bg-white/70 backdrop-blur-3xl rounded-xl shadow-2xl overflow-hidden border border-white/40 flex flex-col"
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Search Input */}
                        <div className="flex items-center px-4 py-3 border-b border-gray-300/50">
                            <svg className="w-6 h-6 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input 
                                ref={inputRef}
                                type="text" 
                                placeholder="Spotlight Search" 
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                className="bg-transparent border-none outline-none text-2xl font-light text-gray-800 w-full placeholder:text-gray-400"
                            />
                        </div>

                        {/* Search Results */}
                        {filteredApps.length > 0 && (
                            <div className="max-h-[400px] overflow-y-auto py-2">
                                {filteredApps.map((app) => (
                                    <div
                                        key={app.id}
                                        className="flex items-center px-6 py-3 hover:bg-blue-500 hover:text-white cursor-pointer group transition-colors"
                                        onClick={() => handleAppClick(app.id)}
                                    >
                                        <img src={app.icon} alt={app.name} className="w-8 h-8 object-contain mr-4" />
                                        <span className="text-lg font-medium text-gray-700 group-hover:text-white">
                                            {app.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                        {searchText && filteredApps.length === 0 && (
                            <div className="px-6 py-8 text-center text-gray-500">
                                No results found for "{searchText}"
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Spotlight;
