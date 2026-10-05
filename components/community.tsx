"use client";
import Image from "next/image";
import Link from "next/link";
export default function CommunitySection() {

  return (
    <>
      {/* Desktop Layout */}
      <section className="hidden md:flex w-full justify-start pb-12 sm:pb-16 md:pb-25 lg:pb-28 xl:pb-32 2xl:pb-36 bg-white">
        <div className="flex flex-row gap-0 items-center w-full">
          {/* LEFT SIDE IMAGE */}
          <div className="relative w-[50%] lg:w-[55%] xl:w-[806px] 2xl:w-[900px] h-[350px] lg:h-[380px] xl:h-[450px] 2xl:h-[520px] shrink-0">
            <Image
              src="/community-hero.png"
              alt="Community"
              fill
              sizes="(max-width: 1024px) 50vw, (max-width: 1536px) 806px, 900px"
              className="object-cover rounded-tr-[400px] rounded-br-[400px]"
              priority
            />
          </div>

          {/* TEXT */}
          <div className="px-4 lg:px-6 xl:px-10 2xl:px-14 ml-0 lg:ml-1 xl:ml-4 2xl:ml-6 pt-12 lg:pt-16 xl:pt-20 2xl:pt-24">
            <h2
              className={`font-nunito text-[36px] lg:text-[42px] xl:text-[52px] 2xl:text-[58px] font-bold text-black mb-6 lg:mb-8 xl:mb-10 leading-tight`}
            >
              Be part of our journey
            </h2>

            <p className="text-base lg:text-lg xl:text-[22px] 2xl:text-[26px] text-[#000000] font-openSans font-normal leading-relaxed xl:leading-8 2xl:leading-9 mb-12 xl:mb-14 2xl:mb-16">
              At Heartland, we believe in growing together. Our success is built
              on the hard work of local farmers and female entrepreneurs in Sri
              Lanka, and we are deeply committed to ensuring they thrive
              alongside us. By sourcing directly from these communities, we
              provide sustainable livelihoods and foster economic growth across
              the island.
            </p>

            <Link href="/Contact">
              <button className="font-openSans cursor-pointer rounded-[20px] border-[3px] border-[#E60012] py-2 xl:py-3 2xl:py-4 px-3 xl:px-5 2xl:px-6 gap-[15px] text-[#E60012] text-lg lg:text-2xl xl:text-[26px] 2xl:text-[28px] font-bold transition-all duration-300 ease-out hover:bg-[#E60012] hover:text-white hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1">
                Reach out to us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="md:hidden w-full py-8 bg-[#F5F5F5]">
        <div className="flex flex-col items-center text-center px-6">
          {/* Heading */}
          <h2
            className={`font-nunito text-2xl font-bold text-black mb-4 leading-tight`}
          >
            Be part of our journey
          </h2>

          {/* Description */}
          <p className="text-sm text-[#000000] font-openSans font-normal leading-relaxed mb-6 max-w-md">
            At Heartland, we believe in growing together. Our success is built
            on the hard work of local farmers and female entrepreneurs in Sri
            Lanka, and we are deeply committed to ensuring they thrive alongside
            us. By sourcing directly from these communities, we provide
            sustainable livelihoods and foster economic growth across the
            island.
          </p>

          {/* Button */}
          <Link href="/Contact">
            <button className="font-openSans cursor-pointer rounded-[20px] border-[3px] border-[#E60012] py-2.5 px-8 gap-[15px] text-[#E60012] bg-white text-sm font-bold transition-all duration-300 ease-out hover:bg-[#E60012] hover:text-white hover:shadow-lg">
              Reach out to us
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
