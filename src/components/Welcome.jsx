import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const renderText = (text, className, baseWeight = 400) =>
  [...text].map((char, i) => (
    <span
      key={i}
      className={`${className} font-georama inline-block`}
      style={{ fontVariationSettings: `"wght" ${baseWeight}` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

const setupTextHover = (container, type) => {
  if (!container) return;

  const letters = container.querySelectorAll("span");
  const { default: base, max } = FONT_WEIGHTS[type];

  const animateLetter = (letter, weight, duration = 0.25) => {
    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `"wght" ${Math.round(weight)}`,
    });
  };

  const handleMouseMove = (e) => {
    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;

    letters.forEach((letter) => {
      const { left, width } = letter.getBoundingClientRect();
      const centerX = left - rect.left + width / 2;

      const distance = Math.abs(mouseX - centerX);
      const intensity = Math.max(0, (200 - distance * 2) / 200);

      const weight = base + (max - base) * intensity;

      animateLetter(letter, weight, 0.2);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => animateLetter(letter, base, 0.3));
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const titleCleanup = setupTextHover(titleRef.current, "title");
    const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle");

    return () => {
      subtitleCleanup?.();
      titleCleanup?.();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText(
          "Hello, I'm Kashvi! Welcome to my",
          "text-3xl font-georama",
          FONT_WEIGHTS.subtitle.default
        )}
      </p>

      <h1 ref={titleRef} className="mt-7">
        {renderText(
          "portfolio",
          "text-9xl italic font-georama",
          FONT_WEIGHTS.title.default
        )}
      </h1>

      <div className="small-screen">
        <p>This Portfolio is designed for desktop/tablet screens</p>
      </div>
    </section>
  );
};

export default Welcome;
