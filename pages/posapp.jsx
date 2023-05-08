import Image from "next/image";
import posApp from "../public/assets/projects/pos-app.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const posapp = () => {
  return (
    <>
      <Head>
        <title>Pos Application Project</title>
      </Head>
      <div className="w-full">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
          <Image
            src={posApp}
            layout="fill"
            objectFit="cover"
            className="absolute"
            alt=""
          />
          <div className="absolute z-10 top-[70%] max-w-[1240px] w-full left-[50%] right-[50% translate-x-[-50%] translate-y-[-50%] text-white">
            <h2 className="py-2">Pos Application Project</h2>
            <h3>MERN Stack</h3>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p className="py-4">
              This project is built using MERN (MongoDB, Express.js, React.js,
              Node.js) Stack. Also included are popular and important
              technologies such as Ant Design, Tailwind CSS and Redux-Toolkit.
              MERN Stack is an open source technology stack used to develop web
              applications. This technology stack stores data using the MongoDB
              database, Express.js manages server-side operations with the
              server-side framework, React.js is used for user interface
              development, and Node.js is used to run JavaScript on the
              server-side. Ant Design is a UI framework for user interface
              design. This framework offers customizable components, rich
              graphics, and a set of tools that enhance the user experience.
            </p>
            <p>
              Tailwind CSS is a CSS framework that simplifies the design of web
              applications. This framework allows adding styling and design
              features without the need to write CSS codes.
            </p>
            <p className="py-4">
              Redux-Toolkit is a library that facilitates data management in
              React applications. This library stores and manages the data used
              in the application in a central place, making the management of
              the data easier and more organized. This is how a powerful web
              application can be created using technologies such as MERN Stack,
              Ant Design, Tailwind CSS and Redux-Toolkit.
            </p>
            <button className="px-8 py-2 mt-4 mr-8">
              <Link href="https://ssa-pos-application.onrender.com">Demo</Link>
            </button>
            <button className="px-8 py-2 mt-4">
              <Link href="https://github.com/sinansaricayir/mern-stack-pos-application">
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
                  Redux-Toolkit
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
                  Ant Design
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

export default posapp;
