import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

const getRandomBackgroundImage = () => {
  // Lista de URLs de imágenes
  const backgroundImages = [
    "url('https://codersera.com/blog/wp-content/uploads/2019/07/Software-Developer.jpg')",
    "url('https://static.vecteezy.com/system/resources/previews/002/779/548/original/video-meeting-of-people-group-online-meeting-via-video-conference-remote-work-technology-concept-illustration-in-flat-style-vector.jpg')",
    // Agrega más URLs según sea necesario
  ];

  // Selecciona aleatoriamente una imagen de la lista
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  return backgroundImages[randomIndex];
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [backgroundImage, setBackgroundImage] = useState(
    getRandomBackgroundImage()
  );

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación para asegurarse de que la contraseña no sea solo espacios en blanco
    if (password.trim() === "") {
      setError("La contraseña no puede estar vacía");
      return;
    }

    // Aquí podrías realizar la lógica para enviar la solicitud de inicio de sesión
    // Puedes acceder a las variables email y password

    // Reiniciar el error
    setError("");
  };

  // Cambiar el fondo al cargar la página
  useEffect(() => {
    setBackgroundImage(getRandomBackgroundImage());
  }, []);

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{ backgroundImage: backgroundImage, backgroundSize: "cover" }}
    >
      <div className="w-1/3 p-12 h-18 ml-auto bg-white bg-opacity-100">
        <h2 className="text-2xl font-bold mb-4">Acceder</h2>
        <p className="text-2x1 font-bold mb-1 py-2">
          Si no tienes una cuenta registrada
        contacta con el área de sistemas</p>
        <form onSubmit={handleSubmit}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-b focus:outline-none focus:border-blue-500 w-full py-2 px-3 pr-10"
              placeholder="Contraseña"
              required
            />
            <button
              type="button"
              className="absolute top-1/2 right-0 h-full px-3 flex items-center transform -translate-y-1/2"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="mb-4">
    <input
      type="checkbox"
      id="rememberUser"
      name="rememberUser"
      className="mr-2"
    />
    <label htmlFor="rememberUser" className="text-gray-700 text-sm">
      Recordar Usuario
    </label>
  </div>

  <div>
    <button
      type="submit"
      className="bg-lime-500 text-white py-2 px-36 rounded-full hover:bg-lime-600"
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
