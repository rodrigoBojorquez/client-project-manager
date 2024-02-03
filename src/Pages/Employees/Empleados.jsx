// EmployeesPage.jsx
import { useEffect, useState, useContext } from "react";
import Sidebar from "../../Components/NavBar.jsx";
import CreateEmployees from "./Forms/CreateEmployees.jsx";
import EditEmployees from "./Forms/Edit.jsx";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { HiMagnifyingGlass } from "react-icons/hi2";
import axiosClient from "../../../axiosConfig.js";
import Swal from "sweetalert2";
import GlobalContext from "../../store/context.js";

import { FiEdit } from "react-icons/fi";

const Empleados = () => {
  const {userData} = useContext(GlobalContext)
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1)
  const [users, setUsers] = useState([])
  const [showModalE, setShowModalE] = useState(false);
  const [showEmployees, setShowEmployees] = useState([]);
  const [editUser, setEditUser] = useState([]);
  const userRol = userData.role_name

  const openModal = () => {
      setShowModal(true);
  };
  

   const getEmployes = async() => {
    const response = await axiosClient.get('/employees');
    setShowEmployees(response.data);
    // console.log(response.data);
   };


   const deleteEmployees = async(id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
           await axiosClient.delete(`/user/${id}`);
           getEmployes();
        } catch (error) {
          console.error("Error deleting medication:", error);
          Swal.fire({
            title: "Error!",
            text: "An error occurred while deleting medication.",
            icon: "error"
          });
        }
      }
    });
    
   }
   
   const openModalE = (employe) => {
    
    setEditUser(employe);
    setShowModalE(true);
  };

   useEffect(() => {
    getEmployes();
   },[])

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
        getUsers()
        alert("Usuario elminado")
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
      getUsers();
    }
  }

  useEffect(() => {
    getUsers()
  }, [page])


  return (
    <div className="flex">
      <Sidebar />
      <div className="font-Nunito py-5 px-10 w-full">
        <div className="w-full items-baseline flex gap-5">
          <h1 className="text-[65px] font-bold">Empleados</h1>
          <button
            onClick={openModal}
            id="nuevo"
            className="flex items-center justify-center gap-2 text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] h-12 w-[8rem] rounded-xl"
          >
            <BsFillPlusCircleFill className="text-3xl" />
            <p className="text-xl font-bold">Nuevo</p>
          </button>
          {/*sin esto no saaale*/}
          {showModal && (
            <CreateEmployees  closeModal={() => setShowModal(false)} />
          )}
          {showModalE &&  <EditEmployees dataFromMainScreen={editUser} closeModal={() => setShowModalE(false)} />}
        </div>

        <div className="flex items-center mt-5">
          <input
            type="text"
            className="w-[400px] h-9 px-4 bg-[#EEE] rounded-s-md focus:outline-[#ccc]"
            placeholder="Buscar equipo/lider"
          />
          <button onClick={handleSearch}>
            <HiMagnifyingGlass className="text-[#A1A1A1] text-md w-14 px-4 bg-[#eee] h-9 rounded-e-md" />
          </button>
        </div>
        <div className="mt-5 flex flex-col space-y-10 items-center justify-center">
          <table className="w-full">
            <tr className="text-[#555] text-xl font-semibold">
              <th className="text-center pb-2">Nombre</th>
              <th className="text-center">Correo</th>
              <th className="text-center">Especialidad</th>
              <td className="text-center">Acciones</td>
            </tr>
            <tbody>
              {showEmployees.map((employe) => (

                <tr className="border-y border-[#999] h-12" key={employe.id_user}>
                <td className="text-center">{employe.username}</td>
                <td className="text-center">{employe.email}</td>
                <td className="text-center">{employe.speciality}</td>
                <td className="">
                  <div className="flex gap-x-3 justify-center">
                  <button
                        onClick={() => openModalE(employe)}
                        className={`bg-[#1DAF90] text-white px-3 py-1 rounded-md text-sm ${
                          !(
                            userRol === "administrator" ||
                            userRol === "employee" ||
                            userRol === "team leader"
                          )
                            ? "hidden"
                            : ""
                        }`}
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => deleteUser(employe.id_user)}
                        className={`bg-red-400 text-white px-3 py-1 rounded-md text-sm ${
                          userRol !== "administrator" ? "hidden" : ""
                        }`}
                        // onClick={}
                      >
                        Eliminar
                      </button>
                  </div>
                </td>
              </tr>
                ))}
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
