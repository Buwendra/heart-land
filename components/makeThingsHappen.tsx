"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  const chiliRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!chiliRef.current) return;

      const offset = window.scrollY * 0.02; // slow parallax
      chiliRef.current.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full overflow-visible mt-10 mb-36">
      {/* Red banner */}
      <div className="bg-[#D11417] w-full">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="relative flex items-center justify-center h-[300px] md:h-[220px] lg:h-[260px]">
            {/* Left circular image (cropped) */}
            <div
              className="hidden md:block absolute left-10 top-[90px] -translate-y-1/2"
              style={{ width: 220, height: 220, marginLeft: -110 }}
            >
              <div className="w-[280px] h-[300px] overflow-hidden">
                <Image
                  src="/left-circle.png"
                  alt="spices circle"
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right decorative image with parallax */}
            <div
              ref={chiliRef}
              className="absolute right-0 -top-5 -translate-y-1/2 pointer-events-none"
              style={{ width: 370, height: 370, marginRight: -60 }}
            >
              <Image
                src="/chili.png"
                alt="chili splash"
                width={370}
                height={370}
                className="object-contain"
              />
            </div>

            {/* Content block */}
            <div className="relative z-20 ml-20 flex flex-col items-start text-left text-white px-6">
              {/* Heading */}
              <h1
                className="font-openSans font-bold text-[40px] leading-10 text-white"
                style={{ maxWidth: 800 }}
              >
                Let’s make things happen
              </h1>

              {/* Paragraph */}
              <p
                className="mt-4 text-[16px] leading-6 text-[#FAFAFA] max-w-[550px]"
                style={{ opacity: 1 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              {/* CTA */}
              <Link href="/Contact">
                <button
                  className="mt-6 inline-flex items-center justify-center cursor-pointer px-9 py-2 rounded-full border border-white text-white font-openSans font-semibold text-[16px] leading-4 tracking-[0.43em] transition-all duration-300 ease-out hover:scale-110 hover:shadow-[0_12px_24px_rgba(255,255,255,0.2)] hover:-translate-y-2 hover:bg-white hover:text-[#D11417] transform-gpu"
                  style={{ textTransform: "uppercase" }}
                >
                  CONTACT US
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
