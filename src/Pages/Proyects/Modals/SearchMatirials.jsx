import { useEffect, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoPersonCircleOutline } from "react-icons/io5";
import axiosClient from "../../../../axiosConfig";

const SearchMaterials = ({ closeModalMatirials, setProyecto, proyecto }) => {
  const [search, setSearch] = useState("");
  const [materials, setMaterials] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [assignedQuantity, setAssignedQuantity] = useState(0);

  const getMaterials = () => {
    axiosClient.get(`/warehouse?page=1`)
      .then(res => {
        setMaterials(res.data.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleSearch = () => {
    const encodedSearchTerm = encodeURIComponent(search);

    if (encodedSearchTerm.trim().length === 0) {
      getMaterials();
    } else {
      axiosClient.get(`/warehouse?page=1&search=${encodedSearchTerm}`)
        .then(res => {
          setMaterials(res.data.data);
        })
        .catch(err => {
          console.error(err);
        });
    }
  };

  const handleMaterialClick = (material) => {
    setSelectedMaterial(material);
    setAssignedQuantity(0); // Reset assigned quantity
  };

  // const handleAddMaterial = () => {
  //   if (selectedMaterial) {
  //     if (assignedQuantity != NaN && (assignedQuantity <= selectedMaterial.available_quantity) ) {
  //       const newMaterial = {
  //         material:  selectedMaterial,
  //         quantity: assignedQuantity
  //       }
  //       setProyecto(prevProject => ({...prevProject, materiales: [...prevProject.materiales, newMaterial]}))
  //     }
  //     // console.log(proyecto)
  //     setSelectedMaterial(null);
  //     setAssignedQuantity(0);
  //     closeModalMatirials();
  //   }
  // };

  useEffect(() => {
    getMaterials();
  }, []);

  return (
    <div className="bg-black h-screen w-full flex flex-col items-center justify-center bg-opacity-65">
      <div className="font-Nunito flex flex-col items-center bg-white w-[400px] h-[500px] rounded-lg p-5">
        <div className="flex items-center">
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            className="w-[300px] h-9 px-4 bg-[#EEE] rounded-s-md focus:outline-[#ccc]"
            placeholder="Buscar material"
          />
          <button onClick={handleSearch}>
            <HiMagnifyingGlass className="text-[#A1A1A1] text-md w-14 px-4 bg-[#eee] h-9 rounded-e-md" />
          </button>
        </div>
        {materials.length > 0 ? (
          <>
            <ul className="flex flex-col overflow-y-auto h-[300px] mt-5">
              {materials.map((item) => {
                const materialAgregado = proyecto.materiales.some(
                  (m) => m.material.id_material === item.id_material
                );
                return (
                  <div
                    key={item.id_material}
                    className={`w-[300px] my-2 border-2 border-[#666] rounded-lg ${
                      item.available_quantity === 0 || materialAgregado
                        ? "hidden"
                        : ""
                    } ${
                      selectedMaterial &&
                      selectedMaterial.id_material === item.id_material
                        ? "bg-[#ccc]"
                        : ""
                    }`}
                  >
                    <li
                      onClick={() => handleMaterialClick(item)}
                      className="text-lg font-Outfit font-semibold flex items-center gap-2 py-3 px-10 rounded-lg hover:bg-[#eee] cursor-pointer"
                    >
                      <div className="flex justify-between w-full">
                        <p>{item.material_name}</p>
                        <p>{item.available_quantity}</p>
                      </div>
                    </li>
                  </div>
                );
              })}
            </ul>
          </>
        ) : (
          <p className="text-2xl font-semibold text-[#666] mt-40">
            No se encontró ningún resultado
          </p>
        )}
        {selectedMaterial && (
          <div className="mt-5">
            <label className="block text-lg font-semibold text-[#666]">
              Cantidad a asignar:
            </label>
            <input
              type="number"
              value={assignedQuantity}
              onChange={(e) => setAssignedQuantity(parseInt(e.target.value))}
              className="w-[150px] h-9 px-4 bg-[#EEE] rounded-md focus:outline-[#ccc]"
            />
          </div>
        )}
        <div className="space-x-5 mt-5">
          <button
            onClick={handleAddMaterial}
            className="text-lg text-[#1DAF90] hover:text-white font-semibold border-2 border-[#1DAF90] hover:bg-[#1DAF90] px-2 py-1 rounded-md"
          >
            Agregar
          </button>
          <button
            onClick={closeModalMatirials}
            className="text-lg text-[#a1a1a1] hover:text-red-600 font-semibold border-2 border-[#a1a1a1] hover:border-red-600 px-2 py-1 rounded-md"
          >
            Descartar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchMaterials;
