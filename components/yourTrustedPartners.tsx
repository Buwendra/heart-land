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
    <section className="py-10 md:py-20 bg-white">
      <div className="max-w-full w-auto">
        {/* Full-width Gradient Section */}
<div className="bg-gradient-to-b from-[#fcd6d6] to-[#f5585866] py-7">

  {/* Content */}
  <div className="text-center px-4">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 md:mb-8">
      Our Trusted Partners
    </h2>

    <div className="flex justify-center mb-8 md:mb-10 -mx-8 sm:-mx-4 md:mx-0 md:px-4">
      <Image
        src="/Group 68.png"
        alt="partners"
        width={1900}
        height={1000}
        className="object-contain w-[220%] sm:w-[200%] md:w-full md:max-w-[1900px]"
      />
    </div>
  </div>

</div>


        {/* About Section   */}
        <div className="mx-auto mb-0 mt-5 md:mt-20 max-w-[1100px] px-4 md:px-8 text-center lg:text-left">

          <p className="text-[#6D7D7D] text-[16px] sm:text-base md:text-lg lg:text-sm tracking-[0.4rem] uppercase mb-5 mt-8">
            About
          </p>

          <h3 className="text-[20px] sm:text-3xl md:text-4xl font-bold text-black leading-normal mb-4 tracking-wide">
            Your Trusted Partner in Sri Lankan Food Distribution
          </h3>

          <p className=" text-left text-[15px] sm:text-lg md:text-xl mt-5 mb-6 lg:mb-0 leading-relaxed -tracking-normal">
            
            <span className="font-light lg:font-normal">
              At Heartland General Trading, every product in our growing range is a testament to our  dedication to 
              authenticity and flavor. We invite you to explore the essence of Sri Lanka with  us.
            </span>
          </p>

          {/* Read More button - Mobile only */}
          <div className="flex justify-center lg:hidden mt-8 mb-10">
            <Link href="/About">
              <button
                type="button"
                className="bg-[#D11417] text-white cursor-pointer px-6 py-2 rounded-full font-semibold border-2 border-[#D11417] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 transform-gpu hover:bg-white hover:text-[#D11417]"
              >
                Read More
              </button>
            </Link>
          </div>

          {/* Stats section - Mobile */}
          <div className="flex lg:hidden justify-center gap-8 sm:gap-12 md:gap-14 px-4 sm:px-8 mb-2">
            {/* 15+ Years Expertise */}
            <div className="text-center flex-1">
              <h4 className="font-semibold text-[25px] sm:text-[40px] leading-tight text-black mb-2">
                25
              </h4>
              <p className="font-light text-[12px] sm:text-[10px] leading-tight uppercase text-black tracking-[0.4em] whitespace-nowrap">
                YEARS
              </p>
              <p className="font-light text-[12px] sm:text-[10px] leading-tight uppercase text-black tracking-[0.4em] whitespace-nowrap">
                EXPERTISE
              </p>
            </div>

            {/* 30+ Partner Brands */}
            <div className="text-center flex-1">
              <h4 className="font-semibold text-[25px] sm:text-[40px] leading-tight text-black mb-2">
                30+
              </h4>
              <p className="font-light text-[12px] sm:text-[10px] leading-tight uppercase text-black tracking-[0.4em] whitespace-nowrap">
                PARTNER
              </p>
              <p className="font-light text-[12px] sm:text-[10px] leading-tight uppercase text-black tracking-[0.4em] whitespace-nowrap">
                BRANDS
              </p>
            </div>

            {/* 1000+ Happy Clients */}
            <div className="text-center flex-1">
              <h4 className="font-semibold text-[25px] sm:text-[40px] leading-tight text-black mb-2">
                1000+
              </h4>
              <p className="font-light text-[12px] sm:text-[10px] leading-tight uppercase text-black tracking-[0.4em] whitespace-nowrap">
                HAPPY
              </p>
              <p className="font-light text-[12px] sm:text-[10px] leading-tight uppercase text-black tracking-[0.4em] whitespace-nowrap">
                CLIENTS
              </p>
            </div>
          </div>
        </div>

        {/* Two-column section - Desktop only */}
