//Importaciones de dependencias
import { useRoutes, BrowserRouter } from "react-router-dom";

//Importaciones de paginas o componentes
import Dashboard from '../src/Pages/Dash/Dashboard.jsx'

//Aqui se agregan las rutas de las vistas
const AppRoutes = () => {
  let routes = useRoutes([{ path: "/", element: <Dashboard></Dashboard> }]);
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
