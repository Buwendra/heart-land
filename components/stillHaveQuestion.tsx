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

  const sectionClass =
    "relative w-full h-[260px] md:h-[303px] py-10 bg-[#000000] text-white overflow-hidden rounded-tr-[50px] " +
    openSans.className;

  return (
    <section suppressHydrationWarning className={sectionClass}>
      {/* TEXT */}
      <div className="relative z-10 mt-2 text-start md:text-left px-5 md:px-0">
        <h2 className="text-[20px] md:text-[35px] md:ml-52 mt-6 md:mt-8 font-bold">
          Still have questions ?
        </h2>

        <p className="text-[12px] md:text-[15px] max-w-xl md:max-w-[500px] md:ml-52 mt-3 opacity-90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* CTA */}
      <div className="flex justify-start ml-3 md:justify-start">
        <Link href="/Contact">
          <button
            className="
              mt-6 inline-flex items-center justify-center
              px-7 md:px-9 py-2
              rounded-full border-2 border-white
              text-white   text-[13px] md:text-[15px]
              tracking-[0.35em] md:tracking-[0.43em]
              transition-all duration-300
              hover:scale-[1.02] hover:bg-white hover:text-black
              md:ml-52
            "
            style={{ textTransform: "uppercase" }}
          >
            CONTACT US
          </button>
        </Link>
      </div>

      {/* PARALLAX IMAGE */}
      <div
  className="
    absolute
    right-7 md:right-8
    top-30 md:top-40
    -translate-y-1/2
    pointer-events-none
    w-30 h-25 md:w-[220px] md:h-[220px]
  "
  style={{
    marginRight: -30,
    transform: `translateY(${parallax(0.05)}px)`,
  }}
>
  <Image
    src="/questionPerson.png"
    alt="question person"
    width={150}
    height={150}
    className="object-contain w-full h-full"
  />
</div>

    </section>
  );
}
