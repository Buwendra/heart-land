"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  const chiliRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full overflow-visible mt-6 sm:mt-10  sm:mb-28 md:mb-36">
      {/* Red banner */}
      <div className="bg-[#D11417] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 sm:py-6 md:py-5 pb-8 lg:pb-5">

          {/* Desktop Layout (lg and above) */}
          <div className="hidden lg:block">
            <div className="relative flex items-center justify-center min-h-[260px]">
              {/* Left circular image */}
              <div
                className="absolute left-10 top-1/2 -translate-y-1/2"
                style={{ width: 300, height: 300, marginLeft: -155 }}
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

              {/* Right decorative chili image */}
              <div
                ref={chiliRef}
                className="absolute pointer-events-none -right-[160px] top-[-200px]"
                style={{ width: 420, height: 420 }}
              >
                <Image
                  src="/chili.png"
                  alt="chili splash"
                  width={400}
                  height={400}
                  className="object-contain w-[370px]"
                />
              </div>

              {/* Content block */}
              <div className="relative z-20 flex flex-col items-start text-left text-white max-w-xl">
                <h1
                  className="font-openSans font-bold text-[40px] leading-10 text-white"
                  style={{ maxWidth: 800 }}
                >
                   Get in Touch
                </h1>

                <p
                  className="mt-4 text-[16px] leading-6 text-[#FAFAFA] max-w-full font-openSans"
                  style={{ opacity: 1 }}
                >
                  We’d love to hear from you! Whether you have questions about our products or need  assistance, our team is here to help. Please fill out the contact 
                  form or reach out to us directly.  Your feedback is important to us!
                </p>

                <Link href="/Contact">
                  <button
                    className="mt-6 inline-flex items-center justify-center cursor-pointer px-9 py-2 rounded-full border border-white text-white font-openSans font-semibold text-[16px] leading-4 tracking-[0.43em] transition-all duration-300 ease-out hover:scale-110 hover:shadow-[0_12px_24px_rgba(255,255,255,0.2)] hover:-translate-y-2 hover:bg-white hover:text-[#D11417] transform-gpu uppercase"
                  >
                    CONTACT US
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout (below lg) */}
          <div className="lg:hidden">
            <div className="relative flex items-center justify-between ">
              {/* Content block - left side */}
              <div className="relative z-20 flex flex-col items-start text-left text-white px-2 font-openSans max-w-[400px] sm:max-w-[55%] md:max-w-[70%]">
                <h1 className="font-openSans font-bold text-[22px] sm:text-[28px] md:text-[32px] leading-[1.2] text-white mb-3 sm:mb-4">
                  Let&apos;s make things happen
                </h1>

                <p className="font-openSans text-[14px] sm:text-[15px] md:text-[16px] leading-[1.5] sm:leading-6 text-[#FAFAFA] mb-5 sm:mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Link href="/Contact">
                  <button className="font-openSans inline-flex items-center justify-center cursor-pointer px-6 sm:px-8 md:px-9 py-3 sm:py-3.5 md:py-2 rounded-full border-1 border-white text-white font-normal text-[15px] sm:text-[14px] md:text-[16px] leading-4 tracking-[0.3em] sm:tracking-[0.43em] transition-all duration-300 ease-out hover:scale-105 hover:bg-white hover:text-[#D11417] transform-gpu uppercase">
                    CONTACT US
                  </button>
                </Link>
              </div>

              {/* Right decorative chili image - right side, positioned lower */}
              <div className="absolute pointer-events-none -right-[15px] sm:-right-[20px] md:-right-[30px] top-[80%] sm:top-[65%] md:top-[60%] -translate-y-1/2 w-[90px] h-[180px] sm:w-[170px] sm:h-[320px] md:w-[220px] md:h-[400px]">
                <Image
                  src="/chili.png"
                  alt="chili splash"
                  width={90}
                  height={180}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
