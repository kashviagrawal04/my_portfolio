import React, { useState } from "react";
import Window from "./Window.jsx";
import { locations } from "#constants/index.js";

const Finder = () => {
    const [activeTab, setActiveTab] = useState("work");
    const [currentFolder, setCurrentFolder] = useState(null);
    
    const currentTab = locations[activeTab];
    const itemsToShow = currentFolder ? currentFolder.children : currentTab.children;

    const handleTabChange = (key) => {
        setActiveTab(key);
        setCurrentFolder(null); // Reset folder view when changing tabs
    };

    return (
        <Window appId="finder">
            <div className="flex h-full">
                {/* Sidebar */}
                <div className="sidebar">
                    <h3>Favorites</h3>
                    <ul>
                        {Object.entries(locations).map(([key, loc]) => (
                            <li
                                key={loc.id}
                                className={activeTab === key ? "active" : "not-active"}
                                onClick={() => handleTabChange(key)}
                            >
                                <img src={loc.icon} alt={loc.name} className="w-4 h-4" />
                                <p className="text-sm font-medium">{loc.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Content */}
                <div className="content relative">
                    {currentFolder && (
                        <button 
                            onClick={() => setCurrentFolder(null)}
                            className="absolute top-2 left-2 z-50 px-3 py-1 bg-gray-200 text-sm font-medium rounded hover:bg-gray-300 transition"
                        >
                            ← Back
                        </button>
                    )}
                    <ul>
                        {itemsToShow && itemsToShow.map((child) => (
                            <li
                                key={child.id}
                                className={child.position}
                                onDoubleClick={() => {
                                    if (child.kind === "folder") {
                                        setCurrentFolder(child);
                                    } else if (child.fileType === "url") {
                                        window.open(child.href, "_blank");
                                    } else if (child.fileType === "pdf") {
                                        window.open("/files/" + child.name, "_blank");
                                    } else if (child.fileType === "img") {
                                        window.open(child.imageUrl, "_blank");
                                    } else if (child.fileType === "txt") {
                                        alert(child.description ? child.description.join("\n") : "Text file opened.");
                                    } else {
                                        console.log("Opened:", child.name);
                                    }
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
