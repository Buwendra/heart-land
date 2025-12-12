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
  const { isNavigating, setIsNavigating } = useNavigation();

 useEffect(() => {
  
  const timer = setTimeout(() => setMounted(true), 0);
  return () => clearTimeout(timer); // cleanup
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
    <header className="max-w-7xl mx-auto px-6 pt-8 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center ml-14">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={130}
          className="object-contain"
        />
      </div>

      {/* Navigation */}
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

      {/* Contact Button */}
      <div className="hidden md:block">
        <Link href="/Contact">
          <Image
            src="/contact-button.png"
            alt="Contact button"
            width={160}
            height={130}
            className="object-contain mr-3.5"
          />
        </Link>
      </div>
    </header>
  );
}
