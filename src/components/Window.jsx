import React, { useState } from "react";
import { Rnd } from "react-rnd";
import { useWindowContext } from "#context/WindowContext.jsx";
import { motion, AnimatePresence } from "framer-motion";

const Window = ({ appId, title, children, minWidth = 400, minHeight = 300, defaultWidth = 700, defaultHeight = 500 }) => {
    const { windows, closeWindow, bringToFront } = useWindowContext();
    const windowState = windows[appId];

    const [isMaximized, setIsMaximized] = useState(false);

    // Window defaults
    const winWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;
    const winHeight = typeof window !== 'undefined' ? window.innerHeight : 768;

    const [state, setState] = useState({
        width: Math.min(winWidth, defaultWidth),
        height: Math.min(winHeight, defaultHeight),
        x: (winWidth - Math.min(winWidth, defaultWidth)) / 2 + (Math.random() * 40 - 20),
        y: (winHeight - Math.min(winHeight, defaultHeight)) / 2 - 50 + (Math.random() * 40 - 20),
    });

    if (!windowState?.isOpen) return null;

    const isMobile = winWidth < 768;
    const width = (isMaximized || isMobile) ? winWidth : state.width;
    const height = (isMaximized || isMobile) ? winHeight - 32 : state.height; // -32 for top bar maybe?

    return (
        <Rnd
            bounds="parent"
            size={{ width, height }}
            position={{
                x: (isMaximized || isMobile) ? 0 : state.x,
                y: (isMaximized || isMobile) ? 32 : state.y, // assuming 32px top bar
            }}
            onDragStop={(e, d) => setState((prev) => ({ ...prev, x: d.x, y: d.y }))}
            onResizeStop={(e, direction, ref, delta, position) => {
                setState((prev) => ({
                    ...prev,
                    width: parseInt(ref.style.width),
                    height: parseInt(ref.style.height),
                    ...position,
                }));
            }}
            minWidth={minWidth}
            minHeight={minHeight}
            dragHandleClassName="window-header"
            disableDragging={isMaximized || isMobile}
            enableResizing={!(isMaximized || isMobile)}
            style={{ zIndex: windowState.zIndex, pointerEvents: "auto" }}
            onMouseDown={() => bringToFront(appId)}
            className={`absolute flex flex-col rounded-xl overflow-hidden bg-white/90 backdrop-blur-md shadow-2xl border border-white/20 transition-all ${isMaximized ? 'rounded-none' : ''}`}
            id={`window-${appId}`}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full flex flex-col"
            >
                {/* Window Header (Draggable Area) */}
                <div 
                    className="window-header flex items-center justify-between px-4 py-2 bg-gradient-to-b from-gray-100 to-gray-200 border-b border-gray-300 select-none cursor-default"
                    onDoubleClick={() => setIsMaximized(!isMaximized)}
                >
                    <div className="flex gap-2 items-center w-20">
                        <button
                            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 focus:outline-none flex items-center justify-center group"
                            onClick={(e) => {
                                e.stopPropagation();
                                closeWindow(appId);
                            }}
                        >
                            <svg className="hidden group-hover:block w-2 h-2 text-red-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg>
                        </button>
                        <button 
                            className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 focus:outline-none flex items-center justify-center group"
                            onClick={(e) => {
                                e.stopPropagation();
                                // Implement minimize logic if needed
                            }}
                        >
                            <svg className="hidden group-hover:block w-2 h-2 text-yellow-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14"/></svg>
                        </button>
                        <button 
                            className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 focus:outline-none flex items-center justify-center group"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsMaximized(!isMaximized);
                            }}
                        >
                            <svg className="hidden group-hover:block w-2 h-2 text-green-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                        </button>
                    </div>
                    {title && (
                        <div className="flex-1 text-center font-medium text-gray-700 text-sm tracking-wide mr-20">
                            {title}
                        </div>
                    )}
                </div>
                
                {/* Window Content */}
                <div className="flex-1 overflow-auto bg-white/50">
                    {children}
                </div>
            </motion.div>
        </Rnd>
    );
};

export default Window;
