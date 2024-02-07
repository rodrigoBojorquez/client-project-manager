// EmployeesPage.jsx
import axios from "../../../axiosConfig.js";
import React,{ useState, useEffect } from "react";

import Sidebar from "../../Components/NavBar.jsx";
import CreateMaterials from "./Forms/CreateMaterials.jsx";
import EditMaterials from "./Forms/EditMaterials.jsx";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { HiMagnifyingGlass } from "react-icons/hi2";
import axiosClient from "../../../axiosConfig.js";

const Materiales = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("")

  const [showModalEdit, setShowModalEdit] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [loading, setLoading] = useState(false); 


  const getData = async () => {
    axiosClient
      .get(`/warehouse?page=${page}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
      axios.delete(`/warehouse/${itemToDelete.id_material}`);
      const updateData = data.filter(
        (item) => item.id_material !== itemToDelete.id_material
      );
      setData(updateData);
      closeConfirtation();
    } catch (error) {
      console.error("Error al eliminar", error.message);
    }
  };

  const handleSearch = () => {
    setPage(1);
    if (search.trim().length >= 3) {
      setPage(1)
      axiosClient.get(`/warehouse?page=${page}&search=${search}`)
        .then((res) => {
          // console.log(res)
        setData(res.data.data);
        })
        .catch(err => {
          console.error(err)
        })
    } else {
      getData();
    }
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = async () => {
    setPage(page + 1)
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="font-Nunito mt-6 w-full mx-10">
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
            <CreateMaterials closeModal={() => setShowModal(false)} getData={getData} />
          )}
        </div>
        <div className="flex items-center mt-5">
          <input
            type="text"
            className="w-[400px] h-9 px-4 bg-[#EEE] rounded-s-md focus:outline-[#ccc]"
            placeholder="Buscar material"
            onChange={e => setSearch(e.target.value)}
            value={search}
          />
          <button onClick={handleSearch}>
            <HiMagnifyingGlass className="text-[#A1A1A1] text-md w-14 px-4 bg-[#eee] h-9 rounded-e-md" />
          </button>
        </div>
        <div className="mt-3 flex items-center justify-center">
          {data ? (
            <table className="mt-5 w-full">
              <tr className="text-[#555] text-xl font-semibold">
                <th className="">Nombre del material</th>
                <th className="">Cantidad</th>
                <th className="">Acciones</th>
              </tr>
              <tbody>
                {data.map((item) => (
                  <tr
                    key={item.id_material}
                    className="border-y border-[#999] h-12"
                  >
                    <td className="text-center">{item.material_name}</td>
                    <td className="text-center">{item.quantity} unidades</td>
                    <td className="">
                      <div className="flex gap-x-3 justify-center">
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
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-4xl font-semibold text-[#A1A1A1] ml-[14rem] mt-[12rem]">
              No se encontro ningun resultado
            </p>
          )}
        </div>
        <div className="flex gap-x-3 mt-5 justify-center">
          <button
            className={`bg-white px-5 py-1 border-[1.5px] font-semibold border-gray-300 rounded-md ${
              page == 1 && "bg-gray-100 text-gray-400"
            }`}
            disabled={page == 1}
            onClick={handlePreviousPage}
          >
            Anterior
          </button>
          <button
            className={`bg-white px-5 py-1 border-[1.5px] font-semibold border-gray-300 rounded-md ${
              data?.length < 10 && "bg-gray-100 text-gray-400"
            }`}
            disabled={data.length < 10}
            onClick={handleNextPage}
          >
            Siguiente
          </button>
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
            getData={getData}
          />
        </div>
      )}
    </div>
  );
};

export default Materiales;
