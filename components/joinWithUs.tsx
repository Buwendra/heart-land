"use client";

import React, { useEffect, useState } from "react";
import { Nunito, Open_Sans } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-nunito" });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-open-sans" });

export default function JoinWithUs() {
  const bgPath = "/Rectangle 4585.png";
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.1);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Layout */}
      <section
        aria-label="Join With Us"
        className="hidden md:flex relative w-full overflow-hidden h-auto lg:h-[663px] items-center justify-center"
      >
        {/* Background Image Layer */}
        <div
          className="absolute w-full h-[200%] -top-[130%]"
          style={{
            backgroundImage: `url("${bgPath}")`,
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transform: `translateY(${offset}px)`,
            transition: "transform 0.1s linear",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0" />

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center z-10">
          <h2
            className={`text-[28px] md:text-[36px] lg:text-[36px] leading-tight sm:leading-9 font-semibold uppercase text-white ${nunito.className}`}
          >
            JOIN WITH US
          </h2>

          <p
            className={`mt-3 sm:mt-4 text-[13px] md:text-[14px] leading-5 sm:leading-6 text-white mx-auto max-w-lg md:max-w-2xl lg:max-w-4xl ${openSans.className}`}
          >
            At Heartland General Trading, we believe in growing together — with our
            people, our partners, and our communities. Join a team that connects
            Sri Lankan excellence with global opportunity, promoting ethical trade,
            innovation, and sustainable growth.
          </p>

          <div className="mt-5 sm:mt-6">
            <a
              href="#careers"
              className="inline-block bg-[#E60012] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-light border-2 border-[#E60012] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 transform-gpu hover:bg-white hover:text-[#E60012] hover:border-[#E60012]"
            >
              See Current Openings
            </a>
          </div>
        </div>
      </section>

      {/* Mobile Layout */}
      <section
        aria-label="Join With Us"
        className="md:hidden relative w-full overflow-hidden flex items-center justify-center"
      >
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url("${bgPath}")`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0" />

        {/* Content */}
        <div className="relative w-full mx-auto px-4 py-8 text-center z-10">
          <h2
            className={`text-[18px] leading-tight font-normal uppercase text-white mb-5 -mt-2 ${nunito.className}`}
          >
            JOIN WITH US
          </h2>

          <p
            className={`text-[14px] leading-[24px] text-white mb-4 px-12 ${openSans.className}`}
          >
            At Heartland General Trading, we believe in growing together — with our people, our partners, and our communities. Join a team that connects Sri Lankan excellence with global opportunity, promoting ethical trade, innovation, and sustainable growth.
          </p>

          <div>
            <a
              href="#careers"
              className={`inline-block bg-[#E60012] text-white px-6 py-2 -mb-5 rounded-lg text-[12px] font-medium ${nunito.className}`}
            >
              See Current Openings
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
