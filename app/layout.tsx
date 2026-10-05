import type { Metadata } from "next";
import { Open_Sans, Nunito } from "next/font/google";
import "./globals.css";
import FadeTransition from "../components/FadeTransition";
import Navbar from "../components/Navbar";
import Footer from "@/components/footer";
import { NavigationProvider } from "@/contexts/NavigationContext";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-openSans",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-nunito",
});


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://heartlandtrdng.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Heartland General Trading | Authentic Sri Lankan Products UAE",
    template: "%s | Heartland General Trading",
  },
  description: "Heartland General Trading provides reliable import & export solutions, industrial materials, and authentic Sri Lankan food & consumer goods in the UAE.",
  keywords: ["Sri Lankan products", "UAE import export", "food distribution", "Heartland Trading", "Dubai wholesale", "Ceylon spices UAE"],
  authors: [{ name: "Heartland General Trading Co LLC" }],
  creator: "Heartland General Trading Co LLC",
  publisher: "Heartland General Trading Co LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteUrl,
    title: "Heartland General Trading | Authentic Sri Lankan Products UAE",
    description: "Heartland General Trading provides reliable import & export solutions, industrial materials, and consumer goods sourcing in Dubai.",
    siteName: "Heartland General Trading",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heartland General Trading | Authentic Sri Lankan Products UAE",
    description: "Import & export solutions, wholesale spices, and authentic Sri Lankan goods in Dubai and the UAE.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${openSans.variable} ${nunito.variable}`}>
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
