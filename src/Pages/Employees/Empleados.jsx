// EmployeesPage.jsx
import { useEffect, useState } from "react";
import Sidebar from "../../Components/NavBar.jsx";
import CreateEmployees from "./Forms/CreateEmployees.jsx";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FiEdit } from "react-icons/fi";
import axiosClient from "../../../axiosConfig.js";

const Empleados = () => {
  const [showModal, setShowModal] = useState(false);
  const [rol, setRol] = useState("")
  const [page, setPage] = useState(1)
  const [users, setUsers] = useState([])

  const openModal = () => {
    setShowModal(true);
  };

  const getUsers = () => {
    axiosClient.get(`/employees`)
      .then(res => {
        // console.log(res.data)
        setUsers(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  const deleteUser = (id) => {
    axiosClient.delete(`/user/${id}`)
      .then(res => {
        alert("Usuario elminado")
        getUsers()
      })
      .catch(err => {
        console.error(err)
      })
  }
  
  useEffect(() => {
    getUsers()
  }, [])

  const handlePreviousPage = () => {
    setPage(page - 1);
  };
  
  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handleSearch = () => {
    setPage(1);
    if (search.trim().length >= 3) {
      axiosClient.get(`/employee?page=${page}&search=${search}`).then((res) => {
          const formattedProjects = res.data.data.map((project) => ({
            ...project,
            create_date: formatDate(project.create_date),
          }));

          setTeams(formattedProjects);
      });
    } else {
      getProjects();
    }
  }

  useEffect(() => {
    console.log(users); 
  }, [users]);

  useEffect(() => {
    getUsers()
  }, [page])


  return (
    <div className="flex">
      <Sidebar />
      <div className="font-Nunito mt-6 mx-5 w-full">
        <div className="w-full items-baseline flex gap-5 px-5">
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

        <div className="flex items-center mt-5 px-5">
          <input
            type="text"
            className="w-[400px] h-9 px-4 bg-[#EEE] rounded-s-md focus:outline-[#ccc]"
            placeholder="Buscar equipo/lider"
          />
          <button onClick={handleSearch}>
            <HiMagnifyingGlass className="text-[#A1A1A1] text-md w-14 px-4 bg-[#eee] h-9 rounded-e-md" />
          </button>
        </div>
        <div className="mt-5 ml-10 flex flex-col space-y-10 items-center justify-center">
          <table className="w-full">
            <tr className="text-[#555] text-xl font-semibold">
              <th className="text-center pb-2">Nombre</th>
              <th className="text-center">Correo</th>
              <th className="text-center">Especialidad</th>
              <td className="text-center">Acciones</td>
            </tr>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id} className="border-y border-[#999] h-12">
                    <td className="text-center">{user.username}</td>
                    <td className="text-center">{user.email}</td>
                    <td className="text-center">{user.workload ? user.workload : "N/A"}</td>
                    <td className=" space-x-5">
                      <div className="flex gap-x-2 justify-center">
                        <button className=" bg-[#1DAF90] text-white font-semibold py-1 px-4 rounded">
                          editar
                        </button>
                        <button onClick={() => deleteUser(user.id_user)} className="bg-red-600 text-white font-semibold py-1 px-4 rounded">
                          eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="text-4xl font-semibold text-[#A1A1A1] ml-[14rem] mt-[12rem]"
                  >
                    No se encontró ningún resultado
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="flex gap-x-3 mt-5 justify-center">
          <button
            className={`bg-white px-5 py-1 border-[1.5px] font-semibold border-gray-300 rounded-md ${page == 1 && "bg-gray-100 text-gray-400"}`}
            disabled={page == 1}
            onClick={handlePreviousPage}
          >
            Anterior
          </button>
          <button
            className={`bg-white px-5 py-1 border-[1.5px] font-semibold border-gray-300 rounded-md ${users.length <10 && "bg-gray-100 text-gray-400"}`}
            disabled={users.length < 10}
            onClick={handleNextPage}
          >
            Siguiente
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Empleados;
