import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SSA | Full Stack Developer</title>
      </Head>
      <Navbar />
      <Main />
    </div>
  );
}
