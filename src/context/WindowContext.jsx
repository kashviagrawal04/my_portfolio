import React, { createContext, useContext, useState } from "react";
import { WINDOW_CONFIG, INITIAL_Z_INDEX } from "#constants/index.js";

const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
    const [windows, setWindows] = useState(WINDOW_CONFIG);
    const [highestZIndex, setHighestZIndex] = useState(INITIAL_Z_INDEX);

    const openWindow = (appId) => {
        setHighestZIndex((prev) => prev + 1);
        setWindows((prev) => ({
            ...prev,
            [appId]: {
                ...prev[appId],
                isOpen: true,
                zIndex: highestZIndex + 1,
            },
        }));
    };

    const closeWindow = (appId) => {
        setWindows((prev) => ({
            ...prev,
            [appId]: {
                ...prev[appId],
                isOpen: false,
            },
        }));
    };

    const bringToFront = (appId) => {
        if (windows[appId].zIndex === highestZIndex) return;

        setHighestZIndex((prev) => prev + 1);
        setWindows((prev) => ({
            ...prev,
            [appId]: {
                ...prev[appId],
                zIndex: highestZIndex + 1,
            },
        }));
    };

    return (
        <WindowContext.Provider
            value={{ windows, openWindow, closeWindow, bringToFront }}
        >
            {children}
        </WindowContext.Provider>
    );
};

export const useWindowContext = () => useContext(WindowContext);
