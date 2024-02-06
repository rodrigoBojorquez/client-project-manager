import React, { useEffect, useState } from "react";
import axiosClient from "../../../../axiosConfig";
import Swal from 'sweetalert2';

const ProjectDetails = ({ closeProjecDetails, dataFromMainScreen }) => {
  const [editedProjectState, setEditedProjectState] = useState('');
  const [editedProjectName, setEditedProjectName] = useState(
    dataFromMainScreen.project_name
  );
  const [editedProjectDescription, setEditedProjectDescription] = useState(
    dataFromMainScreen.project_description
  );
  const [editedMaterials, setEditedMaterials] = useState([]);

  console.log(dataFromMainScreen);
  useEffect(() => {
    if (dataFromMainScreen.assigned_materials) {
      setEditedMaterials([...dataFromMainScreen.assigned_materials]);
    }
  }, [dataFromMainScreen.assigned_materials]);

  const states = [
    { id: 1, state: "En proceso" },
    { id: 2, state: "Finalizado" },
    { id: 3, state: "Cancelado" },
    { id: 4, state: "En pausa" },
  ];

 // Función para obtener el estado por su ID
 const getStateById = (id) => {
  return states.find((item) => item.id === id) || { id: "", state: "" };
};

// Función para manejar el cambio de estado del proyecto
const handleStateChange = (e) => {
  const { value } = e.target;
  setEditedProjectState(parseInt(value));
};

// Función para manejar el cambio en los detalles del material
const handleMaterialChange = (index, key, value) => {
  const updatedMaterials = [...editedMaterials];
  updatedMaterials[index][key] = value;
  setEditedMaterials(updatedMaterials);
};


  const handleSaveChanges = async () => {
    try {
      // Muestra el alert antes de realizar la solicitud
      const result = await Swal.fire({
        title: "Seguro que quiere guardar cambios?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Guardar",
        denyButtonText: `Cancelar`
      });

      // Si el usuario confirma, realiza la solicitud para actualizar los detalles del proyecto
      if (result.isConfirmed) {
        const response = await axiosClient.put(
          `/projects/${dataFromMainScreen.id_project}`,
          {
            id_project: dataFromMainScreen.id_project,
            project_name: editedProjectName,
            project_description: editedProjectDescription,
            project_state_fk: editedProjectState, 
            materials: editedMaterials,
          }
        );

        // Puedes manejar la respuesta según tus necesidades
        console.log(response);

        // window.reload();
        // Muestra el mensaje de éxito después de actualizar
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        // Si el usuario deniega, muestra un mensaje informativo
        Swal.fire("Changes are not saved", "", "info");
      }
    } catch (error) {
      // Maneja cualquier error que ocurra durante el proceso
      console.error("Error al actualizar el proyecto:", error);
      Swal.fire("Error", "Error al actualizar el proyecto", "error");
    }
  };

  return (
    <div className="h-screen w-full absolute flex justify-center items-center bg-black bg-opacity-65 backdrop-blur-sm">
      <div className="bg-white w-[850px] h-auto font-Nunito flex flex-col justify-center p-10 gap-10 rounded-lg">
        <p className="text-4xl font-bold">Detalles del proyecto</p>

        <form
          action=""
          className="text-[#666] flex gap-20 text-xl font-semibold"
        >
          <div className="space-y-5">
            <div className="flex flex-col">
              <label htmlFor="">Nombre del proyecto</label>
              <input
                type="text"
                value={editedProjectName}
                onChange={(e) => setEditedProjectName(e.target.value)}
                className="text-base px-2 py-1 outline-[#666] border-2 border-[#a9a9a9]  rounded"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Descripción</label>
              <input
                type="text"
                value={editedProjectDescription}
                onChange={(e) => setEditedProjectDescription(e.target.value)}
                className="text-base px-2 py-1 outline-[#666] border-2 border-[#a9a9a9]  rounded"
              />
            </div>
          </div>
          <div className="flex flex-col p-5 w-full">
            <div className="flex flex-col gap-3 justify-center mb-16">
              <p>Materiales *</p>
              <div className="flex flex-col justify-center items-center w-full gap-5">
                <table>
                  <thead>
                    <tr className="text-lg font-semibold">
                      <td className="pr-32">Nombre</td>
                      <td className="">Cantidad</td>
                    </tr>
                  </thead>
                  <tbody>
                    {!editedMaterials.length ? (
                      <tr className="text-sm border-y border-[#999] h-10">
                        <td colSpan="2">No tiene materiales</td>
                      </tr>
                    ) : (
                      editedMaterials.map((material, index) => (
                        <tr
                          className="text-sm border-y border-[#999] h-10"
                          key={index}
                        >
                          <td>
                            <input
                              value={material.material_name}
                              onChange={(e) =>
                                handleMaterialChange(
                                  index,
                                  "material_name",
                                  e.target.value
                                )
                              }
                            />  
                          </td>
                          <td>
                            <input
                              value={material.quantity}
                              onChange={(e) =>
                                handleMaterialChange(
                                  index,
                                  "quantity",
                                  e.target.value
                                )
                              }
                            />
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex flex-col">
              <p>Estado del proyecto</p>
              <div className="w-full">
                <select value={editedProjectState}
                  onChange={handleStateChange} className="w-full text-center border-[1.5px] border-[#a9a9a9] outline-none rounded-md px-2 py-1">
                  {states.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.state}
                    </option>
                  ))}
                </select>
                {/* <p className="text-sm text-red-600">{error.state}</p> */}
              </div>
            </div>

            <div className="mt-32 space-x-10 flex items-center justify-center">
              <button
                type="button"
                onClick={handleSaveChanges}
                className="rounded-md text-semibold border-2 border-[#1DAF90] text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] px-3 py-1"
              >
                Guardar Cambios
              </button>
              <button
                onClick={closeProjecDetails}
                className="flex gap-2 items-center text-lg text-[#666] hover:text-white hover:bg-red-600 font-semibold border-2 border-[#666] hover:border-red-600 px-2 py-1 rounded-md"
              >
                Descartar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectDetails;
