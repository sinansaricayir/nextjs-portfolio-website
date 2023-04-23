import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
        <Image src="/assets/logo-color.svg" alt="" width={70} height={60} />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden">
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
