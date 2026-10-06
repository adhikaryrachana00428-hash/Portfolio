"use client";

import { useEffect, useState, useRef } from "react";

export default function FlashlightOverlay() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isInside) setIsInside(true);
    };

    const handleMouseLeave = () => {
      setIsInside(false);
    };

    const handleMouseEnter = () => {
      setIsInside(true);
    };

    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setMousePos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
        if (!isInside) setIsInside(true);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouch, { passive: true });
    window.addEventListener("touchmove", handleTouch, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Initial position in center of screen if not moved yet
    setMousePos({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });
    setIsInside(true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("touchmove", handleTouch);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isInside]);

  // CSS Radial Gradient that acts as a flashlight beam
  // The center is fully transparent, fading into absolute black.
  const radius = typeof window !== "undefined" && window.innerWidth < 640 ? "150px" : "190px";
  const gradient = isInside
    ? `radial-gradient(circle ${radius} at ${mousePos.x}px ${mousePos.y}px, rgba(0, 0, 0, 0) 0%, rgba(6, 6, 5, 0.1) 40%, rgba(6, 6, 5, 0.9) 80%, rgba(6, 6, 5, 0.99) 100%)`
    : `radial-gradient(circle ${radius} at center, rgba(6, 6, 5, 0.99) 100%)`;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[90] transition-opacity duration-1000"
      style={{
        background: gradient,
      }}
    />
  );
}
