import { Open_Sans } from "next/font/google";
import Link from "next/link";
import Image from "next/image";


const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function HaveQ() {
  return (
    <div className=" "> 
  <section
  className={`relative w-full h-[303px] py-10 bg-[#000000] text-white overflow-hidden rounded-tr-[50px] ${openSans.className}`}
>


       <div className="relative z-10 mt-2 items-start text-left">
         

        <h2 className="text-[35px]  ml-52 mt-8 font-bold">
          Still have questions ?
        </h2>

        <p className="text-[15px] max-w-[500px] ml-52 mx-auto mt-3 items-start text-left opacity-90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

     

{/* CTA */}
<Link href="/Contact">
  <button
    className="mt-6 inline-flex items-center ml-52 justify-center px-9 py-2 rounded-full border border-white text-white font-openSans font-semibold text-[15px] leading-4 tracking-[0.43em] transition-colors duration-200"
    style={{ textTransform: "uppercase" }}
  >
    CONTACT US
  </button>
</Link>

<div
              className="absolute right-8 top-60 -translate-y-1/2 pointer-events-none"
              style={{ width: 370, height: 370, marginRight: -60 }}
            >
              <Image
                src="/questionPerson.png"
                alt="question Mark"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>




    </section>
    </div>
  );
}
