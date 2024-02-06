import React, { useState, useEffect } from "react";

import axiosClient from "../../../../../axiosConfig.js";

import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

const normalizeString = (str) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const MemberSearch = ({ closeMemberModal, setMember, member }) => {
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [selectedMember, setSelectedMember] = useState([]);

  const getEmployes = async () => {
    try {
      const response = await axiosClient.get(`/employees?page=${page}`);
      // Filtra los empleados con rol_fk igual a 2 (Líder de equipo)
      const filteredEmployees = response.data.data.filter(
        (employee) => employee.rol_fk === 3
      );
      console.log(filteredEmployees);
      setData(filteredEmployees);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    getEmployes();
  }, [page]);

  const searchMember = (e) => {
    setSearch(normalizeString(e.target.value));
  };

  const handleSelectedMember = (dataMember) => {
    setSelectedMember(dataMember);
  };

  const handleAddMember = () => {
    if (
      selectedMember.id_user === undefined &&
      selectedMember.username === undefined
    ) {
      setError("Selecciona un miembro");
    } else {
      // Verificar si el miembro ya existe en el array
      const memberExists = member.some(
        (m) => m.id_user === selectedMember.id_user
      );

      if (!memberExists) {
        setMember([...member, selectedMember]);
        setSelectedMember([]);
        setError("");
        console.log(member);
        closeMemberModal();
      } else {
        setError("Este miembro ya está en el equipo");
      }
    }
  };

  useEffect(() => {
    console.log(member);
  }, [member]);

  // Metodo para filtrar por nombre
  const results = !search
    ? data
    : data.filter((dato) => normalizeString(dato.username).includes(search));

  return (
    <div className="bg-black h-screen w-full flex flex-col items-center justify-center bg-opacity-65">
      <div className=" font-Nunito flex flex-col items-center bg-white w-[400px] h-[500px] rounded-lg">
        <div className="flex items-center mt-5">
          <input
            onChange={searchMember}
            value={search}
            type="text"
            className="w-[300px] h-9 px-4 bg-[#EEE] rounded-s-md focus:outline-[#ccc]"
            placeholder="Buscar miembros"
          />
          <HiMagnifyingGlass className="text-[#A1A1A1] text-md w-14 px-4 bg-[#eee] h-9 rounded-e-md" />
        </div>
        {results.length > 0 ? (
          <ul className="flex flex-col overflow-y-auto h-[300px] mt-5">
            {results.map((result) => (
              <div
                key={result.id_user}
                onClick={() => handleSelectedMember(result)}
                className={`w-[300px] my-2 border-2 border-[#666] rounded-lg ${
                  selectedMember && selectedMember.id_user === result.id_user
                    ? "bg-[#ccc]"
                    : ""
                } ${result.team_fk !== null ? "hidden" : ""}`}
              >
                <li
                  className={
                    "text-xl font-Outfit font-semibold flex items-center justify-center gap-2 py-3 px-10 rounded-lg hover:bg-[#eee]"
                  }
                >
                  <IoPersonCircleOutline className="text-xl" />
                  <p>{result.username}</p>
                  {member.some((m) => m.id_user === result.id_user) && (
                    <FaCheck className="text-[#1DAF90]" />
                  )}
                </li>
              </div>
            ))}
          </ul>
        ) : (
          <div className="h-[320px] w-full flex items-center justify-center">
            <p className="text-[#666] font-bold text-xl">Sin resultados</p>
          </div>
        )}
        {<p className="text-red-500">{error}</p>}
        <div className="space-x-5">
          <button
            onClick={handleAddMember}
            className="mt-5 text-lg text-[#1DAF90] hover:text-white font-semibold border-2 border-[#1DAF90] hover:bg-[#1DAF90] px-2 py-1 rounded-md"
          >
            Agregar
          </button>
          <button
            onClick={closeMemberModal}
            className="text-lg text-[#a1a1a1] hover:text-red-600 font-semibold border-2 border-[#a1a1a1] hover:border-red-600 px-2 py-1 rounded-md"
          >
            Descartar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemberSearch;
