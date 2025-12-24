"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useNavigation } from "@/contexts/NavigationContext";

export default function Navbar() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/About" },
    { name: "Products", href: "/Product" },
    { name: "CSR", href: "/CSR" },
    { name: "Resources & Insights", href: "/Resources" },
    { name: "FAQ & Support", href: "/FAQ" },
  ];

  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isNavigating, setIsNavigating } = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const getActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleNavigation = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (href === pathname) return;
    router.push(href);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="max-w-7xl mx-auto px-6 pt-8 flex items-center justify-between">
        
        {/* ===== Mobile Header ===== */}
        <div className="flex md:hidden items-center justify-between w-full">
          <Image
            src="/logo.png"
            alt="logo"
            width={80}
            height={80}
            className="object-contain"
          />

          {/* Hamburger */}
          <button onClick={() => setIsOpen(true)} className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
        </div>

        {/* ===== Desktop Logo ===== */}
        <div className="hidden md:flex items-center ml-14">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={130}
            className="object-contain"
          />
        </div>

        {/* ===== Desktop Navigation ===== */}
        {mounted && (
          <nav className="hidden md:flex gap-12 items-center text-xl font-semibold leading-10 tracking-[-1px] font-sans">
            {links.map((link) => (
              <div key={link.name} className="relative group">
                <a
                  href={link.href}
                  onClick={(e) => handleNavigation(link.href, e)}
                  className={`cursor-pointer inline-block transition-all duration-300 hover:scale-105 ${
                    getActiveLink(link.href)
                      ? "text-[#D11417]"
                      : "text-gray-800 hover:text-[#D11417]"
                  }`}
                >
                  {link.name}
                </a>

                <span
                  className={`absolute left-0 -bottom-1 h-[3px] transition-all duration-500 ease-out ${
                    getActiveLink(link.href)
                      ? "w-full bg-[#D11417] shadow-lg"
                      : "w-0 bg-[#D11417] group-hover:w-full group-hover:shadow-md"
                  }`}
                ></span>
              </div>
            ))}
          </nav>
        )}

        {/* ===== Desktop Contact Button ===== */}
        <div className="hidden md:block">
          <Link href="/Contact">
            <button className="relative mr-3.5 px-8 py-4 bg-[#D11417] text-white cursor-pointer font-normal text-lg rounded-2xl border-2 border-[#D11417] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 transform-gpu hover:bg-white hover:text-[#D11417]">
              Contact Us
            </button>
          </Link>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#D11417] text-white flex flex-col px-8 py-6 md:hidden">
          
          {/* Top */}
          <div className="flex justify-center items-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={90}
              height={90}
              className="object-contain"
            /></div>
           <div className="absolute top-5 right-5">
  <button
    onClick={() => setIsOpen(false)}
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
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:opacity-80"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/Contact" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </nav>

          {/* Footer */}
          <div className="mt-auto text-center text-sm border-t border-white/40 pt-4 space-y-2">
            <p>
              Arehouse No. 18, Industrial Area 3, Al Qusais,<br />
              Dubai, United Arab Emirates
            </p>
            <div className="flex items-center justify-center gap-2">
  <Image
    src="/old-phone.png"
    alt="Phone"
    width={15}
    height={15}
    className="object-contain"
  />
  <span>+971 5 0388 4543 | +971 5 0388 4543</span>
</div>

            <p>✉ accounts@heartlandtrdng.com</p>
          </div>
        </div>
      )}
    </>
  );
}
