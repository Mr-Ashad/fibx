"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isOverInput, setIsOverInput] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(pointer: coarse)").matches;
    }
    return true; // Default to true, verify on client
  });

  // High performance motion values (no state re-renders on mousemove)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Outer ring spring configuration for smooth lag
  const ringX = useSpring(mouseX, { damping: 30, stiffness: 280, mass: 0.6 });
  const ringY = useSpring(mouseY, { damping: 30, stiffness: 280, mass: 0.6 });

  useEffect(() => {
    // Check if device supports touch
    const touchQuery = window.matchMedia("(pointer: coarse)");

    const handleTouchChange = (e: MediaQueryListEvent) => {
      setIsTouchDevice(e.matches);
    };

    touchQuery.addEventListener("change", handleTouchChange);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    let lastHovered = false;
    let lastOverInput = false;

    // Event delegation to detect hover on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInput = !!target.closest("input, textarea, select");
      const isInteractive = !!target.closest(
        'a, button, [role="button"], .card, [data-cursor="pointer"]'
      );
      
      if (isInteractive !== lastHovered) {
        lastHovered = isInteractive;
        setIsHovered(isInteractive);
      }
      if (isInput !== lastOverInput) {
        lastOverInput = isInput;
        setIsOverInput(isInput);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      touchQuery.removeEventListener("change", handleTouchChange);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice || !isVisible || isOverInput) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border-2.5 border-blue-500 pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{
          x: ringX,
          y: ringY,
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "rgba(37, 100, 235, 0.17)" : "rgba(0, 81, 255, 0)",
          borderColor: isHovered ? "rgba(0, 81, 255, 0.8)" : "rgba(2, 78, 242, 0.4)",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      />

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-brand pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
      />
    </>
  );
}
