import Image from "next/image";
import ecommerceImage from "../public/assets/projects/ecommerce.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const ecommerce = () => {
  return (
    <>
      <Head>
        <title>E-Commerce Project</title>
      </Head>
      <div className="w-full">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
          <Image
            src={ecommerceImage}
            layout="fill"
            objectFit="cover"
            className="absolute"
            alt=""
          />
          <div className="absolute z-10 top-[70%] max-w-[1240px] w-full left-[50%] right-[50% translate-x-[-50%] translate-y-[-50%] text-white">
            <h2 className="py-2">E-Commerce Project</h2>
            <h3>Html | Css | Javascript</h3>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p className="py-4">
              This project is a fully responsive e-commerce website project and
              is built using only HTML, CSS and JavaScript. No frameworks or
              libraries were used throughout the project (except glide.js). This
              website project is quite successful in terms of functionality as
              well as design. Thanks to its responsive design, which also works
              seamlessly on mobile devices, users can access the website and
              shop on any device.
            </p>
            <p>
              The glide.js library used in the project allows users to easily
              navigate between products. Thanks to this library, scrolling or
              navigating the products has been made easier and more
              user-friendly. As a fully customizable project, this website
              project can be easily adapted to meet the needs of any e-commerce
              business. The advantage of this project is that it shows that it
              is possible to create a modern website using only HTML, CSS and
              JavaScript.
            </p>
            <button className="px-8 py-2 mt-4 mr-8">
              <Link href="https://commerce-project.netlify.app">Demo</Link>
            </button>
            <button className="px-8 py-2 mt-4">
              <Link href="https://github.com/sinansaricayir/e-commerce-project">
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

export default ecommerce;
