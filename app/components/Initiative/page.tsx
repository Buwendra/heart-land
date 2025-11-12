"use client";
import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export default function Initiative() {
  return (
    <section className="py-36 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section - Images */}
        
          <div className="relative  ml-20 w-80 h-80 md:w-[430px] md:h-[430px] overflow-visible">
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
            <button className="bg-black text-[20px] hover:bg-gray-900 text-white px-16 py-3 rounded-full font-semibold transition-colors duration-300">
              Learn More
            </button>

            <button className="group flex items-center justify-center gap-3 border-[3px] border-[#D11417] text-[#000000] font-nunito font-bold text-[20px] leading-[100%] px-8 py-3 rounded-full transition-all duration-300 hover:bg-black hover:text-white">
      <Play className="w-5 h-10 fill-[#000000] transition-colors duration-300 group-hover:fill-white" />
      Watch Videos
    </button>
          </div>
        </div>
      </div>
    </section>
  );
}
