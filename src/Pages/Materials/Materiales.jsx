// EmployeesPage.jsx
import axios from "../../../axiosConfig.js";
import React,{ useState, useEffect } from "react";

import Sidebar from "../../Components/NavBar.jsx";
import CreateMaterials from "./Forms/CreateMaterials.jsx";
import EditMaterials from "./Forms/EditMaterials.jsx";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { HiMagnifyingGlass } from "react-icons/hi2";

const normalizeString = (str) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const Materiales = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const [showModalEdit, setShowModalEdit] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "/warehouse?page=1"
        );
        setData(response.data.data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const openModalEdit = (item) => {
    setItemToEdit(item);
    setShowModalEdit(true);
  };
  const closeModalEdit = () => {
    setItemToEdit(null);
    setShowModalEdit(false);
  };

  const openConfirmation = (item) => {
    setItemToDelete(item);
    setShowConfirmation(true);
  };
  const closeConfirtation = () => {
    setItemToDelete(null);
    setShowConfirmation(false);
  };

  const handleDelete = async () => {
    try {
      axios.delete(
        `http://localhost:8000/project-manager/warehouse/${itemToDelete.id_material}`
      );
      const updateData = data.filter(
        (item) => item.id_material !== itemToDelete.id_material
      );
      setData(updateData);
      console.log("Material eliminado");
      closeConfirtation();
    } catch (error) {
      console.error("Error al eliminar", error.message);
    }
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
          {data.length === 0 ? (
            <div>
              <p className="text-xl text-[#666] font-bold">
                No hay materiales. Agrega uno
              </p>
            </div>
          ) : (
            <table className="mt-5">
              <tr className="text-[#555] text-xl font-semibold">
                <th className="pr-[14rem] pb-4">Nombre del material</th>
                <th className="pr-[18rem] pb-4">Cantidad</th>
                <th className="pr-[4rem] pb-4">&nbsp;</th>
              </tr>
              <tbody>
                {data.map((item) => (
                  <tr
                    key={item.id_material}
                    className="border-y border-[#999] h-12"
                  >
                    <td>{item.material_name}</td>
                    <td>{item.quantity} unidades</td>
                    <td className="space-x-5">
                      <button
                        onClick={() => openModalEdit(item)}
                        className="bg-[#1DAF90] text-white font-semibold py-1 px-4 rounded"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => openConfirmation(item)}
                        className="bg-[#FF6868] text-white font-semibold py-1 px-4 rounded"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      {showConfirmation && (
        <div className="absolute h-screen w-full bg-black bg-opacity-65 flex justify-center items-center">
          <div className="bg-white w-[400px] h-[250px] flex flex-col items-center justify-center gap-12 rounded-xl">
            <p className="font-semibold text-2xl text-center">
              ¿Estas seguro de eliminar este elemento?
            </p>
            <div className="flex gap-10 font-semibold">
              <button
                onClick={handleDelete}
                className="bg-[#1DAF90] hover:bg-[#038554] px-6 py-1 rounded-md text-white text-xl"
              >
                Si
              </button>
              <button
                onClick={() => {
                  closeConfirtation();
                }}
                className="hover:bg-red-600 border-2 border-[#666] hover:border-red-600 px-5 py-1 rounded-md text-[#666] hover:text-white text-xl"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
      {showModalEdit && (
        <div className="w-full h-screen absolute">
          <EditMaterials
            itemToEdit={itemToEdit}
            closeModalEdit={() => setShowModalEdit(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Materiales;
