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
  const [isMobile, setIsMobile] = useState(false); // Track mobile

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    const handleResize = () => setIsMobile(window.innerWidth < 768); // Mobile breakpoint

    handleResize(); // Initial check
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="about-container">

      {/* Left content: Title, subtitle, body, button */}
      <div className="left-content">
        {/* Title Row */}
        <div className={`title-row ${openSans.className}`}>
          <div className="title-line"></div> 
          <span className="title-text">Our</span>
          <div className="title-line"></div>
        </div>

        {/* Subtitle */}
        <h2 className={`subtitle ${nunito.className}`}>Featured insights and articles</h2>

        {/* Body Text */}
        <p className={`body-text ${openSans.className}`}>
  {isMobile
    ? `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint `
    : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
</p>

        {/* CTA Button */}
        <button
          className={`cta-button ${nunito.className} ${isMobile ? "mobile-cta" : ""}`}
          onClick={() => router.push("/About")}
        >
          <span className="cta-text">Know More</span>
          <span className="cta-icon-wrapper">
            <Image
  src={isMobile ? "/Arrow.png" : "/Arrow1.png"}
  alt="arrow"
  width={14}
  height={14}
/>

          </span>
        </button>
      </div>

      {/* Right Image Section with Parallax */}
      <div className="right-content mobile-top-image">
        <div
          className="main-image-wrapper"
          style={{
            transform: isMobile ? "none" : `translateY(${offsetY * 0.2}px)`, // Parallax disabled on mobile
          }}
        >
         <Image
  src="/Group20.png"
  alt="Main"
  sizes="(max-width: 768px) 100vw, 600px"
  fill
  priority
  style={{ objectFit: "contain" }}
/>

      {/* MOBILE SIDE IMAGE – LEFT BELOW MAIN */}
<div className="mobile-side-img left-side">
  <Image
    src="/Union.png"        // your left image
    alt="side left"
    fill
    style={{ objectFit: "cover" }}
  />
</div>

{/* MOBILE SIDE IMAGE – RIGHT ABOVE BUTTON */}
<div className="mobile-side-img right-side">
  <Image
    src="/Union1.png"        // your right image
    alt="side right"
    fill
    style={{ objectFit: "cover" }}
  />
</div>
    
        </div>
      </div>

      <style jsx>{`
        /* CONTAINER */
        .about-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 60px 50px;
          min-height: 100vh;
          display: flex;
          gap: 20px;
          box-sizing: border-box;
          background: #ffffff;

          /* Mobile layout */
          flex-direction: ${isMobile ? "column" : "row"};
          align-items: ${isMobile ? "center" : "flex-start"};
        }

        /* LEFT CONTENT */
        .left-content {
          width: ${isMobile ? "100%" : "594px"};
          display: flex;
          flex-direction: column;
          align-items: ${isMobile ? "center" : "flex-start"};
          text-align: ${isMobile ? "center" : "left"};
        }

        .title-row {
         
       width: auto;               /* let content control width */
       display: inline-flex;     /* shrink to fit content */
       align-items: center;
       justify-content: center;
       gap: 6px;                 /* keep text tight */
}   
        

        .title-text {
          font-weight: 400;
          font-size: 18px;
          line-height: 160%;
          color: #ed632f;
        }

        .title-line {
        width: 105px;              /* 🔥 THIS increases the line length */
        height: 1px;
        background-color: #ed632f;
}

        .subtitle {
          width: ${isMobile ? "100%" : "242px"};
          font-weight: 600;
          font-size: 30px;
          line-height: 140%;
          color: #10111a;
          margin-bottom: 20px;
          white-space: nowrap;
          
        }

        .body-text {
          width: ${isMobile ? "100%" : "325px"};
          font-weight: 400;
          font-size: 18px;
          line-height: 160%;
          color: #686868;
          margin-bottom: 24px;
        }

        /* CTA BUTTON */
        .cta-button {
          width: 154px;
          height: 44px;
          background: #0062ce; /* default desktop color */
          border-radius: 8px;
          padding: 2px 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: none;
          cursor: pointer;
          box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease-out;
          transform: scale(1);
          margin-top: 10px;
        }

        .cta-button:hover {
          transform: scale(1.02) translateY(-4px);
          box-shadow: 0px 8px 16px rgba(0, 98, 206, 0.3);
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

        /* Mobile CTA overrides */
        .mobile-cta {
          background: #FF0000; /* red on mobile */
          margin: 0 auto; /* center button */
        }

        .right-content {
  flex: 1;
  display: flex;
  justify-content: ${isMobile ? "center" : "flex-start"};
  align-items: center;               /* FIX */
  padding-left: ${isMobile ? "0" : "20px"};
  margin-top: ${isMobile ? "0px" : "0"};
  width: 100%;                      /* FIX */
}


      .main-image-wrapper {
  width: ${isMobile ? "100%" : "600px"};
  height: ${isMobile ? "260px" : "505.58px"};
  position: relative;
  display: block;                  /* FIX */
  margin: ${isMobile ? "0 auto" : "0 100px 0 0"};
  transition: transform 0.1s ease-out;
}

/* MOBILE IMAGE ON TOP ONLY */
@media (max-width: 767px) {
  .left-content {
    order: 2;
  }

  .right-content {
    order: 1;
  }
    .about-container {
    padding-top: 10px;   /* ✅ bring everything up */
  }

  .main-image-wrapper {
    margin-top: -10px;   /* ✅ lift image to top visually */
  }

}

/* SIDE IMAGES - hidden on desktop */
.mobile-side-img {
  display: none;
  position: absolute;
  border-radius: 18px;
  overflow: hidden;
  z-index: 5;
}

/* MOBILE ONLY SIDE IMAGES */
@media (max-width: 767px) {

  .mobile-side-img {
    display: block;
  }

  /* LEFT small image - below main image */
  .mobile-side-img.left-side {
    width: 110px;
    height: 105px;
    left: -30px;
    bottom: -105px;
  }

  /* RIGHT small image - above red button */
  .mobile-side-img.right-side {
    width: 100px;
    height: 90px;
    right: -30px;
    bottom: -380px;
  }
}



      `}</style>
    </div>
  );
}
