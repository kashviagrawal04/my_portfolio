import { useRef } from "react";
import { Tooltip } from "react-tooltip";
import gsap from "gsap";
import { useWindowContext } from "#context/WindowContext.jsx";

import { dockApps } from "#constants";
import { useGSAP } from "@gsap/react";
import "react-tooltip/dist/react-tooltip.css";

const Dock = () => {
  const dockRef = useRef(null);

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = dock.querySelectorAll(".dock-icon");

    // --------------------------
    // Animate individual icons
    // --------------------------
    const animateIcons = (mouseX) => {
      const { left } = dock.getBoundingClientRect();

      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();

        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);

        // Smooth exponential falloff for scaling
        const intensity = Math.exp(-(distance ** 2.5) / 19000);

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    // --------------------------
    // Mouse move handler
    // --------------------------
    const handleMouseMove = (e) => {
      const { left } = dock.getBoundingClientRect();
      animateIcons(e.clientX - left);
    };

    // --------------------------
    // Reset icons when mouse leaves
    // --------------------------
    const resetIcons = () => {
      icons.forEach((icon) =>
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        })
      );
    };

    // Event listeners
    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcons);

    // Cleanup
    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcons);
    };
  }, [dockRef]);

  const { openWindow } = useWindowContext();

  // App click handler (tutorial fills this later)
  const toggleApp = (app) => {
    if (app.canOpen) {
      openWindow(app.id);
    }
  };

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => toggleApp({ id, canOpen })}
            >
              <img
                src={`/images/${icon}`}
                alt={name}
                loading="lazy"
                className={canOpen ? "" : "opacity-60"}
              />
            </button>
          </div>
        ))}
      </div>

      {/* Tooltip */}
      <Tooltip id="dock-tooltip" place="top" className="dock-tooltip" />
    </section>
  );
};

export default Dock;
