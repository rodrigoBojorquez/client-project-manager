// EmployeesPage.jsx
import { useState } from "react";
import Sidebar from "../../Components/NavBar.jsx";
import CreateEmployees from "./Forms/CreateEmployees.jsx";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FiEdit } from "react-icons/fi";

const Empleados = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="font-Nunito mt-6 ml-8">
        <div className="w-full items-baseline flex gap-5">
          <h1 className="text-[65px] font-bold">Empleados</h1>
          <button
            onClick={openModal}
            className="flex items-center justify-center gap-2 text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] h-12 w-[8rem] rounded-xl"
          >
            <BsFillPlusCircleFill className="text-3xl" />
            <p className="text-xl font-bold">Nuevo</p>
          </button>
          {/*sin esto no saaale*/}
          {showModal && (
            <CreateEmployees closeModal={() => setShowModal(false)} />
          )}
        </div>

        <div className="flex items-center mt-10 ml-10">
          <input
            type="text"
            className="w-[400px] h-9 px-4 bg-[#EEE] rounded-s-md focus:outline-[#ccc]"
            placeholder="Buscar equipo/lider"
          />
          <HiMagnifyingGlass className="text-[#A1A1A1] text-md w-14 px-4 bg-[#eee] h-9 rounded-e-md" />
        </div>
        <div className="mt-5 ml-10 flex flex-col space-y-10 items-center justify-center">
          <table>
            <tr className="text-[#555] text-xl font-semibold">
              <th className="pr-[10rem] pb-4">Nombre de empleado</th>
              <th className="pr-[16rem] pb-4">Correo</th>
              <th className="pr-[4rem] pb-4">Especialidad</th>
              <td className="pr-[8rem] pb-4">&nbsp;</td>
            </tr>
            <tbody>
              <tr className="border-y border-[#999] h-12">
                <td>Rodrigo now</td>
                <td>2223303@example.com</td>
                <td>Full-stack</td>
                <td className="space-x-5">
                  <button className=" bg-[#1DAF90] text-white font-semibold py-1 px-4 rounded">
                    editar
                  </button>
                  <button className="bg-red-600 text-white font-semibold py-1 px-4 rounded">
                    eliminar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex gap-5">
            <button className="bg-white hover:bg-gray-100 text-gray-400 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Anterior
            </button>
            <button className="bg-white hover:bg-gray-100 text-black-500 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empleados;
