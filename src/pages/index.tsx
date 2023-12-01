import Image from "next/image";
import { Inter } from "next/font/google";
import styled from "@emotion/styled";
import handleSubscribe from "@/subscription";
import handleEmailChange from "@/subscription";
import Dialog from '@mui/material/Dialog';
import Card from '@mui/material/Card';
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        style={{ height: "calc(100vh - 90px)" }}
        className="p-10 pl-[100px] relative w-full flex flex-col justify-between items-center"
      >
        <div className="">
          <p className=" text-[60px] italic animate-pulse text-white">
            Building the future with Generative AI
          </p>
          {/* <p className=" text-xl italic text-left text-white w-[700px] ">
            NeoNex stands as a trailblazing force in healthcare, leveraging
            Generative AI to empower professionals with seamless access to an
            extensive knowledge base for swift and informed decision-making.
          </p> */}
        </div>
        <div className="mb-[2rem]">
          <p className=" text-2xl italic text-justify text-white  w-[580px] ">
            NeoNex stands as a trailblazing force in healthcare, leveraging
            Generative AI to empower professionals with seamless access to an
            extensive knowledge base for swift and informed decision-making.
          </p>
          <div className="text-center mt-[2rem]">
            <input
              autoCapitalize="off"
              autoComplete="off"
              spellCheck="false"
              placeholder="email@company.com"
              className="h-14 w-full sm:w-96 animate-pulse bold  mx-auto rounded-lg border border-slate-grey bg-black/30 px-4 font-display font-light text-white backdrop-blur-lg backdrop-filter transition-all placeholder:text-slate-grey hover:border-white focus:border-white focus:outline-none focus:ring-2 focus:ring-steel-pink sm:w-96"
              name="email"

            />
            <button
              onClick={handleClickOpen}
              className="group bg-[#009999] relative mt-5 h-14 w-full overflow-hidden rounded-lg p-2.5 px-8 font-display text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-steel-pink hover:to-steel-pink sm:ml-5 sm:mt-0 sm:w-fit"
            >
              <span className="animated-gradient-text ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40"></span>
              Learn More
            </button>
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Card className="w-[450px] h-[150px] flex flex-col justify-center">
          <p className="text-center italic animated-gradient-text text-[20px]">"We'll loop back to you in the time it takes for a computer to process a 
          gazillion calculations Hang in there, human! 🤖"</p>
          {/* <p className="text-center italic animate-bounce text-[20px]">Thanks for your response</p> */}
        </Card>
      </Dialog>
      {/* <div className="p-2 relative z-[1] w-full">
          <p className=" text-xl  italic text-left text-white text-opacity-50 ">
            NeoNex stands as a trailblazing force in healthcare, leveraging
            Generative AI to empower professionals with seamless access to an
            extensive knowledge base for swift and informed decision-making.
          </p>
        </div> */}
      {/* <div>
        <div className="flex items-center justify-center">
          <input
            autoCapitalize="off"
            autoComplete="off"
            spellCheck="false"
            placeholder="name@company.com"
            className="h-14 w-full sm:w-96 mx-auto rounded-lg border border-slate-grey bg-black/30 px-4 font-display font-light text-white backdrop-blur-lg backdrop-filter transition-all placeholder:text-slate-grey hover:border-white focus:border-white focus:outline-none focus:ring-2 focus:ring-steel-pink sm:w-96"
            name="email"
            value=""
          />
        </div>
      </div> */}
    </>
  );
}
