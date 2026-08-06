import React, { useState } from "react";
import Window from "./Window.jsx";
import { photosLinks, gallery } from "#constants/index.js";

const Photos = () => {
    const [activeTab, setActiveTab] = useState(1);

    const getFilteredGallery = () => {
        switch (activeTab) {
            case 1: // Library - all
                return gallery;
            case 2: // Memories - subset
                return gallery.filter(item => [1, 3].includes(item.id));
            case 3: // Places - subset
                return gallery.filter(item => [1, 2].includes(item.id));
            case 4: // People - all
                return gallery;
            case 5: // Favorites - subset
                return gallery.filter(item => [2, 4].includes(item.id));
            default:
                return gallery;
        }
    };

    return (
        <Window appId="photos" title="Photos">
            <div className="flex h-full">
                {/* Sidebar */}
                <div className="sidebar">
                    <h2>Photos</h2>
                    <ul>
                        {photosLinks.map((link) => (
                            <li 
                                key={link.id} 
                                onClick={() => setActiveTab(link.id)}
                                className={`cursor-pointer transition-colors ${activeTab === link.id ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
                            >
                                <img src={link.icon} alt={link.title} className={activeTab === link.id ? 'opacity-100' : 'opacity-70'} />
                                <p className={activeTab === link.id ? 'font-medium' : ''}>{link.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Content */}
                <div className="gallery flex-1 bg-white overflow-y-auto">
                    {getFilteredGallery().length > 0 ? (
                        <ul className="h-full">
                            {getFilteredGallery().map((item) => (
                                <li key={item.id} className="animate-fade-in">
                                    <img src={item.img} alt={`Gallery ${item.id}`} />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-400">
                            <p>No photos here</p>
                        </div>
                    )}
                </div>
            </div>
        </Window>
    );
};

export default Photos;
