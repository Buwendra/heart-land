"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Open_Sans, Nunito } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-open-sans",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-nunito",
});

type Card = {
  image: string;
  date: string;
  title: string;
  description: string;
};

const cards: Card[] = [
  {
    image: "/Frame61.png",
    date: "Aug 10, 2025",
    title: "Seeds of Change: Farmers Growing Beyond Boundaries",
    description:
      "Discover how smallholder farmers in Sri Lanka are transforming their livelihoods through Heartland’s sustainable agriculture training and fair-trade partnerships. These stories showcase resilience, innovation, and pride in every harvest."
  },
  {
    image: "/Frame61(1).png",
    date: "Aug 10, 2025",
    title: "Women Leading the Way in Food Enterprise",
    description:
      "Meet the women redefining Sri Lanka’s food industry — from homegrown spice producers to export-ready entrepreneurs. Heartland’s mentoring and micro-support programs are helping them achieve financial independence and global recognition.",
  },
  {
    image: "/Frame61(2).png",
    date: "Aug 10, 2025",
    title: "From Local Fields to Global Shelves",
    description:
      "Follow the journey of Sri Lankan produce as it reaches international markets through ethical sourcing and transparent trade practices. Heartland’s supply chain connects community farmers directly with UAE consumers, ensuring fairness at every step.",
  },
  {
    image: "/Frame61(3).png",
    date: "Aug 10, 2025",
    title: "Sustainability in Action: Protecting Tomorrow’s Resources",
    description:
      "Learn how Heartland is introducing eco-friendly packaging, water conservation systems, and waste-free logistics to make food exports more sustainable for future generations.",
  },
];

export default function BlogsSuccessStory() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!parallaxRef.current) return;
      const offset = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${offset * 0.06}px)`;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -330, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 330, behavior: "smooth" });
  };

  return (
    <section
      className={`${openSans.variable} ${nunito.variable}`}
      style={{
        maxWidth: "1317px",
        margin: "120px auto 0", // ✅ natural spacing from previous page
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      {/* Heading */}
      <header style={{ width: "594px", display: "flex", flexDirection: "column", gap: "5px", marginLeft: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", }}>
          <span
            style={{
              fontFamily: "var(--font-open-sans)",
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Inspiring Voices, Real Change
          </span>
          <span style={{ width: "80px", height: "1px", background: "#000" }} />
        </div>

        <h2
          style={{
            fontFamily: "var(--font-nunito)",
            fontWeight: 600,
            fontSize: "30px",
            lineHeight: "140%",
            margin: 0,
          }}
        >
          Blogs & Success Story
        </h2>
      </header>

      {/* Cards */}
      <div style={{ position: "relative" }}>
        <div
  ref={scrollRef}
  style={{
    overflowX: "scroll",
    paddingBottom: "30px",
    paddingLeft: "20px",   // ✅ equal left space
    paddingRight: "20px",  // ✅ equal right space
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  }}
>

          <div
            ref={parallaxRef}
            style={{ display: "flex", gap: "30px"}}
          >
            {cards.map((card, index) => (
              <article
                key={index}
                style={{
      width: "290px", // ✅ reduced
      borderRadius: "30px",
      background: "#fff",
      padding: "15px",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      boxShadow: "0px 16px 32px -4px rgba(0,0,0,0.15)",
      flexShrink: 0, // ✅ prevent shrinking

                }}
              >
                <Image
                  src={card.image}
      alt={card.title}
      width={290} // ✅ reduced
      height={224}
      style={{
        borderRadius: "24px",
        objectFit: "cover",
      }}
                />

                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <Image 
                  src="/building.png" 
                  alt="Clock" 
                  width={18}
                  height={20} />
                  
                  <span
                    style={{
                      fontFamily: "var(--font-open-sans)",
                      fontSize: "14px",
                      color: "#999",
                    }}
                  >
                    {card.date}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-nunito)",
                    fontWeight: 700,
                    fontSize: "20px",
                    margin: 0,
                    color: "#243C4B",
                  }}
                >
                  {card.title}
                </h3>

                <p
                  style={{
    whiteSpace: "pre-line",
    fontFamily: "var(--font-open-sans)",
    fontSize: "16px",
    color: "#6D6D6D",
    lineHeight: "160%",
  }}
                >
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Hide scrollbar (Chrome/Safari) */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Arrows */}
        <nav
         style={{
    position: "absolute",
    top: "-70px",          // ✅ above cards
    left: "1080px",         // ✅ aligned with 4th card
    display: "flex",
    gap: "20px",
    height: "56px",
    alignItems: "center",
  }}

        >
          <button onClick={scrollLeft}>
            <Image src="/leftArrow.png" alt="Left" width={22} height={22} />
          </button>
          <button onClick={scrollRight}>
            <Image src="/rightArrow.png" alt="Right" width={22} height={22} />
          </button>
        </nav>
      </div>
    </section>
  );
}
