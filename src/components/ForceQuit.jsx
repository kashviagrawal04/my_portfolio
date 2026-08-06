import React, { useState } from "react";
import Window from "./Window.jsx";
import { useWindowContext } from "#context/WindowContext.jsx";

const ForceQuit = () => {
    const { windows, closeWindow } = useWindowContext();
    const [selectedApp, setSelectedApp] = useState(null);

    // Get all open apps, excluding forcequit itself and background utilities if desired
    const openApps = Object.entries(windows)
        .filter(([id, config]) => config.isOpen && id !== "forcequit")
        .map(([id]) => id);

    const handleForceQuit = () => {
        if (selectedApp) {
            closeWindow(selectedApp);
            setSelectedApp(null);
        }
    };

    return (
        <Window appId="forcequit" title="Force Quit Applications" width={350} height={400}>
            <div className="flex flex-col bg-gray-100 h-full p-4 select-none text-gray-800 font-sans">
                <div className="flex items-start gap-4 mb-4">
                    <img src="/images/apple-logo.png" alt="Warning" className="w-12 h-12 object-contain" />
                    <div>
                        <h3 className="font-bold text-sm mb-1">Force Quit Applications</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            If an app doesn't respond for a while, select its name and click Force Quit.
                        </p>
                    </div>
                </div>

                <div className="flex-1 bg-white border border-gray-300 shadow-inner overflow-y-auto rounded p-1">
                    {openApps.length === 0 ? (
                        <p className="text-sm text-gray-500 text-center mt-4">No applications open.</p>
                    ) : (
                        openApps.map((appId) => (
                            <div 
                                key={appId}
                                onClick={() => setSelectedApp(appId)}
                                className={`px-3 py-1.5 text-sm cursor-pointer rounded ${selectedApp === appId ? 'bg-blue-500 text-white' : 'hover:bg-blue-50 text-black'}`}
                            >
                                <span className="capitalize">{appId}</span>
                            </div>
                        ))
                    )}
                </div>

                <div className="flex justify-between items-center mt-4">
                    <p className="text-[10px] text-gray-500 max-w-[200px]">You can open this window by pressing Option-Command-Escape.</p>
                    <button 
                        onClick={handleForceQuit}
                        disabled={!selectedApp}
                        className={`px-4 py-1.5 rounded text-sm font-medium transition-colors ${selectedApp ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                    >
                        Force Quit
                    </button>
                </div>
            </div>
        </Window>
    );
};

export default ForceQuit;
