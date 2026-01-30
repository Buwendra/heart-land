"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function AboutHero() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // Parallax scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const offset = window.scrollY * 0.04; // slow parallax
      imageRef.current.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-white text-slate-900">
      {/* Mobile Layout - Only visible on mobile */}
      <section className="md:hidden">
        {/* Top Image - Rectangle 91 - Full Width */}
        <div className="w-full mb-8">
          <Image
            src="/Rectangle 91.png"
            alt="About Hero"
            width={400}
            height={300}
            className="w-full h-auto"
          />
        </div>

        {/* Text Content - Centered */}
        <div className="text-center mb-30 px-12">
          <p
            className="text-[16px] font-semibold text-[#BA5561] tracking-[3px] uppercase mb-5"
            style={{ fontFamily: "Open Sans" }}
          >
            A Bit
          </p>
          <h1
            className="text-[25px] font-bold mb-4 tracking-[4px]"
            style={{ fontFamily: "Open Sans" }}
          >
            A 25-Year Legacy of Authenticity
          </h1>
          <p className="text-[14px] text-gray-700 mb-6 leading-8.5 font-nunito ">
            Welcome to Heartland General Trading Co LLC, your premier gateway to
            the authentic flavors of Sri Lanka in the UAE. Established in 2001
            by entrepreneur Mohamed Fazal Mawjood, we are proud to have served
            our community for over 25 years. From our humble beginnings to
            becoming a household name, we offer a masterfully curated selection
            of spices, premium rice varieties, condiments, snacks, and more.
          </p>
          <button
            onClick={() => {
              document
                .getElementById("evolution-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="
              inline-block  font-semibold text-[14px]
              bg-[#D11417] text-white px-8 py-3
              shadow-2xl transition-all duration-300 ease-out
              relative overflow-hidden
              hover:scale-[1.02] 
              hover:-translate-y-1 transform-gpu
              cursor-pointer
            "
            style={{
              borderTopLeftRadius: "20px",
              borderBottomRightRadius: "20px",
              borderTopRightRadius: "5px",
              borderBottomLeftRadius: "5px",
              fontFamily: "David Libre",
            }}
          >
            Explore More
          </button>
        </div>
      </section>

      {/* Desktop/Tablet Layout - Hidden on mobile */}
      <section className="hidden md:flex max-w-[1600px] mx-auto px-[clamp(16px,3.5vw,60px)] mt-[7vw] mb-[clamp(80px,8vw,160px)] flex-row items-center gap-[4vw]">
        {/* Left Content */}
        <div className="flex-1 w-full max-w-[48%] ml-[clamp(8px,1vw,16px)] mb-[5vw]">
          <p
            className="text-[clamp(11px,1.6vw,22px)] font-semibold text-[#BA5561] tracking-[clamp(1px,0.3vw,4px)] uppercase mb-[clamp(4px,0.8vw,12px)]"
            style={{ fontFamily: "Open Sans" }}
          >
            A Bit
          </p>
          <h1
            className="text-[clamp(16px,4.2vw,56px)] tracking-[clamp(1px,0.45vw,6px)] leading-[1.15] font-bold mb-[clamp(6px,2.2vw,32px)]"
            style={{ fontFamily: "Open Sans" }}
          >
            A 25-Year Legacy of Authenticity
          </h1>
          <p className="text-[clamp(11px,1.35vw,20px)] text-gray-700 mb-[clamp(10px,2vw,40px)] leading-[clamp(18px,2.6vw,36px)] font-nunito">
            Welcome to Heartland General Trading Co LLC, your premier gateway to
            the authentic flavors of Sri Lanka in the UAE. Established in 2001
            by entrepreneur Mohamed Fazal Mawjood, we are proud to have served
            our community for over 25 years. From our humble beginnings to
            becoming a household name, we offer a masterfully curated selection
            of spices, premium rice varieties, condiments, snacks, and more.
          </p>
          <button
            onClick={() => {
              document
                .getElementById("evolution-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="
              inline-block uppercase font-semibold text-[clamp(10px,1.3vw,20px)]
              text-[#D11417] px-0 py-[clamp(4px,1.2vw,18px)]
              transition-all duration-300 ease-out
              relative overflow-hidden
              hover:scale-[1.02]
              hover:-translate-y-1 transform-gpu tracking-[clamp(1px,0.25vw,4px)]
              cursor-pointer
            "
          >
            Explore More &gt;&gt;
          </button>
        </div>

        {/* Right Images with parallax */}
        <div
          ref={imageRef}
          className="flex-1 w-full max-w-[52%] mr-[clamp(8px,1vw,16px)] relative"
        >
          <div className="relative w-full max-w-[clamp(400px,50vw,720px)] ml-auto">
            <Image
              src="/Rectangle 88.png"
              alt="About 1"
              width={720}
              height={620}
              className="rounded-xl w-full h-auto"
            />
            <Image
              src="/Subtract.png"
              alt="About 2"
              width={620}
              height={520}
              className="rounded-xl mt-[clamp(8px,1.2vw,28px)] w-full max-w-full h-auto"
            />
            <div
              className="absolute left-0 flex items-end gap-[clamp(4px,1.2vw,20px)]"
              style={{ bottom: "clamp(-150px, -10vw, -50px)" }}
            >
              <Image
                src="/Rectangle 90.png"
                alt="food 1"
                width={400}
                height={340}
                className="rounded-lg h-auto"
                style={{
                  marginLeft: "clamp(-140px, -9vw, -40px)",
                  marginBottom: "clamp(-30px, 1vw, -6px)",
                  width: "clamp(180px, 24vw, 380px)",
                }}
              />
              <div>
                <Image
                  src="/25years.png"
                  alt="25 Years Experience"
                  width={220}
                  height={220}
                  className="object-contain h-auto"
                  style={{
                    width: "clamp(90px, 15vw, 240px)",
                    marginLeft: "clamp(-20px, -1vw, -4px)",
                    marginTop: "clamp(-40px, -2.5vw, -8px)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
