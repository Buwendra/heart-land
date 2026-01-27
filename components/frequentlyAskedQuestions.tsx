"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useEffect, useRef } from "react";


export default function Faq() {
  
 
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What types of products do you offer?",
      answer:
        "We bring the vibrant flavors of Sri Lanka to your kitchen. Our range includes authentic spices, premium rice, noodles, traditional snacks, condiments, and much more all carefully selected to honor Sri Lanka’s rich culinary heritage.",
    },
    {
      question: "How do you ensure the quality of your products?",
      answer:
        "Authenticity, quality, and freshness are our top priorities. We source directly from local farmers and trusted suppliers in Sri Lanka. By combining traditional sourcing with modern technology and international standards for processing and packing, we ensure every product reaches you in perfect condition.",
    },
    {
      question: "Where can I find Heartland products?",
      answer:
        "You can find our products across the UAE at many of your favorite hypermarket and supermarket chains, as well as local grocery stores and Sri Lankan restaurants.",
    },
    {
      question: "Can I order online or in bulk?",
      answer:
        "Wholesale and bulk orders can be placed directly through our website or by contacting our customer service team. Exciting news: We are currently launching our e-commerce platform, so soon you’ll be able to have your favorite Sri Lankan staples delivered straight to your door!",
    },
    {
      question: "What shipping options do you provide?",
      answer:
        "We offer a variety of shipping options to suit your needs, including both standard and expedited delivery services across the UAE.",
    },
  ];

  

  return (
    <section className="py-10 md:py-20 bg-white" style={{ fontFamily: 'Open Sans' }}>
        <div className="text-center px-4">
  <p className="uppercase text-[#6D7D7D] tracking-[0.2em] sm:tracking-[0.2em] text-[16px] sm:text-sm mb-3" style={{ fontFamily: 'Open Sans' }}>
    F A Q
  </p>
  <h2 className="text-[16px] sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-10" style={{ fontFamily: 'Open Sans' }}>
    Frequently Asked Questions
  </h2>
</div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">

        {/* Left Side Images */}
        <div className="hidden lg:flex justify-center order-2 lg:order-1">
          <div className="flex gap-2 sm:gap-3 md:gap-4">
            <div className="w-16 sm:w-20 md:w-24 h-[280px] sm:h-[400px] md:h-[580px] top-6 sm:top-10 md:top-14 relative overflow-hidden rounded-lg">
              <Image
                src="/Frame 987.png"
                alt="spices"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-16 sm:w-20 md:w-24 h-[280px] sm:h-[400px] md:h-[580px] relative overflow-hidden rounded-lg">
              <Image
                src="/Frame 988.png"
                alt="spices"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-16 sm:w-20 md:w-24 h-[280px] sm:h-[400px] md:h-[580px] top-6 sm:top-10 md:top-14 relative overflow-hidden rounded-lg">
              <Image
                src="/Frame 989.png"
                alt="spices"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-16 sm:w-20 md:w-24 h-[280px] sm:h-[400px] md:h-[580px] relative overflow-hidden rounded-lg">
              <Image
                src="/Frame 990.png"
                alt="spices"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>


        {/* Right Side FAQ Section */}
        <div className="order-1 lg:order-2">

          <div className="space-y-4 sm:space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border-b ${
                  openIndex === index ? "border-[#D11417]" : "border-gray-200"
                } pb-3 sm:pb-4 transition-all duration-300`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                  className={`w-full text-left text-[14px] sm:text-lg px-2 cursor-pointer font-medium transition-colors duration-300 ${
                    openIndex === index
                      ? "text-[#D11417]"
                      : "text-gray-800 hover:text-[#ff0004]"
                  }`}
                  style={{ fontFamily: 'Open Sans' }}
                >
                  {faq.question}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[#676767] mt-2 sm:mt-3 text-[14px] sm:text-sm px-2 leading-relaxed transform transition-transform duration-300 font-nunito">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 flex justify-start lg:justify-start">
            <button className="px-9 sm:px-9 py-2 sm:py-3 border-2 text-[14px] sm:text-lg cursor-pointer bg-black lg:bg-transparent text-white lg:text-[#D11417] border-black lg:border-[#D11417] rounded-full hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 font-bold hover:scale-[1.02] hover:-translate-y-1" style={{ fontFamily: 'Open Sans' }}>
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
