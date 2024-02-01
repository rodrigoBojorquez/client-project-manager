import { useState } from "react";

import PeopleSearchBar from "../PeopleSearchBar/PeopleSearchBar.jsx";

import { AiOutlineUsergroupAdd, AiOutlineUserAdd } from "react-icons/ai";
import { SlFolder } from "react-icons/sl";

const expresion = /^[^!@#$%^&*()_+{}[\]:;<>,.?~""''|°\\/-]/;

function CreateTeam({ closeModal }) {
  const [showLiderModal, setShowLiderModal] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [error, setError] = useState({ teamName: "" });

  const openLiderModal = () => {
    setShowLiderModal(true);
  };
  const closeLiderModal = () => {
    setShowLiderModal(false);
  };

  const handleChangeTeamName = (e) => {
    const { value } = e.target;
    setTeamName(value);
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      teamName: "",
    };

    if (teamName.trim() === "") {
      valid = false;
      newErrors.teamName = "Por favor, ingresa un nombre de equipo.";
    } else if (!expresion.test(teamName.trim())) {
      valid = false;
      newErrors.teamName =
        "El nombre no puede iniciar con caracteres especiales.";
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

  return (
    <div className="h-screen w-full flex justify-center items-center bg-black bg-opacity-65 backdrop-blur-sm font-Nunito">
      <div className="bg-white h-auto w-auto rounded-md grid">
        <form onSubmit={handleSubmit} className="flex flex-col m-10 gap-10">
          <h2 className="text-4xl font-semibold">Nuevo Equipo</h2>
          <div className="flex flex-col">
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
          <div className="flex gap-16">
            <div>
              <p className="text-xl text-[#666] font-semibold">Lider *</p>
              <button
                type="button"
                onClick={openLiderModal}
                className="flex gap-2 items-center text-lg text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] font-semibold border-2 border-[#1DAF90] px-2 py-1 rounded-md"
              >
                <AiOutlineUserAdd className="text-3xl" />
                Añadir lider
              </button>
            </div>
            <div>
              <p className="text-xl text-[#666] font-semibold">Proyecto</p>
              <button className="flex gap-2 items-center text-lg text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] font-semibold border-2 border-[#1DAF90] px-2 py-1 rounded-md">
                <SlFolder className="text-3xl" />
                Asignar proyecto
              </button>
            </div>
          </div>
          <div>
            <p className="text-xl text-[#666] font-semibold">Miembros *</p>
            <button
              type="button"
              onClick={openLiderModal}
              className="flex gap-2 items-center text-lg text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] font-semibold border-2 border-[#1DAF90] px-2 py-1 rounded-md"
            >
              <AiOutlineUsergroupAdd className="text-3xl" />
              Añadir miembro
            </button>
          </div>
          <div className="flex items-center justify-center m-10 gap-6">
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
          <PeopleSearchBar closeLiderModal={closeLiderModal} />
        </div>
      )}
    </div>
  );
}

export default CreateTeam;
