import { Open_Sans } from "next/font/google";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export default function Footer() {
  return (
    <footer className={`${openSans.className} bg-[#1B1D21] text-white px-6 md:px-15 py-6 md:pb-10`}>

      {/* Container to center the content */}
      <div className="max-w-7xl mx-auto">

        {/* MOBILE LAYOUT */}
        <div className="block md:hidden">
          {/* Stay Connected With Heartland */}
          <h3 className="text-[20px] font-normal mb-4">Stay Connected With Heartland!</h3>

          {/* Email */}
          <div className="flex items-center justify-between mb-4 cursor-pointer w-full">
            <p className="text-sm break-all sm:break-normal">info@heartlandtrading.ae</p>
            <span className="text-2xl shrink-0 ml-10">⭧</span>
          </div>
         

          {/* Newsletter Paragraph */}
          <p className="text-sm text-gray-400 leading-7 mb-6 w-full text-justify">
            Bringing the authentic flavors of Sri Lanka to the UAE, Heartland General Trading Co LLC is dedicated to quality, community impact, and supporting local farmers through ethical and sustainable trade.
          </p>

          {/* Quick Link and Information in one row */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-[16px] mb-4">Quick Link</h4>
              <ul className="space-y-3 text-sm text-white">
                <li><a href="/About" className="hover:text-[#D11417] transition-colors duration-300">About Us</a></li>
                <li><a href="/Product" className="hover:text-[#D11417] transition-colors duration-300">Our Products</a></li>
                <li><a href="/CSR" className="hover:text-[#D11417] transition-colors duration-300">CSR Initiatives</a></li>
                <li><a href="/About" className="hover:text-[#D11417] transition-colors duration-300">Careers</a></li>
                <li><a href="/Contact" className="hover:text-[#D11417] transition-colors duration-300">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[16px] mb-4">Information</h4>
              <ul className="space-y-3 text-sm text-white">
                <li><a href="/FAQ" className="hover:text-[#D11417] transition-colors duration-300">FAQ</a></li>
                <li><a href="#" className="hover:text-[#D11417] transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="hover:text-[#D11417] transition-colors duration-300">News</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Us */}
          <h2 className="font-bold text-[24px] mb-4">Contact Us</h2>

          {/* Corporate Office */}
          <p className="text-sm text-white leading-6 mb-4">
            <span className="font-semibold">Corporate Office</span><br/>
            Heartland General Trading FZE<br/>
            Warehouse No. 18, Industrial Area 3,<br/>
            Al Qusais, Dubai, United Arab Emirates
          </p>

          {/* Sri Lanka Office */}
          <div className="text-sm text-white leading-6 mb-4">
            <p className="font-semibold text-white text-[16px] mb-4">Sri Lanka Office</p>
            <p>No. 10, Palm Grove,<br/>
            Colombo 03, Sri Lanka</p>
          </div>

          {/* Email */}
          <p className="text-sm mb-2">info@heartlandtrading.ae</p>

          {/* Phone */}
          <p className="text-sm mb-2">+971 4 265 9072</p>

          {/* Inquire Now Button */}
          <button className="text-sm underline mb-8 transition-all duration-300 ease-out hover:scale-105 hover:text-[#D11417] hover:shadow-[0_8px_16px_rgba(209,20,23,0.2)] hover:-translate-y-1 transform-gpu">
            Inquire Now
          </button>

          {/* Follow Us Section */}
          <div className="mb-6">
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex items-center gap-4 mb-6">
              <a
                href="https://www.facebook.com/p/Heartland-General-Trading-Co-LLC-61556223026571/?_rdc=2&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300 ease-out hover:scale-110 hover:-translate-y-1"
              >
                <FaFacebookF className="text-white" size={10} />
              </a>

              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300 ease-out hover:scale-110 hover:-translate-y-1"
              >
                <FaTwitter className="text-white" size={10} />
              </a> */}

              <a
                href="https://www.instagram.com/heartlandgeneral/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300 ease-out hover:scale-110 hover:-translate-y-1"
              >
                <FaInstagram className="text-white" size={10} />
              </a>

               {/* <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300 ease-out hover:scale-110 hover:-translate-y-1"
              >
                <FaYoutube className="text-white" size={10} />
              </a> */}
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-white text-left mb-4">
            © 2025 Heartland General Trading FZE. <br/>All Rights Reserved.
          </p>

          {/* Terms Privacy Cookies */}
          <div className="flex justify-start gap-6 text-sm text-white">
            <a href="#" className="hover:text-[#D11417] transition-colors duration-300">Terms</a>
            <a href="#" className="hover:text-[#D11417] transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-[#D11417] transition-colors duration-300">Cookies</a>
          </div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 border-b border-gray-700 pb-8 md:pb-10">

            {/* LEFT SECTION */}
            <div className="md:col-span-2">
              <h3 className="text-lg md:text-xl font-semibold mb-4">Stay Connected With Heartland!</h3>

              <div className="flex items-center justify-between mb-4 cursor-pointer w-full lg:w-fit">
                <p className="text-sm break-all sm:break-normal">info@heartlandtrading.ae</p>
                <span className="text-2xl md:text-4xl lg:ml-auto shrink-0">⭧</span>
              </div>
              <div className="w-full lg:w-[600px] h-px bg-gray-600 mb-6 md:mb-7"></div>

              <p className="text-sm text-white leading-7 md:leading-8 mb-4 w-full lg:w-[570px]">
                Bringing the authentic flavors of Sri Lanka to the UAE, Heartland General Trading Co LLC is dedicated to quality, community impact, and supporting local farmers through ethical and sustainable trade.
              </p>

              <div className="flex gap-4 md:gap-6 text-sm mt-4 cursor-pointer">
                <a href="https://web.facebook.com/HeartlandGeneralTrading">Facebook</a>
                <a href="https://www.instagram.com/heartlandgeneral/">Instagram</a>
                <a href="https://www.linkedin.com/company/heartland-general-trading-co-llc-dubai/?viewAsMember=true">LinkedIn</a>
              </div>
            </div>

            {/* RIGHT 3 COLUMNS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:col-span-3 gap-8 lg:gap-10 lg:flex lg:justify-center lg:items-center">

              <div className="md:row-span-2">
                <h4 className="font-semibold mb-4 lg:-mt-5">Quick Link</h4>
                <ul className="space-y-5 lg:space-y-5 text-sm text-gray-300">
                  <li><a href="/About" className="hover:text-[#D11417] transition-colors duration-300">About Us</a></li>
                  <li><a href="/Product" className="hover:text-[#D11417] transition-colors duration-300">Our Products</a></li>
                  <li><a href="/CSR" className="hover:text-[#D11417] transition-colors duration-300">CSR Initiatives</a></li>
                  <li><a href="/About" className="hover:text-[#D11417] transition-colors duration-300">Careers</a></li>
                  <li><a href="/Contact" className="hover:text-[#D11417] transition-colors duration-300">Contact Us</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 lg:-mt-24">Information</h4>
                <ul className="space-y-3 lg:space-y-5 text-sm text-gray-300">
                  <li><a href="/FAQ" className="hover:text-[#D11417] transition-colors duration-300">FAQ</a></li>
                  <li><a href="#" className="hover:text-[#D11417] transition-colors duration-300">Blog</a></li>
                  <li><a href="#" className="hover:text-[#D11417] transition-colors duration-300">News</a></li>
                </ul>
              </div>

              <div className="lg:-mr-44">
                <h4 className="font-bold text-lg lg:text-xl mb-4">Contact Us</h4>
                <p className="text-sm text-gray-300 leading-6 mb-4">
                  <span className="font-semibold">Corporate Office</span><br/>
                  Heartland General Trading FZE<br/>
                  Warehouse No. 18, Industrial Area 3,<br/>
                  Al Qusais, Dubai, United Arab Emirates
                </p>

                <p className="text-sm text-gray-300 leading-6 mb-4">
                  <span className="font-semibold">Sri Lanka Office</span><br/>
                  No. 10, Palm Grove,<br/>
                  Colombo 03, Sri Lanka
                </p>

                <p className="text-sm mb-1">info@heartlandtrading.ae</p>
                <p className="text-sm mb-4">+971 4 265 9072</p>
                <button className="text-sm underline transition-all duration-300 ease-out hover:scale-105 hover:text-[#D11417]  hover:-translate-y-1 transform-gpu">Inquire Now</button>
              </div>

            </div>

          </div>

          {/* BOTTOM BAR */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 gap-4 md:gap-0 text-sm text-gray-400">
            <p className="text-center md:text-left">© 2025 Heartland General Trading FZE. All Rights Reserved.</p>

            <div className="flex gap-4 md:gap-6">
              <a href="#" className="hover:text-[#D11417] transition-colors duration-300">Terms</a>
              <a href="#" className="hover:text-[#D11417] transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-[#D11417] transition-colors duration-300">Cookies</a>
            </div>

            <div className="flex items-left gap-3 md:gap-4 md:mr-48">
              <a
                href="https://web.facebook.com/HeartlandGeneralTrading"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300 ease-out hover:scale-110 hover:-translate-y-1"
              >
                <FaFacebookF className="text-white" size={12} />
              </a>

              <a
                href="https://www.instagram.com/heartlandgeneral/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300 ease-out hover:scale-110 hover:-translate-y-1"
              >
                <FaInstagram className="text-white" size={12} />
              </a>

              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300 ease-out hover:scale-110 hover:-translate-y-1"
              >
                <FaTwitter className="text-white" size={10} />
              </a> */}

              

               {/*<a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300 ease-out hover:scale-110 hover:-translate-y-1"
              >
                <FaYoutube className="text-white" size={10} />
              </a>*/}
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
