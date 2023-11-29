import Layout from "@/layout/layout";
import "@/styles/globals.css";

import "@/test.css";

import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
const ParticleBackground = dynamic(() => import("@/components/particle"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className=" w-full bg-gradient-to-br from-black from-35% via-teal-dark via-50% to-teal-green to-85%"> 
      <video autoPlay muted loop id="myVideo" className="absolute z-[0] left-[%]">
        <source src="/Neo2/nebula.mp4" type="video/mp4" />
      </video>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

