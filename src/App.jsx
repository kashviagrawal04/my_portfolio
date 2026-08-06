import { WindowProvider, useWindowContext } from "#context/WindowContext.jsx";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    Navbar,
    Welcome,
    Dock,
    Finder,
    Safari,
    Photos,
    Terminal,
    Contact,
    Launchpad,
    Spotlight,
    LockScreen,
    Bear,
    KashviGPT,
    DesktopHints,
    BootScreen,
    AboutMac,
    SystemSettings,
    AppStore,
    ForceQuit,
} from "#components/index.js";

const App = () => {
    return (
        <WindowProvider>
            <AppContent />
        </WindowProvider>
    );
};

const AppContent = () => {
    const { isSleeping, setIsSleeping } = useWindowContext();
    return (
        <main>
            <AnimatePresence>
                <LockScreen />
            </AnimatePresence>
            
            {/* Sleep Screen overlay */}
            <AnimatePresence>
                {isSleeping && (
                    <motion.div 
                        className="fixed inset-0 z-[9999] bg-black cursor-default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsSleeping(false)}
                    />
                )}
            </AnimatePresence>

            <Navbar />
            <DesktopHints />
            <Welcome />
            
            <Launchpad />
            <Spotlight />
            <Finder />
            <Bear />
            <KashviGPT />
            <Safari />
            <Photos />
            <Terminal />
            <Contact />
            
            <AboutMac />
            <SystemSettings />
            <AppStore />
            <ForceQuit />

            <BootScreen />
            <Dock />
        </main>
    );
};

export default App;
