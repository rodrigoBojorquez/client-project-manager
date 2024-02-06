import { useContext, useEffect, useState } from "react";
import GlobalContext from "../store/context";
import axiosClient from "../../axiosConfig";
import Cookies from "js-cookie";
import { useNavigate, Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ children }) {
  const { userData, login } = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);
  const [isValidToken, setIsValidToken] = useState(false);
  const navigate = useNavigate();

  const getToken = () => {
    return Cookies.get("token");
  };

  useEffect(() => {
    const validateToken = async (token) => {
      try {
        const response = await axiosClient.post("/token", {
          token: token,
        });

        const data = response.data;

        if (data.isValid === true) {
          const [headerBase64, payloadBase64] = token.split(".");
          const decodePayload = JSON.parse(atob(payloadBase64));

          login({
            username: decodePayload.username,
            isAuth: true,
            role_name: decodePayload.role_name,
          });

          setIsValidToken(true);
        } else {
          Cookies.remove("token");
          setIsValidToken(false);
        }
      } catch (error) {
        console.error("Error al validar el token:", error);
      } finally {
        setLoading(false);
      }
    };

    const token = getToken();
    validateToken(token);
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!isValidToken) {
    // En PrivateRoute, cuando rediriges a la página de error
    return <Navigate to="/error" state={{ fromUnauthorized: true }} />;
  }

  return <Outlet />;
}

export default PrivateRoute;
