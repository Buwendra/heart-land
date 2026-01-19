"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import { Nunito, Open_Sans, Poppins } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function WhyWorkWithUs() {
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => setMounted(true), 0);
  return () => clearTimeout(timer);
}, []);


  const y1 = useTransform(scrollY, [0, 400], [0, -80]);
  const y2 = useTransform(scrollY, [0, 400], [0, -80]);
  const y3 = useTransform(scrollY, [0, 400], [0, -80]);

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  if (!mounted) return null; // render nothing on server

  return (
    <div className="w-full mt-8 min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Parallax Header */}
      <motion.div style={{ y: y1 }} className="pt-20 md:pt-32 pb-6 md:pb-10 text-center px-4 sm:px-6">
        <motion.h4
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
          style={{ letterSpacing: "5px" }}
          className="text-[16px] sm:text-xs text-gray-500 uppercase"
        >
          About Us
        </motion.h4>

        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
          className={`${nunito.className} text-[18px] sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2`}
        >
          Why Work With Us
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
          className={`${nunito.className} max-w-4xl text-[12px] sm:text-base md:text-lg lg:text-xl mt-3 md:mt-10 mb-6 md:mb-10 mx-auto text-black leading-[20px] px-4`}
        >
          At <span className="font-semibold">Heartland General Trading</span>, we take pride in offering more than just quality products — we deliver trust, consistency, and a commitment to excellence in every partnership. Here&apos;s what makes us stand out in Sri Lanka&apos;s food industry.
        </motion.p>
      </motion.div>

      {/* Cards Section */}
      <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 sm:px-6 pb-0 md:pb-20">
        {/* CARD 1 */}
        <motion.div
          style={{ y: y1 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
          className="p-6 sm:p-8 bg-gray-100 md:bg-white shadow-lg rounded-2xl border border-gray-100 hover:shadow-2xl transition-shadow"
        >
          <div className="relative flex items-center justify-start h-14">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#D11417] flex items-center justify-center">
              <span className="text-white text-[24px] sm:text-4xl font-inter font-bold">01</span>
            </div>
          </div>

          <h3 className={`${openSans.className} font-semibold text-[#071440] text-[18px] sm:text-lg mb-2 mt-5`}>
            Quality Certified Product
          </h3>
          <p className={`${nunito.className} text-[#676767] text-[14px] leading-relaxed`}>
            Every product we deliver undergoes rigorous quality checks and adheres to international food-safety standards. From sourcing raw ingredients to final packaging, our process ensures freshness, authenticity, and reliability in every batch.
          </p>
          <button className={`${poppins.className} mt-6 sm:mt-9 text-[#071440] cursor-pointer font-bold text-[14px] hover:underline`}>
            Explore more →
          </button>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          style={{ y: y2 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
          className="p-6 sm:p-8 bg-gray-100 md:bg-white shadow-lg rounded-2xl border border-gray-100 hover:shadow-2xl transition-shadow"
        >
          <div className="relative flex items-center justify-start h-14">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#D11417] flex items-center justify-center">
              <span className="text-white text-[24px] sm:text-4xl font-bold font-inter">02</span>
            </div>
          </div>

          <h3 className={`${openSans.className} font-semibold text-[#071440] text-[18px] sm:text-lg mt-5 mb-2`}>
            Strong Supplier Network
          </h3>
          <p className={`${nunito.className} text-[#676767] text-[14px] leading-relaxed`}>
            With connections across Sri Lanka&apos;s trusted suppliers, growers, manufacturers, and distributors, we guarantee a steady supply of premium products. Our long-term partnerships ensure transparency, ethical sourcing, and better growth for local producers.
          </p>
          <button className={`${poppins.className} mt-4 sm:mt-6 text-[#071440] cursor-pointer font-semibold text-sm hover:underline`}>
            Explore more →
          </button>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          style={{ y: y3 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
          className="p-6 sm:p-8 bg-gray-100 md:bg-white shadow-lg rounded-2xl border border-gray-100 hover:shadow-2xl transition-shadow"
        >
          <div className="relative flex items-center justify-start h-14">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#D11417] flex items-center justify-center">
              <span className="text-white text-[24px] sm:text-4xl font-bold font-inter">03</span>
            </div>
          </div>

          <h3 className={`${openSans.className} font-semibold text-[#071440] text-[18px] sm:text-lg mt-5 mb-2`}>
            Efficient UAE Distribution
          </h3>
          <p className={`${nunito.className} text-[#676767] text-[14px] leading-relaxed`}>
            With advanced logistics networks, we ensure timely delivery across Sri Lanka and international markets. Our efficient distribution channels maintain product freshness while ensuring every customer receives the best.
          </p>
          <button className={`${poppins.className} mt-6 sm:mt-10 text-[#071440] cursor-pointer font-semibold text-sm hover:underline`}>
            Explore more →
          </button>
        </motion.div>
      </div>
    </div>
  );
}
