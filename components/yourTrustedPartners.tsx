"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Partners() {
  const slowRef = React.useRef<HTMLDivElement>(null);
const mediumRef = React.useRef<HTMLDivElement>(null);

React.useEffect(() => {
  const onScroll = () => {
    const y = window.scrollY;

    if (slowRef.current) {
      slowRef.current.style.transform = `translateY(${y * 0.04}px)`;
    }

    if (mediumRef.current) {
      mediumRef.current.style.transform = `translateY(${y * 0.08}px)`;
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-full w-auto ">
        {/* Full-width Gradient Section */}
<div className=" bg-gradient-to-b from-[#fcd6d6] to-[#f5585866] py-7">
  
  {/* Content */}
  <div className="text-center -py-10">
    <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
      Our Trusted Partners
    </h2>

    <div className="flex justify-center mb-10">
      <Image
        src="/Group 68.png"
        alt="partners"
        width={1900}
        height={1000}
        className="object-contain"
      />
    </div>
  </div>

</div>


        {/* About Section   */}
        <div className="mx-auto mb-10 mt-32 max-w-[1100px] px-6">

          <p className="text-[#6D7D7D] text-sm tracking-widest uppercase mb-3">
            About
          </p>

          <h3 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-4">
            Your Trusted Partner in Sri Lankan Food Distribution
          </h3>

          <p className="text-gray-700 text-xl mt-5 leading-relaxed max-w-[1100px]">
            <span className="font-semibold text-black">
              Heartland General Trading Co. LLC
            </span>{" "}
            is a leading importer and distributor of premium Sri Lankan food 
            products in the UAE. Based in Dubai, we connect authentic Sri Lankan 
            flavors with global markets through trusted partnerships and modern logistics.
          </p>
        </div>

        {/* Two-column section */}
<div className="relative grid mx-auto max-w-[1100px] px-6 gap-10 items-start">
  {/* Left: image group */}
  <div ref={mediumRef} className="relative flex gap-5 -top-30 justify-start">
    {/* Market image */}
    <div className="w-[230px] h-[420px] overflow-hidden">
      <Image
        src="/market.png"
        alt="Food market"
        width={243}
        height={442}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Rice image */}
    <div className="w-[230px] h-[420px] overflow-hidden">
      <Image
        src="/Rice.png"
        alt="Rice"
        width={241}
        height={442}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Spices image */}
    <div className="w-[230px] h-[270px] overflow-hidden rounded-tr-[50px]">
      <Image
        src="/IMG3.png"
        alt="Spices"
        width={243}
        height={290}
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Right: Read More button (absolute) */}
  <div className="absolute top-32 right-32">
    <Link href="/About">
      <button
        type="button"
        className="bg-[#D11417] text-white cursor-pointer px-9 py-4 rounded-full font-semibold border-2 border-[#D11417] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 transform-gpu hover:bg-white hover:text-[#D11417]"
      >
        Read More
      </button>
    </Link>
  </div>
  <div className="flex flex-wrap gap-32 absolute top-[327px] left-[545px]">
  {/* 15+ Years Expertise */}
<div className="text-center lg:text-left">
  <h4
    className="font-normal font-['Open_Sans'] text-[40px] leading-[120%] text-[#6D7D7D]"
    style={{ letterSpacing: "20%" }}
  >
    15+
  </h4>

  <p
    className="mt-1 font-semibold font-['Open_Sans'] text-[16px] leading-[130%] uppercase text-[#000000]"
    style={{ letterSpacing: "90%" }}
  >
    Y e a r s <br /> E x p e r t i s e
  </p>
</div>


  {/* 30+ Partner Brands */}
  <div className="text-center lg:text-left">
    <h4
      className="font-normal font-['Open_Sans'] text-[40px] leading-[120%] text-[#6D7D7D]"
      style={{ letterSpacing: "20%" }}
    >
      30+
    </h4>
    <p
      className="mt-1 font-semibold font-['Open_Sans'] text-[16px] leading-[130%] uppercase text-[#000000]"
      style={{ letterSpacing: "43%" }}
    >
      P a r t n e r <br /> B r a n d s
    </p>
  </div>

  {/* 1000+ Happy Clients */}
  <div className="text-center lg:text-left">
    <h4
      className="font-normal font-['Open_Sans'] text-[40px] leading-[120%] text-[#6D7D7D]"
      style={{ letterSpacing: "0%" }}
    >
      1000+
    </h4>
    <p
      className="mt-1 font-semibold font-['Open_Sans'] text-[16px] leading-[130%] uppercase text-[#000000]"
      style={{ letterSpacing: "43%" }}
    >
      H a p p y <br /> C l i e n t s
    </p>
  </div>
</div>

</div>




        {/* Spacer */}
        <div className="mt-12" />
      </div>
    </section>
  );
}
