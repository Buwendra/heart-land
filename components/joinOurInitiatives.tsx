"use client";
import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export default function Initiative() {
  const imageRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let rafId: number | null = null;
    let lastScrollY = 0;

    const handleScroll = () => {
      lastScrollY = window.scrollY;

      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          if (imageRef.current) {
            imageRef.current.style.transform = `translateY(${lastScrollY * 0.04}px)`;
          }
          rafId = null;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <section className="py-16 md:py-16 lg:pt-40 lg:pb-64 bg-white relative overflow-hidden">
      {/* Right side background image - Desktop only */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[700px] opacity-80 pointer-events-none">
        <Image
          src="/initiatives bg.png"
          alt="Background Shape"
          fill
          className="object-contain object-right"
          priority
        />
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden max-w-2xl mx-auto px-6 relative">
        {/* Content */}
        <div className="relative z-10 text-center space-y-6">
          <p className="uppercase text-[18px] text-gray-400 text-sm tracking-[0.2em]" style={{ fontFamily: 'Open Sans' }}>
            C S R
          </p>

          <h2 className="text-[20px] sm:text-5xl font-bold text-black leading-tight" style={{ fontFamily: 'Open Sans' }}>
            Our Commitment to Community
          </h2>

          {/* Image with background */}
          <div className="relative mx-auto w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] my-8">
            {/* Background image behind child initiative */}
            <div className="absolute inset-0 flex items-center justify-start opacity-50 pointer-events-none scale-150 -left-8 -top-18">
              <Image
                src="/initiatives bg.png"
                alt="Background Shape"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
            {/* Child initiative image */}
            <Image
              src="/Group 69.png"
              alt="Child Initiative"
              fill
              className="object-contain relative z-10"
              priority
            />
          </div>

          <p className="text-[#6A6969] text-[13px] sm:text-lg leading-relaxed max-w-lg mx-auto px-2">
            At Heartland General Trading, we believe in making a positive impact. We’re dedicated to  
            supporting our communities and promoting sustainability in everything we do. Together, we  
            strive for a better future.
          </p>

          {/* Buttons */}
          <div className="flex flex-row gap-3 pt-4 px-4 justify-center items-center">
            {/* Learn More Button */}
            <button className="font-nunito bg-black text-white text-base sm:text-lg font-semibold px-10 sm:px-12 py-2.5 sm:py-3 rounded-full border-2 border-black transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:bg-gray-900 whitespace-nowrap">
              Learn More
            </button>

            {/* Watch Videos Button 
            <button className="font-nunito group flex items-center justify-center gap-1.5 border-2 border-[#D11417] text-black font-semibold text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-2 rounded-full transition-all duration-300 hover:bg-[#D11417] hover:border-[#D11417] hover:scale-105 hover:shadow-xl whitespace-nowrap">
              <div className="flex items-center justify-center w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-black transition-all duration-300 group-hover:bg-white flex-shrink-0">
                <Play className="w-4 h-4 sm:w-6 sm:h-6 fill-white stroke-white transition-all duration-300 group-hover:fill-[#D11417] group-hover:stroke-[#D11417]" />
              </div>
              <span className="group-hover:text-white transition-colors duration-300">
                Watch Videos
              </span>
            </button>*/}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid max-w-7xl mx-auto px-4 sm:px-6 grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Section - Images */}
        <div
          ref={imageRef}
          className="relative mx-0 ml-20 -mt-30 w-[430px] h-[430px]"
        >
          <Image
            src="/Group 69.png"
            alt="Child Initiative"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Right Section - Text Content */}
        <div className="space-y-8 text-left">
          <p className="uppercase text-gray-400 text-[18px] tracking-[0.3em] font-normal">
            C S R
          </p>

          <h2 className="text-[30px] font-bold text-black leading-[100%] tracking-normal" style={{ fontFamily: 'Open Sans' }}>
            Our Commitment to Community
          </h2>

          <p className="text-gray-600 text-[20px] font-nunito leading-[140%] tracking-normal max-w-xl">
            At Heartland General Trading, we believe in making a positive impact. We’re dedicated to  supporting our communities and promoting sustainability in everything we do. Together, we  strive for a better future.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            {/* Learn More Button */}
            <button className="font-nunito bg-black text-white text-xl px-16 py-4 rounded-full font-semibold border-2 border-black transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:bg-gray-900">
              Learn More
            </button>

            {/* Watch Videos Button
            <button className="font-nunito group flex items-center justify-center gap-3 border-[3px] border-[#D11417] text-black font-bold text-xl px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-[#D11417] hover:border-[#D11417] hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black transition-all duration-300 group-hover:bg-white">
                <Play className="w-6 h-6 fill-white stroke-white transition-all duration-300 group-hover:fill-[#D11417] group-hover:stroke-[#D11417]" />
              </div>
              <span className="group-hover:text-white transition-colors duration-300">
                Watch Videos
              </span>
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
