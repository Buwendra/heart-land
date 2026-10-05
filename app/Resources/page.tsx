import type { Metadata } from "next";
import BlogAndNews from '@/components/blogAndNews';
import CommunityPillar from '@/components/CommunityPillar';
import SchoolProfessionalities from '@/components/SchoolProfessionalities';
import HeartlandB2BNetwork from '@/components/Heartlandb2bNetwork';

export const metadata: Metadata = {
  title: "Resources",
  description: "Latest news, articles and resources from Heartland General Trading. Stay updated on Sri Lankan food trends and industry insights.",
};

export default function Resources() {
  return (
    <>
    <BlogAndNews />
    {/* <SuccessStory /> */}
    {/* <LatestNews />
    <BlogCards /> */}
    <CommunityPillar/>
    <SchoolProfessionalities/>
    {/* <BrandsDistributionStrength /> */}
    <HeartlandB2BNetwork/>
    </ >

    
  );
}