import React, { useEffect, useState } from "react";

import PeopleSearchBar from "../PeopleSearchBar/LeaderSearchBar.jsx";
import ProjectSearchModal from "../ProjectSearch/ProjectSearchModal.jsx";
import MemberSearch from "../MemberSearch/MemberSearch.jsx";

import { FaUser, FaUserTie } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa6";
import { AiOutlineUsergroupAdd, AiOutlineUserAdd } from "react-icons/ai";
import { SlFolder } from "react-icons/sl";
import { GoTrash } from "react-icons/go";

const expresion = /^[^!@#$%^&*()_+{}[\]:;<>,.?~""''|°\\/-]/;

function CreateTeam({ closeModal }) {
  const [showLiderModal, setShowLiderModal] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showMemberModal, setShowMemberModal] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [error, setError] = useState({ teamName: "" });

  const [leader, setLeader] = useState({
    id_user: "",
    username: "",
  });
  const [member, setMember] = useState([]);

  const [project, setProject] = useState({
    id: "",
    name: "",
  });

  const openLiderModal = () => {
    setShowLiderModal(true);
  };
  const closeLiderModal = () => {
    setShowLiderModal(false);
  };

  const openProjectModal = () => {
    setShowProjectModal(true);
  };
  const closeProjectModal = () => {
    setShowProjectModal(false);
  };
  const openMemberModal = () => {
    setShowMemberModal(true);
  };
  const closeMemberModal = () => {
    setShowMemberModal(false);
  };

  const handleChangeTeamName = (e) => {
    const { value } = e.target;
    setTeamName(value);
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      teamName: "",
      leader: "",
      project: "",
      members: "",
    };

    // Validación del nombre del equipo
    if (teamName.trim() === "") {
      valid = false;
      newErrors.teamName = "Por favor, ingresa un nombre de equipo.";
    } else if (!expresion.test(teamName.trim())) {
      valid = false;
      newErrors.teamName =
        "El nombre no puede iniciar con caracteres especiales.";
    }

    // Validación del líder
    if (!leader || !leader.username) {
      valid = false;
      newErrors.leader = "Selecciona un líder para el equipo.";
    }

    // Validación del proyecto
    if (!project || !project.name) {
      valid = false;
      newErrors.project = "Asigna un proyecto al equipo.";
    }

    // Validación de miembros
    if (!member || member.length === 0) {
      valid = false;
      newErrors.members = "Agrega al menos un miembro al equipo.";
    }

    setError(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      closeModal();
      console.log("Formulario enviado:", teamName);
    } else {
      console.log("No se puede enviar el formulario");
    }
  };

  useEffect(() => {
    console.log(member);
  }, [member]);

  return (
    <div className="h-screen w-full flex justify-center items-center bg-black bg-opacity-65 backdrop-blur-sm font-Nunito">
      <div className="bg-white h-auto w-auto rounded-md grid place-content-center">
        <form onSubmit={handleSubmit} className="flex flex-col w-auto m-5">
          <h2 className="text-4xl font-semibold">Nuevo Equipo</h2>
          <div className="flex flex-col mt-5">
            <label htmlFor="" className="text-xl text-[#666] font-semibold">
              Nombre del equipo *
            </label>
            <input
              onChange={handleChangeTeamName}
              value={teamName}
              type="text"
              className="w-[350px] h-8 px-2 outline-none border border-[#a9a9a9] rounded-md "
            />
            <div>
              <p className="text-red-600 text-sm">{error.teamName}</p>
            </div>
          </div>
          <div className="flex gap-16 mt-5">
            <div>
              <p className="text-xl text-[#666] font-semibold">Lider *</p>
              {leader && leader.username ? (
                <button
                  type="button"
                  onClick={openLiderModal}
                  className="flex gap-2 items-center text-lg text-white bg-[#1DAF90] font-semibold border-2 border-[#1DAF90] px-2 py-1 rounded-md"
                >
                  <FaUserTie className="text-2xl" />
                  {leader.username}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={openLiderModal}
                  className="flex gap-2 items-center text-lg text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] font-semibold border-2 border-[#1DAF90] px-2 py-1 rounded-md"
                >
                  <AiOutlineUserAdd className="text-3xl" />
                  Añadir lider
                </button>
              )}
              <div>
                <p className="text-red-600 text-sm">{error.leader}</p>
              </div>
            </div>
            <div>
              <p className="text-xl text-[#666] font-semibold">Proyecto</p>
              {project && project.name ? (
                <button
                  type="button"
                  onClick={openProjectModal}
                  className="flex gap-2 items-center text-lg text-white bg-[#1DAF90] font-semibold border-2 border-[#1DAF90] px-2 py-1 rounded-md"
                >
                  <FaRegFolderOpen className="text-3xl" />
                  {project.name}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={openProjectModal}
                  className="flex gap-2 items-center text-lg text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] font-semibold border-2 border-[#1DAF90] px-2 py-1 rounded-md"
                >
                  <SlFolder className="text-3xl" />
                  Asignar proyecto
                </button>
              )}
              <div>
                <p className="text-red-600 text-sm">{error.project}</p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <p className="text-xl text-[#666] font-semibold">Miembros *</p>
            <div className="space-y-2 grid grid-rows-3 grid-flow-col w-auto">
              {member.map((member, index) => (
                <div
                  key={index}
                  className=" font-Outfit flex items-center gap-2"
                >
                  <FaUser className="text-2xl text-[#1DAF90]" />
                  <div>
                    <p className="font-bold text-[#1DAF90]">
                      {member.username}
                    </p>
                  </div>
                  <GoTrash
                    onClick={() => handleDeleteMember(index)}
                    className="hover:text-red-600"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={openMemberModal}
                className="flex gap-2 items-center text-lg text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] font-semibold border-2 border-[#1DAF90] px-2 py-1 rounded-md"
              >
                <AiOutlineUsergroupAdd className="text-3xl" />
                Añadir miembro
              </button>
              <div>
                <p className="text-red-600 text-sm">{error.members}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-4">
            <button className="text-xl text-[#1DAF90] hover:text-white font-semibold border-2 border-[#1DAF90] hover:bg-[#1DAF90] px-3 py-2 rounded-md">
              Crear equipo
            </button>

            <button
              onClick={closeModal}
              className="text-xl text-[#a1a1a1] hover:text-red-600 font-semibold border-2 border-[#a1a1a1] hover:border-red-600 px-3 py-2 rounded-md"
            >
              Descartar
            </button>
          </div>
        </form>
      </div>
      {showLiderModal && (
        <div className="absolute h-screen w-full">
          <PeopleSearchBar
            closeLiderModal={closeLiderModal}
            setLeader={setLeader}
            leader={leader}
          />
        </div>
      )}
      {showMemberModal && (
        <div className="absolute h-screen w-full">
          <MemberSearch
            closeMemberModal={closeMemberModal}
            setMember={setMember}
            member={member}
          />
        </div>
      )}
      {showProjectModal && (
        <div className="absolute h-screen w-full">
          <ProjectSearchModal
            closeProjectModal={closeProjectModal}
            setProject={setProject}
            project={project}
          />
        </div>
      )}
    </div>
  );
}

export default CreateTeam;
