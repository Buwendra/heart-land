"use client";

import Image from "next/image";
import { Roboto, Nunito, Open_Sans } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["600", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });

export default function LatestNews() {
  return (
    <div className="mx-[10px] mt-[150px]"> {/* reduced horizontal margin */}
      <div className="max-w-[1240px] mx-auto px-[60px]"> {/* reduced inner padding */}
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

        {/* Card */}
        <div
          className="flex border border-[#DDDDDD] rounded-[30px] shadow-[4px_4px_8.8px_0px_rgba(0,0,0,0.25)] overflow-hidden"
          style={{ width: "100%", maxWidth: "1282px", height: "480px" }}
        >
          {/* Left Image */}
          <div className="relative w-1/2 h-[500px] rounded-[20px]  overflow-hidden">
            <Image
              src="/PlaceholderImage.png"
              alt="Blog Post Image"
              fill
              className="object-cover rounded-l-[30px] rounded-br-[50px]"
            />
          </div>

          {/* Right Content */}
          <div className="p-[48px] flex flex-col justify-between w-1/2 h-full">
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
            <div className="flex items-center gap-[16px] mt-[40px]">
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
