"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Open_Sans, Nunito } from "next/font/google";
import { useRouter } from "next/navigation";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400"], variable: "--font-open-sans" });
const nunito = Nunito({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-nunito" });

type Card = { image: string; date: string; title: string; description: string };

const cards: Card[] = [
  {
    image: "/Frame 61 (2).png",
    date: "Aug 10, 2025",
    title: "Seeds of Change: Farmers Growing Beyond Boundaries",
    description:
      "Discover how smallholder farmers in Sri Lanka are transforming their livelihoods through Heartland’s sustainable agriculture training and fair-trade partnerships. These stories showcase resilience, innovation, and pride in every harvest.",
  },
  {
    image: "/Frame 61 (3).png",
    date: "Aug 10, 2025",
    title: "Women Leading the Way in Food Enterprise",
    description:
      "Meet the women redefining Sri Lanka’s food industry — from homegrown spice producers to export-ready entrepreneurs. Heartland’s mentoring and micro-support programs are helping them achieve financial independence and global recognition.",
  },
  {
    image: "/Frame 62.png",
    date: "Aug 10, 2025",
    title: "From Local Fields to Global Shelves",
    description:
      "Follow the journey of Sri Lankan produce as it reaches international markets through ethical sourcing and transparent trade practices. Heartland’s supply chain connects community farmers directly with UAE consumers, ensuring fairness at every step.",
  },
  {
    image: "/Frame 63.png",
    date: "Aug 10, 2025",
    title: "Sustainability in Action: Protecting Tomorrow’s Resources",
    description:
      "Learn how Heartland is introducing eco-friendly packaging, water conservation systems, and waste-free logistics to make food exports more sustainable for future generations.",
  },
];

export default function BlogsSuccessStory() {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [offsetY, setOffsetY] = useState(0);

  // Smooth scroll updates for parallax
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const CARD_WIDTH = 280;
  const GAP = 30;
  const CARD_STEP = CARD_WIDTH + GAP;

  const scrollLeft = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: Math.max(0, el.scrollLeft - CARD_STEP), behavior: "smooth" });
  };

  const scrollRight = () => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: Math.min(maxScroll, el.scrollLeft + CARD_STEP), behavior: "smooth" });
  };

  return (
    <section
      className={`${openSans.variable} ${nunito.variable}`}
      style={{ width: "100%", maxWidth: "1317px", display: "flex", flexDirection: "column", gap: "40px", padding: "60px 20px", margin: "0 auto", boxSizing: "border-box" }}
    >
      {/* Heading */}
      <header style={{ width: "594px", display: "flex", flexDirection: "column", gap: "5px", marginLeft: "15px", marginTop: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontFamily: "var(--font-open-sans)", fontSize: "18px", lineHeight: "160%" }}>Inspiring Voices, Real Change</span>
          <span style={{ width: "80px", height: "1px", background: "#000" }} />
        </div>
        <h2 style={{ fontFamily: "var(--font-nunito)", fontWeight: 600, fontSize: "30px", lineHeight: "140%", margin: 0 }}>Blogs & Success Story</h2>
      </header>

      {/* Cards */}
      <div style={{ position: "relative" }}>
        <div
          ref={scrollRef}
          className="cards-scroll-container"
          style={{ overflowX: "auto", padding: "20px 12px", scrollBehavior: "smooth", display: "flex", gap: `${GAP}px`, WebkitOverflowScrolling: "touch" }}
        >
          {cards.map((card, index) => {
            // Parallax: subtle vertical offset
            const parallaxY = Math.sin((offsetY + index * 50) / 200) * 20;

            return (
              <article
                key={index}
                style={{
                  width: `${CARD_WIDTH}px`,
                  borderRadius: "24px",
                  background: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  boxShadow: "0px 16px 32px -4px rgba(0,0,0,0.15)",
                  flex: "0 0 auto",
                  overflow: "hidden",
                  transform: `translateY(${parallaxY}px)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                {/* Image */}
                <div style={{ position: "relative", height: 220, overflow: "hidden" ,   borderBottomLeftRadius: "20px",  
                 borderBottomRightRadius: "20px"}}>
                  <Image src={card.image} alt={card.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 280px) 100vw, 280px" />
                  <button
                    onClick={() => router.push("/")}
                    aria-label="Open article"
                    style={{ position: "absolute", top: 12, right: 12, width: 44, height: 36, display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", border: 0, cursor: "pointer", padding: 0 }}
                  >
                    <Image src="/whiteArrow.png" alt="Open" width={56} height={56} style={{ objectFit: "contain" }} />
                  </button>
                </div>

                {/* Content */}
                <div style={{ padding: "15px" }}>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <Image src="/building.png" alt="Clock" width={18} height={20} />
                    <span style={{ fontFamily: "var(--font-open-sans)", fontSize: "14px", color: "#999" }}>{card.date}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-nunito)", fontWeight: 700, fontSize: "20px", margin: "8px 0 0 0", color: "#243C4B" }}>{card.title}</h3>
                  <p style={{ whiteSpace: "pre-line", fontFamily: "var(--font-open-sans)", fontSize: "16px", color: "#6D6D6D", lineHeight: "160%", marginTop: "5px" }}>{card.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <style jsx>{`
          .cards-scroll-container::-webkit-scrollbar { display: none; }
          .cards-scroll-container { scrollbar-width: none; -ms-overflow-style: none; }
        `}</style>

        {/* Arrows */}
        <nav style={{ position: "absolute", top: -70, right: 36, display: "flex", gap: "20px", height: "56px", alignItems: "center", zIndex: 20 }}>
          <button onClick={scrollLeft} aria-label="Scroll left" style={{ width: 44, height: 44, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", border: 0, cursor: "pointer", background: "transparent", padding: 0 }}>
            <Image src="/leftArrow.png" alt="Left" width={22} height={22} />
          </button>
          <button onClick={scrollRight} aria-label="Scroll right" style={{ width: 44, height: 44, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", border: 0, cursor: "pointer", background: "transparent", padding: 0 }}>
            <Image src="/rightArrow.png" alt="Right" width={22} height={22} />
          </button>
        </nav>
      </div>
    </section>
  );
}
