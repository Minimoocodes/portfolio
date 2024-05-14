import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = ({ aboutRef, skillRef, projectsRef, scrollToSection }) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto p-3">
      <h1 className="w-full text-3xl font-bold">JAEMIN SHIM</h1>
      <ul className="hidden md:flex">
        <li className="p-4 transition duration-0 hover:duration-150 hover:underline decoration-2 decoration-sky-500">
          HOME
        </li>
        <li
          className="p-4 hover:underline decoration-2 decoration-sky-500"
          onClick={() => scrollToSection(aboutRef)}
        >
          ABOUT
        </li>
        <li
          className="p-4 hover:underline decoration-2 decoration-sky-500 "
          onClick={() => scrollToSection(skillRef)}
        >
          SKILL
        </li>
        <li
          className="p-4 hover:underline decoration-2 decoration-sky-500 "
          onClick={() => scrollToSection(projectsRef)}
        >
          PROJECTS
        </li>
      </ul>
      <div onClick={handleNav} className="fixed top-10 right-5 block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[90%] bg-white h-full border-r border-r-gray-900 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul className="pt-24 uppercase p-4">
          <li className="p-4 border-b border-gray-300">HOME</li>
          <a href="#about">
            <li className="p-4 border-b border-gray-300">ABOUT</li>
          </a>
          <a href="#skill">
            <li className="p-4 border-b border-gray-300">SKILL</li>
          </a>
          <a href="#projects">
            <li className="p-4 border-b border-gray-300">PROJECTS</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
