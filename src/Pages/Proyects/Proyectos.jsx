// EmployeesPage.jsx
import { useState, useEffect } from "react";

import Sidebar from "../../Components/NavBar.jsx";
import CreateProjectForm from './Modals/CreateProject.jsx'
import ProjectDetails from './Modals/ProjectDetails.jsx'

import { BsFillPlusCircleFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { HiMagnifyingGlass } from "react-icons/hi2";

const equipos = [
  {
    nombreProyecto: "Proyecto A",
    estado: "Completado",
    lider: "Juan Pérez",
    fecha: "20 - Ene - 2024",
  },
  {
    nombreProyecto: "Proyecto B",
    estado: "Completado",
    lider: "Alexnader",
    fecha: "20 - Ene - 2024",
  },
  {
    nombreProyecto: "Proyecto C",
    estado: "En curso",
    lider: "Israel",
    fecha: "20 - Ene - 2024",
  },
  {
    nombreProyecto: "Proyecto A",
    estado: "Pendiente",
    lider: "Michelle",
    fecha: "20 - Ene - 2024",
  },
];

const normalizeString = (str) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();


  
const Proyectos = () => {
  const [filter, setFilter] = useState("Todos");
  const [search, setSearch] = useState("");
  const [showCreateProjectModal, setCreateProjectShowModal] = useState(false)
  const [showProjectDetails, setProjectDetails] = useState(false)

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const searchTeam = (e) => {
    setSearch(normalizeString(e.target.value));
  };

  //Metodo para filtrar por nombre
  const results = !search
    ? equipos
    : equipos.filter(
        (dato) =>
          normalizeString(dato.nombreProyecto).includes(search) ||
          normalizeString(dato.lider).includes(search)
      );

  const filteredResults =
    filter === "Todos"
      ? results
      : results.filter((item) => item.estado === filter);

  const openCreateProjectModanl = ()=>{
    setCreateProjectShowModal(true);
  }
  const closeCreateProjectModanl = ()=>{
    setCreateProjectShowModal(false);
  }
  const openProjecDetails = ()=>{
    setProjectDetails(true);
  }
  const closeProjecDetails = ()=>{
    showProjectDetails(false);
  }
  return (
    <div className="flex">
      <Sidebar />
      <div className="font-Nunito mt-6 ml-8 w-">
        <div className="w-full items-baseline flex gap-5">
          <h1 className="text-[65px] font-bold">Proyectos</h1>
          <button onClick={openCreateProjectModanl} className="flex items-center justify-center gap-2 text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] h-12 w-[8rem] rounded-xl">
            <BsFillPlusCircleFill className="text-3xl" />
            <p className="text-xl font-bold">Nuevo</p>
          </button>
        </div>
        {/* Botones de filtro */}
        <div className="flex items-center mt-10 ml-10 gap-5">
          <button
            onClick={() => handleFilterChange("Todos")}
            className="bg-[#eee] focus:bg-[#1DAF90] focus:text-white hover:text-white hover:bg-[#1DAF90] focus:shadow-md hover:shadow-md font-semibold px-3 h-9 rounded"
          >
            Todos
          </button>
          <button
            onClick={() => handleFilterChange("En curso")}
            className="bg-[#eee] focus:bg-[#1DAF90] focus:text-white hover:text-white hover:bg-[#1DAF90] focus:shadow-md hover:shadow-md font-semibold px-3 h-9 rounded"
          >
            En curso
          </button>
          <button
            onClick={() => handleFilterChange("Pendiente")}
            className="bg-[#eee] focus:bg-[#1DAF90] focus:text-white hover:text-white hover:bg-[#1DAF90] focus:shadow-md hover:shadow-md font-semibold px-3 h-9 rounded"
          >
            Pendiente
          </button>
          <button
            onClick={() => handleFilterChange("Completado")}
            className="bg-[#eee] focus:bg-[#1DAF90] focus:text-white hover:text-white hover:bg-[#1DAF90] focus:shadow-md hover:shadow-md font-semibold px-3 h-9 rounded"
          >
            Completado
          </button>
          <div className="flex items-center">
            <input
              onChange={searchTeam}
              value={search}
              type="text"
              className="w-[400px] h-9 px-4 bg-[#EEE] rounded-s-md focus:outline-[#ccc]"
              placeholder="Buscar nombre del proyecto o lider"
            />
            <HiMagnifyingGlass className="text-[#A1A1A1] text-md w-14 px-4 bg-[#eee] h-9 rounded-e-md" />
          </div>
        </div>
        <div className="mt-8 ml-10 flex items-center justify-center">
          {filteredResults.length > 0 ? (
            <table>
              <tr className="text-[#555] text-xl font-semibold">
                <th className="pr-[7rem] pb-4">Nombre del proyecto</th>
                <th className="pr-[10rem] pb-4">Estado</th>
                <th className="pr-[4rem] pb-4">Responsable</th>
                <th className="pr-[6rem] pb-4">Fecha de inicio</th>
                <td className="pr-[8rem] pb-4">&nbsp;</td>
              </tr>
              <tbody>
                {filteredResults.map((item, index) => (
                  <tr key={index} className="border-y border-[#999] h-12">
                    <td>{item.nombreProyecto}</td>
                    <td
                      className={`text-[#1DAF90] font-bold ${
                        item.estado === "Pendiente" ? "text-[#FF0000]" : ""
                      } ${item.estado === "En curso" ? "text-[#FF9900]" : ""}`}
                    >
                      {item.estado}
                    </td>
                    <td>{item.lider}</td>
                    <td className="">{item.fecha}</td>
                    <td className="flex h-auto items-center gap-5 mt-2">
                      <button onClick={openProjecDetails} className="bg-[#1DAF90] text-white px-3 py-1 rounded-md text-sm">
                        Detalles
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-4xl font-semibold text-[#A1A1A1] ml-[14rem] mt-[12rem]">
              No se encontro ningun resultado
            </p>
          )}
        </div>
      </div>
      {showCreateProjectModal && (
        <div className="h-screen absolute w-full">
          <CreateProjectForm closeCreateProjectModanl={closeCreateProjectModanl}/>
        </div>
      )}
      {showProjectDetails && (
        <div className="absolute h-screen w-full">
          <ProjectDetails ModalProjectDetails={closeProjecDetails}/>
        </div>
      )}
    </div>
  );
};

export default Proyectos;
