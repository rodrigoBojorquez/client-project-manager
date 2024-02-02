import { useRoutes, BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "./store/context.js";

import Dashboard from "./Pages/Dash/Dashboard.jsx";
import Employees from "./Pages/Employees/Empleados.jsx";
import Materials from "./Pages/Materials/Materiales.jsx";
import Proyects from './Pages/Proyects/Proyectos.jsx'
import Teams from "./Pages/Teams/Equipos.jsx";
import Login from './Pages/Login/Login.jsx';
import PrivateRoute from "./Components/PrivateRoute.jsx";

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/dashboard', element: <Dashboard></Dashboard>},
    {path: '/employees', element: <Employees></Employees>},
    {path: '/materials', element: <Materials></Materials>},
    {path: '/projects', element: <Proyects></Proyects>},
    {path: '/teams', element: <Teams></Teams>},
  ])
  return routes
};

function App() {

  const { userData } = useContext(GlobalContext)

  return (
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
