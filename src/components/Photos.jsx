import React from "react";
import Window from "./Window.jsx";
import { photosLinks, gallery } from "#constants/index.js";

const Photos = () => {
    return (
        <Window appId="photos" title="Photos">
            <div className="flex h-[450px]">
                {/* Sidebar */}
                <div className="sidebar">
                    <h2>Photos</h2>
                    <ul>
                        {photosLinks.map((link) => (
                            <li key={link.id}>
                                <img src={link.icon} alt={link.title} />
                                <p>{link.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Content */}
                <div className="gallery flex-1 bg-white overflow-y-auto">
                    <ul className="h-full">
                        {gallery.map((item) => (
                            <li key={item.id}>
                                <img src={item.img} alt={`Gallery ${item.id}`} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Window>
    );
};

export default Photos;
