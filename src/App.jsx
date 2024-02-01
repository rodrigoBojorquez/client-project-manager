import { useRoutes, BrowserRouter } from "react-router-dom";

import Dashboard from "./Pages/Dash/Dashboard.jsx";
import Employees from "./Pages/Employees/Empleados.jsx";
// import Dashboard from './Pages/Login/Login.jsx'
import Materials from "./Pages/Materials/Materiales.jsx";
import Proyects from "./Pages/Proyects/Proyectos.jsx";
import Teams from "./Pages/Teams/Equipos.jsx";

import Search from "./Pages/Teams/PeopleSearchBar/PeopleSearchBar.jsx";
import CreateMaterials from "./Pages/Materials/Forms/CreateMaterials.jsx";
import CreateEmployees from "./Pages/Employees/Forms/CreateEmployees.jsx";
import Login from './Pages/Dash/Login';
const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <>
            <NavBar />
            <Routes>
              <Route index element={<h1>Contenido de la página de inicio</h1>} />
              <Route path="empleados" element={<Empleados />} />
              <Route path="equipos" element={<Equipos />}/>
              <Route path="materiales" element={<Materiales />}/>
              <Route path="proyectos" element={<Proyectos />}/>
              <Route path="login" element={<Login />}/>
              {/* Otras rutas pueden ir aquí si es necesario */}
            </Routes>
          </>
        }
      />
    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
