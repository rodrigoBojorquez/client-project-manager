import { useRoutes, BrowserRouter } from "react-router-dom";

import Dashboard from "./Pages/Dash/Dashboard.jsx";
import Employees from "./Pages/Employees/Empleados.jsx";
import Materials from "./Pages/Materials/Materiales.jsx";
import Proyects from './Pages/Proyects/Proyectos.jsx'
import Teams from "./Pages/Teams/Equipos.jsx";
import Login from './Pages/Login/Login.jsx';

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Dashboard></Dashboard>},
    {path: '/employees', element: <Employees></Employees>},
    {path: '/materials', element: <Materials></Materials>},
    {path: '/projects', element: <Proyects></Proyects>},
    {path: '/teams', element: <Teams></Teams>},
    {path: '/login' , element: <Login></Login>},
  ])
  return routes
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
