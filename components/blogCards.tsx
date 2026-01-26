"use client";

import Image from "next/image";
import { Roboto } from "next/font/google";
import { useEffect, useState } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

type Card = {
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  avatar: string;
};

const cards: Card[] = [
  {
    category: "Category One",
    title: "Empowering Local Farmers Through Ethical Sourcing",
    description: "Brief excerpt of the blog post content.",
    author: "John Doe",
    date: "Jan 11, 2022",
    readTime: "5 min read",
    image: "/Placeholder Image.png",
    avatar: "/blogAvatar.png",
  },
  {
    category: "Category One",
    title: "The Rise of Healthy Eating in Modern Households",
    description: "Brief excerpt of the blog post content.",
    author: "John Doe",
    date: "Jan 11, 2022",
    readTime: "5 min read",
    image: "/Placeholder Image (1).png",
    avatar: "/blogAvatar1.png",
  },
  {
    category: "Category Two",
    title: "Sustainable Food Distribution: Building a Greener Future",
    description: "Brief excerpt of the blog post content.",
    author: "John Doe",
    date: "Jan 11, 2022",
    readTime: "5 min read",
    image: "/Placeholder Image (2).png",
    avatar: "/blogAvatar2.png",
  },
  {
    category: "Category Two",
    title: "Empowering Local Farmers Through Ethical Sourcing",
    description: "Brief excerpt of the blog post content.",
    author: "John Doe",
    date: "Jan 11, 2022",
    readTime: "5 min read",
    image: "/Placeholder Image (3).png",
    avatar: "/blogAvatar.png",
  },
  {
    category: "Category Three",
    title: "The Rise of Healthy Eating in Modern Households",
    description: "Brief excerpt of the blog post content.",
    author: "John Doe",
    date: "Jan 11, 2022",
    readTime: "5 min read",
    image: "/Placeholder Image (4).png",
    avatar: "/blogAvatar1.png",
  },
  {
    category: "Category Four",
    title: "Sustainable Food Distribution: Building a Greener Future",
    description: "Brief excerpt of the blog post content.",
    author: "John Doe",
    date: "Jan 11, 2022",
    readTime: "5 min read",
    image: "/Placeholder Image (5).png",
    avatar: "/blogAvatar2.png",
  },
];

