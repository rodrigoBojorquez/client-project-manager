import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFolderOpen, faUsers, faToolbox, faUserFriends } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Aquí deberías tener la lógica para verificar si el usuario ha iniciado sesión
  // y actualizar el estado de isLoggedIn en consecuencia.

  if (!isLoggedIn) {
    // Si el usuario no ha iniciado sesión, no renderizar la barra de navegación.
    return null;
  }

  return (
    <nav className="bg-green-800 h-screen w-64 fixed top-0 left-0 flex flex-col text-white p-4">
      <div className="font-bold text-lg mb-4 flex items-center ">Nombre Empresa/Logo</div>
      <ul className="flex flex-col space-y-6">
        <li className="flex items-center text-center mb-0.5 hover:bg-teal-500 transition duration-300 ease-in-out cursor-pointer">
          <FontAwesomeIcon icon={faHome} className="ml-6" />
          Dashboard
        </li>
        <li className="flex items-center text-center mb-3 hover:bg-teal-500 transition duration-300 ease-in-out cursor-pointer">
          <FontAwesomeIcon icon={faFolderOpen} className="ml-6" />
          Proyectos
        </li>
        <li className="flex items-center text-center mb-3 hover:bg-teal-500 transition duration-300 ease-in-out cursor-pointer">
          <FontAwesomeIcon icon={faUsers} className="ml-6" />
          Equipos
        </li>
        <li className="flex items-center text-center mb-3 hover:bg-teal-500 transition duration-300 ease-in-out cursor-pointer">
          <FontAwesomeIcon icon={faToolbox} className="ml-6" />
          Materiales
        </li>
        <li className="flex items-center text-center mb-3 hover:bg-teal-500 transition duration-300 ease-in-out cursor-pointer">
          <FontAwesomeIcon icon={faUserFriends} className="ml-6" />
          Empleados
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

