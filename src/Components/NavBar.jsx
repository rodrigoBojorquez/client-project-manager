import { Link } from "react-router-dom";

import { VscHome } from "react-icons/vsc";
import { SlFolder } from "react-icons/sl";
import { RiTeamLine } from "react-icons/ri";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";

function NavBar() {
  return (
    <nav className="bg-[#038554] h-screen w-[300px] flex flex-col text-white font-Nunito">
      <div className=" border-b h-[85px] text-lg flex items-center mb-5">
        <h1>Nombre y logo</h1>
      </div>
      <ul className="flex flex-1 flex-col items-center space-y-4 text-[18px] font-semibold">
        <Link to="/">
          <li className="flex items-center gap-5 w-[250px] h-[50px] px-5 rounded-md text-[#CCC] hover:text-white hover:bg-[#03BB85] focus:text-white focus:bg-[#03BB85] focu transition duration-300 ease-in-out ">
            <VscHome className="text-[26px]" />
            <h2>Dashboard</h2>
          </li>
        </Link>
        <Link to="/proyects">
          <li className="flex items-center gap-5 w-[250px] h-[50px] px-5 rounded-md text-[#CCC] hover:text-white hover:bg-[#03BB85] focus:text-white focus:bg-[#03BB85] focu transition duration-300 ease-in-out ">
            <SlFolder className="text-[26px]" />
            <h2>Proyectos</h2>
          </li>
        </Link>
        <Link to="/teams">
          <li className="flex items-center gap-5 w-[250px] h-[50px] px-5 rounded-md text-[#CCC] hover:text-white hover:bg-[#03BB85] focus:text-white focus:bg-[#03BB85] focu transition duration-300 ease-in-out ">
            <RiTeamLine className="text-[26px]" />
            <h2>Equipos</h2>
          </li>
        </Link>
        <Link to="/materials">
          <li className="flex items-center gap-5 w-[250px] h-[50px] px-5 rounded-md text-[#CCC] hover:text-white hover:bg-[#03BB85] focus:text-white focus:bg-[#03BB85] focu transition duration-300 ease-in-out ">
            <HiOutlineArchiveBox className="text-[26px]" />
            <h2>Materiales</h2>
          </li>
        </Link>
        <Link to="/employees">
          <li className="flex items-center gap-5 w-[250px] h-[50px] px-5 rounded-md text-[#CCC] hover:text-white hover:bg-[#03BB85] focus:text-white focus:bg-[#03BB85] focu transition duration-300 ease-in-out ">
            <GoPeople className="text-[26px]" />
            <h2>Empleados</h2>
          </li>
        </Link>
      </ul>
      <div className="flex text-xl gap-3 items-center m-5">
        <FaRegUserCircle className="text-3xl" />
        <h2 className="font-semibold">Rodrigo Noe</h2>
      </div>
    </nav>
  );
}

export default NavBar;
