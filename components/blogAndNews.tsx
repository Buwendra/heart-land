"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
export default function AboutUsPage() {

  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => setOffsetY(window.pageYOffset));
    };
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    handleResize();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="max-w-[1240px] xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-[30px] lg:px-[50px] xl:px-[60px] py-4 md:py-[60px] lg:py-[80px] pb-4 md:pb-4 lg:pb-4 flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-15 lg:gap-20 xl:gap-24 bg-white overflow-visible">
      {/* Left content */}
      <div className="w-full md:w-[594px] lg:w-[45%] xl:w-[48%] flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
        {/* Title Row */}
        <div className="inline-flex items-center justify-center gap-8 font-openSans mb-3">
          <span className="font-normal text-lg lg:text-xl leading-[160%] text-[#ED632F]">
            Our
          </span>
          <div className="w-[70px] h-px bg-[#ED632F] ml-2" />
        </div>

        {/* Subtitle */}
        <h2 className="w-full text-center md:text-left md:w-[242px] lg:w-auto font-nunito font-semibold text-2xl lg:text-2xl xl:text-[28px] 2xl:text-[32px] leading-[140%] text-[#10111a] mb-8 md:whitespace-nowrap">
          Featured Insights & Articles
        </h2>

        {/* Body Text */}
        <div className="w-full md:w-[550px] lg:w-full font-openSans font-normal text-[16px] lg:text-[18px] xl:text-[20px] leading-[160%] text-[#686868] mb-4">
          {isMobile ? (
            <p className="text-center">
              Welcome to our Featured Insights and Articles section, where we
              provide valuable perspectives on industry trends, culinary
              traditions, and community initiatives. Our articles cover market
              developments and showcase recipes that celebrate Sri Lankan
              flavors, aimed at informing and inspiring you. Explore our latest
              content to understand our commitment to social responsibility and
              our connections within the Sri Lankan community. Join us on this
              journey of discovery.
            </p>
          ) : (
            <>
              <p className="mb-4 mt-6 tracking-wide">
                Welcome to our Featured Insights and Articles section, where we
                provide valuable perspectives on industry trends, culinary
                traditions, and community initiatives. Our articles cover market
                developments and showcase recipes that celebrate Sri Lankan
                flavors, aimed at informing and inspiring you.
              </p>
              <p>
                Explore our latest content to understand our commitment to
                social responsibility and our connections within the Sri Lankan
                community. Join us on this journey of discovery.
              </p>
            </>
          )}
        </div>
      </div>

      {/* Right Image Section with Parallax */}
      <div className="flex-1 flex justify-center md:justify-end items-start w-full order-1 md:order-2 lg:overflow-visible">
        <div
          className="w-full md:w-[680px] lg:w-[120%] xl:w-[130%] 2xl:w-[135%] h-[260px] md:h-[580px] lg:h-[700px] xl:h-[760px] 2xl:h-[820px] relative will-change-transform md:mt-0 lg:-mt-16 xl:-mt-20 -mt-2.5"
          style={{
            transform: isMobile ? "none" : `translateY(${offsetY * 0.2}px)`,
          }}
        >
          <Image
            src="/Group20.png"
            alt="Main"
            sizes="(max-width: 650px) 100vw, (max-width: 1024px) 600px, (max-width: 1440px) 50vw, 700px"
            fill
            priority
            className="object-contain lg:scale-105 xl:scale-110 2xl:scale-[1.2]"
          />
        </div>
      </div>
    </div>
  );
}
