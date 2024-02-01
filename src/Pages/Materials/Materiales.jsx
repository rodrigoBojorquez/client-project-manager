// EmployeesPage.jsx
import { useState } from "react";
import Sidebar from "../../Components/NavBar.jsx";
import CreateMaterials from "./Forms/CreateMaterials.jsx";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { HiMagnifyingGlass } from "react-icons/hi2";

const normalizeString = (str) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const Materiales = () => {
  const [search, setSearch] = useState("");

  // const searchMaterials = (e) => {
  //   setSearch(normalizeString(e.target.value));
  // };

  // //Metodo para filtrar por nombre
  // const results = !search
  //   ? equipos
  //   : equipos.filter(
  //       (dato) =>
  //         normalizeString(dato.nombreEquipo).includes(search) ||
  //         normalizeString(dato.lider).includes(search)
  //     );

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="font-Nunito mt-6 ml-8">
        <div className="w-full items-baseline flex gap-5">
          <h1 className="text-[65px] font-bold">Materiales</h1>
          <button
            onClick={openModal}
            className="flex items-center justify-center gap-2 text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] h-12 w-[8rem] rounded-xl"
          >
            <BsFillPlusCircleFill className="text-3xl" />
            <p className="text-xl font-bold">Nuevo</p>
          </button>
          {showModal && (
            <CreateMaterials closeModal={() => setShowModal(false)} />
          )}
        </div>
        <div className="flex items-center mt-8 ml-10">
          <input
            type="text"
            className="w-[400px] h-9 px-4 bg-[#EEE] rounded-s-md focus:outline-[#ccc]"
            placeholder="Buscar material"
          />
          <HiMagnifyingGlass className="text-[#A1A1A1] text-md w-14 px-4 bg-[#eee] h-9 rounded-e-md" />
        </div>
        <div className="mt-5 ml-10 flex items-center justify-center">
          <table>
            <tr className="text-[#555] text-xl font-semibold">
              <th className="pr-[14rem] pb-4">Nombre del material</th>
              <th className="pr-[18rem] pb-4">Cantidad</th>
              <th className="pr-[4rem] pb-4">&nbsp;</th>
            </tr>
            <tbody>
              <tr className="border-y border-[#999] h-12">
                <td>Laptop Huawei</td>
                <td>50 unidades</td>
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
        </div>
      </div>
    </div>
  );
};

export default Materiales;
