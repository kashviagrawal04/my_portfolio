import React from "react";
import { useWindowContext } from "#context/WindowContext.jsx";
import { FolderLock } from "lucide-react";

const DesktopHints = () => {
    const { isHacked, openWindow } = useWindowContext();

    return (
        <div className="absolute inset-0 pointer-events-none z-0">
            {/* Sticky Note */}
            <div className="absolute top-24 right-10 w-48 bg-yellow-200 text-black p-4 shadow-lg transform rotate-3 pointer-events-auto cursor-pointer hover:rotate-0 transition-transform duration-300" style={{ boxShadow: "2px 4px 10px rgba(0,0,0,0.3)" }}>
                <div className="w-4 h-4 bg-red-500 rounded-full mx-auto -mt-6 mb-2 shadow-sm opacity-80" />
                <p className="font-sans text-sm font-medium leading-tight text-center">
                    Do u wanna see if she is the right fit for the role? 🤫<br/><br/>
                    <span className="opacity-70 text-xs font-mono">P.S. try hacking the terminal (sudo hack)</span>
                </p>
            </div>
        </div>
    );
};

export default DesktopHints;
