import { useRoutes, BrowserRouter } from "react-router-dom";

import Dashboard from "./Pages/Dash/Dashboard.jsx";
import Employees from "./Pages/Employees/Empleados.jsx";
// import Dashboard from './Pages/Login/Login.jsx'
import Materials from "./Pages/Materials/Materiales.jsx";
import Proyects from "./Pages/Proyects/Proyectos.jsx";
import Teams from "./Pages/Teams/Equipos.jsx";

import Create from './Pages/Teams/Forms/CreateTeam.jsx'
import Edit from './Pages/Teams/Forms/Edit.jsx'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Dashboard /> },
    { path: "/employees", element: <Employees /> },
    // {path: '/', element: <Login/>},
    { path: "/materials", element: <Materials /> },
    { path: "/proyects", element: <Proyects /> },
    { path: "/teams", element: <Teams /> },
    { path: "/create", element: <Create /> },
    { path: "/edit", element: <Edit /> },
  ]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
