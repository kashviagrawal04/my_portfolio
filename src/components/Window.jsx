import React from "react";
import { useWindowContext } from "#context/WindowContext.jsx";

const Window = ({ appId, title, children }) => {
    const { windows, closeWindow, bringToFront } = useWindowContext();
    const windowState = windows[appId];

    if (!windowState?.isOpen) return null;

    return (
        <div
            id={appId}
            style={{ zIndex: windowState.zIndex }}
            onMouseDown={() => bringToFront(appId)}
        >
            <div id="window-header">
                <div id="window-controls">
                    <button
                        className="close"
                        onClick={(e) => {
                            e.stopPropagation();
                            closeWindow(appId);
                        }}
                        aria-label="Close window"
                    />
                    <button className="minimize" aria-label="Minimize window" />
                    <button className="maximize" aria-label="Maximize window" />
                </div>
                {title && <h2>{title}</h2>}
            </div>
            {children}
        </div>
    );
};

export default Window;
