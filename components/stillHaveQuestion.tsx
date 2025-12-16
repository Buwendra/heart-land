"use client";

import { Open_Sans } from "next/font/google"; 
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function HaveQ() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallax = (multiplier: number) => scrollY * multiplier;

  return (
    <div>
      <section
        className={`relative w-full h-[303px] py-10 bg-[#000000] text-white overflow-hidden rounded-tr-[50px] ${openSans.className}`}
      >
        <div className="relative z-10 mt-2 items-start text-left">
          <h2 className="text-[35px] ml-52 mt-8 font-bold">
            Still have questions ?
          </h2>

          <p className="text-[15px] max-w-[500px] ml-52 mx-auto mt-3 items-start text-left opacity-90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* CTA */}
        <Link href="/Contact">
          <button
            className="mt-6 inline-flex items-center cursor-pointer ml-52 justify-center px-9 py-2 rounded-full border-2 border-white text-white font-openSans font-semibold text-[15px] leading-4 tracking-[0.43em] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 transform-gpu hover:bg-white hover:text-black"
            style={{ textTransform: "uppercase" }}
          >
            CONTACT US
          </button>
        </Link>

        {/* Parallax Image */}
        <div
          className="absolute right-8 top-40 -translate-y-1/2 pointer-events-none"
          style={{
            width: 370,
            height: 370,
            marginRight: -60,
            transform: `translateY(${parallax(0.05)}px)`,
          }}
        >
          <Image
            src="/questionPerson.png"
            alt="question Mark"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
      </section>
    </div>
  );
}