export default function BlogSection() {
  // Selected category state
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Parallax scroll
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Filtered cards based on selected category
  const filteredCards =
    selectedCategory === "All"
      ? cards
      : cards.filter((card) => card.category === selectedCategory);

  return (
    <section className={`section ${roboto.className}`}>
      <div className="container">
        
        {/* Categories */}
        <div className="categories">
          <button className="viewAll" onClick={() => setSelectedCategory("All")}>
            View All
          </button>

          {["Category One", "Category Two", "Category Three", "Category Four"].map((cat) => (
            <span
              key={cat}
              className="categoryText"
              onClick={() => setSelectedCategory(cat)}
              style={{ fontWeight: selectedCategory === cat ? 700 : 400 }}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Cards */}
        <div className="grid">
          {filteredCards.map((card, i) => (
            <div
              key={i}
              className="card"
              style={{
                transform: `translateY(${Math.sin((offsetY + i * 60) / 200) * 16}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              {/* IMAGE */}
              <div className="imagePlaceholder">
                <Image src={card.image} alt={card.title} fill className="blogImage" />
              </div>

              <div className="content">
                <span className="cardCategory">{card.category}</span>
                <h3 className="title">{card.title}</h3>
                <p className="description">{card.description}</p>

                {/* AVATAR */}
                <div className="avatarRow">
                  <div className="avatarImage">
                    <Image src={card.avatar} alt={card.author} fill className="avatarImg" />
                  </div>
                  <div>
                    <div className="avatarName">{card.author}</div>
                    <div className="meta">
                      <span>{card.date}</span>
                      <span className="dot">•</span>
                      <span>{card.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mobileViewMore">
           <button
    type="button"          // ✅ ADD THIS LINE
    className="mobileViewMoreBtn"
  >
    View More
  </button>
        </div>

      <style jsx>{`
        .section {
          width: 100%;
          padding: 50px 0 120px 0;
        }

        .container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 85px;
        }

        .categories {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 48px;
          padding-left: 10px;
        }

        .viewAll {
          height: 40px;
          padding: 0 16px;
          border-radius: 15px;
          border: 1px solid #000;
          background: transparent;
          font-size: 16px;
          line-height: 40px;
          cursor: pointer;
        }

        .categoryText {
          font-size: 16px;
          line-height: 150%;
          cursor: pointer;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
          gap: 40px;
          justify-content: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .card {
          width: 100%;
          max-width: 370px;
          height: 549px;
          border-radius: 15px;
          box-shadow: 4px 4px 6.6px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          margin: 0 auto;
        }

        .imagePlaceholder {
          position: relative;
          width: 100%;
          height: 300px;
          border-radius: 10px 10px 0 0;
        }

        .blogImage {
          object-fit: contain;
          object-position: center;
        }

        .content {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex-grow: 1;
          width: 100%;
        }

        .cardCategory {
          font-size: 14px;
          font-weight: 600;
        }

        .title {
          font-size: 24px;
          font-weight: 700;
          line-height: 1.4;
          min-height: calc(1.4em * 2);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .description {
          font-size: 16px;
          line-height: 150%;
        }

        .avatarRow {
          margin-top: auto;
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .avatarImage {
          position: relative;
          width: 48px;
          height: 48px;
          border-radius: 25px;
          overflow: hidden;
        }

        .avatarImg {
          object-fit: cover;
        }

        .avatarName {
          font-size: 14px;
          font-weight: 600;
        }

        .meta {
          display: flex;
          gap: 6px;
          font-size: 14px;
          align-items: center;
        }

        .dot {
          font-size: 18px;
        }

        /* Responsive Design */
        @media (max-width: 1440px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 35px;
            max-width: 1200px;
          }
          
          .card {
            max-width: 100%;
            height: 549px;
          }
        }

        @media (max-width: 1024px) {
          .container {
            padding: 0 40px;
          }
          
          .grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
          }
          
          .card {
            max-width: 100%;
            height: 480px;
          }
          
          .imagePlaceholder {
            height: 240px;
          }
          
          .content {
            padding: 14px;
            gap: 7px;
          }
          
          .title {
            font-size: 20px;
            line-height: 1.35;
          }
          
          .description {
            font-size: 15px;
            line-height: 145%;
          }
          
          .cardCategory {
            font-size: 13px;
          }
          
          .avatarImage {
            width: 42px;
            height: 42px;
          }
          
          .avatarName {
            font-size: 13px;
          }
          
          .meta {
            font-size: 13px;
          }
          
          .categories {
            flex-wrap: wrap;
            gap: 16px;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 20px;
          }
          
          .grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            max-width: 100%;
          }
          
          .categories {
            justify-content: center;
            padding-left: 0;
          }
          
          .card {
            max-width: 100%;
            height: 420px;
          }
          
          .imagePlaceholder {
            height: 200px;
          }
          
          .content {
            padding: 12px;
            gap: 6px;
          }
          
          .title {
            font-size: 18px;
            line-height: 1.3;
          }
          
          .description {
            font-size: 14px;
            line-height: 140%;
          }
          
          .cardCategory {
            font-size: 12px;
          }
          
          .avatarImage {
            width: 36px;
            height: 36px;
          }
          
          .avatarName {
            font-size: 12px;
          }
          
          .meta {
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .section {
            padding: 30px 0 60px 0;
          }
          
          .container {
            padding: 0 16px;
          }
          
          .grid {
            grid-template-columns: 1fr;
            gap: 20px;
            max-width: 350px;
          }
          
          .card {
            height: 480px;
          }
          
          .imagePlaceholder {
            height: 240px;
          }
          
          .content {
            padding: 16px;
            gap: 8px;
          }
          
          .title {
            font-size: 20px;
            line-height: 1.4;
          }
          
          .description {
            font-size: 15px;
            line-height: 150%;
          }
          
          .cardCategory {
            font-size: 13px;
          }
          
          .avatarImage {
            width: 42px;
            height: 42px;
          }
          
          .avatarName {
            font-size: 13px;
          }
          
          .meta {
            font-size: 13px;
          }
          
          .categories {
            gap: 12px;
          }
          
          .viewAll {
            font-size: 14px;
            padding: 0 12px;
            height: 36px;
            line-height: 36px;
          }
          
          .categoryText {
            font-size: 14px;
          }
        }
          /* ================= MOBILE VIEW MORE ================= */

/* Hidden by default (desktop/tablet) */
.mobileViewMore {
  display: none;
  justify-content: center;
  margin-top: 24px;
}

.mobileViewMoreBtn {
  background: transparent;
  color: #e10600;
  border: none;
  padding: 0;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  font-family: "Open Sans", sans-serif; /* ✅ NEW */
}

/* underline */
.mobileViewMoreBtn::after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background-color: #e10600;
  margin-top: -20 px;
}

/* subtle interaction feedback */
.mobileViewMoreBtn:hover {
  opacity: 0.85;
}

.mobileViewMoreBtn:active {
  transform: translateY(1px);
}


/* Mobile behavior ONLY */
@media (max-width: 640px) {
  .categories {
    display: none;
  }

  .grid {
    display: none;
  }

  .mobileViewMore {
    display: flex;
  }
}


      `}</style>
    </section>
  );
}