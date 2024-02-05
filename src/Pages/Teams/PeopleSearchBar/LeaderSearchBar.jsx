import React, { useEffect, useState } from "react";
import axiosClient from "../../../../axiosConfig";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoPersonCircleOutline } from "react-icons/io5";

function LeaderSearchBar({ setShowLeaderSearch, setFormData, formData }) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const getUsers = () => {
    axiosClient
      .get(`/employees?page=1&rol=2`)
      .then((res) => {
        setResults(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSearch = () => {
    if (search.trim().length >= 3) {
      axiosClient.get(`/employees?page=1&search=${search}`).then((res) => {
        setResults(res.data.data);
      });
    } else {
      getUsers();
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="bg-black z-20 h-screen w-full inset-0 flex flex-col items-center justify-center bg-opacity-65">
      <div className=" font-Nunito flex flex-col items-center bg-white w-[400px] h-[450px] rounded-lg">
        <div className="flex items-center mt-5">
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            className="w-[300px] h-9 px-4 bg-[#EEE] rounded-s-md focus:outline-[#ccc]"
            placeholder="Buscar equipo/lider"
          />
          <button onClick={handleSearch}>
            <HiMagnifyingGlass className="text-[#A1A1A1] text-md w-14 px-4 bg-[#eee] h-9 rounded-e-md" />
          </button>
        </div>
        <ul className="flex flex-col overflow-y-auto h-[300px] mt-5">
          {results !== null ? (
            results.length > 0 ? (
              results.map((item) => (
                <div
                  key={item.id_user}
                  className={`w-[300px] my-2 border-2 border-[#666] rounded-lg`}
                >
                  <li
                    className={`text-lg font-Outfit font-semibold flex items-center gap-2 py-3 px-10 rounded-lg hover:bg-[#eee] ${
                      formData.leader_id === item.id_user ? "hidden" : ""
                    }`}
                    onClick={() =>
                      handleUserClick(
                        item.id_user,
                        item.username,
                        item.speciality
                      )
                    }
                  >
                    <IoPersonCircleOutline className="text-xl" />
                    <div className="flex gap-x-5 items-center justify-between w-full">
                      <p className="text-sm">{item.username}</p>
                      <p className="text-sm font-normal">{item.speciality}</p>
                    </div>
                  </li>
                </div>
              ))
            ) : (
              <p>No hay resultados</p>
            )
          ) : (
            <p>Cargando resultados...</p>
          )}
        </ul>
        <div className="space-x-5">
          <button
            // onClick={handleAddUser}
            className="mt-5 text-lg text-[#1DAF90] hover:text-white font-semibold border-2 border-[#1DAF90] hover:bg-[#1DAF90] px-2 py-1 rounded-md"
          >
            Agregar
          </button>
          <button
            onClick={() => setShowLeaderSearch(false)}
            className="text-lg text-[#a1a1a1] hover:text-red-600 font-semibold border-2 border-[#a1a1a1] hover:border-red-600 px-2 py-1 rounded-md"
          >
            Descartar
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeaderSearchBar;