<div className="relative mx-auto max-w-[1100px] px-6 hidden lg:block">
  {/* Left: image group */}
  <div ref={slowRef} className="relative flex flex-wrap lg:flex-nowrap gap-2 sm:gap-3 md:gap-4 lg:gap-5 justify-center lg:justify-start mb-8 lg:mb-0">
    {/* Market image */}
    <div className="w-[90px] sm:w-[120px] md:w-[180px] lg:w-[230px] h-[160px] sm:h-[220px] md:h-[320px] lg:h-[420px] overflow-hidden">
      <Image
        src="/market.png"
        alt="Food market"
        width={243}
        height={442}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Rice image */}
    <div className="w-[90px] sm:w-[120px] md:w-[180px] lg:w-[230px] h-[160px] sm:h-[220px] md:h-[320px] lg:h-[420px] overflow-hidden">
      <Image
        src="/Rice.png"
        alt="Rice"
        width={241}
        height={442}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Spices image */}
    <div className="w-[90px] sm:w-[120px] md:w-[180px] lg:w-[230px] h-[100px] sm:h-[140px] md:h-[200px] lg:h-[270px] overflow-hidden rounded-tr-[20px] sm:rounded-tr-[30px] md:rounded-tr-[40px] lg:rounded-tr-[50px]">
      <Image
        src="/Spices.png"
        alt="Spices"
        width={243}
        height={290}
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Right: Read More button - Desktop */}
  <div className="flex justify-center lg:absolute lg:top-48 lg:right-10 mt-8 lg:mt-0">
    <Link href="/About">
      <button
        type="button"
        className="bg-[#D11417] text-white cursor-pointer px-6 sm:px-9 py-3 sm:py-4 rounded-full font-semibold border-2 border-[#D11417] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 transform-gpu hover:bg-white hover:text-[#D11417]"
      >
        Read More
      </button>
    </Link>
  </div>

  {/* Stats section - Desktop */}
<div className="relative lg:absolute lg:top-[400px] lg:right-0 w-full lg:max-w-[700px] flex flex-wrap justify-center lg:justify-end gap-8 sm:gap-12 lg:gap-16 px-6 mt-8 lg:mt-0">

  {/* 15+ Years Expertise */}
<div className="text-center lg:text-left">
  <h4
    className="font-normal font-['Open_Sans'] text-[28px] sm:text-[32px] md:text-[40px] leading-[120%] text-[#6D7D7D]"
    style={{ letterSpacing: "20%" }}
  >
    25
  </h4>

  <p
    className="mt-1 font-semibold font-['Open_Sans'] text-[12px] sm:text-[14px] md:text-[16px] leading-[130%] uppercase text-[#000000]"
    style={{ letterSpacing: "90%" }}
  >
    Y e a r s <br /> E x p e r t i s e
  </p>
</div>


  {/* 30+ Partner Brands */}
  <div className="text-center lg:text-left">
    <h4
      className="font-normal font-['Open_Sans'] text-[28px] sm:text-[32px] md:text-[40px] leading-[120%] text-[#6D7D7D]"
      style={{ letterSpacing: "20%" }}
    >
      30+
    </h4>
    <p
      className="mt-1 font-semibold font-['Open_Sans'] text-[12px] sm:text-[14px] md:text-[16px] leading-[130%] uppercase text-[#000000]"
      style={{ letterSpacing: "43%" }}
    >
      P a r t n e r <br /> B r a n d s
    </p>
  </div>

  {/* 1000+ Happy Clients */}
  <div className="text-center lg:text-left">
    <h4
      className="font-normal font-['Open_Sans'] text-[28px] sm:text-[32px] md:text-[40px] leading-[120%] text-[#6D7D7D]"
      style={{ letterSpacing: "0%" }}
    >
      1000+
    </h4>
    <p
      className="mt-1 font-semibold font-['Open_Sans'] text-[12px] sm:text-[14px] md:text-[16px] leading-[130%] uppercase text-[#000000]"
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
