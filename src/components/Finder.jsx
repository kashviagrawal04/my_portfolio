import React, { useState } from "react";
import Window from "./Window.jsx";
import { locations } from "#constants/index.js";

const Finder = () => {
    const [activeTab, setActiveTab] = useState("work");
    
    const currentTab = locations[activeTab];

    return (
        <Window appId="finder">
            <div className="flex h-[500px]">
                {/* Sidebar */}
                <div className="sidebar">
                    <h3>Favorites</h3>
                    <ul>
                        {Object.entries(locations).map(([key, loc]) => (
                            <li
                                key={loc.id}
                                className={activeTab === key ? "active" : "not-active"}
                                onClick={() => setActiveTab(key)}
                            >
                                <img src={loc.icon} alt={loc.name} className="w-4 h-4" />
                                <p className="text-sm font-medium">{loc.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Content */}
                <div className="content">
                    <ul>
                        {currentTab.children.map((child) => (
                            <li
                                key={child.id}
                                className={child.position}
                                onDoubleClick={() => {
                                    // Normally this would open a specific file or folder
                                    console.log("Opened:", child.name);
                                }}
                            >
                                <img src={child.icon} alt={child.name} />
                                <p>{child.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Window>
    );
};

export default Finder;
