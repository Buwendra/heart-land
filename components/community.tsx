"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Open_Sans, Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function CommunitySection() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`w-full flex justify-start pb-25 bg-white ${openSans.className}`}>
      <div className="flex flex-col md:flex-row gap-0 items-center w-full">

        {/* LEFT SIDE IMAGE */}
        <div className="relative w-full md:w-[806px] h-[250px] sm:h-[300px] md:h-[407px] shrink-0">
          <Image
            src="/community-hero.png"
            alt="Community"
            fill
            sizes="(max-width: 768px) 100vw, 806px"
            className="object-cover rounded-tr-[200px] rounded-br-[200px] md:rounded-tr-[400px] md:rounded-br-[400px]"
            priority
          />
        </div>

        {/* TEXT */}
        <div className="px-6 sm:px-8 md:px-8 lg:px-12 xl:px-16 md:ml-4 lg:ml-8">
          <h2 className={`${openSans.className} text-[32px] sm:text-3xl md:text-[48px] font-bold text-black mb-4 sm:mb-6 leading-tight`}>
            Be part of our<br />community
          </h2>

          <p className="text-base sm:text-lg md:text-[24px] lg:text-[20px] text-[#000000] font-normal leading-relaxed mb-6 sm:mb-8">
            We love what we do and we do it with passion.<br />
            We value the experimentation of the message<br />
            and smart incentives.
          </p>

          <Link href="/About">
            <button
              className={`${nunito.className} cursor-pointer px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 text-base sm:text-lg md:text-xl font-bold border-2 border-[#E60012]
              text-[#E60012] rounded-full transition-all duration-300 ease-out hover:bg-[#E60012] hover:text-white hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1`}
            >
              Partner With Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}  