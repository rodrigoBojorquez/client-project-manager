import { AiOutlineUsergroupAdd, AiOutlineUserAdd } from "react-icons/ai";
import { SlFolder } from "react-icons/sl";

function CreateTeam({ closeModal }) {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-black bg-opacity-65 backdrop-blur-sm font-Nunito">
      <div className="bg-white h-auto w-auto rounded-md grid">
        <form action="" className="flex flex-col m-10 gap-10">
          <h2 className="text-4xl font-semibold">Nuevo Equipo</h2>
          <div className="flex flex-col">
            <label htmlFor="" className="text-xl text-[#666] font-semibold">
              Nombre del equipo *
            </label>
            <input
              type="text"
              className="w-[350px] h-8 px-2 outline-none border border-[#a9a9a9] rounded-md "
            />
          </div>
          <div className="flex gap-16">
            <div>
              <p className="text-xl text-[#666] font-semibold">Lider *</p>
              <button className="flex gap-2 items-center text-lg text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] font-semibold border-2 border-[#1DAF90] px-2 py-1 rounded-md">
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
            <button className="flex gap-2 items-center text-lg text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] font-semibold border-2 border-[#1DAF90] px-2 py-1 rounded-md">
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
    </div>
  );
}

export default CreateTeam;
