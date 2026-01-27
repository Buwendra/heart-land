"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Open_Sans, Nunito } from "next/font/google";
import { useRouter } from "next/navigation";

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
    image: "/Frame 61 (2).png",
    date: "Aug 10, 2025",
    title: "Seeds of Change: Farmers Growing Beyond Boundaries",
    description:
      "At Heartland General Trading, our mission goes far beyond distributing authentic Sri Lankan flavors; it is rooted in a deep commitment to making a lasting impact on the lives of our people. We are proud to introduce our dedicated CSR initiative, ‘Heartland ♥ Homeland,’ a long-term pledge to support the fight against cancer in Sri Lanka. Business with a Soul As a core part of this initiative, Heartland allocates a percentage of our annual profits to support vital cancer-related projects and treatment facilities across the island. We view this not as a one-time gesture, but as a serious, sustained responsibility to our homeland.",
  },
  {
    image: "/Frame 61 (3).png",
    date: "Aug 10, 2025",
    title: "Women Leading the Way in Food Enterprise",
    description:
      "As a leading distributor of Sri Lankan food products in the UAE, we recognize the vital role that small and medium-scale entrepreneurs play in preserving the rich culinary heritage of our homeland . That's why we've made it our mission to assist these dedicated farmers by facilitating the marketing of their products in Dubai.",
  },
  {
    image: "/Frame 62.png",
    date: "Aug 10, 2025",
    title: "From Local Fields to Global Shelves",
    description:
      "At Heartland General Trading, we celebrate the incredible contributions of women in the food industry, particularly those who are redefining the landscape of food enterprises in Sri Lanka. From farmers to entrepreneurs, women are taking the lead, fostering innovation and resilience while preserving the rich culinary traditions of our homeland.",
  },
  {
    image: "/Frame 63.png",
    date: "Aug 10, 2025",
    title: "Sustainability in Action: Protecting Tomorrow’s Resources",
    description:
      "Heartland General Trading has been a pioneer in the distribution of Sri Lankan food products since its establishment. With over 2 decades of experience, we have built a strong reputation for quality and authenticity, ensuring that every product reflects the rich culinary heritage of Sri Lanka. Our extensive network of suppliers and partnerships with local farmers allow us to source the highest quality ingredients. This commitment to excellence has made us the trusted choice for customers seeking genuine Sri Lankan flavors.",
  },
];

