import React, { useState, useEffect } from "react";
import axios from "../../../../axiosConfig.js";

const expresionNombre = /^[^\d!@#$%^&*()_+{}[\]:;<>,.?~""''|°\\/-]/;
const expresionCantidad = /^\d+$/;
const numberExpresion = /^[^0-9';]*$/;

import { Toaster, toast } from "sonner";

const EditMaterials = ({ closeModalEdit, itemToEdit, getData }) => {
  const [formData, setformData] = useState({
    ...itemToEdit
  })

  const [error, setError] = useState({
    name: "",
    quantity: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      quantity: "",
    };

    if (formData.material_name.trim() === "") {
      valid = false;
      newErrors.name = "Por favor, ingresa el nombre del material";
    } else if (!expresionNombre.test(formData.material_name.trim())) {
      valid = false;
      newErrors.name = "El nombre no puede iniciar con caracteres especiales.";
    }
    else if (!numberExpresion.test(formData.material_name.trim())) {
      valid = false;
      newErrors.name = "El nombre no puede iniciar con numeros.";
    }
    if (formData.quantity <= 0) {
      valid = false;
      newErrors.quantity = "Por favor, ingresa una cantidad";
    }
    setError(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.put(
          `/warehouse/${itemToEdit.id_material}`,
          {
            materialName: formData.material_name,
            quantity: formData.quantity,
          }
        );
        getData();
        toast.success("Se editó el material")
        setTimeout(() => {
          closeModalEdit();          
        }, 1000)
      } catch (error) {
        toast.error("Error al editar")
        console.error("Error en la solicitud", error.message);
      }
    } else {
      console.log("Error en el formulario");
    }
  };

  return (
    <div className="bg-black bg-opacity-65 h-screen w-full flex items-center justify-center">
      <div className="bg-white h-auto w-[550px] rounded-md ">
        <form onSubmit={handleSubmit} className="flex flex-col m-10 gap-10">
          <h2 className="text-4xl font-semibold">Editar material</h2>
          <div className="flex flex-col">
            <label htmlFor="" className="text-xl text-[#666] font-semibold">
              Nombre *
            </label>
            <input
              value={formData.material_name}
              onChange={e => setformData({...formData, material_name: e.target.value})}
              type="text"
              className="w-[390px] h-8 px-2 border border-[#a9a9a9] rounded-md placeholder-[#666]"
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
                  value={formData.quantity}
                  onChange={e => setformData({...formData, quantity: parseInt(e.target.value)})}
                  type="number"
                  className="w-[150px] h-8 px-2 border border-[#a9a9a9] rounded-md "
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
              Guardar
            </button>
            <button
              onClick={closeModalEdit}
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
};

export default EditMaterials;
