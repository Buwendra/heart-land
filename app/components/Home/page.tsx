"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const links = [
    "Home",
    "About Us",
    "Products",
    "CSR",
    "Resources & Insights",
    "FAQ & Support",
  ];

  const [active, setActive] = useState("Home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-900">
            {/* Ellipses*/}

      <div className="absolute bottom-40 -left-20 z-30">
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
      <div className="absolute -top-14 -left-2 z-30">
          <Image
             src="/Ellipse 5.png"
             alt="Ellipse 5"
              width={500}
              height={600}
            className="object-contain"
  />
</div>


      <header className="max-w-7xl mx-auto px-6 pt-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center ml-14">
          <Image
            src="/logo.png"
            alt="logo"
            width={90}
            height={120}
            className="object-contain"
          />
        </div>

        {/* Navigation */}
        {mounted && (
          <nav className="hidden md:flex gap-12 items-center text-xl font-semibold leading-10 tracking-[-1px] font-sans">
            {links.map((link) => (
              <div key={link} className="relative group">
                <Link
                  href="#"
                  onClick={() => setActive(link)}
                  className="cursor-pointer"
                >
                  {link}
                </Link>
                <span
                  className={`absolute left-0 -bottom-1 h-[3px] transition-all duration-300 ${
                    active === link
                      ? "w-full bg-[#D11417]"
                      : "w-0 bg-black group-hover:w-full"
                  }`}
                ></span>
              </div>
            ))}
          </nav>
        )}

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link href="#">
            <Image
              src="/contact-button.png"
              alt="Contact button"
              width={160}
              height={130}
              className="object-contain mr-3.5"
            />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
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

            <div className="flex  -ml-8 mt-12 mb-8">
              <Link href="#">
                <Image
                  src="/product-button.png"
                  alt="product button"
                  width={180}
                  height={160}
                  className="object-contain"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/learn-more-button .png"
                  alt="learn more button"
                  width={220}
                  height={200}
                  className="object-contain"
                 />
              </Link>
            </div>

             <div className="flex items-center gap-4 mt-8">
              <div className="flex gap-3 items-center">
                
              <Link href="#">
                <Image
                  src="/Facebook.png"
                  alt="FB"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/insta.png"
                  alt="Insta"
                  width={40}
                  height={40}
                  className="object-contain"
                 />
              </Link>
              <Link href="#">
                <Image
                  src="/Facebook (2).png"
                  alt="Youtube"
                  width={40}
                  height={40}
                  className="object-contain"
                 />
              </Link>
            
                              
               </div>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>
          </div>

          {/* Right illustration */}
<div className="md:col-span-5 lg:col-span-6 relative flex items-center justify-center min-h-[600px]">
  
  {/* World Map - Background Layer */}
  <div className="absolute -left-80 top-56 w-[420px] h-[300px] md:w-[620px] md:h-[480px] opacity-180 pointer-events-none">
              <Image 
                src="/WRLD-EPS-02-4001 1.png" 
                alt="world map" 
                width={620} 
                height={480} 
                className="object-contain" 
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
  <div className="relative w-full max-w-[360px] md:bottom-20 md:left-32 md:max-w-[620px] h-[400px] md:h-[700px] z-20">
    <Image 
      src="/image 10.png" 
      alt="hero" 
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