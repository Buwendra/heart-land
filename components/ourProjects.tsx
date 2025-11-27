"use client";

import Image from "next/image";
import { Newsreader, Inter } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
});


const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"], 
});


const newsReader = Newsreader({
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function OurProjects() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-11 py-14 relative">

      {/* BG Pattern */}
<div className="absolute bottom-0 left-0 w-full h-[50vh] overflow-hidden pointer-events-none select-none -z-10">
  <Image
    src="/bgpattern.png"
    alt=""
    fill
    className="object-cover opacity-100"
  />
</div>



      {/* SUBTITLE */}
       
<div className="flex items-center gap-3 mb-5">
  <p className={`${openSans.className} text-[15px] text-[#D12714]`}>
  Transforming Lives Across Sri Lanka
</p>


  {/* Line */}
  <div className="w-[70px] h-px bg-[#2FED3C]"></div>
</div>

{/* Title */}
<h2 className="text-[32px] font-semibold font-['Nunito']">
  Our Projects
</h2>
 

{/* Intro text */}
<p className={`${openSans.className} max-w-3xl mt-0 text-[#243C4B] font-normal leading-[22px]`}>
  Through our CSR initiatives, we support Sri Lankan farmers, children, women entrepreneurs,
  and local communities — driving sustainable growth, ethical trade, and positive change across
  generations.
</p>


      {/* CARDS WRAPPER */}
      <div className="flex gap-5 mt-10 w-full overflow-hidden">

        {/* CARD 1 */}
        <div className="w-[300px] bg-white rounded-xl shadow-sm pb-6 overflow-hidden">
          <div className="h-[230px] w-full relative">
            <Image src="/proj_farmer.png" alt="" fill className="object-cover" />
          </div>
          <p className={`${newsReader.className}  w-60 text-[#243C4B] mt-3 px-4 font-bold text-[17px]`}>
            Farmer Empowerment Program
          </p>
          <p className={`${openSans.className} px-4 font-medium text-sm mt-1 w-72 leading-[22px] text-[#6D6D6D]`}>
              Training and mentoring small-scale farmers in sustainable agriculture,
             organic cultivation, and export-ready practices.
          </p>


          {/* BUTTON */}
 <div className="px-4 mt-4">
  <button className="flex items-center px-4 py-[9px] bg-[#D12714] text-white rounded-lg text-[12px]">
    <span className={`${nunito.className}`}>Read More</span>
    <span className="flex items-center justify-center w-6 h-6 bg-white rounded-full ml-2">
      <span className="text-[#D12714] text-xl">↗</span>
    </span>
  </button>
</div>



        </div>


        {/* CARD 2 */}
        <div className="w-[300px] bg-white rounded-xl shadow-sm pb-6 overflow-hidden">
          <div className="h-[230px] w-full relative">
            <Image src="/proj_child.png" alt="" fill className="object-cover" />
          </div>
          <p className={`${newsReader.className} mt-3 px-4 w-60 text-[#243C4B] font-bold text-[17px]`}>
            Healthy Start Nutrition Drive
          </p>
          <p className={`${openSans.className} font-medium px-4 text-sm mt-1 w-72 leading-[22px] text-[#6D6D6D]`}>
             Providing nutritious meals and health check-ups to children in underserved
              communities to help them grow strong and healthy.
            </p>
          
           {/* BUTTON */}
 <div className="px-4 mt-4">
  <button className="flex items-center px-4 py-[9px] bg-[#D12714] text-white rounded-lg text-[12px]">
    <span className={`${nunito.className}`}>Read More</span>
    <span className="flex items-center justify-center w-6 h-6 bg-white rounded-full ml-2">
      <span className="text-[#D12714] text-xl">↗</span>
    </span>
  </button>
</div>
        </div>


        {/* CARD 3 */}
        <div className="w-[300px] bg-white rounded-xl shadow-sm pb-6 overflow-hidden">
          <div className="h-[230px] w-full relative">
            <Image src="/proj_library.png" alt="" fill className="object-cover" />
          </div>
          <p className={`${newsReader.className} mt-3 w-60 px-4 text-[#243C4B] font-bold text-[17px]`}>
            Libraries for Learning Program
          </p>
          <p className={`${openSans.className} px-4 text-sm font-medium mt-1 w-64 leading-[22px] text-[#6D6D6D]`}>
            Setting up community libraries and reading clubs to encourage literacy
           and spark a love for books among children.
          </p>

           {/* BUTTON */}
 <div className="px-4 mt-4">
  <button className="flex items-center px-4 py-[9px] bg-[#D12714] text-white rounded-lg text-[12px]">
    <span className={`${nunito.className}`}>Read More</span>
    <span className="flex items-center justify-center w-6 h-6 bg-white rounded-full ml-2">
      <span className="text-[#D12714] text-xl">↗</span>
    </span>
  </button>
</div>
        </div>


        {/* CARD 4 */}
        <div className="w-[300px] bg-white rounded-xl shadow-sm pb-6 overflow-hidden">
          <div className="h-[230px] w-full relative">
            <Image src="/proj_water.png" alt="" fill className="object-cover" />
          </div>
          <p className={`${newsReader.className} mt-3 px-4 w-60 text-[#243C4B] font-bold text-[17px]`}>
            Clean Water for Every Child
          </p>
          <p className={`${openSans.className} px-4 text-sm font-medium mt-1 w-64 leading-[22px] text-[#6D6D6D]`}>
              Installing safe drinking water facilities in schools and villages to promote
             health and reduce waterborne diseases.
           </p>

           {/* BUTTON */}
 <div className="px-4 mt-4">
  <button className="flex items-center px-4 py-[9px] bg-[#D12714] text-white rounded-lg text-[12px]">
    <span className={`${nunito.className}`}>Read More</span>
    <span className="flex items-center justify-center w-6 h-6 bg-white rounded-full ml-2">
      <span className="text-[#D12714] text-xl">↗</span>
    </span>
  </button>
</div>
        </div>
      </div>

      {/* SLIDE ARROWS — aligned right */}
      <div className="absolute right-0 top-[260px] flex items-center gap-4 px-4">
        <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center">
          ←
        </button>
        <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center">
          →
        </button>
      </div>

    </section>
  );
}
