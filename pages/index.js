import About from "@/components/About";
import Contact from "@/components/Contact";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SSA | Full Stack Developer</title>
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
