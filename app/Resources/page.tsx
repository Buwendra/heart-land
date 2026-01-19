import Navbar from '@/components/Navbar';
import ResourcesFooter from '@/components/resourcesFooter';
import BlogAndNews from '@/components/blogAndNews';
import SuccessStory from '@/components/successStory';
import LatestNews from '@/components/latestNews';
import BlogCards from '@/components/blogCards';


export default function Resources() {
  return (
    <>
    <BlogAndNews />
    <SuccessStory />
    <LatestNews />
    <BlogCards />
    </ >

    
  );
}