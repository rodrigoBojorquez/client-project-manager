// EmployeesPage.jsx
import React,{ useState, useEffect, useContext } from "react";
import GlobalContext from "../../store/context.js";

import Sidebar from "../../Components/NavBar.jsx";
import Edit from "./Forms/Edit.jsx";
import CreateTeam from "./Forms/CreateTeam.jsx";

import { BsFillPlusCircleFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import axiosClient from "../../../axiosConfig.js";

const normalizeString = (str) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const Equipos = () => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showCreateTeamModal, setShowCreateTeamModal] = useState(false);
  const [selectedEquipo, setSelectedEquipo] = useState(null);
  const { userData } = useContext(GlobalContext)
  const [page, setPage] = useState(1)
  const [results, setResults] = useState([])
  const rol = userData.role_name

  const openModal = (equipo) => {
    setSelectedEquipo(equipo);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedEquipo(null);
    setShowModal(false);
  };

  const openCreateTeamModal = () => {
    setShowCreateTeamModal(true);
  };

  const closeCreateTeamModal = () => {
    setShowCreateTeamModal(false);
  };

  const searchTeam = (e) => {
    setSearch(normalizeString(e.target.value));
  };

  const handleNextPage = () => {
    setPage(page + 1)
  }
   
  const handlePreviousPage = () => {
    setPage(page - 1)
  }

  const getTeams = () => {
    axiosClient.get(`/team?page=${page}`)
      .then(res => {
        console.log(res.data.data)
        setResults(res.data.data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  useEffect(() => {
    getTeams()
  }, [])

  useEffect(() => {
    getTeams
  }, [page])

  return (
    <div className="flex">
      <Sidebar />
      <div className="font-Nunito py-5 px-10">
        <div className="w-full items-baseline flex gap-5">
          <h1 className="text-[65px] font-bold">Equipos</h1>
          <button
          type="button"
            onClick={openCreateTeamModal}
            className={`flex items-center justify-center gap-2 text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] h-12 w-[8rem] rounded-xl ${rol != "administrator" ? "hidden" : ""}`}
          >
            <BsFillPlusCircleFill className="text-3xl" />
            <p className="text-xl font-bold">Nuevo</p>
          </button>
        </div>
        <div className="flex items-center mt-10">
          <input
            onChange={searchTeam}
            value={search}
            type="text"
            className="w-[400px] h-9 px-4 bg-[#EEE] rounded-s-md focus:outline-[#ccc]"
            placeholder="Buscar equipo/lider"
          />
          <HiMagnifyingGlass className="text-[#A1A1A1] text-md w-14 px-4 bg-[#eee] h-9 rounded-e-md" />
        </div>
        <div className="mt-5 flex items-center justify-center">
          {results.length > 0 ? (
            <table>
              <tr className="text-[#555] text-xl font-semibold">
                <th className="pr-[14rem] pb-4">Nombre</th>
                <th className="pr-[18rem] pb-4">Lider</th>
                <th className="pr-[4rem] pb-4">Num. Miembros</th>
                <td className="pr-[8rem] pb-4">Acciones</td>
              </tr>
              <tbody>
                {results.map((item, index) => (
                  <tr key={index} className="border-y border-[#999] h-12">
                    <td>{item.team_name}</td>
                    <td>{item.leader_username}</td>
                    <td className="pl-14">{item.project_info.num_members}</td>
                    <td className="flex h-auto items-center gap-5 mt-2">
                      <button
                        onClick={() => openModal(item)}
                        className="bg-[#1DAF90] text-white px-3 py-1 rounded-md text-sm"
                      >
                        Detalles
                      </button>
                      {/* Boton de editar */}
                      <button className="text-[#1DAF90]">
                        <FiEdit className="text-2xl" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-4xl font-semibold text-[#A1A1A1] mb-20">
              No se encontro ningun resultado
            </p>
          )}
        </div>
      </div>
      {showModal && (
        <div className="absolute w-full">
          <Edit equipoData={selectedEquipo} closeModal={closeModal} />
        </div>
      )}
      {showCreateTeamModal && (
        <div className="absolute w-full">
          <CreateTeam
            closeModal={closeCreateTeamModal}
          />
        </div>
      )}
    </div>
  );
};

export default Equipos;
