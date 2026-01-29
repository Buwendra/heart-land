"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Icon } from "@iconify/react";


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

    {/* Community Impact Box */}
<div className="w-full bg-[#D11417] py-10 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto rounded-2xl p-6 sm:p-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
      
      {/* LEFT BIG BOX */}
      <div className="bg-white items-center rounded-2xl border border-[#EAEAEA] p-6 sm:p-7 text-center">
  <h3
    className={`${openSans.className} text-[20px] sm:text-[25px] font-bold text-black mb-3`}
  >
    The Heart of the Community
  </h3>
  <p
    className={`${nunito.className} text-[13px] sm:text-[16px] leading-[22px] sm:leading-6 text-black`}
  >
    We believe in success with a soul. Through our Corporate Social Responsibility initiative,
    we dedicate a portion of our annual profits to vital health projects in Sri Lanka. This
    commitment reflects our deep-rooted dedication to making a positive, lasting impact that
    transcends commercial success.
  </p>
</div>


      {/* RIGHT 2x2 BOX GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Box 1 */}
        <div
          className="bg-white rounded-[20px] border border-[#EAEAEA] shadow-sm flex flex-col items-left gap-2.5"
          style={{
            width: 250,
            height: 97,
            paddingTop: 11,
            paddingRight: 29,
            paddingBottom: 11,
            paddingLeft: 29,
          }}
        >
          <Icon icon="streamline-ultimate-color:award-trophy-1" width={34} height={34} />
          <p className={`${openSans.className} text-[15px] font-semibold text-black`}>
            ISO & HACCP Certified
          </p>
        </div>

        {/* Box 2 */}
        <div
          className="bg-white rounded-[20px] border border-[#EAEAEA] shadow-sm flex flex-col items-left gap-[10px]"
          style={{
            width: 250,
            height: 97,
            paddingTop: 11,
            paddingRight: 29,
            paddingBottom: 11,
            paddingLeft: 29,
          }}
        >
          <Icon icon="noto-v1:man-farmer" width={34} height={34} />
          <p className={`${openSans.className} text-[15px] font-semibold text-black`}>
            Supporting Local Farmers
          </p>
        </div>

        {/* Box 3 */}
        <div
          className="bg-white rounded-[20px] border border-[#EAEAEA] shadow-sm flex flex-col items-left gap-[10px]"
          style={{
            width: 250,
            height: 97,
            paddingTop: 11,
            paddingRight: 29,
            paddingBottom: 11,
            paddingLeft: 29,
          }}
        >
          <Icon icon="twemoji:handshake" width={34} height={34} />
          <p className={`${openSans.className} text-[15px] font-semibold text-black`}>
            Community Partnership
          </p>
        </div>

        {/* Box 4 */}
        <div
          className="bg-white rounded-[20px] border border-[#EAEAEA] shadow-sm flex flex-col items-left gap-[10px]"
          style={{
            width: 250,
            height: 97,
            paddingTop: 11,
            paddingRight: 29,
            paddingBottom: 11,
            paddingLeft: 29,
          }}
        >
          <Icon icon="noto:red-heart" width={34} height={34} />
          <p className={`${openSans.className} text-[15px] font-semibold text-black`}>
            CSR Health Projects
          </p>
        </div>

      </div>
    </div>
  </div>
</div>



  {/* Parallax Header */}
  <motion.div
    style={{ y: y1 }}
    className="pt-20 md:pt-32 pb-6 md:pb-10 text-center  px-4 sm:px-6"
  >
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
      className={`${nunito.className} max-w-[980px] text-[12px] sm:text-base md:text-lg 
        lg:text-xl mt-3 md:mt-10 mb-6 md:mb-10 mx-auto text-black leading-[29px] px-4`}
    >
      At Heartland General Trading, we prioritize quality, freshness,
      authenticity, and community. As a premier distributor of Sri Lankan
      food products in the UAE, we are committed to delivering the rich
      flavors of our homeland while maintaining the highest standards.
      Our mission goes beyond providing delicious food; we strive to foster
      lasting connections within the Sri Lankan community and positively
      impact local economies.
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
            Quality Products & Freshness
          </h3>
          <p className={`${nunito.className} text-[#676767] text-[14px] leading-relaxed`}>
            At Heartland, we take quality seriously. We carefully select our products from trusted  suppliers to ensure that each item from our aromatic spices to our premium rice and tasty  snacks captures the authentic flavors of Sri Lanka. 
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
            Extensive Supplier Network
          </h3>
          <p className={`${nunito.className} text-[#676767] text-[14px] leading-relaxed`}>
            Our strong network of suppliers is key to maintaining the quality and availability of our products. By partnering closely with local farmers and producers in Sri Lanka, we not only ensure a great selection but also support our agricultural community back home.
            </p>
          <button className={`${poppins.className} mt-4 sm:mt-6 text-[#071440] cursor-pointer font-bold text-sm hover:underline`}>
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
            Nationwide Distribution
          </h3>
          <p className={`${nunito.className} text-[#676767] text-[14px] leading-relaxed`}>
            With over two decades of experience, Heartland General Trading has established a robust distribution network across the UAE. Our products are readily available in major hypermarkets, supermarkets, and grocery stores, ensuring easy access to your favorite Sri Lankan essentials.
          </p>
          <button className={`${poppins.className} mt-6 sm:mt-10 text-[#071440] cursor-pointer font-bold text-sm hover:underline`}>
            Explore more →
          </button>
        </motion.div>
      </div>
    </div>
  );
}
