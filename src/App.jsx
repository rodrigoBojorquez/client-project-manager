import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Componentes/NavBar';
import Empleados from './Pages/Dash/Empleados';
import Equipos from './Pages/Dash/Equipos';
import Materiales from './Pages/Dash/Materiales';
import Proyectos from './Pages/Dash/Proyectos';

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
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;

