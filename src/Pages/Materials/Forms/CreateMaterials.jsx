import React,{ useState } from "react";
import axios from "../../../../axiosConfig.js";
import { Toaster, toast } from "sonner";

const expresion = /^[^!@#$%^&*()_+{}[\]:;<>,.?~""''|°\\/-]/;

function CreateMaterials({ closeModal, getData }) {
  const [material, setMaterial] = useState({
    name: "",
    quantity: "",
  });
  const [error, setError] = useState({
    name: "",
    quantity: "",
  });

  const handleChangeName = (e) => {
    const { value } = e.target;
    setMaterial({
      ...material,
      name: value,
    });
  };
  const handleChangeQuantity = (e) => {
    const { value } = e.target;
    setMaterial({
      ...material,
      quantity: parseInt(value),
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      quantity: "",
    };

    if (material.name.trim() === "") {
      valid = false;
      newErrors.name = "Por favor, ingresa el nombre del material";
    } else if (!expresion.test(material.name.trim())) {
      valid = false;
      newErrors.name = "El nombre no puede iniciar con caracteres especiales.";
    }
    if (material.quantity <= 0) {
      valid = false;
      newErrors.quantity = "Por favor, ingresa una cantidad";
    } else if (material.quantity <= 0) {
      newErrors.quantity = "La cantidad no pude ser un caracter";
    }
    setError(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post(
          "/warehouse",
          {
            materialName: material.name,
            quantity: material.quantity,
            measure: "unidades",
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        getData()
        toast.success("Se agregó el material")
        setTimeout(() => {
          closeModal();
        }, 1000)
      } catch (error) {
        toast.error("Error al agregar material")
        console.error("Error en la solicitud", error);
      }
    } else {
      console.log("Errores en el formulario");
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-black bg-opacity-65 backdrop-blur-sm font-Nunito fixed left-0 top-0 ">
      <div className="bg-white h-auto w-[550px] rounded-md grid ">
        <form onSubmit={handleSubmit} className="flex flex-col m-10 gap-10">
          <h2 className="text-4xl font-semibold">Nuevo Material</h2>
          <div className="flex flex-col">
            <label htmlFor="" className="text-xl text-[#666] font-semibold">
              Nombre *
            </label>
            <input
              value={material.name}
              onChange={handleChangeName}
              type="text"
              className="w-[390px] h-8 px-2 outline-none border border-[#a9a9a9] rounded-md "
            />
            <div>
              <p className="text-sm text-red-600">{error.name}</p>
            </div>
          </div>
          <div className="flex gap-16">
            <div>
              <p className="text-xl text-[#666] font-semibold">Cantidad *</p>
              <div className="flex gap-1">
                <input
                  value={material.quantity}
                  onChange={handleChangeQuantity}
                  type="number"
                  className="w-[150px] h-8 px-2 outline-none border border-[#a9a9a9] rounded-md "
                />
                <p className="text-xl text-[#666] font-semibold">Unidades</p>
              </div>

              <div>
                <p className="text-sm text-red-600">{error.quantity}</p>
              </div>
            </div>
          </div>
          <div className="flex mt-5 gap-10 justify-center">
            <button
              type="submit"
              className="flex gap-2 items-center text-lg text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] font-semibold border-2 border-[#1DAF90] px-2 py-1 rounded-md"
            >
              Añadir
            </button>
            <button
              onClick={closeModal}
              className="flex gap-2 items-center text-lg text-[#666] hover:text-white hover:bg-red-600 font-semibold border-2 border-[#666] hover:border-red-600 px-2 py-1 rounded-md"
            >
              Descartar
            </button>
          </div>
        </form>
      </div>
      <Toaster richColors />
    </div>
  );
}

export default CreateMaterials;
