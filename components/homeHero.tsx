import React from "react";
import Image from "next/image";
import Link from "next/link";
import ParallaxLayer from "./ParallaxLayer";


export default function HomeHero() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative w-full px-0 md:px-15 overflow-hidden">
        {/* Mobile Layout (below md) */}
<div className="md:hidden relative bg-white overflow-x-hidden">
  {/* World Map */}
  <ParallaxLayer
    speed={0.1}
    className="absolute opacity-80 pointer-events-none z-0"
    style={{
      left: "-300px",
      top: "-60px",
      width: "1000px",
      height: "1200px",
    }}
  >
    <Image
      src="/MapNew.png"
      alt="world map"
      width={1220}
      height={880}
      className="object-contain rotate-[8deg]"
    />
  </ParallaxLayer>

  {/* Sri Lankan Map */}
  <ParallaxLayer
    speed={0.15}
    className="absolute z-10 pointer-events-none"
    style={{
      right: "-350px",
      top: "32px",
      width: "1000px",
      height: "800px",
    }}
  >
    <Image
      src="/image 10.png"
      alt="SL map"
      fill
      style={{ objectFit: "contain", objectPosition: "right top" }}
      priority
    />
  </ParallaxLayer>

  {/* Content */}
  <div className="relative z-20 px-6 mr-10 pr-10 pb-4 pt-[300px] max-w-[420px]">

            {/* H1 */}
            <h1
              className="font-extrabold text-[32px] leading-[45px] tracking-[0.02em] mb-4"
              style={{ fontFamily: "'David Libre', serif" }}
            >
              Welcome to Heartland General Trading
            </h1>

            {/* Paragraph */}
            <p className="font-normal text-[14px] leading-[26px] text-[#5C6574] mb-8 text-left">
              At Heartland General Trading, we bring the authentic soul of Sri Lankan cuisine to the UAE.
              We proudly offer a curated selection of over 200+ premium products, each chosen for its
              quality, freshness, and heritage. Our commitment ensures you have direct access to the rich,
              vibrant flavors of the island.
            </p>

            <p className="font-normal text-[14px] leading-[26px] text-[#5C6574] mb-8 text-left">
              Discover our aromatic spice collection, featuring Turmeric, Cinnamon, and high-quality
              Curry Powder, alongside an extensive variety of premium rice. From kitchen staples like
              Keeri Samba, Red Raw, and White Rice to nutrient-rich traditional grains such as Kurulu
              Thuda and Suwadel, we cater to every palate.
            </p>

            <p className="font-normal text-[14px] leading-[26px] text-[#5C6574] mb-8 text-left">
              Beyond the essentials, explore our diverse range including fine flours, rich jams, natural
              Jaggery, and Kithul Treacle. For a true taste of the island&apos;s coast, our Jack Mackerel is the
              perfect addition to your home-cooked meals.
            </p>

            {/* Buttons */}
            <div className="flex gap-5 mb-8">
              {/* <Link href="/Product">
                <button className="bg-black text-white px-6 py-2.5 text-[13px] shadow-md transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 transform-gpu hover:bg-white hover:text-black border-2 border-black rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm">
                  Products
                </button>
              </Link>
              <Link href="/About">
                <button className="bg-[#D11417] text-white px-6 py-2.5 text-[13px] shadow-md transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 transform-gpu hover:bg-white hover:text-[#D11417] border-2 border-[#D11417] rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm">
                  Learn More
                </button>
              </Link> */}
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <div className="h-px bg-slate-200 flex-1"></div>
              <div className="flex gap-3 items-center">
                <a
                  href="https://web.facebook.com/HeartlandGeneralTrading"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/Facebook.png"
                    alt="FB"
                    width={40}
                    height={40}
                    className="object-contain cursor-pointer transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 w-[32px] h-[32px]"
                  />
                </a>
                <a
                  href="https://www.instagram.com/heartlandgeneral/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/insta.png"
                    alt="Insta"
                    width={40}
                    height={40}
                    className="object-contain cursor-pointer transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 w-[32px] h-[32px]"
                  />
                </a>
                <a
                  href="https://web.facebook.com/HeartlandGeneralTrading"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/youtube.png"
                    alt="Youtube"
                    width={40}
                    height={40}
                    className="object-contain cursor-pointer transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 w-[32px] h-[32px]"
                  />
                </a>
              </div>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>
          </div>
        </div>

        {/* Desktop/Tablet Layout (md and above) */}
        <div className="hidden md:block w-full relative py-10 md:py-20">



          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Ellipses */}
            <div className="absolute bottom-96 -left-20 z-30 hidden lg:block">
              <Image
                src="/Ellipse 3.png"
                alt="Ellipse 3"
                width={500}
                height={800}
                className="object-contain"
              />
            </div>

            <div className="absolute -top-12 -left-10 z-30 hidden lg:block">
              <Image
                src="/Ellipse 4.png"
                alt="Ellipse 4"
                width={500}
                height={700}
                className="object-contain"
              />
            </div>
            <div className="absolute -top-10 -left-2 z-30 hidden lg:block">
              <Image
                src="/Ellipse 5.png"
                alt="Ellipse 5"
                width={500}
                height={600}
                className="object-contain"
              />
            </div>

            {/* Left content */}
            <div className="md:col-span-7 lg:col-span-6 z-10 px-4">
              <h1
                className="font-extrabold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[36px] sm:leading-[44px] md:leading-[56px] lg:leading-[70px] tracking-[0.02em]"
                style={{ fontFamily: "'David Libre', serif" }}
              >
                Welcome to Heartland General Trading
              </h1>

              <p className="font-normal text-[14px] leading-[26px] text-[#5C6574] mb-8 text-left">
                At Heartland General Trading, we bring the authentic soul of Sri Lankan cuisine to the UAE.
                We proudly offer a curated selection of over 200+ premium products, each chosen for its
                quality, freshness, and heritage. Our commitment ensures you have direct access to the rich,
                vibrant flavors of the island.
              </p>

              <p className="font-normal text-[14px] leading-[26px] text-[#5C6574] mb-8 text-left">
                Discover our aromatic spice collection, featuring Turmeric, Cinnamon, and high-quality
                Curry Powder, alongside an extensive variety of premium rice. From kitchen staples like
                Keeri Samba, Red Raw, and White Rice to nutrient-rich traditional grains such as Kurulu
                Thuda and Suwadel, we cater to every palate.
              </p>

              <p className="font-normal text-[14px] leading-[26px] text-[#5C6574] mb-8 text-left">
                Beyond the essentials, explore our diverse range including fine flours, rich jams, natural
                Jaggery, and Kithul Treacle. For a true taste of the island&apos;s coast, our Jack Mackerel is the
                perfect addition to your home-cooked meals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-12 mb-8">
                {/* <Link href="/Product">
                  <button className="inline-block cursor-pointer w-full sm:w-auto bg-black text-white px-6 py-3 shadow-md transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 transform-gpu hover:bg-white hover:text-black border-2 border-black rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm">
                    Products
                  </button>
                </Link>
                <Link href="/About">
                  <button className="inline-block cursor-pointer w-full sm:w-auto bg-[#D11417] text-white px-6 py-3 shadow-md transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 transform-gpu hover:bg-white hover:text-[#D11417] border-2 border-[#D11417] rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm">
                    Learn More
                  </button>
                </Link> */}
              </div>

              <div className="flex items-center gap-4 mt-8">
                <div className="flex gap-3 items-center">
                  <a
                    href="https://web.facebook.com/HeartlandGeneralTrading"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/Facebook.png"
                      alt="FB"
                      width={40}
                      height={40}
                      className="object-contain cursor-pointer transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/heartlandgeneral/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/insta.png"
                      alt="Insta"
                      width={40}
                      height={40}
                      className="object-contain cursor-pointer transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/p/Heartland-General-Trading-Co-LLC-61556223026571/?_rdc=2&_rdr#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/youtube.png"
                      alt="Youtube"
                      width={40}
                      height={40}
                      className="object-contain cursor-pointer transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]"
                    />
                  </a>
                </div>
                <div className="h-px bg-slate-200 flex-1 hidden sm:block"></div>
              </div>
            </div>

            {/* Right illustration */}
              <div className="md:col-span-5 lg:col-span-6 relative flex items-center justify-center min-h-[400px] md:min-h-[600px]
                2xl:justify-end">


              {/* World Map - Background Layer */}
              <ParallaxLayer
                speed={0.1}
                className="absolute md:-left-[500px] lg:-left-120 xl:-left-140 2xl:-left-[520px] 3xl:-left-[580px] -top-28
           md:w-[1200px] lg:w-[1600px] xl:w-[2020px] 2xl:w-[2200px] 3xl:w-[2400px]
           md:h-[700px] lg:h-[900px] xl:h-[1080px] 2xl:h-[1150px] 3xl:h-[1250px]
           md:opacity-50 lg:opacity-60 pointer-events-none"
