import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowContext } from "#context/WindowContext.jsx";

const BootScreen = () => {
    const { isBooting, setIsBooting } = useWindowContext();

    useEffect(() => {
        if (isBooting) {
            // Simulate a 4-second boot sequence
            const timer = setTimeout(() => {
                setIsBooting(false);
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [isBooting, setIsBooting]);

    return (
        <AnimatePresence>
            {isBooting && (
                <motion.div
                    className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center select-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Apple Logo */}
                    <div className="text-white mb-16">
                        <img src="/images/apple-logo.png" alt="Apple" className="w-24 h-24 object-contain invert" />
                    </div>

                    {/* Loading Bar Container */}
                    <div className="w-48 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        {/* Loading Bar Progress */}
                        <motion.div
                            className="h-full bg-white"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 3.5, ease: "easeInOut" }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BootScreen;
