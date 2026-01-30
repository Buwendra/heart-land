"use client";

import { useEffect, useRef, ReactNode } from "react";

export default function ParallaxLayer({
  speed,
  className,
  style,
  children,
}: {
  speed: number;
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        // smoother + less “jump”
        ref.current.style.transform = `translate3d(0, ${window.scrollY * speed}px, 0)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
