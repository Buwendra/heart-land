"use client";

import Image from "next/image";
import { Newsreader, Inter, Open_Sans, Nunito } from "next/font/google";
import { useEffect, useState } from "react";

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '700'] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600", "700"] });
const newsReader = Newsreader({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function OurProjects() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallax = (multiplier: number) => `translateY(${scrollY * multiplier}px)`;

  return (
    <section className="w-full max-w-[1400px] mx-auto px-11 py-10 -mt-20 mb-15 relative">
      {/* BG Pattern */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] overflow-hidden pointer-events-none select-none -z-10">
        <Image
          src="/bgpattern.png"
          alt=""
          fill
          className="object-cover opacity-100"
        />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-3 mb-5">
        <p className={`${openSans.className} text-[15px] text-[#D12714]`}>
          Transforming Lives Across Sri Lanka
        </p>
        <div className="w-[70px] h-px bg-[#2FED3C]"></div>
      </div>

      {/* Title */}
      <h2 className="text-[32px] font-semibold font-['Nunito']">Our Projects</h2>

      {/* Intro Text */}
      <p className={`${openSans.className} max-w-3xl mt-0 text-[#243C4B] font-normal leading-[22px]`}>
        Through our CSR initiatives, we support Sri Lankan farmers, children, women entrepreneurs,
        and local communities — driving sustainable growth, ethical trade, and positive change across
        generations.
      </p>

      {/* Cards Wrapper */}
      <div className="flex gap-5 mt-5 w-full overflow-hidden">
        {/* CARD 1 */}
        <div className="w-[300px] bg-white rounded-xl shadow-sm pb-6 overflow-hidden">
          <div className="h-[230px] w-full relative -mt-20" style={{ transform: parallax(0.05) }}>
            <Image src="/proj_farmer.png" alt="" fill className="object-cover" />
          </div>
          <p className={`${newsReader.className} w-60 text-[#243C4B] mt-25 px-4 font-bold text-[17px]`}>
            Farmer Empowerment Program
          </p>
          <p className={`${openSans.className} px-4 font-medium text-sm mt-1 w-72 leading-[22px] text-[#6D6D6D]`}>
            Training and mentoring small-scale farmers in sustainable agriculture, organic cultivation, and export-ready practices.
          </p>
          <div className="px-4 mt-4">
            <button className="group flex items-center cursor-pointer px-4 py-[9px] bg-[#D12714] text-white rounded-lg text-[12px] border-2 border-[#D12714] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 transform-gpu hover:bg-white hover:text-[#D12714]">
              <span className={`${nunito.className}`}>Read More</span>
              <span className="flex items-center justify-center w-6 h-6 bg-white rounded-full ml-2 transition-all duration-300 ease-out group-hover:bg-[#D12714]">
                <span className="text-[#D12714] text-xl transition-all duration-300 ease-out group-hover:text-white">↗</span>
              </span>
            </button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="w-[300px] bg-white rounded-xl shadow-sm pb-6 overflow-hidden">
          <div className="h-[230px] w-full relative -mt-20" style={{ transform: parallax(0.05) }}>
            <Image src="/proj_child.png" alt="" fill className="object-cover" />
          </div>
          <p className={`${newsReader.className} mt-25 px-4 w-60 text-[#243C4B] font-bold text-[17px]`}>
            Healthy Start Nutrition Drive
          </p>
          <p className={`${openSans.className} font-medium px-4 text-sm mt-1 w-72 leading-[22px] text-[#6D6D6D]`}>
            Providing nutritious meals and health check-ups to children in underserved communities to help them grow strong and healthy.
          </p>
          <div className="px-4 mt-4">
            <button className="group flex items-center cursor-pointer px-4 py-[9px] bg-[#D12714] text-white rounded-lg text-[12px] border-2 border-[#D12714] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 transform-gpu hover:bg-white hover:text-[#D12714]">
              <span className={`${nunito.className}`}>Read More</span>
              <span className="flex items-center justify-center w-6 h-6 bg-white rounded-full ml-2 transition-all duration-300 ease-out group-hover:bg-[#D12714]">
                <span className="text-[#D12714] text-xl transition-all duration-300 ease-out group-hover:text-white">↗</span>
              </span>
            </button>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="w-[300px] bg-white rounded-xl shadow-sm pb-6 overflow-hidden">
          <div className="h-[230px] w-full relative -mt-20" style={{ transform: parallax(0.05) }}>
            <Image src="/proj_library.png" alt="" fill className="object-cover" />
          </div>
          <p className={`${newsReader.className} mt-25 w-60 px-4 text-[#243C4B] font-bold text-[17px]`}>
            Libraries for Learning Program
          </p>
          <p className={`${openSans.className} px-4 text-sm font-medium mt-1 w-64 leading-[22px] text-[#6D6D6D]`}>
            Setting up community libraries and reading clubs to encourage literacy and spark a love for books among children.
          </p>
          <div className="px-4 mt-4">
            <button className="group flex items-center cursor-pointer px-4 py-[9px] bg-[#D12714] text-white rounded-lg text-[12px] border-2 border-[#D12714] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 transform-gpu hover:bg-white hover:text-[#D12714]">
              <span className={`${nunito.className}`}>Read More</span>
              <span className="flex items-center justify-center w-6 h-6 bg-white rounded-full ml-2 transition-all duration-300 ease-out group-hover:bg-[#D12714]">
                <span className="text-[#D12714] text-xl transition-all duration-300 ease-out group-hover:text-white">↗</span>
              </span>
            </button>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="w-[300px] bg-white rounded-xl shadow-sm pb-6 overflow-hidden">
          <div className="h-[230px] w-full relative -mt-20" style={{ transform: parallax(0.05) }}>
            <Image src="/proj_water.png" alt="" fill className="object-cover" />
          </div>
          <p className={`${newsReader.className} mt-25 px-4 w-60 text-[#243C4B] font-bold text-[17px]`}>
            Clean Water for Every Child
          </p>
          <p className={`${openSans.className} px-4 text-sm font-medium mt-1 w-64 leading-[22px] text-[#6D6D6D]`}>
            Installing safe drinking water facilities in schools and villages to promote health and reduce waterborne diseases.
          </p>
          <div className="px-4 mt-4">
            <button className="group flex items-center cursor-pointer px-4 py-[9px] bg-[#D12714] text-white rounded-lg text-[12px] border-2 border-[#D12714] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 transform-gpu hover:bg-white hover:text-[#D12714]">
              <span className={`${nunito.className}`}>Read More</span>
              <span className="flex items-center justify-center w-6 h-6 bg-white rounded-full ml-2 transition-all duration-300 ease-out group-hover:bg-[#D12714]">
                <span className="text-[#D12714] text-xl transition-all duration-300 ease-out group-hover:text-white">↗</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Slide Arrows */}
      <div className="absolute right-40 top-[130px] flex items-center gap-4 px-4">
        <button className="w-14 h-14 bg-[#D9D9D6] cursor-pointer rounded-full shadow flex items-center justify-center">
          <span className="text-black text-4xl font-sm">&lsaquo;</span>
        </button>
        <button className="w-14 h-14 bg-[#D9D9D6] cursor-pointer text-4xl rounded-full shadow flex items-center justify-center">
          &rsaquo;
        </button>
      </div>
    </section>
  );
}
