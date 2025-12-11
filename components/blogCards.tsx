"use client";

import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
    category: "Category",
    title: "Empowering Local Farmers Through Ethical Sourcing",
    description: "Brief excerpt of the blog post content.",
    author: "John Doe",
    date: "Jan 11, 2022",
    readTime: "5 min read",
    image: "/Placeholder Image.png",
    avatar: "/blogAvatar.png",
  },
  {
    category: "Category",
    title: "The Rise of Healthy Eating in Modern Households",
    description: "Brief excerpt of the blog post content.",
    author: "John Doe",
    date: "Jan 11, 2022",
    readTime: "5 min read",
    image: "/Placeholder Image (1).png",
    avatar: "/blogAvatar1.png",
  },
  {
    category: "Category",
    title: "Sustainable Food Distribution: Building a Greener Future",
    description: "Brief excerpt of the blog post content.",
    author: "John Doe",
    date: "Jan 11, 2022",
    readTime: "5 min read",
    image: "/Placeholder Image (2).png",
    avatar: "/blogAvatar2.png",
  },
  {
    category: "Category",
    title: "Empowering Local Farmers Through Ethical Sourcing",
    description: "Brief excerpt of the blog post content.",
    author: "John Doe",
    date: "Jan 11, 2022",
    readTime: "5 min read",
    image: "/Placeholder Image (3).png",
    avatar: "/blogAvatar.png",
  },
  {
    category: "Category",
    title: "The Rise of Healthy Eating in Modern Households",
    description: "Brief excerpt of the blog post content.",
    author: "John Doe",
    date: "Jan 11, 2022",
    readTime: "5 min read",
    image: "/Placeholder Image (4).png",
    avatar: "/blogAvatar1.png",
  },
  {
    category: "Category",
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
  return (
    <section className={`section ${roboto.className}`}>
      <div className="container">
        {/* Categories */}
        <div className="categories">
          <button className="viewAll">View All</button>
          <span className="categoryText">Category One</span>
          <span className="categoryText">Category Two</span>
          <span className="categoryText">Category Three</span>
          <span className="categoryText">Category Four</span>
        </div>

        {/* Cards */}
        <div className="grid">
          {cards.map((card, i) => (
            <div key={i} className="card">
              {/* IMAGE */}
              <div className="imagePlaceholder">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="blogImage"
                />
              </div>

              <div className="content">
                <span className="cardCategory">{card.category}</span>
                <h3 className="title">{card.title}</h3>
                <p className="description">{card.description}</p>

                {/* AVATAR */}
                <div className="avatarRow">
                  <div className="avatarImage">
                    <Image
                      src={card.avatar}
                      alt={card.author}
                      fill
                      className="avatarImg"
                    />
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

      <style jsx>{`
        .section {
          width: 100%;
          padding: 120px 0;
        }

        .container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .categories {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 48px;
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
          grid-template-columns: repeat(3, 370px);
          gap: 40px;
        }

      .card {
  width: 370px;
  height: 549px;
  border-radius: 15px;
  box-shadow: 4px 4px 6.6px rgba(0, 0, 0, 0.25);
   display: flex;
  flex-direction: column;
  
}

.imagePlaceholder {
  position: relative;
  width: 375px;
  height: 300px;
  border -radius: 10px 10px 0 0;
}

.blogImage {
  object-fit: contain;
  object-position: center;
  
}

.content {
  padding: 16px; /* ✅ padding only for content below image */
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

  /* stable line height */
  line-height: 1.4;

  /* EXACT height for 2 lines */
  min-height: calc(1.4em * 2);

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

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
      `}</style>
    </section>
  );
}
