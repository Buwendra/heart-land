import Image from 'next/image';

export default function CommunityPillar() {
  return (
    <section className="w-full  mx-auto px-4 sm:px-6 lg:px-[100px] py-4 md:py-6 lg:py-8">
      {/* Header Section */}
      <div className="mb-8 md:mb-12">
        <div className="flex items-center gap-2.5 mb-3">
          <span 
            className="text-sm font-roboto font-normal md:text-lg text-black"
            
          >
            Events & Sponsorships
          </span>
          <span className="w-[80px] md:w-[100px] h-[1px] bg-black" />
        </div>
        <h2 
          className="text-3xl font-nunito font-semibold md:text-[40px] mb-10 leading-[140%] text-black"
        
        >
          A Pillar of the Community
        </h2>
        <p 
          className="text-lg font-nunito font-light md:text-2xl leading-[130%] text-black max-w-[1200px]"
          
        >
          At Heartland General Trading, we believe true success means making a difference.<br className="hidden sm:block"/> 
          Our CSR efforts support Sri Lankan farmers, small businesses, and communities, promoting sustainable<br className="hidden sm:block"/>
          growth that benefits everyone.
        </p>
      </div>

      {/* Main Content Card */}
      <div className="w-full max-w-[1200px] mx-auto bg-white rounded-[20px] lg:rounded-[30px] border border-[#E0E0E0] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
          {/* Image Section */}
          <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-auto overflow-hidden rounded-[20px]">
            <Image
              src="/Handshake Image.png"
              alt="Diplomatic Handshake"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="p-5 sm:p-6 md:p-10 lg:p-12 flex flex-col justify-center bg-white">
            <h3 className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] mb-3 md:mb-5 leading-[130%] text-black font-nunito font-bold">
              Diplomatic & Institutional Partnerships
            </h3>

            <p className="text-sm sm:text-base md:text-lg lg:text-[20px] leading-[150%] text-black mb-4 md:mb-6 font-roboto">
              We maintain a close and ongoing collaboration with the key institutions that represent our nation abroad.
              Heartland is a proud partner of:
            </p>

            {/* Partnership List */}
            <ul className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 mb-4 md:mb-5 font-roboto">
              <li className="flex items-start text-sm sm:text-base md:text-lg lg:text-[20px] leading-[150%] text-black">
                <span className="mr-2 md:mr-3 text-black">•</span>
                <span>The Embassy of Sri Lanka (Abu Dhabi)</span>
              </li>
              <li className="flex items-start text-sm sm:text-base md:text-lg lg:text-[20px] leading-[150%] text-black">
                <span className="mr-2 md:mr-3 text-black">•</span>
                <span>The Consulate General of Sri Lanka (Dubai)</span>
              </li>
              <li className="flex items-start text-sm sm:text-base md:text-lg lg:text-[20px] leading-[150%] text-black">
                <span className="mr-2 md:mr-3 text-black">•</span>
                <span>The Sri Lanka Business Council (UAE)</span>
              </li>
            </ul>

            <p className="text-sm sm:text-base md:text-lg lg:text-[20px] leading-[150%] text-black font-roboto">
              From sponsoring the Sri Lankan Independence Day celebrations to the &quot;Sri Lanka Beyond Your Dreams&quot; initiative,
              we are dedicated to supporting the vision of our diplomatic offices. We were also honored to be part of the
              official delegation at the International Industry Expo &apos;24 in Sri Lanka and to sponsor the inaugural Iftar
              program organized by the Sri Lanka Business Council.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}