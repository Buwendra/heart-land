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
        <div className="text-center mb-8 px-8">
          <p className="text-[16px] font-semibold text-[#BA5561] tracking-[3px] uppercase mb-5" style={{ fontFamily: 'Open Sans' }}>
            A Bit
          </p>
          <h1 className="text-[25px] font-bold mb-4 tracking-[4px]" style={{ fontFamily: 'Open Sans' }}>A 25-Year Legacy of Authenticity</h1>
          <p className="text-[14px] text-gray-700 mb-6 leading-8.5 font-nunito ">
            Welcome to Heartland General Trading Co LLC, your premier gateway to the authentic  
            flavors of Sri Lanka in the UAE. Established in 2001 by entrepreneur Mohamed Fazal  
            Mawjood, we are proud to have served our community for over 25 years. From our humble  
            beginnings to becoming a household name, we offer a masterfully curated selection of spices,  
            premium rice varieties, condiments, snacks, and more.  

          </p>
          <button
            onClick={() => {
              document.getElementById('evolution-section')?.scrollIntoView({ behavior: 'smooth' });
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
      <section className="hidden md:flex max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-20 md:mt-24 lg:mt-30 flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-12 xl:gap-16">
        {/* Left Content */}
        <div className="flex-1 w-full md:max-w-[50%] lg:max-w-[45%] xl:ml-12 2xl:ml-28 mb-12 md:mb-16 lg:mb-20">
          <p className="text-base sm:text-lg font-semibold text-[#BA5561] tracking-[3px] uppercase mb-2" style={{ fontFamily: 'Open Sans' }}>
            A Bit
          </p>
          <h1 className="text-[18px] sm:text-xl lg:text-5xl tracking-[5px] leading-16 font-bold mb-4 md:mb-6" style={{ fontFamily: 'Open Sans' }}>
            A 25-Year Legacy of Authenticity</h1>
          <p className="text-[15px] sm:text-lg text-gray-700 mb-6 leading-relaxed font-nunito">
           Welcome to Heartland General Trading Co LLC, your premier gateway to the authentic  
           flavors of Sri Lanka in the UAE. Established in 2001 by entrepreneur Mohamed Fazal  
           Mawjood, we are proud to have served our community for over 25 years. From our humble 
            beginnings to becoming a household name, we offer a masterfully curated selection of spices, 
             premium rice varieties, condiments, snacks, and more.  

          </p>
          <button
            onClick={() => {
              document.getElementById('evolution-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="
              inline-block uppercase font-semibold text-sm sm:text-base
              text-[#D11417]  px-0 sm:py-4
               transition-all duration-300 ease-out
              relative overflow-hidden
              hover:scale-[1.02]
              hover:-translate-y-1 transform-gpu tracking-widest
              cursor-pointer
            "
            style={{
              clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
              borderBottomRightRadius: "10px",
            }}
          >
          Explore More &gt;&gt;
          </button>
        </div>

        {/* Right Images with parallax */}
        <div ref={imageRef} className="flex-1 w-full md:max-w-[50%] lg:max-w-[55%] xl:mr-12 2xl:mr-36 relative">
          <div className="relative w-full max-w-[720px] ml-auto">
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
              className="rounded-xl mt-5 md:mt-7 w-full max-w-[620px] h-auto"
            />
            <div className="absolute -bottom-12 md:-bottom-16 left-0 flex items-end gap-3 md:gap-5">
              <Image
              src="/Rectangle 90.png"
              alt="food 1"
              width={250}
              height={210}
              className="
                rounded-lg
                -ml-8 md:-ml-10 lg:-ml-14
                -mb-2 md:-mb-3
                w-[180px] sm:w-[220px] md:w-[220px] lg:w-60
                h-auto
              "
            />
            <div>
              <Image
                src="/25years.png"
                alt="25 Years Experience"
                width={170}
                height={170}
                className="object-contain -ml-3 sm:-ml-4 md:-ml-3"
              />
            </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
