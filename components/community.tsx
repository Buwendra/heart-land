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
    <>
      {/* Desktop Layout */}
      <section className={`hidden md:flex w-full justify-start pb-12 sm:pb-16 md:pb-25 bg-white ${openSans.className}`}>
        <div className="flex flex-row gap-0 items-center w-full">

          {/* LEFT SIDE IMAGE */}
          <div className="relative w-[50%] lg:w-[55%] xl:w-[806px] h-[350px] lg:h-[380px] xl:h-[407px] shrink-0">
            <Image
              src="/community-hero.png"
              alt="Community"
              fill
              sizes="(max-width: 1024px) 50vw, 806px"
              className="object-cover rounded-tr-[250px] rounded-br-[250px] lg:rounded-tr-[350px] lg:rounded-br-[350px] xl:rounded-tr-[400px] xl:rounded-br-[400px]"
              priority
            />
          </div>

          {/* TEXT */}
          <div className="px-6 lg:px-10 xl:px-16 ml-2 lg:ml-6 xl:ml-8">
            <h2 className={`${openSans.className} text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-black mb-6 leading-tight`}>
              Be part of our<br />community
            </h2>

            <p className="text-base lg:text-lg xl:text-[18px] text-[#000000] font-normal leading-relaxed mb-8">
              We love what we do and we do it with passion.<br />
              We value the experimentation of the message<br />
              and smart incentives.
            </p>

            <Link href="/About">
              <button
                className={`${nunito.className} cursor-pointer px-10 lg:px-12 py-3.5 text-lg lg:text-xl font-bold border-2 border-[#E60012]
                text-[#E60012] rounded-full transition-all duration-300 ease-out hover:bg-[#E60012] hover:text-white hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1`}
              >
                Partner With Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Layout */}
      <section className={`md:hidden w-full py-8 bg-[#F5F5F5] ${openSans.className}`}>
        <div className="flex flex-col items-center text-center px-6">

          {/* Heading */}
          <h2 className={`${nunito.className} text-2xl font-bold text-black mb-4 leading-tight`}>
            Be part of our community
          </h2>

          {/* Description */}
          <p className="text-sm text-[#000000] font-normal leading-relaxed mb-6 max-w-md">
            We love what we do and we do it with passion. We value the experimentation of the message and smart incentives.
          </p>

          {/* Button */}
          <Link href="/About">
            <button
              className={`${nunito.className} cursor-pointer px-6 py-1 text-base font-bold border-2 border-[#E60012]
              text-[#E60012] bg-white rounded-full transition-all duration-300 ease-out hover:bg-[#E60012] hover:text-white hover:shadow-lg`}
            >
              Partner with Us
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
