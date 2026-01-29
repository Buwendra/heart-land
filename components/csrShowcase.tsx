"use client";

import Image from "next/image";
import { Oswald, Questrial, Newsreader, Nunito } from "next/font/google";
import { useEffect, useState } from "react";
import { inter } from "@/app/fonts";


const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "700"] });
const newsReader = Newsreader({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });
const questrial = Questrial({ subsets: ["latin"], weight: ["400"] });

export default function CsrShowcase() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallax = (multiplier: number) => `translateY(${scrollY * multiplier}px)`;

  return (
    <section className="w-full max-w-[1400px] mx-auto md:px-8 px-5 py-0">
      {/* DESKTOP ONLY */}
<div className="hidden md:block">
  

      {/* Heading */}
      <h2
  className={`${nunito.className} text-2xl md:text-5xl font-bold text-center max-w-4xl mx-auto mt-14 leading-tight`}
>
  Heartland <span className="text-red-700">♥</span> Homeland <br />
  Our Commitment to a Healthier Future
</h2>

<p
  className={`${nunito.className} text-center mt-8 max-w-4xl mx-auto font-medium text-[16px] md:text-[22px] leading-[29px] text-black`}
>
  At Heartland General Trading, we believe that business
  success is only meaningful when it serves a greater purpose. We view our
  responsibility to the community not just as a duty, but as a serious,
  long-term commitment.
</p>


      {/* GRID */}
      <div className="-mt-10 grid grid-cols-2 md:grid-cols-5 gap-1 place-items-center">
        {/* CARD 1 */}
        <div
          className="relative w-[235px] h-[350px] left-2 rounded-2xl overflow-hidden"
          style={{ gridColumn: "1 / 2", gridRow: "1 / 2", transform: parallax(0.05) }}
        >
          <Image src="/meronFrame 14.png" alt="" fill className="object-cover" />
          <p className={`${oswald.className} text-[40px] font-extrabold text-white absolute top-15 left-[25px]`}>
            95%
          </p>
          <p
            className={`${questrial.className} text-[13px] leading-[18px] text-white absolute top-[140px] left-[25px] w-[180px]`}
          >
            We partner directly with Sri Lankan growers and small producers to ensure
            fair trade and sustainable sourcing.
          </p>
          <div
            className="absolute flex items-center justify-between px-4"
            style={{
              width: "210px",
              height: "60px",
              top: "280px",
              left: "10.31px",
              borderRadius: "41.23px",
              backgroundColor: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(6px)",
            }}
          >
            <span className={`${inter.className} text-white text-sm`}>Learn More</span>
            <div className="w-12 h-12 rounded-full cursor-pointer flex items-center justify-center translate-x-2.5">
              <Image src="/arrowY.png" alt="" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* CARD 6 */}
        <div
          className="relative left-2 overflow-hidden"
          style={{ gridColumn: "5 / 6", gridRow: "1 / 2", transform: parallax(0.05) }}
        >
          <Image src="/gallery.png" alt="" width={240} height={240} className="rounded-lg object-cover mt-8 " />
          <p className={`${newsReader.className} absolute text-center items-center left-14 top-22 text-[#2E2E2E] px-3 py-1 rounded text-[30px] font-bold`}>
            Gallery
          </p>
          <div
            className="absolute flex items-center justify-between px-4"
            style={{
              width: "225px",
              height: "60px",
              top: "315px",
              left: "8px",
              borderRadius: "41.23px",
              backgroundColor: "#0000004D",
              backdropFilter: "blur(16px)",
            }}
          >
            <span className={`${inter.className} text-white text-sm`}>See all our moments</span>
            <div className="w-12 h-12 rounded-full cursor-pointer flex items-center justify-center translate-x-2.5">
              <Image src="/arrowB.png" alt="" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* 2nd ROW CARDS */}
         <div
          className="col-span-1 w-[235px] h-[140px] bg-[#000000CC] mb-[200px] ml-5 rounded-4xl p-4 text-white text-center flex flex-col justify-center"
          style={{ gridColumn: "1 / 2", gridRow: "2 / 3", transform: parallax(0.03) }}
        >
          <div>
            <div className="w-15 h-13 rounded-full flex items-start justify-start translate-x-2.5 translate-y-[7px] ">
              <Image src="/smile.png" alt="" fill className="object-cover" />
            </div>
            <p className={`${newsReader.className} text-2xl tracking-tighter leading-5 ml-19 text-left font-semibold -mt-10 uppercase`}>
              Spread the Love
            </p>
          </div>
        </div>

        {/* Other second row cards */}
        <div
          className="w-[235px] h-[342px] rounded-2xl bottom-[200px] overflow-hidden relative"
          style={{ gridColumn: "2 / 3", gridRow: "2 / 3", transform: parallax(0.03) }}
        >
          <Image src="/Union.png" alt="" fill className="object-cover" />
          <p className={`${newsReader.className} absolute tracking-tighter leading-5 bottom-7 left-3 text-white px-3 py-1 rounded text-[19px] font-bold`}>
            Empowering Women in Agriculture
          </p>
        </div>

        <div
          className="bg-[#C4C4C4] w-[280px] h-[255px] -top-38 ml-5 rounded-4xl text-center relative"
          style={{ gridColumn: "3 / 4", gridRow: "2 / 3", transform: parallax(0.03) }}
        >
          <p className={`${newsReader.className} text-[28px] text-[#2E2E2E] font-bold mt-15 px-0`}>
            Join 1000+ <br />Partners Giving Back
          </p>
          <div
            className="absolute flex items-center justify-between px-4"
            style={{
              width: "260px",
              height: "60px",
              top: "180px",
              left: "10.31px",
              borderRadius: "41.23px",
              backgroundColor: "#B4B4B4",
              backdropFilter: "blur(6px)",
            }}
          >
            <span className={`${inter.className} text-[#3A3232] text-sm`}>Join Community</span>
            <div className="w-12 h-12 rounded-full cursor-pointer flex items-center justify-center translate-x-2.5">
              <Image src="/arrowB.png" alt="" fill className="object-cover" />
            </div>
          </div>
        </div>

        <div
          className="w-[235px] h-[342px] -top-[200px] left-5 rounded-2xl relative overflow-hidden"
          style={{ gridColumn: "4 / 5", gridRow: "2 / 3", transform: parallax(0.03) }}
        >
          <Image src="/health.png" alt="" fill className="object-cover" />
          <p className={`${newsReader.className} absolute tracking-tighter leading-5 bottom-7 left-3 text-white px-3 py-1 rounded text-[19px] font-bold`}>
            Health and Nutrition Awareness Drives
          </p>
        </div>

        <div
          className="col-span-1 w-[235px] h-[140px] bg-[#000000CC] mb-[200px] ml-5 rounded-4xl p-4 text-white text-center flex flex-col justify-center"
          style={{ gridColumn: "5 / 6", gridRow: "2 / 3", transform: parallax(0.03) }}
        >
          <div>
            <div className="w-10 h-10 rounded-full flex items-start justify-start translate-x-[25px] translate-y-px">
              <Image src="/heart.png" alt="" fill className="object-cover" />
            </div>
            <p className={`${newsReader.className} text-2xl text-[#C9F363] tracking-tighter leading-5 ml-19 text-left font-semibold -mt-10 `}>
              Heartland in Action
            </p>
          </div>
        </div>
      </div>
