import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Github } from "../images/github.svg";
import profileImage from "../images/profile.jpg";

const NavBar = () => {
  return (
    <div className="sm:text-lg flex items-center md:justify-center justify-around p-4 font-sans text-white md:w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Link to="/">
        <div className="flex md:mr-4">
          <div className="p-[.2rem] m-auto bg-gradient-to-tl from-purple-700 to-rose-400 rounded-full">
            <img
              className=" w-10 h-10 rounded-full"
              src={profileImage}
              alt="img1"
            />
          </div>
        </div>
      </Link>
      <Link to="/about">
        <div className="md:mx-4  font-bold tracking-wide hover:border-b-2 hover:border-white-500 hover:mt-1">
          About
        </div>
      </Link>
      <Link to="/experience">
        <div className="md:mx-4 font-bold tracking-wide  hover:border-b-2 hover:border-white-500 hover:mt-1">
          Experience
        </div>
      </Link>
      <Link to="/projects">
        <div className="md:mx-4 font-bold tracking-wide  hover:border-b-2 hover:border-white-500 hover:mt-1">
          Projects
        </div>
      </Link>
      <a href="http://github.com" target="_blank" rel="noreferrer">
        <Github className="w-8 text-white-600 mx-auto  md:mx-4 hover:text-green-300" />
      </a>

      <Outlet />
    </div>
  );
};

export default NavBar;
