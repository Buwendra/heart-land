import CsrIntro from '@/components/cSRIntro';
import CsrShowcase from '@/components/csrShowcase';
import OurProjects from '@/components/ourProjects';
import PurchaseDifference from '@/components/Purchasedifference';
import WhatPeopleSays from '@/components/whatPeopleSays';

export default function csr() {
  return (
    <>
    <CsrShowcase />
    <OurProjects />
    <CsrIntro />
    <WhatPeopleSays />
    <PurchaseDifference />
    </ >
  );
}