import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../../img/bgLogin.jpg";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import axiosClient from "../../../axiosConfig";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../store/context";
import { Toaster, toast } from "sonner";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Nuevo estado para manejar la carga
  const { login } = useContext(GlobalContext);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim().length === 0) {
      setError("El correo no puede estar vacío");
      return;
    }

    if (password.trim() === "") {
      setError("La contraseña no puede estar vacía");
      return;
    }

    setError("");

    setLoading(true); // Actualizar el estado de carga al iniciar la solicitud

    axiosClient
      .post(
        `/login`,
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        const cookieHeader = res.headers["set-cookie"];

        if (cookieHeader) {
          document.cookie = cookieHeader.split(";")[0];
        }

        const allCookies = document.cookie;
        const localCookie = allCookies
          .split(";")
          .find((cookie) => cookie.trim().startsWith("token="));

        if (localCookie) {
          const cookieValue = localCookie.split("=")[1];
          const [headerBase64, payloadBase64] = cookieValue.split(".");

          const decodePayload = JSON.parse(atob(payloadBase64));

          login({
            username: decodePayload.username,
            isAuth: true,
            role_name: decodePayload.role_name,
          });

          if (decodePayload.role_name === "administrator") {
            navigate("/dashboard");
          } else if (decodePayload.role_name === "registrators") {
            navigate("/employees");
          } else if (decodePayload.role_name === "warehouse admin") {
            navigate("/materials");
          } else {
            navigate("/teams");
          }
        }
      })
      .catch((err) => {
        toast.error("Credenciales incorrectas");
        console.error(err);
      })
      .finally(() => {
        setLoading(false); // Actualizar el estado de carga al finalizar la solicitud
      });
  };

  return (
    <div className="flex items-center justify-center font-Nunito h-screen">
      <div className="h-screen">
        <img src={img} className="object-cover h-full" />
      </div>
      <div className="p-20 h-18 bg-white bg-opacity-100 h-screen flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4">Acceder</h2>
        <p className="text-2x1 mb-6 py-2">
          Si no tienes una cuenta registrada contacta con el área de sistemas
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-gray-700 text-sm font-semibold mb-2 flex items-center"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b focus:outline-none focus:border-blue-500 w-full py-2 px-3"
              placeholder="Correo Electrónico"
            />
          </div>
          <div className="mb-7 relative">
            <label
              htmlFor="password"
              className="text-gray-700 text-sm font-semibold mb-2 flex items-center"
            >
              <FontAwesomeIcon icon={faLock} className="mr-2" />
              Password
            </label>
            <div className="flex items-center justify-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-b focus:outline-none focus:border-blue-500 w-full"
                placeholder="Contraseña"
              />
              <button
                type="button"
                className="text-lg mt-5 px-3 transform -translate-y-1/2"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
              </button>
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {/* <div className="mb-4">
            <input
              type="checkbox"
              id="rememberUser"
              name="rememberUser"
              className="mr-2"
            />
            <label htmlFor="rememberUser" className="text-gray-700 text-sm">
              Recordar Usuario
            </label>
          </div> */}

          <div>
            <button
              type="submit"
              className="bg-[#1DAF90] font-bold text-white py-2 px-36 rounded-full hover:bg-[#41a58f]"
            >
              Acceder
            </button>
          </div>
        </form>
      </div>
      <Toaster richColors position="top-center" />
    </div>
  );
};

export default LoginForm;
