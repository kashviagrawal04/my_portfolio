import React, { useRef, useEffect } from "react";
import { useWindowContext } from "#context/WindowContext.jsx";

const AppleMenu = ({ onClose, btnRef }) => {
    const ref = useRef(null);
    const { setIsLocked, openWindow, setIsBooting, setIsSleeping } = useWindowContext();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                ref.current &&
                !ref.current.contains(event.target) &&
                btnRef.current &&
                !btnRef.current.contains(event.target)
            ) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose, btnRef]);

    const handleLock = () => {
        setIsLocked(true);
        onClose();
    };

    const handleSleep = () => {
        setIsSleeping(true);
        onClose();
    };

    const handleBoot = () => {
        setIsBooting(true);
        onClose();
    };

    const handleAction = (appId) => {
        if (appId) {
            openWindow(appId);
        }
        onClose();
    };

    const MenuItem = ({ children, onClick, hint }) => {
        return (
            <div
                className="flex items-center justify-between px-3 py-1 text-[13.5px] cursor-default rounded hover:bg-blue-500 hover:text-white transition-colors select-none mx-1"
                onClick={onClick}
            >
                <span>{children}</span>
                {hint && <span className="text-[12px] opacity-70 ml-4 font-mono tracking-widest">{hint}</span>}
            </div>
        );
    };

    const Divider = () => <div className="h-px bg-gray-300 my-1 mx-2" />;

    return (
        <div
            ref={ref}
            className="absolute top-8 left-2 w-64 bg-white/90 backdrop-blur-md shadow-2xl border border-gray-200 rounded-lg py-1 z-[9999] text-gray-800 font-sans flex flex-col"
        >
            <MenuItem onClick={() => handleAction("about")}>About This Mac</MenuItem>
            <Divider />
            <MenuItem onClick={() => handleAction("settings")}>System Settings...</MenuItem>
            <MenuItem onClick={() => handleAction("appstore")}>App Store...</MenuItem>
            <Divider />
            <MenuItem onClick={() => handleAction("recent")}>Recent Items ›</MenuItem>
            <Divider />
            <MenuItem onClick={() => handleAction("forcequit")} hint="⌥⌘⎋">Force Quit...</MenuItem>
            <Divider />
            <MenuItem onClick={handleSleep}>Sleep</MenuItem>
            <MenuItem onClick={handleBoot}>Restart...</MenuItem>
            <MenuItem onClick={handleBoot}>Shut Down...</MenuItem>
            <Divider />
            <MenuItem onClick={handleLock} hint="⌃⌘Q">Lock Screen</MenuItem>
            <MenuItem onClick={handleLock} hint="⇧⌘Q">Log Out Kashvi...</MenuItem>
        </div>
    );
};

export default AppleMenu;
