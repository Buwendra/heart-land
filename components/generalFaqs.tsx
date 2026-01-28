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

type FaqItem = { question: string; answer: React.ReactNode };
type FaqSection = {
  title: string;
  intro?: string;  
  faqs: FaqItem[];
};

export default function Faqs() {
  const sections: FaqSection[] = [
    {
      title: "Product Information",
      intro: "",
      faqs: [
        {
          question: "What types of products do you offer?",
          answer:
            "We specialize in a diverse range of authentic Sri Lankan food products, including spices, rice, noodles, snacks, and more. Our offerings aim to reflect the rich culinary heritage of Sri Lanka.",
        },
        {
          question: "Are your products sourced locally?",
          answer:
            "Yes, we prioritize sourcing our products directly from local farmers and trusted suppliers in Sri Lanka to ensure authenticity and quality.",
        },
      ],
    },
    {
      title: "Ordering and Shipping",
      intro: "",
      faqs: [
        {
          question: "How can I place an order?",
          answer:
            "You can place an order through our website or by contacting our customer service team directly.",
        },
        {
          question: "What shipping options do you provide?",
          answer:
            "We offer various shipping options to cater to your needs, including standard and expedited delivery services across the UAE.",
        },
      ],
    },
    {
      title: "Customer Support",
      intro: "",
      faqs: [
        {
          question: "How can I reach customer support?",
          answer:
            "Our customer support team is here to help. You can reach us via email, phone, or our website’s contact form.",
        },
        {
          question: "What should I do if I have an issue with my order?",
          answer:
            "If you encounter any issues with your order, please contact our customer support team immediately. We're committed to resolving any concerns you may have.",
        },
      ],
    },
    {
      title: "Community Commitments",
      intro: "",
      faqs: [
        {
          question: "What initiatives do you support?",
          answer:
            (<>We are dedicated to supporting local farmers and women entrepreneurs in Sri Lanka. Additionally, we have launched our &ldquo;Heartland <span className="">❤️</span> Homeland&rdquo; initiative, which contributes a percentage of our annual profits to a Cancer Project in Sri Lanka. This initiative not only aids in raising awareness and funding for cancer treatment and research but also empowers our community to make a meaningful impact back home. Through our efforts, we aim to foster community development and sustainability while supporting those in need.</>),
        },
      ],
    },
  ];

  //  One open item per section 
  const [openBySection, setOpenBySection] = useState<Record<number, number | null>>({
    0: 0,
    1: null,
    2: null,
    3: null,
  });

  const toggleFaq = (sectionIndex: number, faqIndex: number) => {
    setOpenBySection((prev) => ({
      ...prev,
      [sectionIndex]: prev[sectionIndex] === faqIndex ? null : faqIndex,
    }));
  };

  return (
    <section className="relative w-full py-20 px-5 md:px-10">
      {/* Desktop background image */}
      <div className="absolute inset-0 opacity-100 ml-[800px] top-[500px] pointer-events-none hidden md:block">
        <Image
          src="/sriLankaMap.png"
          alt="SL Map Background"
          width={500}
          height={500}
          className="object-left"
        />
      </div>

      {/* Mobile background image */}
      <div className="absolute inset-0 md:hidden opacity-100 top-[500px] pointer-events-none -z-10">
        <Image
          src="/sriLankaMap.png"
          alt="FAQ background"
          width={500}
          height={500}
          className="object-cover"
        />
      </div>

      {/* Desktop Background Image */}
      <div className="absolute inset-0 opacity-5 -mt-20 pointer-events-none hidden md:block">
        <Image
          src="/WRLD-EPS-02-4001 1.png"
          alt="World Map Background"
          width={1030}
          height={600}
          className="object-left"
        />
      </div>

      {/* Mobile background image */}
      <div className="absolute inset-0 md:hidden opacity-6 pointer-events-none -z-10">
        <Image src="/WRLD-EPS-02-4001 1.png" alt="FAQ background" fill className="object-cover" />
      </div>

      {/* ================= DESKTOP (FIXED ALIGNMENT) ================= */}
      <div className="relative z-10 max-w-8xl mx-auto hidden md:block">
        {/* Each topic is a ROW: left title + right questions */}
        <div className="grid grid-cols-[400px_1fr] gap-x-20 gap-y-24 pl-25">
          {sections.map((sec, sectionIndex) => (
            <div key={sectionIndex} className="contents">
              {/* LEFT cell (title) */}
              <div className="self-start">
                <h2 className={`text-[36px] font-bold text-black ${nunito.className}`}>
                  {sec.title}
                </h2>
              </div>

              {/* RIGHT cell (faq list) */}
              <div className="max-w-[640px] self-start space-y-8">
                {sec.faqs.map((faq, faqIndex) => {
                  const isOpen = openBySection[sectionIndex] === faqIndex;

                  return (
                    <div key={faqIndex}>
                      {/* Question */}
                      <p
                        className={`text-xl py-2 cursor-pointer font-semibold my-3 ${openSans.className} ${
                          isOpen ? "text-[#D11417]" : "text-black"
                        }`}
                        onClick={() => toggleFaq(sectionIndex, faqIndex)}
                      >
                        {faq.question}
                      </p>

                      {/* Answer under question */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p
                          className={`text-[16px] text-black leading-[25px] mt-1 mb-8 ${nunito.className}`}
                        >
                          {faq.answer}
                        </p>
                      </div>

                      {/* Red underline */}
                      <div className="h-[2px] w-full bg-[#D11417]/60" />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MOBILE (UNCHANGED STRUCTURE) ================= */}
      <div className="relative z-10 max-w-7xl mx-auto md:hidden space-y-10">
        {sections.map((sec, sectionIndex) => (
          <div key={sectionIndex} className="grid grid-cols-1 gap-6">
            {/* mobile header */}
            <div className="text-center">
              <h2 className={`text-[22px] font-bold text-black ${nunito.className}`}>
                {sec.title}
              </h2>

              {sec.intro ? (
                <p className={`text-[14px] mt-4 px-5 text-[#333] leading-[26px] ${nunito.className}`}>
                  {sec.intro}
                </p>
              ) : null}
            </div>

            {/* mobile faq box */}
            <div className="space-y-5 border border-black rounded-2xl p-5">
              {sec.faqs.map((faq, faqIndex) => {
                const isOpen = openBySection[sectionIndex] === faqIndex;

                return (
                  <div key={faqIndex}>
                    <p
                      className={`text-[16px] py-2 cursor-pointer font-semibold ${openSans.className} ${
                        isOpen ? "text-[#D11417]" : "text-black border-b border-[#D11417]"
                      }`}
                      onClick={() => toggleFaq(sectionIndex, faqIndex)}
                    >
                      {faq.question}
                    </p>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className={`text-[15px] text-[#333] leading-[24px] mt-2 ${nunito.className}`}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
