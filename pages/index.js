import About from "@/components/About";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SSA | Full Stack Developer</title>
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
    </div>
  );
}
