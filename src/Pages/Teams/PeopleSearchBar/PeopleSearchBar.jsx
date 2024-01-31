import { useState } from "react";

import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoPersonCircleOutline } from "react-icons/io5";

const equipos = [
  {
    nombreEquipo: "Equipo A",
    lider: "Juan Pérez",
  },
  {
    nombreEquipo: "Equipo B",
    lider: "María Rodríguez",
  },
  {
    nombreEquipo: "Equipo C",
    lider: "Carlos Sánchez",
  },
  {
    nombreEquipo: "Equipo C",
    lider: "Carlos Sánchez",
  },
  {
    nombreEquipo: "Equipo C",
    lider: "Carlos Sánchez",
  },
  {
    nombreEquipo: "Equipo C",
    lider: "Carlos Sánchez",
  },
  {
    nombreEquipo: "Equipo C",
    lider: "Carlos Sánchez",
  },
];

const normalizeString = (str) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const PeopleSearchBar = ({ closeLiderModal }) => {
  const [search, setSearch] = useState("");

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
    <div className="bg-black h-screen w-full flex flex-col items-center justify-center bg-opacity-65">
      <div className=" font-Nunito flex flex-col items-center bg-white w-[400px] h-[450px] rounded-lg">
        <div className="flex items-center mt-5">
          <input
            onChange={searchTeam}
            value={search}
            type="text"
            className="w-[300px] h-9 px-4 bg-[#EEE] rounded-s-md focus:outline-[#ccc]"
            placeholder="Buscar equipo/lider"
          />
          <HiMagnifyingGlass className="text-[#A1A1A1] text-md w-14 px-4 bg-[#eee] h-9 rounded-e-md" />
        </div>
        <ul className="flex flex-col overflow-y-auto h-[300px] mt-5">
          {results.map((item, index) => (
            <div
              key={index}
              className="w-[300px] my-2 border-2 border-[#666] rounded-lg"
            >
              <li className="text-lg font-Outfit font-semibold flex items-center gap-2 py-3 px-10 rounded-lg hover:bg-[#eee]">
                <IoPersonCircleOutline className="text-xl" />
                {item.lider}
              </li>
            </div>
          ))}
        </ul>
        <div className="space-x-5">
          <button
            onClick={closeLiderModal}
            className="mt-5 text-lg text-[#1DAF90] hover:text-white font-semibold border-2 border-[#1DAF90] hover:bg-[#1DAF90] px-2 py-1 rounded-md"
          >
            Agregar
          </button>
          <button
            onClick={closeLiderModal}
            className="text-lg text-[#a1a1a1] hover:text-red-600 font-semibold border-2 border-[#a1a1a1] hover:border-red-600 px-2 py-1 rounded-md"
          >
            Descartar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeopleSearchBar;
