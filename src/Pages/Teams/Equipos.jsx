// EmployeesPage.jsx
import React, { useState, useEffect, useContext } from "react";
import GlobalContext from "../../store/context.js";

import Sidebar from "../../Components/NavBar.jsx";
import Edit from "./Forms/Edit.jsx";
import CreateTeam from "./Forms/CreateTeam.jsx";
import { useNavigate } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import axiosClient from "../../../axiosConfig.js";

const Equipos = () => {
  const [search, setSearch] = useState("");
  const [teams, setTeams] = useState([]);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showCreateTeamModal, setShowCreateTeamModal] = useState(false);
  const [selectedEquipo, setSelectedEquipo] = useState(null);
  const navigate = useNavigate()
  const { userData } = useContext(GlobalContext);
  const rol = userData.role_name;

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

  const getTeams = () => {
    axiosClient
      .get(`/team?page=${page}`)
      .then((res) => {
        // console.log(res.data.data);
        setTeams(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const deleteTeam = (id) => {
    axiosClient
      .delete(`/team/${id}`)
      .then((res) => {
        console.log(res);
        getTeams();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSearch = () => {
    setPage(1);
    if (search.trim().length >= 3) {
      axiosClient.get(`/team?page=${page}&search=${search}`).then((res) => {
        if (res.data.data != undefined) {
          setTeams(res.data.data);
        } else {
          setTeams(null);
        }
      });
    } else {
      getProjects();
    }
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getTeams();
  }, []);

  useEffect(() => {
    if (rol !== "administrator" && rol !== "team leader") {
      navigate("/error")
    }
  }, [])

  useEffect(() => {
    getTeams();
  }, [page]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="font-Nunito py-5 px-10 w-full">
        <div className="w-full items-baseline flex gap-5">
          <h1 className="text-[65px] font-bold">Equipos</h1>
          <button
            type="button"
            onClick={openCreateTeamModal}
            className={`flex items-center justify-center gap-2 text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] h-12 w-[8rem] rounded-xl ${
              rol != "administrator" ? "hidden" : ""
            }`}
          >
            <BsFillPlusCircleFill className="text-3xl" />
            <p className="text-xl font-bold">Nuevo</p>
          </button>
        </div>
        <div className="flex items-center mt-10">
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            className="w-[400px] h-9 px-4 bg-[#EEE] rounded-s-md focus:outline-[#ccc]"
            placeholder="Buscar equipo/lider"
          />
          <button onClick={handleSearch}>
            <HiMagnifyingGlass className="text-[#A1A1A1] text-md w-14 px-4 bg-[#eee] h-9 rounded-e-md" />
          </button>
        </div>
        <div className="mt-5 flex items-center justify-center">
          {teams && teams.length > 0 ? (
            <table className="w-full">
              <thead>
                <tr className="text-[#555] text-xl font-semibold">
                  <th className="text-center">Nombre</th>
                  <th className="text-center">Proyecto</th>
                  <th className="text-center">Lider</th>
                  <th className="text-center">Num. Miembros</th>
                  <td className={`text-center ${rol !== "administrator" && rol !== "team leader" ? "hidden" : ""}`}>Acciones</td>
                </tr>
              </thead>
              <tbody>
                {teams.map((item, index) => (
                  <tr key={index} className="border-y border-[#999] h-12">
                    <td className="text-center">{item.team_name || "N/A"}</td>
                    <td className="text-center">
                      {item.project_info && item.project_info.project_name
                        ? item.project_info.project_name
                        : "N/A"}
                    </td>
                    <td className="text-center">
                      {item.leader_username || "N/A"}
                    </td>
                    <td className="text-center">
                      {item.project_info && item.project_info.num_members
                        ? item.project_info.num_members
                        : "N/A"}
                    </td>
                    <td className="">
                      <div className="flex justify-center gap-x-3">
                        <button
                          onClick={() => openModal(item)}
                          className="bg-[#1DAF90] text-white px-3 py-1 rounded-md text-sm mr-3"
                          style={rol !== "administrator" && rol !== "team leader" ? {display: "none"} : {}}
                        >
                          Editar
                        </button>
                        <button
                          type="button"
                          className="bg-red-400 text-white px-3 py-1 rounded-md text-sm"
                          onClick={() => deleteTeam(item.id_team)}
                          style={rol !== "administrator" ? {display: "none"} : {}}
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-4xl font-semibold text-[#A1A1A1] mt-20 text-center">
              No se encontró ningún resultado
            </p>
          )}
        </div>
        {/* CHANGE PAGES */}
        <div
          className={`flex gap-x-3 mt-5 justify-center ${
            !teams || teams.length == 0 ? "hidden" : ""
          }`}
        >
          <button
            className={`bg-white px-5 py-1 border-[1.5px] font-semibold border-gray-300 rounded-md ${
              page == 1 && "bg-gray-100 text-gray-400"
            }`}
            disabled={page == 1}
            onClick={handlePreviousPage}
          >
            Anterior
          </button>
          <button
            className={`bg-white px-5 py-1 border-[1.5px] font-semibold border-gray-300 rounded-md ${
              !teams || teams.length < 10 ? "bg-gray-100 text-gray-400" : ""
            }`}
            disabled={!teams || teams.length < 10}
            onClick={handleNextPage}
          >
            Siguiente
          </button>
        </div>
      </div>
      {showModal && (
        <div className="absolute w-full">
          <Edit
            equipoData={selectedEquipo}
            closeModal={closeModal}
            getTeams={getTeams}
          />
        </div>
      )}
      {showCreateTeamModal && (
        <div className="absolute w-full">
          <CreateTeam closeModal={closeCreateTeamModal} getTeams={getTeams} />
        </div>
      )}
    </div>
  );
};

export default Equipos;
