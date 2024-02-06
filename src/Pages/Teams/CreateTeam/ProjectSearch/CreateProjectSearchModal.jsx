import React, { useState, useEffect } from "react";

import { HiMagnifyingGlass } from "react-icons/hi2";
import { PiFolderNotchOpenFill } from "react-icons/pi";

import axiosClient from "../../../../../axiosConfig.js";

const normalizeString = (str) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const ProjectSearchModal = ({ closeProjectModal, setProject, project }) => {
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState([]);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const getProjects = () => {
    axiosClient
      .get(`/projects?page=${page}`)
      .then((res) => {
        const formattedProjects = res.data.data.map((project) => ({
          id: project.id_project,
          name: project.project_name,
        }));

        console.log(formattedProjects);
        setData(formattedProjects);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getProjects();
  }, []);
  useEffect(() => {
    getProjects();
  }, [page]);

  const searchProject = (e) => {
    setSearch(normalizeString(e.target.value));
  };
  const results = !search
    ? data
    : data.filter((dato) => normalizeString(dato.name).includes(search));

  const handleSelectedProject = (dataProject) => {
    setSelectedProject(dataProject);
  };

  const handleAddProject = () => {
    if (
      selectedProject.id === undefined &&
      selectedProject.name === undefined
    ) {
      setError("Selecciona un proyecto");
    } else {
      setProject(selectedProject)
      closeProjectModal();
      setError("");
    }
  };

  useEffect(() => {
    console.log(selectedProject);
  }, [selectedProject]);

  return (
    <div className="bg-black h-screen w-full flex flex-col items-center justify-center bg-opacity-65">
      <div className=" font-Nunito flex flex-col items-center bg-white w-[400px] h-[500px] rounded-lg">
        <div className="flex items-center mt-5">
          <input
            onChange={searchProject}
            value={search}
            type="text"
            className="w-[300px] h-9 px-4 bg-[#EEE] rounded-s-md focus:outline-[#ccc]"
            placeholder="Buscar proyecto"
          />
          <HiMagnifyingGlass className="text-[#A1A1A1] text-md w-14 px-4 bg-[#eee] h-9 rounded-e-md" />
        </div>
        {results.length > 0 ? (
          <ul className="flex flex-col overflow-y-auto h-[300px] mt-5">
            {results.map((result) => (
              <div
                key={result.id}
                className={`w-[300px] my-2 border-2 border-[#666] rounded-lg ${
                  selectedProject && selectedProject.id === result.id
                    ? "bg-[#ccc]"
                    : ""
                }`}
                onClick={() => handleSelectedProject(result)}
              >
                {/* Nombre del proyecto */}
                <li className="text-lg font-Outfit font-semibold flex items-center gap-2 py-3 px-10 rounded-lg hover:bg-[#eee]">
                  <PiFolderNotchOpenFill className="text-xl" />
                  {result.name}
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
            onClick={handleAddProject}
            className="mt-5 text-lg text-[#1DAF90] hover:text-white font-semibold border-2 border-[#1DAF90] hover:bg-[#1DAF90] px-2 py-1 rounded-md"
          >
            Agregar
          </button>
          <button
            onClick={closeProjectModal}
            className="text-lg text-[#a1a1a1] hover:text-red-600 font-semibold border-2 border-[#a1a1a1] hover:border-red-600 px-2 py-1 rounded-md"
          >
            Descartar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSearchModal;
