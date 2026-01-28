'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, ReactNode } from 'react';

// Animated Section Component
function AnimatedSection({
  children,
  className = '',
  direction = 'left'
}: {
  children: ReactNode;
  className?: string;
  direction?: 'left' | 'right';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const animationClass = isVisible
    ? 'opacity-100 translate-x-0 scale-100'
    : direction === 'left'
    ? 'opacity-0 -translate-x-10 scale-95'
    : 'opacity-0 translate-x-10 scale-95';

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animationClass} ${className}`}
    >
      {children}
    </div>
  );
}

export default function HeartlandTrading() {
  return (
    <div className="w-full">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[347px]">
        <Image
          src="/Rectangle 34624281.png"
          alt="Heartland Background"
          fill
          className="object-cover brightness-100"
          priority
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 text-white">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] text-[#DADADA] font-bold text-center leading-tight sm:leading-none mb-4 sm:mb-6 md:mb-10"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Heartland General Trading
          </h1>
          <p
            className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-[40px] text-[#DADADA]/80 font-semibold text-center leading-tight sm:leading-none px-2"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            25 Years of Sri Lankan Culinary Excellence in the UAE
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">

        {/* Uncompromising Quality & Standards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-16 sm:mb-20 md:mb-28 lg:mb-36">
          <AnimatedSection direction="left" className="text-center lg:text-left">
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold leading-tight sm:leading-12 mb-4 sm:mb-6 md:mb-8 lg:mb-12"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Uncompromising Quality & Standards
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-nunito leading-relaxed sm:leading-6 mb-3 sm:mb-4">
              At Heartland, quality is more than a promise it is our foundation. We take immense pride in being the only Sri Lankan food distribution company in the UAE with ISO and HACCP certifications for purchasing, storing, and distribution.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-nunito leading-relaxed sm:leading-6">
              This ensures that every product, from our aromatic Cardamom and mouthwatering Curry Powders to our delectable Jaggery and rich Jams, meets the highest international safety and excellence standards.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" className="relative w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[396px] lg:w-[641px]">
            <Image
              src="/Rectangle 34624282.png"
              alt="Quality Standards"
              fill
              className="object-cover rounded-[15px] sm:rounded-[20px]"
            />
          </AnimatedSection>
        </div>

        {/* The Heart of the Community Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-20 items-center mb-16 sm:mb-20 md:mb-28 lg:mb-36">
          <AnimatedSection direction="left" className="relative w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[396px] lg:w-[641px] order-2 lg:order-1">
            <Image
              src="/Rectangle 34624283.png"
              alt="Community"
              fill
              className="object-cover rounded-[15px] sm:rounded-[20px]"
            />
          </AnimatedSection>
          <AnimatedSection direction="right" className="order-1 lg:order-2 lg:pl-8 text-center lg:text-left">
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold leading-tight sm:leading-none mb-4 sm:mb-6 md:mb-8 lg:mb-12"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              The Heart of the <br className="hidden sm:block"/>Community
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-nunito leading-relaxed sm:leading-6 mb-3 sm:mb-4">
              Over the past 25 years, Heartland has grown in the heart of Dubai, serving as a vital link for the Sri Lankan community and the broader Sri Lankan business segment.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-nunito leading-relaxed sm:leading-6">
              Today, we bridge the gap between the essence of home and the vibrant, multicultural landscape of the UAE, bringing the tastes of the island to Asian customers and food lovers across the region.
            </p>
          </AnimatedSection>
        </div>

        {/* Sourcing with Purpose Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <AnimatedSection direction="left" className="text-center lg:text-left">
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold leading-tight sm:leading-none mb-4 sm:mb-6 md:mb-8 lg:mb-12"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Sourcing with Purpose
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-nunito leading-relaxed sm:leading-6 mb-3 sm:mb-4">
              As the leading distributor of Sri Lankan food products, we
              believe in building sustainable. We work hand-in-hand with local
              farmers and producers who share our commitment to quality,
              growth, and sustainability.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-nunito leading-relaxed sm:leading-6">
              Every product we distribute directly links us to Sri Lankan
              agriculture and artisans, supporting livelihoods and cultivating
              authentic flavors.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" className="relative w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[396px] lg:w-[641px]">
            <Image
              src="/Rectangle 34624284.png"
              alt="Sourcing"
              fill
              className="object-cover rounded-[15px] sm:rounded-[20px]"
            />
          </AnimatedSection>
        </div>

      </div>
    </div>
  );
}
