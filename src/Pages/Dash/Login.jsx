import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover" style={{ backgroundImage: 'url()' }}>
    <div className="w-1/3 p-8 ml-auto bg-white bg-opacity-100">
      <h2 className="text-2xl font-bold mb-4">Acceder</h2>
      <p>Si no tienes una cuenta registrada</p>
      <p>contacta con el área de sistemas</p>
      <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2 flex items-center"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-b focus:outline-none focus:border-blue-500 w-full py-2 px-3"
              placeholder="Correo Electrónico"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2 flex items-center"
            >
              <FontAwesomeIcon icon={faLock} className="mr-2" />
              Contraseña
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="border-b focus:outline-none focus:border-blue-500 w-full py-2 px-3 pr-10"
              placeholder="Contraseña"
              required
            />
            <button
              type="button"
              className="absolute top-0 right-0 h-full px-3 flex items-center"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
