import type { Metadata } from "next";
import Faq from "@/components/frequentlyAskedQuestions";
import HeroBanner from "@/components/makeThingsHappen";
import Partners from "@/components/yourTrustedPartners";
import HomeHero from "@/components/homeHero";
import Blog from "@/components/blog";

export const metadata: Metadata = {
  title: "Welcome",
  description:
    "Welcome to Heartland General Trading - bringing authentic Sri Lankan flavors to the UAE for over 25 years. Quality products, trusted partnerships.",
};

export default function HomePagee() {
  return (
    <>
      {/* for build*/}
      <HomeHero />
      <Partners />
      <Blog />
      {/* <Initiative /> */}
      {/* <Testimonials />  - hide for now */} {/* test */}
      <Faq />
      <HeroBanner />
    </>
  );
}
