"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


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
      {/* <div className="w-full bg-[#D11417] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto rounded-2xl p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-8 items-stretch">
            <div className="bg-white rounded-[10px] border border-[#EAEAEA] px-4 sm:px-8 lg:px-6 xl:px-8 py-6 sm:py-4 lg:py-8 xl:py-10 flex flex-col justify-center">
              <h3
                className={`${openSans.className} text-[20px] sm:text-[30px] lg:text-[26px] xl:text-[32px] 2xl:text-[36px] font-bold text-black mb-3 lg:mb-4 text-center lg:text-center`}
              >
                The Heart of the Community
              </h3>
              <p
                className={`${nunito.className} text-[16px] sm:text-[20px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] leading-[22px] sm:leading-6 lg:leading-[1.4] xl:leading-[1.5] text-black text-center lg:text-center`}
              >
                We believe in success with a soul. Through our Corporate Social
                Responsibility initiative, we dedicate a portion of our annual
                profits to vital health projects in Sri Lanka. This commitment
                reflects our deep-rooted dedication to making a positive,
                lasting impact that transcends commercial success.
              </p>
            </div>

            <div className="flex h-full items-center">
              <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-5 md:gap-5">
             
                          <div className="bg-white rounded-[20px] border border-[#EAEAEA] shadow-sm flex flex-col items-center sm:items-start gap-2 w-full px-5 py-5 min-h-[110px] sm:min-h-0 lg:px-4 lg:py-4 xl:px-5 xl:py-5">
                            <Icon
                              icon="streamline-ultimate-color:award-trophy-1"
                              className="w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-11 2xl:h-11"
                            />
                            <p
                              className={`${openSans.className} text-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] font-semibold text-black leading-tight`}
                            >
                              ISO & HACCP Certified
                            </p>
                          </div>
            
                          <div className="bg-white rounded-[20px] border border-[#EAEAEA] shadow-sm flex flex-col items-center sm:items-start gap-2 w-full px-5 py-5 min-h-[110px] sm:min-h-0 lg:px-4 lg:py-4 xl:px-5 xl:py-5">
                            <Icon
                              icon="noto-v1:man-farmer"
                              className="w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-11 2xl:h-11"
                            />
                            <p
                              className={`${openSans.className} text-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] font-semibold text-black leading-tight`}
                            >
                              Supporting Local Farmers
                            </p>
                          </div>
            
                          <div className="bg-white rounded-[20px] border border-[#EAEAEA] shadow-sm flex flex-col items-center sm:items-start gap-2  w-full px-5 py-5 min-h-[110px] sm:min-h-0 lg:px-4 lg:py-4 xl:px-5 xl:py-5">
                            <Icon
                              icon="twemoji:handshake"
                              className="w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-11 2xl:h-11"
                            />
                            <p
                              className={`${openSans.className} text-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] font-semibold text-black leading-tight`}
                            >
                              Community Partnership
                            </p>
                          </div>
            
                          <div className="bg-white rounded-[20px] border border-[#EAEAEA] shadow-sm flex flex-col items-center sm:items-start gap-2 w-full px-5 py-5 min-h-[110px] sm:min-h-0 lg:px-4 lg:py-4 xl:px-5 xl:py-5">
                            <Icon
                              icon="noto:red-heart"
                              className="w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-11 2xl:h-11"
                            />
                            <p
                              className={`${openSans.className} text-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] font-semibold text-black leading-tight`}
                            >
                              CSR Health Projects
                            </p>
                          </div>
                        </div></div>
                      </div>
                    </div>
                  </div> */}

      {/* Parallax Header */}
      <motion.div
        style={{ y: y1 }}
        className="pt-20 md:pt-32 pb-6 md:pb-10 text-center  px-4 sm:px-6 mt-10 lg:px-8 xl:px-10"
      >
        <motion.h4
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
          style={{ letterSpacing: "5px" }}
          className="text-[16px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-gray-500 uppercase font-openSans"
        >
          Our Commitment
        </motion.h4>

        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
          className="font-nunito text-[18px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] 2xl:text-[64px] font-bold mt-2"
        >
          Why Work With Us
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
          className="font-openSans max-w-[1080px] xl:max-w-[1600px] text-[12px] sm:text-base md:text-lg lg:text-xl xl:text-[24px] 2xl:text-3xl mt-3 md:mt-10 mb-6 md:mb-10 mx-auto text-black leading-[29px] lg:leading-8 xl:leading-9 px-4"
        >
          At Heartland General Trading, we prioritize quality, freshness,
          authenticity, and community. As a premier distributor of Sri Lankan
          food products in the UAE, we are committed to delivering the rich
          flavors of our homeland while maintaining the highest standards. Our
          mission goes beyond providing delicious food; we strive to foster
          lasting connections within the Sri Lankan community and positively
          impact local economies.
        </motion.p>
      </motion.div>

      {/* Cards Section */}
      <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 max-w-7xl lg:max-w-[1200px] xl:max-w-[1500px] 2xl:max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 pb-0 md:pb-5 lg:pb-8">
        {/* CARD 1 */}
        <motion.div
          style={{ y: y1 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
          className="p-4 sm:p-6 lg:p-8 xl:p-10 bg-gray-100 md:bg-white shadow-none rounded-2xl border border-transparent hover:border-gray-100 hover:shadow-2xl transition-all flex flex-col h-full"
        >
          <div className="relative flex items-center justify-start h-14 lg:h-16 xl:h-18 mb-2 sm:mb-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 rounded-full bg-[#D11417] flex items-center justify-center">
              <span className="text-white text-[24px] sm:text-4xl lg:text-[40px] xl:text-[44px] font-nunito font-bold">
                01
              </span>
            </div>
          </div>

          <h3
            className="font-nunito font-semibold text-[#071440] text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] mb-5 mt-5"
          >
            Quality Products & Freshness
          </h3>
          <p
            className="font-openSans text-[#676767] text-[14px] lg:text-[16px] xl:text-[18px] leading-normal lg:leading-5 xl:leading-7"
          >
            At Heartland, we take quality seriously. We carefully select our
            products from trusted suppliers to ensure that each item from our
            aromatic spices to our premium rice and tasty snacks captures the
            authentic flavors of Sri Lanka.
          </p>
          {/*<button
            className={`${poppins.className} mt-auto pt-6 text-[#071440] cursor-pointer font-bold text-[15px] hover:underline self-start`}
          >
            Explore more →
          </button>*/}
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          style={{ y: y2 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
          className="p-4 sm:p-6 lg:p-8 xl:p-10 bg-gray-100 md:bg-white shadow-none rounded-2xl border border-transparent hover:border-gray-100 hover:shadow-2xl transition-all flex flex-col h-full"
        >
          <div className="relative flex items-center justify-start h-14 lg:h-16 xl:h-18 mb-2 sm:mb-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 rounded-full bg-[#D11417] flex items-center justify-center">
              <span className="text-white text-[24px] sm:text-4xl lg:text-[40px] xl:text-[44px] font-bold font-nunito">
                02
              </span>
            </div>
          </div>

          <h3
            className="font-nunito font-semibold text-[#071440] text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] mt-5 mb-5"
          >
            Extensive Supplier Network
          </h3>
          <p
            className="font-openSans text-[#676767] text-[14px] lg:text-[16px] xl:text-[18px] leading-normal lg:leading-5 xl:leading-7"
          >
            Our strong network of suppliers is key to maintaining the quality
            and availability of our products. By partnering closely with local
            farmers and producers in Sri Lanka, we not only ensure a great
            selection but also support our agricultural community back home.
          </p>
          {/*<button
            className={`${poppins.className} mt-auto pt-6 text-[#071440] cursor-pointer font-bold text-sm hover:underline self-start`}
          >
            Explore more →
          </button>*/}
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          style={{ y: y3 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
          className="p-4 sm:p-6 lg:p-8 xl:p-10 bg-gray-100 md:bg-white shadow-none rounded-2xl border border-transparent hover:border-gray-100 hover:shadow-2xl transition-all flex flex-col h-full"
        >
          <div className="relative flex items-center justify-start h-14 lg:h-16 xl:h-18 mb-2 sm:mb-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 rounded-full bg-[#D11417] flex items-center justify-center">
              <span className="text-white text-[24px] sm:text-4xl lg:text-[40px] xl:text-[44px] font-bold font-nunito">
                03
              </span>
            </div>
          </div>

          <h3
            className="font-nunito font-semibold text-[#071440] text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] mt-5 mb-5"
          >
            Nationwide Distribution
          </h3>
          <p
            className="font-openSans text-[#676767] text-[14px] lg:text-[16px] xl:text-[18px] leading-normal lg:leading-5 xl:leading-7"
          >
            With over two decades of experience, Heartland General Trading has
            established a robust distribution network across the UAE. Our
            products are readily available in major hypermarkets, supermarkets,
            and grocery stores, ensuring easy access to your favorite Sri Lankan
            essentials.
          </p>
          {/* <button
            className={`${poppins.className} mt-auto pt-6 text-[#071440] cursor-pointer font-bold text-sm hover:underline self-start`}
          >
            Explore more →
          </button> */}
        </motion.div>
      </div>
    </div>
  );
}
