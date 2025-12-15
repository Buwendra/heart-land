"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Inter, Nunito } from "next/font/google";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

const team = [
  { name: "Tharindu Senanayake", role: "Export Logistics Coordinator", img: "/tharindu.png", offset: 0, size: 360 },
  { name: "Hashan Madushanka", role: "Business Development Executive", img: "/hashan.png", offset: -40, size: 330 },
  { name: "Shalini Perera", role: "Quality Assurance Officer", img: "/shalini.png", offset: 0, size: 365 },
  { name: "Hansi Hettiarachchi", role: "Digital Marketing Specialist", img: "/hansi.png", offset: -40, size: 330 },
  { name: "Lakshani Wanigathunga", role: "Customer Relations Manager", img: "/lakshani.png", offset: 0, size: 380 },
  { name: "Hansi Hettiarachchi", role: "Digital Marketing Specialist", img: "/hansi.png", offset: -40, size: 330 },
  { name: "Tharindu Senanayake", role: "Export Logistics Coordinator", img: "/tharindu.png", offset: 0, size: 360 },
];

export default function TeamMembers() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const { scrollY } = useScroll();
  const slowParallax = useTransform(scrollY, [0, 1000], [0, -30]); 

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

useEffect(() => {
  const timer = setTimeout(() => setMounted(true), 0);
  return () => clearTimeout(timer);
}, []);


  if (!mounted) return null;  

  return (
    <section className="w-full flex flex-col items-center py-20 px-6">
      {/* Heading */}
      <motion.div
        style={{ y: slowParallax }}
        className={`text-center text-2xl max-w-4xl mb-16 ${nunito.className}`}
      >
        <h2 className="text-4xl font-bold mb-8">Our Team Members</h2>
        <p>
          Our diverse team of professionals brings together expertise in food technology, marketing, logistics, and sustainability — all united by a common purpose:
        </p>
      </motion.div>

      {/* Arrows + scrollable container */}
      <div className="relative w-full max-w-10xl">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute -top-12 right-24 z-10 w-10 h-10 cursor-pointer flex items-center justify-center rounded-full bg-[#EDEDED] shadow hover:bg-gray-400"
        >
          <svg
            width="17"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.53 6.47a.75.75 0 0 1 0 1.06L5.56 11.5H21a.75.75 0 0 1 0 1.5H5.56l3.97 3.97a.75.75 0 1 1-1.06 1.06l-5.25-5.25a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"/>
          </svg>
        </button>
        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute -top-12 right-7 z-10 w-10 h-10 cursor-pointer flex items-center justify-center rounded-full bg-[#EDEDED] shadow hover:bg-gray-400"
        >
          <svg
            width="17"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.47 6.47a.75.75 0 0 0 0 1.06L18.44 11.5H3a.75.75 0 0 0 0 1.5h15.44l-3.97 3.97a.75.75 0 1 0 1.06 1.06l5.25-5.25a.75.75 0 0 0 0-1.06l-5.25-5.25a.75.75 0 0 0-1.06 0Z"/>
          </svg>
        </button>

        {/* Scrollable Team Grid */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto pb-4 pt-20 gap-0 no-scrollbar justify-between"
        >
          {team.map((person, i) => (
            <motion.div
              key={i}
              style={{ y: slowParallax }}
              className="shrink-0 flex flex-col items-center p-0 rounded-2xl -mr-20"
            >
              <div
                className="relative mb-0"
                style={{
                  width: `${person.size}px`,
                  height: `${person.size}px`,
                  marginTop: person.offset,
                }}
              >
                <Image src={person.img} alt={person.name} fill className="object-contain" />
              </div>
              <h3
                className={`${inter.className} font-semibold w-52 text-2xl text-[#564F4F] text-left`}
              >
                {person.name}
              </h3>
              <p className={`${inter.className} text-lg w-52 font-semibold text-[#ADADAD] text-left`}>
                {person.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
}
