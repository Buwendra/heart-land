import Faq from '@/components/frequentlyAskedQuestions';
import Initiative from '@/components/joinOurInitiatives';
import HeroBanner from '@/components/makeThingsHappen';
import Testimonials from '@/components/ourHappyCustomers';
import Partners from '@/components/yourTrustedPartners';
import HomeHero from '@/components/homeHero';
import Blog from '@/components/blog';


export default function HomePagee() {
  return (
    <>
    <HomeHero />
    <Partners />
    <Blog/>
    <Initiative />
    {/* <Testimonials /> - hide for now */} 
    <Faq />
    <HeroBanner />   
    </>
  );
}