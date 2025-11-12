"use client";
import React from "react";
import Image from "next/image";

export default function Article() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gray-400 uppercase tracking-widest text-sm mb-2">
            B l o g
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">The latest article</h2>
        </div>

        {/* Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group  ml-20 -mr-7">
            <div className="overflow-hidden mb-7">
              <Image
                src="/Rectangle 15.png"
                alt="Spices"
                width={400}
                height={250}
                className="object-cover w-full h-60  mb-3 transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-gray-300 text-sm ml-4 mb-6 mr-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a
  href="#"
  className="text-sm ml-4 mb-8 tracking-[0.5em] text-gray-200 hover:text-red-500 uppercase font-semibold transition-colors font-open-sans"
>
  Learn More &gt;
</a>
          </div>

          {/* Card 2 */}
          <div className="group mr-5 ml-5">
            <div className="overflow-hidden  mb-7">
              <Image
                src="/Rectangle 15 (1).png"
                alt="Spices and ingredients"
                width={400}
                height={250}
                className="object-cover w-full h-60 mb-3  transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-gray-300 text-sm mb-6 ml-4 mr-4  leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a
              href="#"
              className="text-sm ml-4 tracking-[0.5em] text-gray-200 hover:text-red-500 uppercase font-semibold transition-colors"
            >
              Learn More &gt;
            </a>
          </div>

          {/* Card 3 */}
          <div className="group mr-20 -ml-7">
            <div className="overflow-hidden  mb-7">
              <Image
                src="/Rectangle 15 (2).png"
                alt="Market display"
                width={400}
                height={250}
                className="object-cover w-full h-60 mb-3 transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-gray-300 text-sm mb-8 ml-4  mr-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a
              href="#"
              className="text-sm  ml-4 mt-3 tracking-[0.5em] text-gray-200 hover:text-red-500 uppercase font-semibold transition-colors"
            >
              Learn More &gt;
            </a>
          </div>
        </div>
      </div>

      
    </section>
    
  );
}
