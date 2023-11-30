import Image from "next/image";
import { Inter } from "next/font/google";
import styled from "@emotion/styled";
import handleSubscribe from "@/subscription";
import handleEmailChange from "@/subscription";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  
    <>
    <div className=" p-2 relative z-[1] left-[1%] w-full mx-auto">
      <p className=" text-2xl text-center italic text-left text-white  ">
        Building the future with Generative AI
      </p>
    </div>
    <div className="p-2 relative z-[1] w-full left-[1%] ">
      <p className=" text-xl  italic text-left text-white text-opacity-50 ">
        NeoNex stands as a trailblazing force in healthcare,
        leveraging Generative AI to empower professionals with seamless
        access to an extensive knowledge base for swift and informed decision-making.
      </p>
    </div><div>
        <div className="flex items-center justify-center h-screen">
          <input
            autoCapitalize="off"
            autoComplete="off"
            spellCheck="false"
            placeholder="name@company.com"
            className="h-14 w-full sm:w-96 mx-auto rounded-lg border border-slate-grey bg-black/30 px-4 font-display font-light text-white backdrop-blur-lg backdrop-filter transition-all placeholder:text-slate-grey hover:border-white focus:border-white focus:outline-none focus:ring-2 focus:ring-steel-pink sm:w-96"
            name="email"
            value="" />
        </div>

      </div></>
  );
}
