import { useState } from "react";

const CreateProject = ({closeCreateProjectModanl}) => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-black bg-opacity-65 backdrop-blur-sm">
      <div className="bg-white w-[850px] h-auto font-Nunito flex flex-col justify-center p-10 gap-10 rounded-lg">
        <p className="text-4xl font-bold">Crear proyecto</p>
        <form action="" className="text-[#666] flex gap-20 text-xl font-semibold">
          <div className="space-y-5">
            <div className="flex flex-col">
              <label htmlFor="">Nombre del proyecto</label>
              <input
                type="text"
                className="text-base px-2 py-1 outline-[#666] border-2 border-[#a9a9a9]  rounded"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Descripción</label>
              <textarea
                name=""
                id=""
                cols="40"
                rows="16"
                className="border-2 border-[#a9a9a9] text-base p-2 outline-[#666] rounded-md"
                placeholder="Detalles del proyecto"
              ></textarea>
            </div>
          </div>
          <div className="flex flex-col p-5 w-full">
            <div className="flex flex-col gap-3 justify-center mb-16">
              <p>Materiales *</p>
              <div className="flex flex-col justify-center items-center w-full gap-5">
                <table className="">
                  <tr className="text-lg font-semibold">
                    <td className="pr-32">Nombre</td>
                    <td className="">Cantidad</td>
                  </tr>
                  <tr className="text-sm border-y border-[#999] h-10">
                    <td>Nombre del material</td>
                    <td>0</td>
                  </tr>
                </table>
                <button className=" font-semibold border-2 border-[#1DAF90] text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] rounded-md px-3">
                  Agregar
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <p>Estado del proyecto</p>
              <select
                name=""
                id=""
                className=" outline-none border-2 border-[#a9a9a9] rounded-md text-base text-center"
              >
                <option value="">Selecciona el estado</option>
                <option value="" className="text-[#1DAF90]">
                  Completado
                </option>
                <option value="" className="text-[#FF9900]">
                  En curso
                </option>
                <option value="" className="text-[#FF0000]">
                  Pendiente
                </option>
              </select>
            </div>
            <div className="mt-32 space-x-10 flex items-center justify-center">
              <button className=" rounded-md text-semibold border-2 border-[#1DAF90] text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] px-3 py-1">
                Crear
              </button>
              <button onClick={closeCreateProjectModanl} className=" rounded-md border-2 text-semibold border-[#a9a9a9] hover:text-white hover:bg-red-600 px-3 py-1">
                Descartar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
