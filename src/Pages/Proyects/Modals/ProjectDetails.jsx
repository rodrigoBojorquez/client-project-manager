import React from "react";

const ProjectDetails = ({ closeProjecDetails }) => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-black bg-opacity-65 backdrop-blur-sm">
      <div className="bg-white w-[850px] h-auto font-Nunito flex flex-col justify-center p-10 gap-10 rounded-lg">
        <p className="text-4xl font-bold">Crear proyecto</p>
        <form
          action=""
          className="text-[#666] flex gap-20 text-xl font-semibold"
        >
          <div className="space-y-5">
            <div className="flex flex-col">
              <label htmlFor="">Nombre del proyecto</label>
              <div className="text-base px-2 py-1 outline-[#666] border-2 border-[#a9a9a9]  rounded" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Descripción</label>
              <div className="border-2 border-[#a9a9a9] text-base p-2 outline-[#666] rounded-md"></div>
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
              </div>
            </div>
            <div className="flex flex-col">
              <p>Estado del proyecto</p>
              <div>p</div>
            </div>
            <div className="mt-32 space-x-10 flex items-center justify-center">
              <button
                onClick={closeProjecDetails}
                className=" rounded-md text-semibold border-2 border-[#1DAF90] text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] px-3 py-1"
              >
                Cerrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectDetails;
