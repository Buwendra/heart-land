"use client";

import Image from "next/image";
import { Nunito, Open_Sans } from "next/font/google";
import { Icon } from "@iconify/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";



const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function BrandsDistributionStrength() {
    const cardRef = useRef<HTMLDivElement>(null);

const { scrollYProgress } = useScroll({
  target: cardRef,
  offset: ["start end", "end start"],
});

// subtle movement values
const cardY = useTransform(scrollYProgress, [0, 1], [40, -40]);
const imageY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className={`${nunito.className} text-[20px] sm:text-[24px] md:text-[32px] font-bold text-black`}>
            Our Brands & Distribution Strength
          </h2>

          <p
            className={`${openSans.className} mt-3 text-[12px] sm:text-[13px] md:text-[14px] leading-5 md:leading-[22px] text-black max-w-3xl mx-auto`}
          >
            Beyond our distribution services, Heartland is the proud home of Kelani Lanka, a brand synonymous with
            premium quality and authentic Sri Lankan taste. While Heartland manages the logistics, Kelani Lanka
            represents our commitment to excellence in every household.
          </p>
        </div>

        {/* Card */}
        <motion.div
  ref={cardRef}
  style={{ y: cardY }}
  className="mt-8 bg-white rounded-2xl border border-[#EAEAEA] shadow-sm p-5 sm:p-6 md:p-8"
>
          <h3 className={`${openSans.className} text-[13px] sm:text-[14px] md:text-[15px] font-bold text-black`}>
            Sole Distributor for Sri Lanka’s Most Iconic Global Brands
          </h3>

          <p className={`${openSans.className} mt-1 text-[11px] sm:text-[12px] text-black/60`}>
            Furthermore, our strength as a market leader is cemented by our role as the Sole Distributor for:
          </p>

          {/* Pills */}
          <div className="mt-5 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-28">

            {/* Pill 1 */}
            <div className="flex items-center gap-3 rounded-[25px] border border-[#D0D0D0] px-4 py-3 w-full sm:w-[280px]">
              <div className="w-12 h-12 rounded-full bg-[#D11417] flex items-center justify-center shrink-0">
                <Icon icon="streamline-ultimate-color:award-trophy-1" width={30} height={30} />
              </div>
              <div className="min-w-0">
                <p className={`${openSans.className} text-[13px] font-bold text-black leading-tight`}>
                  Maliban
                </p>
                <p className={`${openSans.className} text-[10px] text-black leading-tight`}>
                  The taste of Sri Lankan heritage.
                </p>
              </div>
            </div>

            {/* Pill 2 */}
            <div className="flex items-center gap-3 rounded-[25px] border border-[#D0D0D0] px-4 py-3 w-full sm:w-[300px]">
              <div className="w-12 h-12 rounded-full bg-[#D11417] flex items-center justify-center shrink-0">
                <Icon icon="streamline-ultimate-color:award-trophy-1" width={30} height={30} />
              </div>
              <div className="min-w-0">
                <p className={`${openSans.className} text-[13px] font-bold text-black leading-tight`}>
                  Prima Kottumee
                </p>
                <p className={`${openSans.className} text-[10px] text-black/60 leading-tight`}>
                  The island’s favorite instant indulgence.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <motion.div
  style={{ y: imageY }}
  className="mt-6 rounded-2xl overflow-hidden w-full h-40 sm:h-[190px] md:h-[210px] relative"
>

            <Image
              src="/distribution-yard.png" 
              alt="Distribution strength"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 960px"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
