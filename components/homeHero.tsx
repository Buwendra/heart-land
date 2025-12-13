"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";


export default function HomeHero() {
const slowRef = useRef<HTMLDivElement>(null);
const mediumRef = useRef<HTMLDivElement>(null);
const fastRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const handleScroll = () => {
    const y = window.scrollY;

    if (slowRef.current)
      slowRef.current.style.transform = `translateY(${y * 0.05}px)`;

    if (mediumRef.current)
      mediumRef.current.style.transform = `translateY(${y * 0.1}px)`;

    if (fastRef.current)
      fastRef.current.style.transform = `translateY(${y * 0.15}px)`;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

     return (
    <main className="min-h-screen bg-white text-slate-900">
          
 

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Ellipses*/}

      <div className="absolute bottom-96 -left-20 z-30">
            <Image
              src="/Ellipse 3.png"
              alt="Ellipse 3"
             width={500}
             height={800}
             className="object-contain"
            />
            </div>
             

      <div className="absolute -top-12 -left-10 z-30">
            <Image
              src="/Ellipse 4.png"
              alt="Ellipse 4"
              width={500}
              height={700}
              className="object-contain"
             />
        </div>
      <div className="absolute -top-10 -left-2 z-30">
          <Image
             src="/Ellipse 5.png"
             alt="Ellipse 5"
              width={500}
              height={600}
            className="object-contain"
  />
</div>

          {/* Left content */}
          <div className="md:col-span-7 mt-3 ml-14 lg:col-span-6 z-10">
           <h1 
              className="font-extrabold text-[60px] md:text-[60px] leading-[60px] md:leading-[70px] tracking-[0.02em]"
              style={{ fontFamily: "'David Libre', serif" }}
              >
               Your Gateway to Sri Lankan Products in the UAE
              </h1>
            <p className="font-normal mr-48 mb-20 text-[16px] leading-[29px] text-slate-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex -ml-8 mt-12 mb-8">
             <Link href="/Product"><button
             
              className="inline-block cursor-pointer ml-7 h-13 w-30 bg-black text-white px-5 py-2 shadow-md hover:shadow-lg transition-shadow
             rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm"
            >
              Products
            </button></Link> 
              <Link href="/About"><button
             
              className="inline-block cursor-pointer ml-10 h-13 w-40 bg-[#D11417] text-white px-5 py-2 shadow-md hover:shadow-lg transition-shadow
             rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm"
            >
              Learn More
            </button></Link> 
            </div>

             <div className="flex items-center gap-4 mt-8">
              <div className="flex gap-3 items-center">
                
              <a
    href="https://www.facebook.com/p/Heartland-General-Trading-Co-LLC-61556223026571/?_rdc=2&_rdr#"
    target="_blank"
    rel="noopener noreferrer"
  >
                <Image
                  src="/Facebook.png"
                  alt="FB"
                  width={40}
                  height={40}
                  className="object-contain cursor-pointer"
                />
              </a>

              <a
    href="https://www.facebook.com/p/Heartland-General-Trading-Co-LLC-61556223026571/?_rdc=2&_rdr#"
    target="_blank"
    rel="noopener noreferrer"
  >
                <Image
                  src="/insta.png"
                  alt="Insta"
                  width={40}
                  height={40}
                  className="object-contain cursor-pointer"
                 />
              </a>
              <a
    href="https://www.facebook.com/p/Heartland-General-Trading-Co-LLC-61556223026571/?_rdc=2&_rdr#"
    target="_blank"
    rel="noopener noreferrer"
  >
                <Image
                  src="/Facebook (2).png"
                  alt="Youtube"
                  width={40}
                  height={40}
                  className="object-contain cursor-pointer"
                 />
              </a>
            
                              
               </div>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>
          </div>

          {/* Right illustration */}
<div className="md:col-span-5 lg:col-span-6 relative flex items-center justify-center min-h-[600px]">
  
  {/* World Map - Background Layer */}
<div
  ref={mediumRef}
  className="absolute -left-140 top-4 w-[420px] h-[300px] md:w-[2020px] md:h-[1080px] opacity-60 pointer-events-none"
>
              <Image 
                src="/MapNew.png" 
                alt="world map" 
                width={1220} 
                height={880} 
                className="object-contain rotate-[8deg]" 
              />
            </div>
            <div className="absolute -left-24 -top-15 w-[420px] h-[300px] md:w-[450px] md:h-[280px] opacity-180 pointer-events-none">
              <Image 
                src="/Group.png" 
                alt="Group" 
                width={620} 
                height={480} 
                className="object-contain" 
              />
            </div>
            <div className="absolute left-[440px] bottom-[39px] w-[420px] h-[300px] md:w-[220px] md:h-[280px] opacity-180 pointer-events-none">
              <Image 
                src="/Group (1).png" 
                alt="Group 1" 
                width={320} 
                height={280} 
                className="object-contain" 
              />
            </div>
            <div className="absolute -right-[200px] -top-18 w-[420px] h-[300px] md:w-[450px] md:h-[300px] opacity-180 pointer-events-none">
              <Image 
                src="/Group (2).png" 
                alt="Group 2" 
                width={320} 
                height={480} 
                className="object-contain" 
              />
            </div>

  {/* Vector (10)   */}
<div className="absolute bottom-[280px] left-1 z-10">
  <Image
    src="/Vector (10).png"
    alt="vector"
    width={500}   
    height={200}
    className="object-contain w-[200px] md:w-[300px] lg:w-[520px]  "
  />
</div>

  {/* Hero Image - Main Layer */}
  <div ref={fastRef} className=" relative w-full max-w-[360px] md:bottom-20 md:left-32 md:max-w-[620px] h-[400px] md:h-[700px] z-20">
    <Image 
      src="/image 10.png" 
      alt="SL map" 
      fill
      style={{ objectFit: 'contain' }}
      priority
    />
  </div>

  {/* Frame 16 - Top Layer */}
  <div className="absolute bottom-40 -left-13 z-30">
    <Image
      src="/Frame 16.png"
      alt="frame"
      width={120}
       height={200}
      className="object-contain"
    />
  </div>
  
</div>
        </div>
      </section>
    </main>
  );
}