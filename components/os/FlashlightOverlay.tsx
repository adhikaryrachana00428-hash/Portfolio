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

    window.addEventListener("mousemove", handleMouseMove);
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
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isInside]);

  // CSS Radial Gradient that acts as a flashlight beam
  // The center is fully transparent, fading into absolute black.
  const gradient = isInside
    ? `radial-gradient(circle 180px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 0, 0, 0) 0%, rgba(6, 6, 5, 0.1) 40%, rgba(6, 6, 5, 0.9) 80%, rgba(6, 6, 5, 0.99) 100%)`
    : `radial-gradient(circle 180px at center, rgba(6, 6, 5, 0.99) 100%)`;

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
