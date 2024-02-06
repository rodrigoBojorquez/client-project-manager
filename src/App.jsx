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
import Error from "./Pages/Error/Error.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import ActivetAcount from "./Components/ActivetAcount.jsx";

function App() {

  return (
    <EmployProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/active/:token" element={<ActivetAcount/>} />
        <Route path="/error" element={<Error />} />
        <Route element={<PrivateRoute />}>
        {/* <Route element={<PrivateRoute isAuth={true} />}> */}
          {/* <AppRoutes /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/projects" element={<Proyects />} />
          <Route path="/teams" element={<Teams />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </EmployProvider>
  );
}

export default App;