import Image from "next/image";
import foodImage from "../public/assets/projects/food.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const food = () => {
  return (
    <>
      <Head>
        <title>Food Ordering Website</title>
      </Head>
      <div className="w-full">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
          <Image
            src={foodImage}
            layout="fill"
            objectFit="cover"
            className="absolute"
            alt=""
          />
          <div className="absolute z-10 top-[70%] max-w-[1240px] w-full left-[50%] right-[50% translate-x-[-50%] translate-y-[-50%] text-white">
            <h2 className="py-2">Food Ordering Website</h2>
            <h3>Next.js</h3>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p className="py-4">
              This project is a modern web application for restaurant food
              orders management. Several technologies that are popular today
              were used behind the project. First, this project was developed
              using React. React is an open source JavaScript library and a tool
              for building user interfaces. React has a powerful component-based
              structure, enabling it to write modular and reusable code. Also,
              Next.js framework is used in this project. Next.js is a framework
              for developing React-based web applications. This framework has a
              structure that combines the entire web application consisting of
              frontend and backend in one place.
            </p>
            <p>
              Tailwind CSS was used for the design of the project. Tailwind CSS
              allows adding styling and design features without the need to
              write CSS codes. In this way, web designers and developers can
              progress quickly and efficiently in their work. Also, libraries
              such as Redux and Redux-Toolkit were used in this project. Redux
              is a library that facilitates data management in React
              applications. This library stores and manages the data used in the
              application in a central place, making the management of the data
              easier and more organized. Redux-Toolkit is a library that makes
              Redux even easier to use.
            </p>
            <p className="py-4">
              Finally, Next-Auth was used in the project. Next-Auth is a library
              that facilitates authentication processes in Next.js-based
              applications. This library supports different authentication
              providers (Google, Facebook, GitHub, etc.) and makes it easy for
              users to register and login to the web application. The restaurant
              ordering project, created by the combination of all these
              technologies, offers users an easy and fast ordering experience.
              Users can view the menu, add the products to the cart and complete
              the payment process securely. In addition, administrators can
              manage orders, update the menu and perform other actions via the
              web application.
            </p>
            {/* <button className="px-8 py-2 mt-4 mr-8">
            <Link href="https://ssa-pos-application.onrender.com">Demo</Link>
          </button> */}
            <button className="px-8 py-2 mt-4">
              <Link href="https://next-food-ordering-ssa.vercel.app">
                Demo
              </Link>
            </button>
            <button className="px-8 py-2 mt-4 ml-4">
              <Link href="https://github.com/sinansaricayir/nextjs-food-ordering">
                Code
              </Link>
            </button>
          </div>
          <div className="col-span-4 md:col-span-1 shadoow-xl shadow-gray-400 rounded-xl p-4">
            <div className="p-2">
              <p className="text-center font-bold mb-2 text-xl">
                
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

export default food;
