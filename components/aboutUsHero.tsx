"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AboutHero() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  // Parallax scrolling for right images
  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const offset = window.scrollY * 0.02; // slow parallax
      imageRef.current.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 mt-30 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 ml-28 mb-20">
          <p className="text-lg font-semibold text-[#BA5561] tracking-[3px] uppercase mb-2">
            A Bit
          </p>
          <h1 className="text-4xl md:text-5xl uppercase font-bold mb-6">About Us</h1>
          <p className="text-lg text-gray-700 mb-6">
            We are a Sri Lankan-based food distributor and service partner committed to delivering quality, authenticity, and freshness. Our mission is to connect local producers with consumers and businesses through trusted partnerships and transparent supply chains. From farm to table, we ensure that every product reflects the taste, culture, and values of Sri Lanka.
          </p>
          <Link
            href="#"
            className="
              inline-block uppercase font-semibold 
              bg-[#D11417] text-white px-10 py-4 
              shadow-2xl hover:shadow-xl transition 
              relative overflow-hidden rounded-xl 
            "
            style={{
              clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
              borderBottomRightRadius: "10px",
            }}
          >
            Explore More
          </Link>
        </div>

        {/* Right Images with parallax */}
        <div ref={imageRef} className="flex-1 mr-36 relative">
          <Image
            src="/Rectangle 88.png"
            alt="About 1"
            width={700}
            height={600}
            className="rounded-xl"
          />
          <Image
            src="/Subtract.png"
            alt="About 2"
            width={600}
            height={500}
            className="rounded-xl mt-7" 
          /> 
          <div className="grid grid-cols-2 gap-5 absolute -bottom-16 left-0">
            <Image
              src="/Rectangle 90.png"
              alt="food 1"
              width={270}
              height={220}
              className="rounded-lg -ml-14 -mb-3"
            />
            <div className="absolute text-center ml-32 -mb-[19px] text-3xl bottom-4 left-4 bg-[#309EC4] rounded-xl text-white px-7 py-6 font-bold">
              15+ <br />Years
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
