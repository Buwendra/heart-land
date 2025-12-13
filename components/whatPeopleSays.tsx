"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function WhatPeopleSays() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallax = (multiplier: number) => `translateY(${scrollY * multiplier}px)`;

  return (
    <section className="w-full flex flex-col items-center py-20 bg-white" >

      {/* Title */}
      <h2 className="text-4xl font-bold mb-12" style={{ fontFamily: "Nunito" }}>
        What People Says About Us
      </h2>

      {/* Card container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">

        {/* Card 1 */}
        <div
          className="bg-white rounded-xl p-6 w-full max-w-[340px] mx-auto shadow-[5px_20px_30px_rgba(0,0,0,0.70)] transition-transform duration-300 hover:scale-110"
          style={{ transform: parallax(0.02) }} 
        >
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/fathima.png"
              alt="Fathima R."
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="text-[15px]" style={{ fontFamily: "Georgia", fontWeight: 600 }}>
                Fathima R.
              </p>
              <p className="text-sm text-gray-600" style={{ fontFamily: "Arial" }}>
                Woman Entrepreneur, Galle
              </p>
            </div>
          </div>
          <div className="my-3">
            <div
              className="w-[294px] border-t border-[#EFEFEF] opacity-100"
              style={{ transform: "rotate(-0.17deg)" }}
            />
          </div>
          <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: "Open Sans" }}>
            “Heartland helped me launch my own spice brand through their Women in Food Enterprise 
            project. I received training in packaging and export marketing and today my products are 
            sold in Dubai. Their support has truly changed my family’s future.”
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="bg-white rounded-xl p-6 w-full max-w-[340px] mx-auto shadow-[5px_20px_30px_rgba(0,0,0,0.70)] transition-transform duration-300 hover:scale-110"
          style={{ transform: parallax(0.02) }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/farhan.png"
              alt="Farhan R."
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="text-[15px]" style={{ fontFamily: "Georgia", fontWeight: 600 }}>
                Arjun Verma
              </p>
              <p className="text-sm text-gray-600" style={{ fontFamily: "Arial" }}>
                CSR Volunteer
              </p>
            </div>
          </div>
          <div className="my-3">
            <div
              className="w-[294px] border-t border-[#EFEFEF] opacity-100"
              style={{ transform: "rotate(-0.17deg)" }}
            />
          </div>
          <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: "Open Sans" }}>
            “Heartland’s initiatives go beyond charity — they build self-reliance. I’ve seen how the 
            clean water and nutrition programs bring real change to rural families. It’s inspiring to 
            work with a team that believes in empowering communities, not just supporting them.”
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="bg-white rounded-xl p-6 w-full max-w-[340px] mx-auto shadow-[5px_20px_30px_rgba(0,0,0,0.70)] transition-transform duration-300 hover:scale-110"
          style={{ transform: parallax(0.02) }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/arjun.png"
              alt="arjun R."
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="text-[15px]" style={{ fontFamily: "Georgia", fontWeight: 600 }}>
                Farhan A.
              </p>
              <p className="text-sm text-gray-600" style={{ fontFamily: "Arial" }}>
                Small-Scale Farmer, Kurunegala
              </p>
            </div>
          </div>
          <div className="my-3">
            <div
              className="w-[294px] border-t border-[#EFEFEF] opacity-100"
              style={{ transform: "rotate(-0.17deg)" }}
            />
          </div>
          <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: "Open Sans" }}>
            “Before joining Heartland’s farmer training program, I struggled to find consistent buyers 
            for my crops. With their guidance, I learned modern cultivation methods and now supply 
            directly to export channels. My income has doubled, and I feel proud to represent 
            Sri Lankan produce globally.”
          </p>
        </div>

      </div>
    </section>
  );
}
