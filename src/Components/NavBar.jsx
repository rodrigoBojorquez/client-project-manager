import { Link, useLocation } from "react-router-dom";

import { VscHome } from "react-icons/vsc";
import { SlFolder } from "react-icons/sl";
import { RiTeamLine } from "react-icons/ri";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
import GlobalContext from "../store/context";
import { useContext } from "react";

function NavBar() {
  const location = useLocation();
  const { userData } = useContext(GlobalContext);
  // console.log(userData)

  return (
    <nav className="bg-[#038554] h-screen w-[300px] flex flex-col text-white font-Nunito">
      <div className=" border-b h-[85px] text-lg flex items-center mb-5">
        <h1 className="text-center w-full italic font-semibold">
          Project manager
        </h1>
      </div>

      <ul className="flex flex-1 flex-col items-center space-y-4 text-[18px] font-semibold">
        {userData.role_name == "administrator" && (
          <Link to="/dashboard">
            <li
              className={`flex items-center gap-5 w-[250px] h-[50px] px-5 rounded-md text-[#CCC] ${
                location.pathname === "/dashboard"
                  ? "text-white bg-[#03BB85]"
                  : "hover:text-white hover:bg-[#03BB85] focus:text-white focus:bg-[#03BB85] focus transition duration-300 ease-in-out"
              }`}
            >
              <VscHome className="text-[26px]" />
              <h2>Dashboard</h2>
            </li>
          </Link>
        )}
        {(userData.role_name == "administrator" ||
          userData.role_name == "team leader" ||
          userData.role_name == "employee") && (
            <Link to="/projects">
              <li
                className={`flex items-center gap-5 w-[250px] h-[50px] px-5 rounded-md text-[#CCC] mx-6 ${
                  location.pathname === "/projects"
                    ? "text-white bg-[#03BB85]"
                    : "hover:text-white hover:bg-[#03BB85] focus:text-white focus:bg-[#03BB85] focus transition duration-300 ease-in-out"
                }`}
              >
                <SlFolder className="text-[26px]" />
                <h2>Proyectos</h2>
              </li>
            </Link>
          )}
        {(userData.role_name == "administrator" ||
          userData.role_name == "team leader" ||
          userData.role_name == "employee") && (
            <Link to="/teams">
              <li
                className={`flex items-center gap-5 w-[250px] h-[50px] px-5 rounded-md text-[#CCC] ${
                  location.pathname === "/teams"
                    ? "text-white bg-[#03BB85]"
                    : "hover:text-white hover:bg-[#03BB85] focus:text-white focus:bg-[#03BB85] focus transition duration-300 ease-in-out"
                }`}
              >
                <RiTeamLine className="text-[26px]" />
                <h2>Equipos</h2>
              </li>
            </Link>
          )}

        {(userData.role_name == "administrator" ||
          userData.role_name == "warehouse admin") && (
            <Link to="/materials">
              <li
                className={`flex items-center gap-5 w-[250px] h-[50px] px-5 rounded-md text-[#CCC] ${
                  location.pathname === "/materials"
                    ? "text-white bg-[#03BB85]"
                    : "hover:text-white hover:bg-[#03BB85] focus:text-white focus:bg-[#03BB85] focus transition duration-300 ease-in-out"
                }`}
              >
                <HiOutlineArchiveBox className="text-[26px]" />
                <h2>Materiales</h2>
              </li>
            </Link>
          )}

        {(userData.role_name == "administrator" ||
          userData.role_name == "registrators") && (
            <Link to="/employees">
              <li
                className={`flex items-center gap-5 w-[250px] h-[50px] px-5 rounded-md text-[#CCC] ${
                  location.pathname === "/employees"
                    ? "text-white bg-[#03BB85]"
                    : "hover:text-white hover:bg-[#03BB85] focus:text-white focus:bg-[#03BB85] focus transition duration-300 ease-in-out"
                }`}
              >
                <GoPeople className="text-[26px]" />
                <h2>Empleados</h2>
              </li>
            </Link>
          )}
      </ul>
      <div className="flex text-xl gap-3 items-center m-5">
        <FaRegUserCircle className="text-3xl" />
        <h2 className="font-semibold">{userData.username}</h2>
      </div>
    </nav>
  );
}

export default NavBar;