>
                <Image
                  src="/MapNew.png"
                  alt="world map"
                  width={1220}
                  height={880}
                  className="object-contain"
                />
              </ParallaxLayer>
              <div className="absolute md:-left-24 lg:-left-10 xl:-left-28 md:-top-10 lg:-top-12 xl:-top-15 md:w-[320px] lg:w-[380px] xl:w-[450px] md:h-[220px] lg:h-[245px] xl:h-[280px] opacity-180 pointer-events-none">
                <Image
                  src="/Group.png"
                  alt="Group"
                  width={620}
                  height={480}
                  className="object-contain"
                />
              </div>
              <div className="absolute md:left-[60px] lg:left-[330px] xl:left-[420px] md:bottom-[26px] lg:bottom-[32px] xl:bottom-[39px] md:w-[175px] lg:w-[195px] xl:w-[220px] md:h-[190px] lg:h-[215px] xl:h-[280px] opacity-180 pointer-events-none">
                <Image
                  src="/Group (1).png"
                  alt="Group 1"
                  width={320}
                  height={280}
                  className="object-contain"
                />
              </div>
              <div className="absolute md:-right-[240px] lg:-right-[170px] xl:-right-[210px] md:-top-13 lg:-top-15 xl:-top-18 md:w-[320px] lg:w-[380px] xl:w-[450px] md:h-[220px] lg:h-[245px] xl:h-[300px] opacity-180 pointer-events-none">
                <Image
                  src="/Group (2).png"
                  alt="Group 2"
                  width={320}
                  height={480}
                  className="object-contain"
                />
              </div>

              {/* Vector (10) */}
              <div className="absolute md:bottom-[220px] lg:bottom-[250px] xl:bottom-[280px] md:-left-8 lg:-left-1 xl:left-1 z-10">
                <Image
                  src="/Vector (10).png"
                  alt="vector"
                  width={500}
                  height={200}
                  className="object-contain md:w-[240px] lg:w-[380px] xl:w-[520px]"
                />
              </div>

              {/* Hero Image - Main Layer */}
              <ParallaxLayer
                speed={0.15}
                className="relative w-full md:max-w-[420px] lg:max-w-[520px] xl:max-w-[620px] md:left-16 md:bottom-20 lg:left-32 md:h-[500px] lg:h-[600px] xl:h-[700px] z-20"
              >
                <Image
                  src="/image 10.png"
                  alt="SL map"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </ParallaxLayer>

              {/* Frame 16 - Top Layer */}
              <div className="absolute md:bottom-32 lg:bottom-36 xl:bottom-40 md:-left-16 lg:-left-12 xl:-left-13 z-30">
                <Image
                  src="/Frame 16.png"
                  alt="frame"
                  width={120}
                  height={200}
                  className="object-contain md:w-[100px] lg:w-[110px] xl:w-[120px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
