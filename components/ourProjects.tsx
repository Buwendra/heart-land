"use client";

import Image from "next/image";
import { Nunito, Open_Sans } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function OurProjects() {
  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">
          {/* LEFT */}
          <div className="text-left">
            <h2 className={`${nunito.className} text-[22px] sm:text-[22px] md:text-[26px] font-semibold text-black`}>
              Our CSR Initiative
            </h2>

            <p className={`${openSans.className} mt-4 text-[17px] text-black sm:text-[18px] md:text-[20px]
               leading-[22px] md:leading-7 w-[800px]  max-w-[620px]`}>
              Through our signature Corporate Social Responsibility (CSR) initiative, “Heartland 
              <span className="text-[#D11417] font-semibold"> ♥ </span>
               Homeland,” we allocate a portion of our annual profits to support vital cancer-related projects in Sri Lanka.
              This initiative reinforces the deep-rooted ties between our operations in the UAE and the well-being
              of families back home.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex md:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] h-[220px] sm:h-[240px] 
            md:h-[360px] rounded-2xl overflow-hidden">
              <Image
                src="/csr-initiative.png" 
                alt="CSR Initiative"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 420px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}