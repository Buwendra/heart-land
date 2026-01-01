"use client";

import Image from "next/image";
import { Newsreader, Inter, Open_Sans, Nunito } from "next/font/google";
import { useEffect, useState } from "react";

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '700'] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600", "700"] });
const newsReader = Newsreader({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function OurProjects() {
  const [scrollY, setScrollY] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    
 
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

 
  const parallaxMultiplier = isMobile ? 0 : 0.04;
  const parallax = (multiplier: number) => `translateY(${scrollY * multiplier}px)`;

   const cards = [
    {
      id: 1,
      image: "/proj_farmer.png",
      title: "Farmer Empowerment Program",
      description: "Training and mentoring small-scale farmers in sustainable agriculture, organic cultivation, and export-ready practices.",
    },
    {
      id: 2,
      image: "/proj_child.png",
      title: "Healthy Start Nutrition Drive",
      description: "Providing nutritious meals and health check-ups to children in underserved communities to help them grow strong and healthy.",
    },
    {
      id: 3,
      image: "/proj_library.png",
      title: "Libraries for Learning Program",
      description: "Setting up community libraries and reading clubs to encourage literacy and spark a love for books among children.",
    },
    {
      id: 4,
      image: "/proj_water.png",
      title: "Clean Water for Every Child",
      description: "Installing safe drinking water facilities in schools and villages to promote health and reduce waterborne diseases.",
    },
  ];

   const cardsToShow = isMobile && !showAll ? cards.slice(0, 3) : cards;

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-11 py-10 -mt-20 mb-15 relative">
      {/* BG Pattern */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] overflow-hidden pointer-events-none select-none -z-10">
        <Image
          src="/bgpattern.png"
          alt=""
          fill
          className="object-cover opacity-100"
        />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-3 mb-5">
       <p className={`${openSans.className} text-[13px] text-center justify-center md:text-left text-[#D12714]`}>
  Transforming Lives Across Sri Lanka
</p>

<div className="w-[70px] h-px bg-[#ec2c2c] hidden md:block"></div>
      </div>

      {/* Title */}
      <h2 className="text-[28px] md:text-[32px] text-center md:text-left font-semibold font-['Nunito']">Our Projects</h2>

      {/* Intro Text */}
      <p className={`${openSans.className} max-w-2xl mt-0 text-center md:text-left text-[#243C4B] font-normal leading-[22px] text-sm md:text-base`}>
        Through our CSR initiatives, we support Sri Lankan farmers, children, women entrepreneurs,
        and local communities — driving sustainable growth, ethical trade, and positive change across
        generations.
      </p>

      {/* Cards Wrapper */}
      <div className="flex flex-col md:flex-row gap-6 mt-5 w-full items-center md:items-start">
        {cardsToShow.map((card) => (
          <div 
            key={card.id} 
            className="w-full max-w-[300px] md:w-[300px] bg-white rounded-2xl md:rounded-xl shadow-sm pb-6 overflow-hidden"
          >
            <div 
              className="h-[200px] md:h-[230px] w-full relative mt-1 md:-mt-20" 
              style={{ transform: parallax(parallaxMultiplier) }}
            >
              <Image src={card.image} alt="" fill className="object-cover" />
            </div>

          <p className={`${isMobile ? nunito.className : newsReader.className} w-full md:w-60 text-left md:text-left
             text-[#243C4B] mt-10 md:mt-25 px-4 font-bold text-[19px] md:text-[17px]`}>
  {card.title}
</p>

            <p className={`${openSans.className} px-4 font-medium text-sm mt-1 md:w-72 leading-[22px] text-[#6D6D6D]`}>
              {card.description}
            </p>

            <div className="px-4 mt-4">
              <button className="group flex items-center cursor-pointer px-4 py-[9px] bg-[#D12714] text-white rounded-lg text-[12px] border-2 border-[#D12714] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 transform-gpu hover:bg-white hover:text-[#D12714]">
                <span className={`${nunito.className}`}>Read More</span>
                <span className="flex items-center justify-center w-6 h-6 bg-white rounded-full ml-2 transition-all duration-300 ease-out group-hover:bg-[#D12714]">
                  <span className="text-[#D12714] text-xl transition-all duration-300 ease-out group-hover:text-white">↗</span>
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE VIEW MORE BUTTON */}
      {isMobile && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className={`${openSans.className} px-8 py-3  text-[#D12714] font-semibold  transition-all duration-300 hover:bg-[#D12714] hover:text-white hover:shadow-lg`}
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      )}

      {/* Slide Arrows - Hidden on mobile */}
      <div className="hidden md:flex absolute right-40 top-[130px] items-center gap-5 px-4">
        <button 
          className="w-11 h-11 bg-gray-300 cursor-pointer rounded-full flex items-center 
          justify-center border-0 p-0 transition-all duration-300 ease-out 
          hover:scale-110 hover:-translate-y-0.5 hover:bg-opacity-5 hover:shadow-[0_8px_16px_rgba(0,0,0,0.3)]"
          aria-label="Scroll left"
        >
          <Image src="/leftArrow.png" alt="Left" width={22} height={22} />
        </button>
        <button 
          className="w-11 h-11 bg-gray-300 cursor-pointer rounded-full flex items-center justify-center border-0 p-0 transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-0.5 hover:bg-opacity-5 hover:shadow-[0_8px_16px_rgba(0,0,0,0.3)]"
          aria-label="Scroll right"
        >
          <Image src="/rightArrow.png" alt="Right" width={22} height={22} />
        </button>
      </div>
    </section>
  );
}