"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Testimonials() {
  const testimonials = [
    { name: "Kweku Annan", role: "Shop Owner", image: "/Owner.png", text: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante." },
    { name: "Ama Ampomah", role: "Supermarket Owner", image: "/Owner.png", text: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante." },
    { name: "Sarah Annan", role: "Shop Owner", image: "/Owner.png", text: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante." },
    { name: "Ama Mensah", role: "Restaurant Owner", image: "/Owner.png", text: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante." },
    { name: "Kojo Badu", role: "Food Distributor", image: "/Owner.png", text: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante." },
  ];

  const mobileContainerRef = useRef<HTMLDivElement | null>(null);
  const desktopContainerRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const scrollToIndex = (index: number) => {
    // Check which container is visible
    let container: HTMLDivElement | null = null;

    if (desktopContainerRef.current && desktopContainerRef.current.offsetParent !== null) {
      container = desktopContainerRef.current;
    } else if (mobileContainerRef.current && mobileContainerRef.current.offsetParent !== null) {
      container = mobileContainerRef.current;
    }

    if (!container) return;

    const card = container.children.item(index) as HTMLElement | null;
    if (!card) return;

    const scrollLeft = card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2;
    container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    setActiveIndex(index);
  };

  // Adjust scroll on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        scrollToIndex(activeIndex);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  // Parallax background
  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.1}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // AUTO-SCROLL - Desktop only
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth >= 1024) {
        requestAnimationFrame(() => {
          setActiveIndex((prev) => {
            const next = (prev + 1) % testimonials.length;
            scrollToIndex(next);
            return next;
          });
        });
      } else {
        // Mobile auto-scroll
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative py-8 md:py-20 bg-[#F5F5F5] overflow-hidden">
      {/* Background image - Desktop only */}
      <div ref={bgRef} className="absolute left-0 bottom-72 w-200 h-200 pointer-events-none opacity-100 hidden lg:block">
        <Image src="/shopping cart.png" alt="background" fill className="object-contain object-left" priority />
      </div>

      <div className="mx-auto px-4 sm:px-6 relative z-10">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Header */}
          <div className="text-center mb-5">
            <p className="uppercase text-[#6D7D7D] tracking-[0.35em] text-[16px] mb-4 font-normal" style={{ fontFamily: 'Open Sans' }}>
              TESTIMONIALS
            </p>
            <h2 className="text-[16px] font-bold text-black mb-6 leading-tight" style={{ fontFamily: 'Open Sans' }}>
              Our Happy Customers
            </h2>
            <p className="text-[#5C6574] text-[12px] leading-[1.7] max-w-[360px] mx-auto px-4" style={{ fontFamily: 'Open Sans' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
            </p>
          </div>


          <div className="max-w-[360px] mx-auto px-2">
            {/* Profile Image - Positioned Above Card */}
            <div className="flex justify-center mb-[-35px] relative z-20">
              <div
                key={`image-${activeIndex}`}
                className="w-[65px] h-[65px] rounded-full overflow-hidden shadow-lg bg-white animate-[fadeIn_0.5s_ease-in-out]"
              >
                <Image
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  width={90}
                  height={90}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Testimonial Card */}
            <div
              key={`card-${activeIndex}`}
              className="relative bg-white shadow-lg p-5 pt-12 animate-[fadeIn_0.5s_ease-in-out]"
              style={{
                borderTopLeftRadius: "100px",
                borderBottomRightRadius: "100px",
                borderTopRightRadius: "40px",
                borderBottomLeftRadius: "40px",
              }}
            >
              {/* Testimonial Text */}
              <p className="text-[#5C6574] text-center text-[12px] leading-[1.7] mb-3 px-2" style={{ fontFamily: 'Inter' }}>
                {testimonials[activeIndex].text}
              </p>

              {/* Name and Role */}
              <div className="text-center">
                <h4 className="font-bold text-black text-[14px] mb-1" style={{ fontFamily: 'Inter' }}>
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-[#5C6574] text-[14px]" style={{ fontFamily: 'Inter' }}>
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsTransitioning(true);
                    setActiveIndex(idx);
                    setTimeout(() => setIsTransitioning(false), 500);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`w-[4px] h-[4px] rounded-full cursor-pointer transition-all ${
                    idx === activeIndex ? "bg-[#D11417]" : "bg-[#D1D5DB]"
                  }`}
                />
              ))}
            </div>
          </div>

          <style jsx>{`
            @keyframes fadeIn {
              0% {
                opacity: 0;
                transform: translateX(20px);
              }
              100% {
                opacity: 1;
                transform: translateX(0);
              }
            }
          `}</style>
        </div>

        {/* Desktop Layout - Horizontal Scroll */}
        <div className="hidden lg:block">
          <div className="text-center mb-16">
            <p className="uppercase text-gray-400 tracking-[0.5em] text-sm mb-5">
              TESTIMONIALS
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Happy Customers
            </h2>
            <p className="text-[#5C6574] text-base max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
          </div>

          <div ref={desktopContainerRef} className="flex gap-36 overflow-x-hidden scroll-snap-x scroll-snap-mandatory px-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="shrink-0 relative bg-white/95 shadow-xl mb-10 p-20 mt-20 w-[550px] h-[351px] text-center backdrop-blur-sm scroll-snap-align-center hover:scale-105 transition-transform duration-300"
                style={{
                  borderTopLeftRadius: "60px",
                  borderBottomRightRadius: "60px",
                  borderTopRightRadius: "20px",
                  borderBottomLeftRadius: "20px",
                }}
              >
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden shadow-md">
                  <Image src={t.image} alt={t.name} width={96} height={96} className="object-cover w-full h-full" />
                </div>
                <div className="pt-10">
                  <p className="text-[#5C6574] mx-10 text-sm leading-relaxed mb-2">{t.text}</p>
                  <h4 className="font-semibold text-gray-900 text-base mt-6">{t.name}</h4>
                  <p className="text-[#5C6574] text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                  idx === activeIndex ? "bg-red-500 scale-125" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