</div>


{/* MOBILE VERSION */}
<div className="block md:hidden relative pt-10 pb-16 overflow-hidden">

   {/* Heading */}
      <h2 className={`${nunito.className} text-xl max-w-5xl font-extrabold text-center`}>
        Building Communities Beyond Business
      </h2>

      <p className={`${nunito.className} text-center mt-10 max-w-xl px-6 font-medium mx-auto text-[16px] leading-[29px]`}>
        At <span className="font-extrabold">Heartland General Trading</span>, we believe true success
        means making a difference. Our CSR efforts support Sri Lankan farmers,
        small businesses, and communities, promoting sustainable growth that
        benefits everyone.
      </p>

{/* Card 1 */}
<div className="relative bg-[#8B0000] rounded-2xl p-9 text-white mt-5 mb-5 w-full py-6 max-w-sm max-h-max mx-auto">
  {/* Percentage */}
  <h3 className="text-4xl font-bold">95%</h3>

  {/* Description */}
  <p className="text-sm mt-2 leading-5">
    We partner directly with Sri Lankan growers and small producers to ensure fair trade and sustainable sourcing.
      </p>

  {/* Learn More Section */}
<div className="flex justify-between mt-8">
  {/* Frosted Box */}
  <div className="flex items-center justify-start px-3 py-2 rounded-full bg-white/15 backdrop-blur-sm w-full max-w-[180px]">
    <span className="text-white text-sm font-medium text-left">
      Learn More
    </span>
  </div>

  {/* Arrow Button */}
  <button>
    <div className="w-10 h-10 rounded-full bg-[#D91F26] flex items-center justify-center text-white text-lg">
      &#x2197;
    </div>
  </button>
</div>

</div>


  {/*  Card  2 */}
 
  <div className="w-full h-[200px] relative rounded-xl overflow-hidden">
  {/* Image */}
  <Image
    src="/Union1.png"
    alt="Union"
    fill
    className="object-cover"
  />

  {/* Text */}
  <p className={`${newsReader.className} absolute bottom-3 left-3 text-white px-2 py-1 rounded text-[19px] font-bold`}>
    Empowering Women in Agriculture
  </p>
</div>


  

  {/* Info Card*/}
   <div className="w-full h-[200px] mt-5 relative rounded-xl overflow-hidden">
  {/* Image */}
  <Image
    src="/health1.jpg"
    alt="Health and Nutrition"
    fill
    className="object-cover"
  />

  {/* Text */}
  <p
    className={`${newsReader.className} absolute bottom-3 left-3 text-white px-2 w-52
       py-1 rounded text-[19px] font-bold`}
  >
    Health and Nutrition Awareness Drives
  </p>
</div>

</div>

    </section>
  );
}
