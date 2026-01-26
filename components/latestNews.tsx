"use client";

import Image from "next/image";
import { Roboto, Nunito, Open_Sans } from "next/font/google";
import { useEffect, useState } from "react";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["600", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });

export default function LatestNews() {
  const [offsetY, setOffsetY] = useState(0);

  // Update offset on scroll
  const handleScroll = () => {
    setOffsetY(window.scrollY * 0.05); // adjust speed
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Maximum upward shift so the title never gets hidden
  const maxShift = 20;

  return (
    <div className="mx-auto mt-[20px] flex justify-center">
      <div className="max-w-[1240px] w-full px-[40px]">
        {/* Title and line */}
        <div className="flex items-center gap-[40px] mb-[30px]">
          <h3 className={`${roboto.className} text-[18px] font-normal text-black`}>
            Get the latest updates on our blog and news.
          </h3>
          <div className="w-[80px] border border-black"></div>
        </div>

        {/* Subtitle */}
        <h2 className={`${nunito.className} text-[30px] font-semibold leading-[140%] mb-[50px]`}>
          Latest News
        </h2>

        {/* Card with parallax effect */}
        <div
          
  className="flex flex-col md:flex-row border border-[#DDDDDD] rounded-[20px] md:rounded-[30px] shadow-[4px_4px_8.8px_0px_rgba(0,0,0,0.25)] overflow-hidden mx-auto w-[92%] md:w-full md:h-[480px]"
  style={{
    maxWidth: "1182px",
    transform: `translateY(-${offsetY > maxShift ? maxShift : offsetY}px)`,
  }}
>

        
          {/* Left Image */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
  <Image
    src="/PlaceholderImage.png"
    alt="Blog Post Image"
    width={301}
    height={500}
    className="w-full h-auto object-contain md:object-cover md:rounded-l-[30px] md:rounded-br-[50px]"
  />
</div>



          {/* Right Content */}
         <div className="p-[16px] md:p-[48px] flex flex-col w-full md:w-1/2 order-1 md:order-2">

            <div>
              <p className={`${roboto.className} font-semibold text-[14px] mb-[20px]`}>All</p>
              <h3 className={`${nunito.className} font-bold text-[32px] leading-[130%] mb-[30px]`}>
                Sustainable Food Distribution: Building a Greener Future
              </h3>
              <p className={`${roboto.className} font-normal text-[16px] leading-[150%]`}>
                Brief excerpt of the blog post content.
              </p>
            </div>

            {/* Avatar section */}
<div className="flex items-center gap-[12px] mt-[18px] md:mt-auto">

              <div className="w-[48px] h-[48px] rounded-[25px] bg-gray-300 overflow-hidden relative">
                <Image
                  src="/blogAvatar.png"
                  alt="Avatar"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col">
                <p className={`${roboto.className} font-semibold text-[14px]`}>John Doe</p>
                <p className={`${roboto.className} font-normal text-[14px] flex items-center gap-2`}>
                  <span>Jan 11, 2022</span>
                  <span className="text-[18px] font-normal leading-[150%]">•</span>
                  <span className="text-[14px] font-normal leading-[150%]">5 min read</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
