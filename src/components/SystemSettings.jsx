import React, { useState } from "react";
import Window from "./Window.jsx";
import { Monitor, LayoutGrid, Paintbrush, Wifi, Bluetooth } from "lucide-react";

const SystemSettings = () => {
    const [activeTab, setActiveTab] = useState("appearance");

    const tabs = [
        { id: "wifi", name: "Wi-Fi", icon: <Wifi size={16} />, color: "bg-blue-500" },
        { id: "bluetooth", name: "Bluetooth", icon: <Bluetooth size={16} />, color: "bg-blue-600" },
        { id: "appearance", name: "Appearance", icon: <Paintbrush size={16} />, color: "bg-purple-500" },
        { id: "desktop", name: "Desktop & Dock", icon: <LayoutGrid size={16} />, color: "bg-orange-500" },
        { id: "displays", name: "Displays", icon: <Monitor size={16} />, color: "bg-blue-400" },
    ];

    return (
        <Window appId="settings" title="System Settings" width={650} height={450}>
            <div className="flex bg-gray-50 h-full select-none text-gray-800 font-sans">
                {/* Sidebar */}
                <div className="w-1/3 bg-gray-100 border-r border-gray-300 p-2 overflow-y-auto">
                    <div className="flex items-center gap-2 px-2 mb-4 mt-2">
                        <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                            <img src="/images/kashvi-garden.png" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Kashvi Agrawal</p>
                            <p className="text-[10px] text-gray-500">Apple ID, iCloud, Media & App Store</p>
                        </div>
                    </div>
                    
                    <div className="space-y-1">
                        {tabs.map((tab) => (
                            <div 
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer ${activeTab === tab.id ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
                            >
                                <div className={`p-1 rounded text-white ${tab.color}`}>
                                    {tab.icon}
                                </div>
                                <span className="text-sm font-medium">{tab.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="w-2/3 bg-white p-8">
                    {activeTab === "appearance" && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-6">Appearance</h2>
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center gap-2 cursor-pointer">
                                    <div className="w-20 h-16 rounded border-2 border-blue-500 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                                        <div className="w-full h-2 bg-gray-300 absolute top-0" />
                                        <p className="text-gray-400 font-medium">Light</p>
                                    </div>
                                    <span className="text-sm font-medium">Light</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                                    <div className="w-20 h-16 rounded border-2 border-transparent bg-gray-800 flex items-center justify-center relative overflow-hidden">
                                        <div className="w-full h-2 bg-gray-900 absolute top-0" />
                                        <p className="text-gray-500 font-medium">Dark</p>
                                    </div>
                                    <span className="text-sm font-medium">Dark</span>
                                </div>
                            </div>
                            <div className="mt-8 p-4 bg-gray-100 rounded-lg text-sm text-gray-600">
                                <p>Note: Dark Mode toggle is simulated for this portfolio presentation. It will be implemented system-wide in v2.0!</p>
                            </div>
                        </div>
                    )}
                    
                    {activeTab !== "appearance" && (
                        <div className="flex flex-col items-center justify-center h-full text-gray-400">
                            <Monitor size={48} className="mb-4 opacity-50" />
                            <p className="font-medium">Settings for {tabs.find(t => t.id === activeTab)?.name}</p>
                            <p className="text-sm mt-2">Available in the next update.</p>
                        </div>
                    )}
                </div>
            </div>
        </Window>
    );
};

export default SystemSettings;
