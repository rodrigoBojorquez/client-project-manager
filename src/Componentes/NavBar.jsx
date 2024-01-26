import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,  faFolderOpen, faUsers, faToolbox, faUserFriends
} from '@fortawesome/free-solid-svg-icons';



function NavBar() {
  return (
    <nav className="bg-green-800 h-screen w-64 fixed top-0 left-0 flex flex-col text-white p-4">
      <div className="font-bold text-lg mb-4 flex items-center">  Nombre Empresa/Logo </div>
      <ul className="flex flex-col space-y-2">
      <li className="flex items-center text-center mb-3 hover:bg-teal-500 transition duration-300 ease-in-out">
          <FontAwesomeIcon icon={faHome} className="ml-6" />
          Dashboard
        </li>
        <li className="flex items-center text-center mb-3 hover:bg-teal-500 transition duration-300 ease-in-out">
          <FontAwesomeIcon icon={faFolderOpen} className="ml-6" />
          Proyectos
        </li>
        <li className="flex items-center text-center mb-3 hover:bg-teal-500 transition duration-300 ease-in-out">
          <FontAwesomeIcon icon={faUsers} className="ml-6" />
          Equipos
        </li>
        <li className="flex items-center text-center mb-3 hover:bg-teal-500 transition duration-300 ease-in-out">
          <FontAwesomeIcon icon={faToolbox} className="ml-6" />
          Materiales
        </li>
        <li className="flex items-center text-center mb-3 hover:bg-teal-500 transition duration-300 ease-in-out">
          <FontAwesomeIcon icon={faUserFriends} className="ml-6" />
          Empleados
        </li>
      </ul>
    </nav>
    
   
  );
}

export default NavBar;
