"use client";
import { useState } from "react";
import { Nunito, Open_Sans } from "next/font/google";
import Image from "next/image";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function ProductFaqs() {
  const faqs = [
    {
      question: "Do you deliver across the UAE?",
      answer: `Yes, we provide nationwide delivery across all seven emirates in the UAE.
      Our efficient logistics network ensures that products are transported safely
      and arrive fresh.`,
    },
    {
      question: "What payment method do you accept ?",
      answer: "We accept major credit cards, bank transfers, and cash on delivery.",
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery usually takes 2–5 business days depending on your location.",
    },
    {
      question: "What is your return policy?",
      answer: "Products can be returned within 7 days if unopened and in original condition.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full py-24 px-5 md:px-10">

      {/* Desktop background image   */}
      <div className="absolute inset-0 opacity-100 mt-1 ml-[800px] pointer-events-none hidden md:block">
        <img
          src="/sriLankaMap.png"
          alt="SL Map Background"
          className="w-[600px] h-[500px] object-left"
        />
      </div>

      {/* Mobile background image */}
      <div className="absolute inset-0 md:hidden opacity-100 top-20 pointer-events-none -z-10">
        <Image
          src="/sriLankaMap.png"
          alt="FAQ background"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

        {/* LEFT */}
        <div className="ml-0 md:ml-32 text-center md:text-left">
          <h2 className={`text-[22px] md:text-[32px] font-bold text-black ${nunito.className}`}>
            Product FAQs
          </h2>

          <p
            className={`text-[14px] md:text-[18px] mt-2 max-w-lg px-5  md:max-w-[400px] text-[#333] leading-[20px] md:leading-7 ${nunito.className}`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
          </p>
        </div>

        {/* RIGHT: FAQ LIST */}
        <div
          className="
            space-y-5
            ml-0 md:-ml-20
            max-w-full md:max-w-[650px]

            /* Mobile only */
            border border-black rounded-2xl p-5

            /* Desktop reset */
            md:border-none md:rounded-none md:p-0
          "
        >
          {faqs.map((faq, index) => (
            <div key={index}>
              <p
                className={`text-[15px] md:text-[18px] py-2 cursor-pointer font-semibold ${openSans.className} ${
                  openIndex === index
                    ? "text-[#D11417]"
                    : "text-black border-b border-[#D11417]"
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
              </p>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p
                  className={`text-[15px] md:text-[16px] text-[#333] leading-5 md:leading-[26px] mt-2 ${nunito.className}`}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
