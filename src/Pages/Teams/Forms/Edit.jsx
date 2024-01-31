import { useState } from "react";

import { AiOutlineUsergroupAdd, AiOutlineUserAdd } from "react-icons/ai";
import { TfiReload } from "react-icons/tfi";
import { PiUserCircleLight } from "react-icons/pi";
import { GoTrash } from "react-icons/go";

function Edit({ closeModal, equipoData }) {
  if (!equipoData) {
    return null;
  }

  const { nombreEquipo, lider, miembros } = equipoData;

  // Local state for edits
  const [editedNombreEquipo, setEditedNombreEquipo] = useState(nombreEquipo);
  const [editedMiembros, setEditedMiembros] = useState([...miembros]);

  // Handle input changes
  const handleNombreEquipoChange = (e) => {
    setEditedNombreEquipo(e.target.value);
  };

  // Handle member deletion
  const handleDeleteMember = (index) => {
    const updatedMiembros = [...editedMiembros];
    updatedMiembros.splice(index, 1);
    setEditedMiembros(updatedMiembros);
  };

  // Handle member addition
  const handleAddMember = () => {
    // Implement your logic to add a new member
    const newMember = { nombre: "Nuevo Miembro", especialidad: "Especialidad" };
    setEditedMiembros([...editedMiembros, newMember]);
  };

  // Handle saving changes
  const handleSaveChanges = () => {
    // Update the actual team data with local edits
    const updatedTeamData = {
      ...equipoData,
      nombreEquipo: editedNombreEquipo,
      miembros: editedMiembros,
    };

    // Implement logic to save changes to the server or wherever necessary
    console.log("Updated Team Data:", updatedTeamData);

    // Close the modal
    closeModal();
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-black bg-opacity-65 backdrop-blur-sm font-Nunito">
      {/* Contenedor */}
      <div className="bg-white h-auto w-auto px-5 rounded-md overflow-hidden transition-all duration-300 ease-in-out">
        <form action="" className="flex flex-col m-5">
          <h2 className="text-4xl font-semibold mb-5">Editar Equipo</h2>
          <div className="flex flex-col">
            <label htmlFor="" className="text-xl text-[#666] font-semibold">
              Nombre del equipo *
            </label>
            <input
              type="text"
              value={editedNombreEquipo}
              onChange={handleNombreEquipoChange}
              className="w-[350px] h-8 px-2 outline-none border border-[#a9a9a9] rounded-md "
            />
          </div>
          <div className="my-6">
            <p className="text-xl text-[#666] font-semibold">Lider *</p>
            <div className="flex gap-6">
              <div className=" font-Outfit">
                <p className="font-bold">{lider}</p>
                <p className="text-[#888]">Lider de proyecto</p>
              </div>
              <button className="flex gap-2 items-center text- text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] font-semibold border-2 border-[#1DAF90] px-2 rounded-md">
                <TfiReload className="text-xl" />
                Cambiar
              </button>
            </div>
          </div>
          <div className="mb-5">
            <p className="text-xl text-[#666] font-semibold">Miembros *</p>
            <div className="mt-2 space-y-2 gap-x-10 grid grid-rows-3 grid-flow-col">
              {editedMiembros.map((miembro, index) => (
                <div
                  key={index}
                  className=" font-Outfit flex items-center gap-2"
                >
                  <PiUserCircleLight className="text-4xl" />
                  <div>
                    <p className="font-bold">{miembro.nombre}</p>
                    <p className="text-[#888]">{miembro.especialidad}</p>
                  </div>
                  <GoTrash
                    onClick={() => handleDeleteMember(index)}
                    className="hover:text-red-600"
                  />
                </div>
              ))}
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
          <div className="flex items-center justify-center gap-6 mt-5">
            <button
              onClick={handleSaveChanges}
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
    </div>
  );
}

export default Edit;
