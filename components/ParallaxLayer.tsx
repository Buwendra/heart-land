"use client";

import React, { useEffect, useRef, ReactNode } from "react";

type ParallaxLayerProps = {
  speed: number;
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
};

export default function ParallaxLayer({
  speed,
  className,
  style,
  children,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        ref.current.style.transform = `translateY(${window.scrollY * speed}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
