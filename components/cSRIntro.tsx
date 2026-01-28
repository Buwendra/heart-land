"use client";

import Image from "next/image";
import { Nunito, Open_Sans } from "next/font/google";
import { useEffect, useState } from "react";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function CsrIntro() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setIsMobile(window.innerWidth < 768); // mobile breakpoint

    handleResize(); // set initial value
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const parallax = (multiplier: number) => `translateY(${scrollY * multiplier}px)`;

  return (
<section className="w-full max-w-[1400px] mx-auto px-6 py-10 md:px-36 mt-44 bg-[#EEEEEE] md:bg-transparent">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
        {/* RIGHT SIDE IMAGE / VIDEO */}
        <div
          className="relative w-full h-[200px] md:h-80 rounded-xl overflow-hidden shadow-sm md:mb-0 md:-mt-25 order-first md:order-last"
          style={{ transform: isMobile ? "none" : parallax(0.03) }}
        >
          <Image
            src="/csr_video_placeholder.png"
            alt="Video thumbnail"
            fill
            className="object-cover"
          />

          {/* PLAY BUTTON */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="flex items-center justify-center cursor-pointer rounded-xl hover:scale-110 transition"
              style={{
                width: "66.289px",
                height: "45.817px",
                backgroundColor: "#FF0000",
              }}
            >
              <svg
                width="66.289px"
                height="40px"
                viewBox="0 0 24 24"
                style={{ display: "block" }}
              >
                <path d="M8 5v14l11-7z" fill="#FFFFFF" />
              </svg>
            </button>
          </div>
        </div>

        {/* LEFT TEXT */}
        <div className="text-start justify-start md:text-left self-start">
  <h2
    className={`${nunito.className} text-[16px] md:text-[23px] mb-10 font-extrabold leading-6 text-[#0F0202]`}
  >
    Expanding Our Mission
  </h2>

  <p
    className={`${openSans.className} text-[15px] mt-8 leading-[23px] text-[#2C2C2C]`}
  >
    Looking ahead, we are proud to be expanding this mission. We are currently in the process of partnering
    with prominent Sri Lankan cricketers who lead dedicated cancer projects, ensuring our contributions
    provide maximum impact and support to those who need it most.
  </p>
</div>

      </div>
    </section>
  );
}
