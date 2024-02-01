// EmployeesPage.jsx
import { useState, useEffect } from "react";
import axiosClient from "../../../axiosConfig.js";

import Sidebar from "../../Components/NavBar.jsx";
import CreateProjectForm from "./Modals/CreateProject.jsx";
<<<<<<< HEAD
=======
import ProjectDetails from "./Modals/ProjectDetails.jsx";
>>>>>>> df4f7775e3ec2e242e71a3d8e9e1c9bc429c3d26

import { BsFillPlusCircleFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { HiMagnifyingGlass } from "react-icons/hi2";

const normalizeString = (str) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const Proyectos = () => {
  const [search, setSearch] = useState("");
  const [showCreateProjectModal, setCreateProjectShowModal] = useState(false);
<<<<<<< HEAD
  const [page, setPage] = useState(1);
  const [teams, setTeams] = useState([]);
=======
  const [showProjectDetails, setProjectDetails] = useState(false);
>>>>>>> df4f7775e3ec2e242e71a3d8e9e1c9bc429c3d26

  const formatDate = (rawDate) => {
    const formatedDate = new Date(rawDate).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      timeZone: "UTC",
    });
    return formatedDate.replace(/\//g, " / ");
  };

  const getProjects = () => {
    axiosClient
      .get(`/projects?page=${page}`)
      .then((res) => {
        const formattedProjects = res.data.data.map((project) => ({
          ...project,
          create_date: formatDate(project.create_date),
        }));

        setTeams(formattedProjects);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSearch = () => {
    setPage(1);
    if (search.trim().length >= 3) {
      axiosClient.get(`/projects?page=${page}&search=${search}`).then((res) => {
          const formattedProjects = res.data.data.map((project) => ({
            ...project,
            create_date: formatDate(project.create_date),
          }));

          setTeams(formattedProjects);
      });
    } else {
      getProjects();
    }
  };

<<<<<<< HEAD
  const handleFilter = (state_fk) => {
    setPage(1)
    setSearch("")
    axiosClient.get(`/projects?page=${page}&state=${state_fk}`)
      .then(res => {
        const formattedProjects = res.data.data.map((project) => ({
          ...project,
          create_date: formatDate(project.create_date),
        }));

        setTeams(formattedProjects);  
      })
      .catch(err => {
        console.error(err)
      })
  }

  const openCreateProjectModanl = () => {
    setCreateProjectShowModal(true);
  };

  const closeCreateProjectModanl = () => {
    setCreateProjectShowModal(false);
  };

  useEffect(() => {
    getProjects();
  }, []);

=======
  const openCreateProjectModanl = () => {
    setCreateProjectShowModal(true);
  };
  const closeCreateProjectModanl = () => {
    setCreateProjectShowModal(false);
  };
  const openProjecDetails = () => {
    setProjectDetails(true);
  };
  const closeProjecDetails = () => {
    showProjectDetails(false);
  };
>>>>>>> df4f7775e3ec2e242e71a3d8e9e1c9bc429c3d26
  return (
    <div className="flex w-full">
      <Sidebar />
<<<<<<< HEAD
      <div className="font-Nunito mx-10 mt-6 w-full">
=======
      <div className="font-Nunito mt-6 ml-8">
>>>>>>> df4f7775e3ec2e242e71a3d8e9e1c9bc429c3d26
        <div className="w-full items-baseline flex gap-5">
          <h1 className="text-[65px] font-bold">Proyectos</h1>
          <button
            onClick={openCreateProjectModanl}
            className="flex items-center justify-center gap-2 text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] h-12 w-[8rem] rounded-xl"
          >
            <BsFillPlusCircleFill className="text-3xl" />
            <p className="text-xl font-bold">Nuevo</p>
          </button>
        </div>
        {/* Botones de filtro */}
        <div className="flex items-center mt-10 gap-5">
          <button
            onClick={getProjects}
            className="bg-[#eee] focus:bg-[#1DAF90] focus:text-white hover:text-white hover:bg-[#1DAF90] focus:shadow-md hover:shadow-md font-semibold px-3 h-9 rounded"
          >
            Todos
          </button>
          <button
            onClick={() => handleFilter(1)}
            className="bg-[#eee] focus:bg-[#1DAF90] focus:text-white hover:text-white hover:bg-[#1DAF90] focus:shadow-md hover:shadow-md font-semibold px-3 h-9 rounded"
          >
            En curso
          </button>
          <button
            onClick={() => handleFilter(2)}
            className="bg-[#eee] focus:bg-[#1DAF90] focus:text-white hover:text-white hover:bg-[#1DAF90] focus:shadow-md hover:shadow-md font-semibold px-3 h-9 rounded"
          >
            Terminados
          </button>
          <button
            onClick={() => handleFilter(3)}
            className="bg-[#eee] focus:bg-[#1DAF90] focus:text-white hover:text-white hover:bg-[#1DAF90] focus:shadow-md hover:shadow-md font-semibold px-3 h-9 rounded"
          >
            Cancelados
          </button>
          <button
            onClick={() => handleFilter(4)}
            className="bg-[#eee] focus:bg-[#1DAF90] focus:text-white hover:text-white hover:bg-[#1DAF90] focus:shadow-md hover:shadow-md font-semibold px-3 h-9 rounded"
          >
            En pausa
          </button>
          <div className="flex items-center">
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
              className="w-[400px] h-9 px-4 bg-[#EEE] rounded-s-md focus:outline-[#ccc]"
              placeholder="Buscar nombre del proyecto o lider"
            />
            <button onClick={handleSearch}>
              <HiMagnifyingGlass className="text-[#A1A1A1] text-md w-14 px-4 bg-[#eee] h-9 rounded-e-md" />
            </button>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center">
          {teams.length > 0 ? (
            <table className="w-full">
              <tr className="text-[#555] text-xl font-semibold">
                <th className=" pb-4 text-center">Nombre</th>
                <th className="pb-4 text-center">Estado</th>
                <th className=" pb-4 text-center">Responsable</th>
                <th className=" pb-4 text-center">Fecha de inicio</th>
                <td className=" pb-4 text-center">Acciones</td>
              </tr>
              <tbody>
                {teams.map((item) => (
                  <tr
                    key={item.id_project}
                    className="border-y border-[#999] h-12"
                  >
                    <td className="text-center">{item.project_name}</td>
                    <td
                      className={`font-bold text-center ${
                        item.state_name === "terminado"
                          ? "text-[#1DAF90]"
                          : item.state_name === "en pausa"
                          ? "text-amber-500"
                          : item.state_name === "cancelado"
                          ? "text-[#FF0000]"
                          : ""
                      } ${
                        item.state_name === "en curso" ? "text-sky-500" : ""
                      }`}
                    >
                      {item.state_name}
                    </td>
<<<<<<< HEAD
                    <td className="text-center">
                      {item.leader_username ? item.leader_username : "N/A"}
                    </td>
                    <td className="text-center">{item.create_date}</td>
                    <td className="text-center">
                      <button className="bg-[#1DAF90] text-white px-3 py-1 rounded-md text-sm mr-3">
=======
                    <td>{item.lider}</td>
                    <td className="">{item.fecha}</td>
                    <td className="flex h-auto items-center gap-5 mt-2">
                      <button
                        onClick={openProjecDetails}
                        className="bg-[#1DAF90] text-white px-3 py-1 rounded-md text-sm"
                      >
>>>>>>> df4f7775e3ec2e242e71a3d8e9e1c9bc429c3d26
                        Detalles
                      </button>
                      <button className="bg-red-400 text-white px-3 py-1 rounded-md text-sm">
                        Eliminar
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

        {/* CHANGE PAGES */}
        <div className="flex gap-x-3 mt-5 justify-center">
          <button
            className={`bg-white px-5 py-1 border-[1.5px] font-semibold border-gray-300 rounded-md ${page == 1 && "bg-gray-100 text-gray-400"}`}
            disabled={page == 1}
          >
            Anterior
          </button>
          <button
            className={`bg-white px-5 py-1 border-[1.5px] font-semibold border-gray-300 rounded-md ${teams.length <10 && "bg-gray-100 text-gray-400"}`}
            disabled={teams.length < 10}
          >
            Siguiente
          </button>
        </div>
      </div>
      {showCreateProjectModal && (
        <div className="h-screen absolute w-full">
          <CreateProjectForm
            closeCreateProjectModanl={closeCreateProjectModanl}
          />
<<<<<<< HEAD
=======
        </div>
      )}
      {showProjectDetails && (
        <div className="absolute h-screen w-full">
          <ProjectDetails ModalProjectDetails={closeProjecDetails} />
>>>>>>> df4f7775e3ec2e242e71a3d8e9e1c9bc429c3d26
        </div>
      )}
    </div>
  );
};

export default Proyectos;
