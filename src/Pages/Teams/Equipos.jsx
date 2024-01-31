// EmployeesPage.jsx
import { useState, useEffect } from "react";

import Sidebar from "../../Components/NavBar.jsx";
import Edit from "./Forms/Edit.jsx";
import CreateTeam from "./Forms/CreateTeam.jsx";

import { BsFillPlusCircleFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { HiMagnifyingGlass } from "react-icons/hi2";

const equipos = [
  {
    nombreEquipo: "Equipo A",
    lider: "Juan Pérez",
    numMiembros: 5,
    miembros: [
      { nombre: "Marcos", especialidad: "Diseñador principal" },
      { nombre: "Javier", especialidad: "Analista" },
      { nombre: "Fernando", especialidad: "Desarrollador back-end" },
      { nombre: "Fernando", especialidad: "Desarrollador back-end" },
      { nombre: "Fernando", especialidad: "Desarrollador back-end" },
      { nombre: "Fernando", especialidad: "Desarrollador back-end" },
    ],
  },
  {
    nombreEquipo: "Equipo B",
    lider: "María Rodríguez",
    numMiembros: 8,
    miembros: [
      { nombre: "Marcos", especialidad: "Diseñador principal" },
      { nombre: "Javier", especialidad: "Analista" },
      { nombre: "Fernando", especialidad: "Desarrollador back-end" },
    ],
  },
  {
    nombreEquipo: "Equipo C",
    lider: "Carlos Sánchez",
    numMiembros: 6,
    miembros: [
      { nombre: "Marcos", especialidad: "Diseñador principal" },
      { nombre: "Javier", especialidad: "Analista" },
      { nombre: "Fernando", especialidad: "Desarrollador back-end" },
    ],
  },
];

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

  //Metodo para filtrar por nombre
  const results = !search
    ? equipos
    : equipos.filter(
        (dato) =>
          normalizeString(dato.nombreEquipo).includes(search) ||
          normalizeString(dato.lider).includes(search)
      );

  return (
    <div className="flex">
      <Sidebar />
      <div className="font-Nunito mt-6 ml-8 w-">
        <div className="w-full items-baseline flex gap-5">
          <h1 className="text-[65px] font-bold">Equipos</h1>
          <button
          type="button"
            onClick={openCreateTeamModal}
            className="flex items-center justify-center gap-2 text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] h-12 w-[8rem] rounded-xl"
          >
            <BsFillPlusCircleFill className="text-3xl" />
            <p className="text-xl font-bold">Nuevo</p>
          </button>
        </div>
        <div className="flex items-center mt-10 ml-10">
          <input
            onChange={searchTeam}
            value={search}
            type="text"
            className="w-[400px] h-9 px-4 bg-[#EEE] rounded-s-md focus:outline-[#ccc]"
            placeholder="Buscar equipo/lider"
          />
          <HiMagnifyingGlass className="text-[#A1A1A1] text-md w-14 px-4 bg-[#eee] h-9 rounded-e-md" />
        </div>
        <div className="mt-5 ml-10 flex items-center justify-center">
          {results.length > 0 ? (
            <table>
              <tr className="text-[#555] text-xl font-semibold">
                <th className="pr-[14rem] pb-4">Nombre del equipo</th>
                <th className="pr-[18rem] pb-4">Lider</th>
                <th className="pr-[4rem] pb-4">Num. Miembros</th>
                <td className="pr-[8rem] pb-4">&nbsp;</td>
              </tr>
              <tbody>
                {results.map((item, index) => (
                  <tr key={index} className="border-y border-[#999] h-12">
                    <td>{item.nombreEquipo}</td>
                    <td>{item.lider}</td>
                    <td className="pl-14">{item.numMiembros}</td>
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
            <p className="text-4xl font-semibold text-[#A1A1A1] ml-[18rem] mt-[12rem]">
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
