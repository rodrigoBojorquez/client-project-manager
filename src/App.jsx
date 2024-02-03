import { useRoutes, BrowserRouter, Routes, Route } from "react-router-dom";
import React,{ useContext, useEffect, useState } from "react";
import GlobalContext from "./store/context.js";
import axiosClient from "../axiosConfig.js";
import  {EmployProvider}  from "./store/employContex.jsx";

import Dashboard from "./Pages/Dash/Dashboard.jsx";
import Employees from "./Pages/Employees/Empleados.jsx";
import Materials from "./Pages/Materials/Materiales.jsx";
import Proyects from "./Pages/Proyects/Proyectos.jsx";
import Teams from "./Pages/Teams/Equipos.jsx";
import Login from "./Pages/Login/Login.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import ActivetAcount from "./Components/ActivetAcount.jsx";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/dashboard", element: <Dashboard></Dashboard> },
    { path: "/employees", element: <Employees></Employees> },
    { path: "/materials", element: <Materials></Materials> },
    { path: "/projects", element: <Proyects></Proyects> },
    { path: "/teams", element: <Teams></Teams> },
    { path: "/active/:token", element: <Activate></Activate> },
  ]);
  return routes;
};

function App() {
  const { userData, login } = useContext(GlobalContext);
  const [tokenValidated, setTokenValidated] = useState(false);

  const getToken = () => {
    const allCookies = document.cookie;
    const localCookie = allCookies.split(";").find((cookie) => cookie.trim().startsWith("token="));

    if (localCookie) {
      const cookieValue = localCookie.split('=')[1];
      return cookieValue;
    }
  };

  const validateToken = async (token) => {
    try {
      const response = await axiosClient.post('/token', {
        token: token,
      });

      const data = response.data;

      if (data.isValid == true) {
        const [headerBase64, payloadBase64, signature] = token.split(".");
        const decodePayload = JSON.parse(atob(payloadBase64));

        login({
          username: decodePayload.username,
          isAuth: true,
          role_name: decodePayload.role_name,
        });
        // window.location.assign("/dashboard")
      } else {
        // Elimina la cookie en caso de token inválido
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

        // Solo redirige si no se ha intentado validar antes
        if (!tokenValidated) {
          setTokenValidated(true);
          window.location.assign("/");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const token = getToken();
    validateToken(token);
  }, []);

  return (
    <EmployProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute isAuth={true} />}>
          {/* <AppRoutes /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/projects" element={<Proyects />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/active/:token" element={<ActivetAcount/>} />,
        </Route>
      </Routes>
    </BrowserRouter>
    </EmployProvider>
  );
}

export default App;