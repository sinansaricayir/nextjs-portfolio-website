import Image from "next/image";
import scrapingImage from "../public/assets/projects/scraping.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const scraping = () => {
  return (
    <>
      <Head>
        <title>Web Scraping Project</title>
      </Head>
      <div className="w-full">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
          <Image
            src={scrapingImage}
            layout="fill"
            objectFit="cover"
            className="absolute"
            alt=""
          />
          <div className="absolute z-10 top-[70%] max-w-[1240px] w-full left-[50%] right-[50% translate-x-[-50%] translate-y-[-50%] text-white">
            <h2 className="py-2">Web Scraping Project</h2>
            <h3>Node.js | Puppeteer | React.js</h3>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p className="py-4">
              This project aims to collect the name, author, publisher, official
              and current price information of the books by scraping data from
              the online book sites Kitapsepeti.com and Kitapyurdu.com. Node.js
              is used for this process and the Puppeteer library is an ideal
              choice for data collection.
            </p>
            <p>
              In order to present a modern design to the project, the front side
              was created using React.js and a responsive structure compatible
              with devices was created. On the back, popular technologies such
              as Node.js, Puppeteer and Express.js are used for data collection.
              In this way, data collection from web pages is carried out quickly
              and securely.
            </p>
            <p className="py-4">
              The collected data includes book title, author, publisher,
              official and current price information, and this data is stored in
              the MongoDB database. By using the API, data can be viewed by
              accessing the React.js interface in the frontend. In addition,
              thanks to the search section on the page, it is also possible to
              search by book title, author or publisher name.
            </p>
            {/* <button className="px-8 py-2 mt-4 mr-8">
            <Link href="https://ssa-pos-application.onrender.com">Demo</Link>
          </button> */}
            <button className="px-8 py-2 mt-4">
              <Link href="https://github.com/sinansaricayir/web-scraping-nodejs-reactjs">
                Code
              </Link>
            </button>
          </div>
          <div className="col-span-4 md:col-span-1 shadoow-xl shadow-gray-400 rounded-xl p-4">
            <div className="p-2">
              <p className="text-center font-bold mb-2 text-xl">
                {" "}
                Technologies
              </p>
              <div className="grid md:grid-cols-1  grid-cols-3">
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Html
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Css
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  JavaScript
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  React.js
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Node.js
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Express.js
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  MongoDB
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Tailwind CSS
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Puppeteer
                </p>
              </div>
            </div>
          </div>
          <Link href="/" className="underline animate-pulse">
            Previous Page
          </Link>
        </div>
      </div>
    </>
  );
};

export default scraping;
