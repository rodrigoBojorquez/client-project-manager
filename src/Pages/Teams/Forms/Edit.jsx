import React, { useState } from "react";

import { AiOutlineUsergroupAdd, AiOutlineUserAdd } from "react-icons/ai";
import { TfiReload } from "react-icons/tfi";
import { PiUserCircleLight } from "react-icons/pi";
import { GoTrash } from "react-icons/go";
import { SlFolder } from "react-icons/sl";
import axiosClient from "../../../../axiosConfig";
import MemberSearch from "../EditModals/MemberSearch";
import LeaderSearchBar from "../EditModals/LeaderSearchBar"
import ProjectSearchModal from "../EditModals/ProjectSearchModal";

function Edit({ closeModal, equipoData, getTeams }) {
  // Local state for edits
  const [formData, setFormData] = useState({ ...equipoData });
  const [showPeopleSearch, setShowPeopleSearch] = useState(false);
  const [showLeaderSearch, setShowLeaderSearch] = useState(false);
  const [showProjectSearch, setShowProjectSearch] = useState(false);

  // Handle member deletion
  const handleDeleteMember = (id_user) => {
    const updatedMembers = formData.team_members_info.filter(
      (miembro) => miembro.id_user !== id_user
    );
    setFormData({
      ...formData,
      team_members_info: updatedMembers,
    });
  };

  // Handle member addition
  const handleAddMember = () => {
    setShowPeopleSearch(true);
  };

  const handleEditTeam = (e, id) => {
    e.preventDefault();
    const membersArr = formData.team_members_info.map(
      (member) => member.id_user
    );
    const formatedInfo = {
      teamName: formData.team_name,
      projectId: formData.project_info.id_project,
      leaderId: formData.leader_id,
      members: membersArr,
    };
    // console.log(id)
    axiosClient
      .put(`/team/${id}`, formatedInfo)
      .then((res) => {
        console.log(res);
        getTeams();
        closeModal();
      })
      .catch((err) => {
        console.error(err);
      });
    // console.log(formatedInfo)
  };

  // Handle saving changes
  const handleSaveChanges = () => {
    closeModal();
  };

  return (
    <div className="h-screen w-full z-10 flex justify-center items-center bg-black bg-opacity-65 backdrop-blur-sm font-Nunito">
      {/* Contenedor */}
      <div className="bg-white h-auto w-auto p-5 rounded-md overflow-hidden transition-all duration-300 ease-in-out">
        <form onSubmit={handleEditTeam} className="flex flex-col m-5">
          <h2 className="text-4xl font-semibold mb-5 text-center">Editar Equipo</h2>
          <div className="flex flex-col mb-5">
            <label htmlFor="" className="text-xl text-[#666] font-semibold">
              Nombre del equipo *
            </label>
            <input
              type="text"
              value={formData.team_name}
              onChange={(e) =>
                setFormData({ ...formData, team_name: e.target.value })
              }
              className="w-[350px] h-8 px-2 outline-none border border-[#a9a9a9] rounded-md "
            />
          </div>

          <div className="grid grid-cols-2 gap-x-7">
            <div className="">
              <div>
                <p className="text-xl text-[#666] font-semibold">Lider *</p>
                <div className="flex gap-6">
                  <div className=" font-Outfit">
                    <p className="font-bold">{formData.leader_username}</p>
                    <p className="text-[#888]">Lider de proyecto</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowLeaderSearch(true)}
                    className="flex gap-2 items-center text-md text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] font-semibold border-2 border-[#1DAF90] px-2 rounded-md"
                  >
                    <TfiReload className="text-xl" />
                    Cambiar
                  </button>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-xl text-[#666] font-semibold">Proyecto</p>
                <div className="flex items-center gap-x-5">
                  <div>
                    <p className="font-bold">
                      {formData.project_info.project_name}
                    </p>
                  </div>
                  <button
                    onClick={setShowProjectSearch}
                    className="flex gap-2 items-center text-md text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] font-semibold border-2 border-[#1DAF90] px-2 py-2 rounded-md"
                  >
                    <TfiReload className="text-xl font-semibold" />
                    Cambiar
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <p className="text-xl text-[#666] font-semibold">Miembros *</p>
              <div className="mt-2 space-y-2 gap-x-10 grid grid-rows-3 grid-flow-col">
                {formData.team_members_info &&
                formData.team_members_info !== null ? (
                  formData.team_members_info.map((miembro) => (
                    <div
                      key={miembro.id_user}
                      className="font-Outfit flex items-center gap-2"
                    >
                      <PiUserCircleLight className="text-4xl" />
                      <div>
                        <p className="font-bold">{miembro.username}</p>
                        <p className="text-[#888]">{miembro.speciality}</p>
                      </div>
                      <GoTrash
                        onClick={() => handleDeleteMember(miembro.id_user)}
                        className="hover:text-red-600"
                      />
                    </div>
                  ))
                ) : (
                  <p className="text-[#888]">No hay miembros por ahora</p>
                )}

                <button
                  type="button"
                  onClick={handleAddMember}
                  className="flex gap-2 mt-5 items-center text-lg text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] font-semibold border-2 border-[#1DAF90] px-2 py-1 rounded-md"
                >
                  <AiOutlineUsergroupAdd className="text-3xl" />
                  Añadir miembro
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-5">
            <button
              onClick={(e) => handleEditTeam(e, formData.id_team)}
              type="submit"
              className="text-xl text-[#1DAF90] hover:text-white font-semibold border-2 border-[#1DAF90] hover:bg-[#1DAF90] px-3 py-2 rounded-md"
            >
              Guardar
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

      {showLeaderSearch ? (
        <div className="absolute w-full">
          <LeaderSearchBar
            setShowLeaderSearch={setShowLeaderSearch}
            setFormData={setFormData}
            formData={formData}
          />
        </div>
      ) : null}

      {showPeopleSearch ? (
        <div className="absolute w-full">
          <MemberSearch
            setShowPeopleSearch={setShowPeopleSearch}
            setFormData={setFormData}
            formData={formData}
          />
        </div>
      ) : null}

      {showProjectSearch ? (
        <div className="absolute w-full">
          <ProjectSearchModal
            setShowProjectSearch={setShowProjectSearch}
            setFormData={setFormData}
            formData={formData}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Edit;
