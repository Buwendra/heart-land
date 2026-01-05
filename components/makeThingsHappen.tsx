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
    <section className="relative w-full overflow-visible mt-6 sm:mt-10 mb-20 sm:mb-28 md:mb-36">
      {/* Red banner */}
      <div className="bg-[#D11417] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-6 md:py-5">
          <div className="relative flex flex-col md:flex-row items-center justify-center min-h-[280px] sm:h-[300px] md:h-[220px] lg:h-[260px]">

            {/* Left circular image  */}
<div
  className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2"
  style={{ width: 300, height: 300, marginLeft: -130 }}
>
  <div className="w-full h-full overflow-hidden">
    <Image
      src="/left-circle.png"
      alt="spices circle"
      width={300}
      height={300}
      className="object-cover"
    />
  </div>
</div>

{/* Right decorative chili image  */}
<div
  ref={chiliRef}
  className="hidden md:block absolute right-0 -top-[25%] -translate-y-1/2 pointer-events-none"
  style={{ width: 300, height: 300, marginRight: -40 }}
>
  <Image
    src="/chili.png"
    alt="chili splash"
    width={370}
    height={370}
    className="object-contain w-[200px] md:w-[300px] lg:w-[370px]"
  />
</div>


            {/* Content block */}
            <div className="relative z-20 flex flex-col items-center md:items-start text-center md:text-left text-white px-4 md:px-6 mx-auto md:mx-0 max-w-full sm:max-w-lg lg:max-w-xl">
              {/* Heading */}
              <h1
                className="font-openSans font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-8 sm:leading-9 md:leading-10 text-white"
                style={{ maxWidth: 800 }}
              >
                Let&apos;s make things happen
              </h1>

              {/* Paragraph */}
              <p
                className="mt-3 sm:mt-4 text-[14px] sm:text-[15px] md:text-[16px] leading-5 sm:leading-6 text-[#FAFAFA] max-w-full"
                style={{ opacity: 1 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              {/* CTA */}
              <Link href="/Contact">
                <button
                  className="mt-5 sm:mt-6 inline-flex items-center justify-center cursor-pointer px-6 sm:px-8 md:px-9 py-2.5 sm:py-2 rounded-full border border-white text-white font-openSans font-semibold text-[12px] sm:text-[14px] md:text-[16px] leading-4 tracking-[0.3em] sm:tracking-[0.43em] transition-all duration-300 ease-out hover:scale-110 hover:shadow-[0_12px_24px_rgba(255,255,255,0.2)] hover:-translate-y-2 hover:bg-white hover:text-[#D11417] transform-gpu uppercase"
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
