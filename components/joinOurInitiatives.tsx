"use client";
import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export default function Initiative() {
  const imageRef = React.useRef<HTMLDivElement>(null);

React.useEffect(() => {
  const handleScroll = () => {
    const y = window.scrollY;

    if (imageRef.current) {
      imageRef.current.style.transform = `translateY(${y * 0.06}px)`;
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Right side background image */}
      <div className="absolute right-0 -top-24 bottom-0 w-[700px] opacity-100 pointer-events-none">
        <Image
          src="/initiatives bg.png"
          alt="Background Shape"
          fill
          className="object-contain object-right"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Section - Images */}
        <div  ref={imageRef} className="relative ml-20 w-80 h-80 -top-30 md:w-[430px] md:h-[430px] overflow-visible">
          <Image
            src="/Group 69.png"
            alt="Child Initiative"
            fill
            className="object-contain"
          />
        </div>

        {/* Right Section - Text Content */}
        <div className="space-y-6 -mt-40 -ml-17 text-center md:text-left">
          <p className="uppercase text-gray-400 text-sm tracking-widest">
            C S R
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Join our initiatives
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed do eiusmod tempor.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-6">
            <button className="bg-black text-[20px] hover:bg-gray-900 text-white cursor-pointer px-16 py-3 rounded-full font-semibold transition-colors duration-300">
              Learn More
            </button>

            <button className="group flex items-center justify-center gap-3 cursor-pointer border-[3px] border-[#D11417] text-[#000000] font-nunito font-bold text-[20px] leading-[100%] px-6 py-4 rounded-full transition-all duration-300 hover:bg-black hover:text-white">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#000000] transition-all duration-300 group-hover:bg-white">
                <Play className="w-7 h-7 fill-white transition-all duration-300 group-hover:fill-[#000000]" />
              </div>
              Watch Videos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
