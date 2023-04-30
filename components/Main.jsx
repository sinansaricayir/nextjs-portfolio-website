import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="">
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let`s build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I`m <span className="text-[#5651e5]">Sinan</span>
          </h1>
          <h1 className="py-2 text-gray-700 animate-pulse">A Full Stack Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Software is more than just a profession for me; it is an endless
            curiosity and passion.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
