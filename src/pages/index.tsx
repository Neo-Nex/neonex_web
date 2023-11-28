import Image from "next/image";
import { Inter } from "next/font/google";
import styled from "@emotion/styled";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="p-20 max-w-md rounded-lg shadow-md text-white relative z-[1] ">
      <p className=" text-2xl  italic text-left text-white text-opacity-70 ">
      NeoNex stands as a trailblazing force in healthcare, 
      leveraging Gen AI to empower professionals with seamless
      access to an extensive knowledge base for swift, informed decision-making.
      With domain-trained Language Models, NeoNex transforms healthcare operations,
      ushering in a future where precision and efficiency redefine the standards of patient care.
      </p>
    </div>
  );
}