export default function BlogsSuccessStory() {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const CARD_WIDTH = 280;
  const GAP = 30;

  const scrollLeft = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: -(CARD_WIDTH + GAP), behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: CARD_WIDTH + GAP, behavior: "smooth" });
  };

  // Calculate parallax for mobile card
  const parallaxYMobile = Math.sin(offsetY / 200) * 20;

  return (
    <section
      className={`${openSans.variable} ${nunito.variable}`}
      style={{
        width: "100%",
        maxWidth: "1317px",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        padding: isMobile ? "32px 16px" : "30px 50px",
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      {/* Heading */}
      <header
        style={{
          width: isMobile ? "100%" : "594px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          marginLeft: isMobile ? "0" : "15px",
          alignItems: isMobile ? "center" : "flex-start",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            justifyContent: isMobile ? "center" : "flex-start",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-open-sans)",
              fontSize: "18px",
              color: isMobile ? "#c4161c" : "#000",
            }}
          >
            Inspiring Voices, Real Change
          </span>

          {!isMobile && <span style={{ width: "120px", height: "2px", background: "#000" }} />}
        </div>

        <h2
          style={{
            fontFamily: "var(--font-nunito)",
            fontWeight: 600,
            fontSize: "30px",
            margin: 0,
            color: "#000",
          }}
        >
          Blogs & Success Story
        </h2>
      </header>

      {/* Cards */}
      <div style={{ position: "relative" }}>
        {isMobile ? (
          // ===== MOBILE SINGLE CARD VIEW WITH PARALLAX =====
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                overflow: "hidden",
                width: "100%",
                transform: `translateY(${parallaxYMobile}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <article
                style={{
                  width: "280px",
                  borderRadius: "24px",
                  background: "#fff",
                  boxShadow: "0px 16px 32px -4px rgba(0,0,0,0.15)",
                  overflow: "hidden",
                  transition: "transform 0.3s ease",
                }}
              >
                {/* Image */}
                <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
                  <Image
                    src={cards[currentIndex].image}
                    alt={cards[currentIndex].title}
                    fill
                    style={{ objectFit: "cover" }}
                  />

                  <button
                    onClick={() => router.push("/")}
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      background: "transparent",
                      border: 0,
                      cursor: "pointer",
                    }}
                  >
                    <Image src="/whiteArrow.png" alt="Open" width={56} height={56} />
                  </button>
                </div>

                {/* Content */}
                <div style={{ padding: "15px" }}>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <Image src="/building.png" alt="Date" width={18} height={20} />
                    <span
                      style={{
                        fontFamily: "var(--font-open-sans)",
                        fontSize: "14px",
                        color: "#999",
                      }}
                    >
                      {cards[currentIndex].date}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-nunito)",
                      fontWeight: 700,
                      fontSize: "20px",
                      marginTop: "8px",
                    }}
                  >
                    {cards[currentIndex].title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-open-sans)",
                      fontSize: "14px",
                      lineHeight: "160%",
                      color: "#6D6D6D",
                    }}
                  >
                    {cards[currentIndex].description}
                  </p>
                </div>
              </article>
            </div>

            {/* Mobile Arrows */}
            <nav className="cards-nav">
              <button
                onClick={() =>
                  setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1))
                }
                className="nav-arrow-button"
              >
                <Image src="/wleftArrow.png" alt="Left" width={22} height={22} />
              </button>
              <button
                onClick={() =>
                  setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1))
                }
                className="nav-arrow-button"
              >
                <Image src="/wrightArrow.png" alt="Right" width={22} height={22} />
              </button>
            </nav>
          </>
        ) : (
          // ===== DESKTOP SCROLLABLE VIEW =====
          <>
            <div
              ref={scrollRef}
              className="cards-scroll-container"
              style={{
                display: "flex",
                gap: `${GAP}px`,
                overflowX: "auto",
                padding: "20px 12px",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {cards.map((card, index) => {
                const parallaxY = Math.sin((offsetY + index * 50) / 200) * 20;
                return (
                  <article
                    key={index}
                    style={{
                      width: CARD_WIDTH,
                      borderRadius: "24px",
                      background: "#fff",
                      boxShadow: "0px 16px 32px -4px rgba(0,0,0,0.15)",
                      flex: "0 0 auto",
                      overflow: "hidden",
                      transform: `translateY(${parallaxY}px)`,
                      transition: "transform 0.1s ease-out",
                    }}
                  >
                    {/* Image */}
                    <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
                      <Image src={card.image} alt={card.title} fill style={{ objectFit: "cover" }} />

                      <button
                        onClick={() => router.push("/")}
                        style={{
                          position: "absolute",
                          top: 12,
                          right: 12,
                          background: "transparent",
                          border: 0,
                          cursor: "pointer",
                        }}
                      >
                        <Image src="/whiteArrow.png" alt="Open" width={56} height={56} />
                      </button>
                    </div>

                    {/* Content */}
                    <div style={{ padding: "15px" }}>
                      <div style={{ display: "flex", gap: "8px" }}>
                        <Image src="/building.png" alt="Date" width={18} height={20} />
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
                          marginTop: "8px",
                        }}
                      >
                        {card.title}
                      </h3>

                      <p
                        style={{
                          fontFamily: "var(--font-open-sans)",
                          fontSize: "13px",
                          lineHeight: "160%",
                          color: "#6D6D6D",
                        }}
                      >
                        {card.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            <nav className="cards-nav">
              <button onClick={scrollLeft} className="nav-arrow-button">
                <Image src="/leftArrow.png" alt="Left" width={22} height={22} />
              </button>
              <button onClick={scrollRight} className="nav-arrow-button">
                <Image src="/rightArrow.png" alt="Right" width={22} height={22} />
              </button>
            </nav>
          </>
        )}
      </div>

      {/* Styles */}
      <style jsx>{`
        .cards-scroll-container::-webkit-scrollbar {
          display: none;
        }

        .cards-nav {
          position: absolute;
          top: -70px;
          right: 36px;
          display: flex;
          gap: 20px;
        }

        .nav-arrow-button {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: none;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .cards-scroll-container {
            scroll-snap-type: x mandatory;
            padding-left: calc((100vw - 280px) / 2);
            padding-right: calc((100vw - 280px) / 2);
            padding-top: 32px;
            padding-bottom: 32px;
          }

          .cards-scroll-container article {
            scroll-snap-align: center;
            width: 280px !important;
          }

          .cards-nav {
            position: static;
            margin: 12px auto 0;
            display: flex;
            justify-content: center;
            gap: 20px;
          }

          .nav-arrow-button {
            width: 48px;
            height: 48px;
            background: #c4161c;
            border-radius: 50%;
          }

          .nav-arrow-button img {
            filter: brightness(0) invert(1);
          }
        }
      `}</style>
    </section>
  );
}
