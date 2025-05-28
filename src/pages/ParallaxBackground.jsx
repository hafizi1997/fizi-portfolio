import React, { useEffect, useRef } from "react";

export const ParallaxBackground = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!backgroundRef.current) return;
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      backgroundRef.current.style.transform = `translate(${x * -20}px, ${
        y * -20
      }px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div
        ref={backgroundRef}
        className="w-full h-full transition-transform duration-200 ease-out"
      >
        {/* Blue Orb (Top Right) */}
        <div className="absolute top-[-300px] right-[-200px] w-[600px] h-[600px] rounded-full bg-[#0080ff]/20 blur-[150px]"></div>

        {/* Purple Orb (Bottom Left) */}
        <div className="absolute bottom-[-300px] left-[-200px] w-[600px] h-[600px] rounded-full bg-[#9333ea]/20 blur-[150px]"></div>

        {/* Yellow Orb (Center) */}
        <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=2787&auto=format&fit=crop')] opacity-[0.03] bg-repeat"></div>

        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015]"></div>
      </div>
    </div>
  );
};
