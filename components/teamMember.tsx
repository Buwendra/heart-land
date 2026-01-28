"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Inter, Nunito, Open_Sans } from "next/font/google";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });

const team = [
  { name: "Manoj Kumar", role: "Senior Sales Manager", img: "/Manoj Kumar.png", offset: 0, size: 360 },
  { name: "Rizvi Farook", role: "General Manager", img: "/Rizvi Farook.png", offset: -40, size: 330 },
  { name: "Shalini Perera", role: "Quality Assurance Officer", img: "/shalini.png", offset: 0, size: 365 },
  { name: "Hansi Hettiarachchi", role: "Digital Marketing Specialist", img: "/hansi.png", offset: -40, size: 330 },
  { name: "Lakshani Wanigathunga", role: "Customer Relations Manager", img: "/lakshani.png", offset: 0, size: 380 },
  { name: "Hansi Hettiarachchi", role: "Digital Marketing Specialist", img: "/hansi.png", offset: -40, size: 330 },
  { name: "Tharindu Senanayake", role: "Export Logistics Coordinator", img: "/tharindu.png", offset: 0, size: 360 },
];

const mobileTeam = [
  { name: "Manoj Kumar", role: "Senior Sales Manager", img: "/Manoj Kumar1.png" },
  { name: "Rizvi Farook", role: "General Manager", img: "/Rizvi Farook1.png" },
  { name: "Alexis Jensen", role: "Export Logistics Coordinator", img: "/fcf5dbf8a60f8660b370b432520d1e7ddd3cf12b.jpg" },
  { name: "Alexis Jensen", role: "Export Logistics Coordinator", img: "/fcf5dbf8a60f8660b370b432520d1e7ddd3cf12b.jpg" },
];

export default function TeamMembers() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const { scrollY } = useScroll();
  const slowParallax = useTransform(scrollY, [0, 1000], [0, -30]);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

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

    if (isLeftSwipe && currentSlide < mobileTeam.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Desktop Layout */}
      <section className="hidden md:flex w-full flex-col items-center py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          style={{ y: slowParallax }}
          className={`text-center max-w-4xl mb-8 sm:mb-12 md:mb-16 px-4 ${nunito.className}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8">Our Team Members</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            Our diverse team of professionals brings together expertise in food technology, marketing, logistics, and sustainability — all united by a common purpose:
          </p>
        </motion.div>

        {/* Arrows + scrollable container */}
        <div className="relative w-full max-w-7xl">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute -top-8 sm:-top-10 md:-top-12 right-16 sm:right-20 md:right-24 z-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 cursor-pointer flex items-center justify-center rounded-full bg-[#EDEDED] shadow hover:bg-gray-400 transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="sm:w-4 sm:h-4 md:w-[17px] md:h-[17px]"
            >
              <path d="M9.53 6.47a.75.75 0 0 1 0 1.06L5.56 11.5H21a.75.75 0 0 1 0 1.5H5.56l3.97 3.97a.75.75 0 1 1-1.06 1.06l-5.25-5.25a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"/>
            </svg>
          </button>
          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute -top-8 sm:-top-10 md:-top-12 right-4 sm:right-6 md:right-7 z-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 cursor-pointer flex items-center justify-center rounded-full bg-[#EDEDED] shadow hover:bg-gray-400 transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="sm:w-4 sm:h-4 md:w-[17px] md:h-[17px]"
            >
              <path d="M14.47 6.47a.75.75 0 0 0 0 1.06L18.44 11.5H3a.75.75 0 0 0 0 1.5h15.44l-3.97 3.97a.75.75 0 1 0 1.06 1.06l5.25-5.25a.75.75 0 0 0 0-1.06l-5.25-5.25a.75.75 0 0 0-1.06 0Z"/>
            </svg>
          </button>

          {/* Scrollable Team Grid */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto pb-2 sm:pb-3 md:pb-4 pt-12 sm:pt-16 md:pt-20 gap-0 no-scrollbar justify-between"
          >
            {team.map((person, i) => {
              const getImageSize = () => {
                if (typeof window !== 'undefined') {
                  if (window.innerWidth < 640) return person.size * 0.65;
                  if (window.innerWidth < 768) return person.size * 0.75;
                  if (window.innerWidth < 1024) return person.size * 0.85;
                  return person.size;
                }
                return person.size;
              };

              const getOffset = () => {
                if (typeof window !== 'undefined') {
                  if (window.innerWidth < 640) return person.offset * 0.65;
                  if (window.innerWidth < 768) return person.offset * 0.75;
                  if (window.innerWidth < 1024) return person.offset * 0.85;
                  return person.offset;
                }
                return person.offset;
              };

              return (
                <motion.div
                  key={i}
                  style={{ y: slowParallax }}
                  className="shrink-0 flex flex-col items-center p-0 rounded-2xl -mr-10 sm:-mr-14 md:-mr-16 lg:-mr-20"
                >
                  <div
                    className="relative mb-0"
                    style={{
                      width: `${getImageSize()}px`,
                      height: `${getImageSize()}px`,
                      marginTop: getOffset(),
                    }}
                  >
                    <Image src={person.img} alt={person.name} fill className="object-contain" />
                  </div>
                  <h3
                    className={`${inter.className} font-semibold w-32 sm:w-40 md:w-36 lg:w-52 text-base sm:text-lg md:text-lg lg:text-xl text-[#564F4F] text-left`}
                  >
                    {person.name}
                  </h3>
                  <p className={`${inter.className} text-xs sm:text-sm md:text-base lg:text-lg w-32 sm:w-40 md:w-48 lg:w-52 font-semibold text-[#ADADAD] text-left`}>
                    {person.role}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <style jsx>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>

      {/* Mobile Layout */}
      <section className="md:hidden w-full py-12 bg-white">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`text-center mb-8 px-6 ${nunito.className}`}
        >
          <h2 className="text-[18px] font-bold mb-2">Our Team Members</h2>
          <p className={`text-[12px] leading-[20px] px-5 ${openSans.className}`}>
            Our diverse team of professionals brings together expertise in food technology, marketing, logistics, and sustainability — all united by a common purpose:
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative w-full"
        >
          <div
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out gap-8"
              style={{
                transform: `translateX(calc(50% - 130px - ${currentSlide * (260 + 32)}px))`
              }}
            >
              {mobileTeam.map((person, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="relative w-[260px] h-[380px] rounded-3xl overflow-hidden">
                    <Image
                      src={person.img}
                      alt={person.name}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    {/* Text Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent pt-12 pb-4 px-4 text-center">
                      <h3 className={`${openSans.className} font-bold text-white text-[16px] mb-1`}>
                        {person.name}
                      </h3>
                      <p className={`${openSans.className} text-white text-[12px]`}>
                        {person.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {mobileTeam.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? 'w-8 bg-black' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
