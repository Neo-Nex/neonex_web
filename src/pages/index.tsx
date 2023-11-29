import Image from "next/image";
import { Inter } from "next/font/google";
import styled from "@emotion/styled";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="p-9 max-w-md relative z-[1] left-[1%] bottom-[1%]">
      <p className=" text-5xl  italic text-left text-white animated-gradient-text text-opacity-0 ">
      NeoNex stands as a trailblazing force in healthcare, 
      leveraging Generative AI to empower professionals with seamless
      access to an extensive knowledge base for swift, informed decision-making.
  
      </p>
    </div>
  );
}
