"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/About" },
    { name: "Products", href: "/Product" },
    // { name: "CSR", href: "/CSR" },
    { name: "Resources & Insights", href: "/Resources" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ & Support", href: "/FAQ" },
  ];

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  //   prevents stuck overlay when route changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 250);
  };

  const getActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="relative z-50 max-w-full mx-auto px-4 sm:px-6 lg:px-8 pt-1 sm:pt-6 lg:pt-8 flex items-center justify-between bg-transparent md:bg-white">
        {/* ===== Mobile Header ===== */}
        <div className="flex md:hidden items-center justify-between w-full">
          <Image
            src="/logoo.jpeg"
            alt="logo"
            width={80}
            height={80}
            className="object-contain"
            priority
          />

          <button
            onClick={() => setIsOpen(true)}
            className="space-y-1.5"
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
        </div>

        {/* ===== Desktop Logo ===== */}
        <div className="hidden md:flex items-center ml-0 lg:ml-14">
          <Image
            src="/logoo.jpeg"
            alt="logo"
            width={100}
            height={130}
            className="object-contain w-20 h-auto md:w-24 lg:w-28"
            priority
          />
        </div>

        {/*   Desktop Navigation (NO mounted delay)  */}
        <nav className="hidden md:flex gap-4 lg:gap-8 xl:gap-12 items-center text-sm md:text-base lg:text-lg xl:text-xl font-semibold leading-tight lg:leading-10 tracking-[-0.5px] lg:tracking-[-1px] font-sans flex-wrap justify-center">
          {links.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                prefetch
                className={`cursor-pointer inline-block transition-all duration-300 hover:scale-105 whitespace-nowrap ${
                  getActiveLink(link.href)
                    ? "text-[#D11417]"
                    : "text-gray-800 hover:text-[#D11417]"
                }`}
              >
                {link.name}
              </Link>

              <span
                className={`absolute left-0 -bottom-1 h-[2px] lg:h-[3px] transition-all duration-500 ease-out ${
                  getActiveLink(link.href)
                    ? "w-full bg-[#D11417] shadow-lg"
                    : "w-0 bg-[#D11417] group-hover:w-full group-hover:shadow-md"
                }`}
              />
            </div>
          ))}
        </nav>

        {/* ===== Desktop Contact Button ===== */}
        <div className="hidden md:block shrink-0">
          <Link href="/Contact" prefetch>
            <button className="relative mr-0 lg:mr-3.5 px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 bg-[#D11417] text-white cursor-pointer font-normal text-sm md:text-base lg:text-lg rounded-xl lg:rounded-2xl border-2 border-[#D11417] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 transform-gpu hover:bg-white hover:text-[#D11417] whitespace-nowrap">
              Contact Us
            </button>
          </Link>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 bg-[#D11417] text-white flex flex-col px-8 py-6 md:hidden ${isClosing ? "animate-slideUp" : "animate-slideDown"}`}
        >
          {/* Top */}
          <div className="flex justify-center items-center animate-fadeInDown animation-delay-100">
            <Image
              src="/logo.png"
              alt="logo"
              width={90}
              height={90}
              className="object-contain"
            />
          </div>
          <div className="absolute top-5 right-5 animate-fadeInDown animation-delay-200">
            <button
              onClick={handleClose}
              className="w-7 h-7 flex items-center justify-center
               text-lg rounded-full border border-white
               hover:bg-white hover:text-[#D11417]
               transition duration-200"
            >
              ✕
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex flex-col items-center gap-6 mt-16 text-lg font-semibold">
            {links.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleClose}
                className="hover:opacity-80 animate-fadeInDown opacity-0"
                style={{
                  animationDelay: `${400 + index * 80}ms`,
                  animationFillMode: "forwards",
                }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/Contact"
              onClick={handleClose}
              className="hover:opacity-80 animate-fadeInDown opacity-0"
              style={{
                animationDelay: `${400 + links.length * 80}ms`,
                animationFillMode: "forwards",
              }}
            >
              Contact Us
            </Link>
          </nav>

          {/* Footer */}
          <div className="mt-auto text-center text-sm border-t border-white/40 pt-4 space-y-2 animate-fadeInUp animation-delay-800 opacity-0">
            <p>
              Office 203A, Sheikha Maryam Building,
              <br />
              Deira, Dubai, UAE.
            </p>
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/old-phone.png"
                alt="Phone"
                width={15}
                height={15}
                className="object-contain"
              />
              <span>+971 4 227 3376 | +971 50 454 5684</span>
            </div>

            <p>✉ accounts@heartlandtrdng.com</p>
          </div>
        </div>
      )}
    </>
  );
}
