"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Wallpaper() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Parallax coordinates using Framer Motion springs for butter-smooth movement
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 45, damping: 20 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (typeof window === "undefined") return;
      const { innerWidth, innerHeight } = window;
      
      // Calculate normalized mouse positions (-0.5 to 0.5)
      const nx = (e.clientX / innerWidth) - 0.5;
      const ny = (e.clientY / innerHeight) - 0.5;
      
      // Map to small offset range (max 15px movement in each direction)
      x.set(nx * -24);
      y.set(ny * -24);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  // Ambient floating particles canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Handle resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      fadeSpeed: number;
      targetOpacity: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1; // 1px to 4px
        this.speedY = -(Math.random() * 0.2 + 0.05); // Slow upward drift
        this.speedX = (Math.random() * 0.1 - 0.05); // Soft swaying
        this.opacity = Math.random() * 0.4;
        this.fadeSpeed = 0.002 + Math.random() * 0.003;
        this.targetOpacity = Math.random() * 0.4 + 0.1;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;

        // Wrap around screen edges
        if (this.y < -10) {
          this.y = height + 10;
          this.x = Math.random() * width;
        }
        if (this.x < -10 || this.x > width + 10) {
          this.speedX = -this.speedX;
        }

        // Fade in/out gently
        if (this.opacity < this.targetOpacity) {
          this.opacity += this.fadeSpeed;
        } else {
          this.opacity -= this.fadeSpeed;
          if (this.opacity <= 0) {
            this.opacity = 0;
            this.targetOpacity = Math.random() * 0.4 + 0.1;
          }
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // Soft warm yellow/orange particles
        ctx.fillStyle = `rgba(235, 215, 175, ${this.opacity})`;
        ctx.shadowBlur = this.size * 2;
        ctx.shadowColor = "rgba(235, 215, 175, 0.4)";
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = 25; // Keep it low and atmospheric

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden bg-[#0A0A0A] select-none pointer-events-none"
    >
      {/* Background Image with Ken Burns zoom & mouse parallax */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          backgroundImage: "url('/assets/images/wallpaper.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{
          scale: [1.02, 1.05, 1.02],
        }}
        transition={{
          duration: 35,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute -inset-8 w-[calc(100%+64px)] h-[calc(100%+64px)] opacity-85 brightness-[0.75] contrast-[0.95]"
      />

      {/* Floating particles overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-[2] mix-blend-screen opacity-70 pointer-events-none"
      />

      {/* Soft warm ambient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17]/20 via-transparent to-[#1C1A17]/10 z-[1] pointer-events-none" />
    </div>
  );
}
