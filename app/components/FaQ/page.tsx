"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Do you deliver across the UAE?",
      answer:
        "Yes, we provide nationwide delivery across all seven emirates in the UAE. Our efficient logistics network ensures that products are transported safely and arrive fresh. Whether you’re in Dubai, Abu Dhabi, or other regions, we guarantee timely and reliable delivery right to your doorstep.",
    },
    {
      question: "What payment method do you accept?",
      answer:
        "We accept all major credit/debit cards, online payments, and cash on delivery for select regions.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery typically takes 2–3 business days within major cities and up to 5 days for remote areas.",
    },
    {
      question: "Do you deliver across the UAE?",
      answer:
        "Yes, we deliver across all emirates with reliable and fast logistics support.",
    },
    {
      question: "What is your return policy?",
      answer:
        "If you receive a damaged or incorrect product, please contact us within 48 hours for a replacement or refund.",
    },
  ];

  return (
    <section className="py-20 bg-white">
        <div className="text-center ">
  <p className="uppercase text-gray-400 tracking-[0.5em] text-sm  mb-3">
    F A Q
  </p>
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
    Frequently Asked Questions
  </h2>
</div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side Images */}
        <div className="flex justify-center -left-10">
          <div className="flex gap-4 mr-20">
            <div className="w-24 h-[580px] top-14 relative overflow-hidden rounded-lg">
              <Image
                src="/Frame 987.png"
                alt="spices"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-24 h-[580px] relative overflow-hidden rounded-lg">
              <Image
                src="/Frame 988.png"
                alt="spices"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-24 h-[580px] top-14 relative overflow-hidden rounded-lg">
              <Image
                src="/Frame 989.png"
                alt="spices"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-24 h-[580px] relative overflow-hidden rounded-lg">
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
        <div>          

          <div className="space-y-5  mr-10 -ml-20 ">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border-b ${
                  openIndex === index ? "border-[#D11417]" : "border-gray-200"
                } pb-4 transition-all duration-300`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                  className={`w-full text-left text-lg font-medium transition-colors duration-300 ${
                    openIndex === index
                      ? "text-[#D11417]"
                      : "text-gray-800 hover:text-[#ff0004]"
                  }`}
                >
                  {faq.question}
                </button>

                {openIndex === index && (
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 -ml-20">
            <button className="px-9 py-3 border-2 text-lg border-[#D11417] text-[#D11417] rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 font-extrabold">
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
