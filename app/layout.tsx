import type { Metadata } from "next";
import { Open_Sans, David_Libre } from "next/font/google";
import "./globals.css";
import FadeTransition from "../components/FadeTransition";
import Navbar from "../components/Navbar";
import Footer from "@/components/footer";
import { NavigationProvider } from "@/contexts/NavigationContext";

// Default font  
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Secondary font (for headings only)
const davidLibre = David_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-david-libre", // this creates a CSS variable
});

export const metadata: Metadata = {
  title: "Heart Land",
  description: "Discover authentic Sri Lankan goods in the UAE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${openSans.className} ${davidLibre.variable}`}>
      <body>
        <NavigationProvider>
          <Navbar />
          <FadeTransition>
            {children}
          </FadeTransition>
          <Footer/>
        </NavigationProvider>
      </body>
    </html>
  );
}
