import React from "react";
import Window from "./Window.jsx";

const AboutMac = () => {
    return (
        <Window appId="about" title="About This Mac" width={500} height={300}>
            <div className="flex bg-white/90 backdrop-blur-md h-full select-none text-gray-800">
                <div className="w-1/3 flex items-center justify-center bg-gray-100">
                    <img src="/images/apple-logo.png" alt="Mac" className="w-32 h-32 object-contain" />
                </div>
                <div className="w-2/3 p-6 flex flex-col justify-center">
                    <h2 className="text-3xl font-semibold tracking-wide mb-1">KashviBook Pro</h2>
                    <p className="text-sm text-gray-500 mb-4">16-inch, 2026</p>
                    
                    <div className="text-sm font-medium space-y-2">
                        <div className="flex">
                            <span className="w-20 text-gray-500">Chip</span>
                            <span>Apple M4 Max</span>
                        </div>
                        <div className="flex">
                            <span className="w-20 text-gray-500">Memory</span>
                            <span>64 GB</span>
                        </div>
                        <div className="flex">
                            <span className="w-20 text-gray-500">Startup Disk</span>
                            <span>Macintosh HD</span>
                        </div>
                        <div className="flex">
                            <span className="w-20 text-gray-500">Serial Number</span>
                            <span>KASHVI2026AGRAWAL</span>
                        </div>
                        <div className="flex">
                            <span className="w-20 text-gray-500">macOS</span>
                            <span>Sequoia 15.0</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button className="px-4 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded border border-gray-300 transition-colors">
                            More Info...
                        </button>
                    </div>
                </div>
            </div>
        </Window>
    );
};

export default AboutMac;
