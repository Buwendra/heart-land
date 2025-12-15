'use client';

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Nunito, Open_Sans } from "next/font/google";
import { useRouter } from "next/navigation";


const nunito = Nunito({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function AboutUsPage() {
  const router = useRouter();

  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="about-container">
      <div className="left-content">
        {/* Title Row */}
        <div className={`title-row ${openSans.className}`}>
          <span className="title-text">Our</span>
          <div className="title-line"></div>
        </div>

        {/* Subtitle */}
        <h2 className={`subtitle ${nunito.className}`}>Featured insights and articles</h2>

        {/* Body Text */}
        <p className={`body-text ${openSans.className}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
        </p>

        {/* CTA Button */}
        <button className={`cta-button ${nunito.className}`}
          onClick={() => router.push("/About")}  
          >
          <span className="cta-text">Know More</span>
          <span className="cta-icon-wrapper">
            <Image
              src="/Arrow1.png"
              alt="arrow"
              width={14}
              height={14}
            />
          </span>
        </button>
      </div>

      {/* Right Image Section with Parallax */}
      <div className="right-content">
        <div
          className="main-image-wrapper"
          style={{ transform: `translateY(${offsetY * 0.2}px)` }} // Parallax effect
        >
          <Image
            src="/Group20.png"
            alt="Main"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      <style jsx>{`



       .about-container {

 max-width: 1240px;
 margin: 0 auto;
 padding: 60px 50px;
  min-height: 100vh;
  background: #ffffff;
 /* ✅ centers horizontally */
  display: flex;
  gap: 20px;
  box-sizing: border-box;
}


        .left-content {
          width: 594px;
          display: flex;
          flex-direction: column;
        }

        .title-row {
          width: 190px;
          height: 29px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .title-text {
          font-weight: 400;
          font-size: 18px;
          line-height: 160%;
          color: #ed632f;
        }

        .title-line {
          width: 80px;
          height: 0px;
          border: 1px solid #ed632f;
        }

        .subtitle {
          width: 404px;
          font-weight: 600;
          font-size: 30px;
          line-height: 140%;
          color: #10111a;
          margin-bottom: 20px;
        }

        .body-text {
          width: 594px;
          font-weight: 400;
          font-size: 18px;
          line-height: 160%;
          color: #686868;
          margin-bottom: 24px;
        }

        .cta-button {
          width: 154px;
          height: 44px;
          background: #0062ce;
          border-radius: 8px;
          padding: 2px 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: none;
          cursor: pointer;
          box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.2);
        }

        .cta-text {
          font-weight: 600;
          font-size: 12px;
          line-height: 150%;
          color: #ffffff;
          text-align: center;
        }

        .cta-icon-wrapper {
          width: 30px;
          height: 30px;
          background: #ffffff;
          border-radius: 69.77px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
        }

        .right-content {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: flex-start;
           padding-left: 20px;
        }

        .main-image-wrapper {
          width: 600px;
          height: 505.58px;
          position: relative;
          margin-right: 100px; 
          transition: transform 0.1s ease-out; /* smooth parallax */
        }
      `}</style>
    </div>
  );
}
