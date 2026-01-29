import BlogAndNews from '@/components/blogAndNews';
import SuccessStory from '@/components/successStory';
import CommunityPillar from '@/components/CommunityPillar';
import SchoolProfessionalities from '@/components/SchoolProfessionalities';
import HeartlandB2BNetwork from '@/components/Heartlandb2bNetwork';
import BrandsDistributionStrength from '@/components/brandsDistributionStrength';

export default function Resources() {
  return (
    <>
    <BlogAndNews />
    <SuccessStory />
    {/* <LatestNews />
    <BlogCards /> */}
    <CommunityPillar/>
    <SchoolProfessionalities/>
    <BrandsDistributionStrength />
    <HeartlandB2BNetwork/>
    </ >

    
  );
}