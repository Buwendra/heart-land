"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Open_Sans, Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });

export default function Founders() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentSlide < founders.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const founders = [
    { name: "Fazal Mawjood", title: "Managing Director", img: "/Fazal Mawjood.png" },
    { name: "Usaamah Fazal", title: "Director", img: "/Usaamah Fazal.png" },
  ];

  useEffect(() => {
  const timer = setTimeout(() => setMounted(true), 0);

  const handleScroll = () => {
    cardsRef.current.forEach((card) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const offset = rect.top * 0.15;

      const imgWrapper = card.querySelector<HTMLElement>(".parallax-img");
      if (imgWrapper) imgWrapper.style.transform = `translateY(${offset}px)`;
    });
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    clearTimeout(timer);
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    cardsRef.current[index] = el;
  };

  if (!mounted) return null;

  return (
    <>
      {/* Desktop Section */}
      <section className="hidden md:block py-0 bg-white">
        {/* Section Header - Desktop */}
        <div className={`text-center max-w-4xl mb-8 md:mb-16 mx-auto px-4 sm:px-6 ${nunito.className}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Meet Our Founders</h2>
          <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Heartland General Trading was founded by Mohamed Fazal Mawjood, who envisioned a connection between 
            the Sri Lankan community in the UAE and authentic food products from home. 
            Their passion for quality and service drives our success.
          </p>
        </div>

{/* Desktop Layout - 2 cards centered */}
<div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-9">
  {/* vertical divider like the screenshot */}
  <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-[#E6E6E6]" />

  <div className="grid grid-cols-2 gap-8 lg:gap-12 justify-items-center items-start">
    {founders.map((founder, index) => (
      <div
        key={index}
        ref={(el) => setCardRef(el, index)}
        className="relative overflow-hidden bg-white group w-full max-w-[420px]"
      >
        {/* Image Container for Parallax */}
        <div className="h-[420px] lg:h-[520px] w-full overflow-hidden relative parallax-img">
          <Image
            src={founder.img}
            alt={founder.name}
            fill
            sizes="(max-width: 1024px) 50vw, 420px"
            className="object-cover transition-transform duration-300 ease-out"
            priority={index === 0}
          />
        </div>

        {/* Info Box */}
        <div className="mx-auto w-[80%] text-center border-t-8 border-red-600 bg-white relative -mt-10 z-20 min-h-[100px] md:min-h-[120px] py-4 px-4">
          <h3 className={`${openSans.className} font-bold text-base md:text-lg text-[#000000]`}>
            {founder.name}
          </h3>
          <p className={`${openSans.className} text-sm md:text-base font-semibold text-[#000000]`}>
            {founder.title}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

      </section>

      {/* Mobile Section */}
      <section className="md:hidden py-12 bg-black">
        {/* Section Header - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`text-center mb-8 px-6 ${nunito.className}`}
        >
          <p className="text-[16px] tracking-[0.5em] uppercase text-[#6D7D7D] mb-3">OUR FOUNDERS</p>
          <h2 className="text-[18px] font-bold mb-6 text-white">Meet Our Founders</h2>
          <p className="text-white text-[12px] leading-[22px] mb-10 text-center">
            At <span className="font-bold">Heartland General Trading</span>, we take pride in offering more than just quality products —
            we deliver trust, consistency, and a commitment to excellence in every partnership.
            Here&apos;s what makes us stand out in Sri Lanka&apos;s food industry
          </p>
        </motion.div>

        {/* Mobile Layout - Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col items-center px-6"
        >
          <div className="w-[286px] relative">
            {/* Slider Container */}
            <div
              className="overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {founders.map((founder, index) => (
                  <div key={index} className="w-[286px] flex-shrink-0">
                    <div className="relative overflow-hidden bg-black w-[286px]">
                      {/* Image Container */}
                      <div className="h-[381px] w-[286px] overflow-hidden relative rounded-2xl">
                        <Image
                          src={founder.img}
                          alt={founder.name}
                          fill
                          sizes="286px"
                          className="object-cover object-top"
                          priority={index === 0}
                        />
                      </div>

                      {/* Info Box */}
                      <div className="px-8 py-6 bg-white/60 text-center relative -mt-24 z-10 rounded-b-2xl backdrop-blur-sm">
                        <h3 className={`${openSans.className} font-bold text-[16px] text-[#000000] mb-1`}>
                          {founder.name}
                        </h3>
                        <p className={`${openSans.className} text-[12px] text-red-600`}>
                          {founder.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-3">
              {founders.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index ? 'w-8 bg-red-600' : 'w-2 bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
