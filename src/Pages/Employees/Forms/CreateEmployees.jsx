import React, { useState, useEffect } from "react";
import axiosClient from "../../../../axiosConfig.js";
import { Toaster, toast } from "sonner";

const expresion = /^[^!@#$%^&*()_+{}[\]:;<>,.?~""''^^´´`¨¨=|°\\/-]/;
const emailExpresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const numberExpresion = /^[^0-9';]*$/;

function CreateEmployees({ closeModal, getUsers }) {
  const rols = [
    { id: 1, rol: "Administrador" },
    { id: 2, rol: "Lider de equipo" },
    { id: 3, rol: "Empleado" },
    { id: 4, rol: "Registrador" },
    { id: 5, rol: "Jefe de almacen" },
  ];
  const [user, setUser] = useState({
    username: "",
    email: "",
    speciality: "",
    rol_fk: 1,
  });
  const [error, setError] = useState({
    username: "",
    email: "",
    speciality: "",
    rol_fk: "",
  });
  const handleChangeUserName = (e) => {
    const { value } = e.target;
    setUser({
      ...user,
      username: value,
    });
  };
  const handleChangeEmail = (e) => {
    const { value } = e.target;
    setUser({
      ...user,
      email: value,
    });
  };
  const handleChangeSpeciality = (e) => {
    const { value } = e.target;
    setUser({
      ...user,
      speciality: value,
    });
  };
  const handleChangeRol = (e) => {
    const { value } = e.target;
    setUser({
      ...user,
      rol_fk: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      username: "",
      email: "",
      speciality: "",
      rol_fk: "",
    };

    if (user.username.trim() === "") {
      valid = false;
      newErrors.username = "Por favor, ingresa el nombre del usuario";
    } else if (!expresion.test(user.username.trim())) {
      valid = false;
      newErrors.username =
        "El nombre no puede iniciar con caracteres especiales.";
    } else if (!numberExpresion.test(user.username.trim())) {
      valid = false;
      newErrors.username = "El nombre no puede iniciar con numeros.";
    }
    if (user.email.trim() === "") {
      valid = false;
      newErrors.email = "Por favor, ingresa un email";
    } else if (!expresion.test(user.email.trim())) {
      newErrors.email = "El email no pude ser un caracter";
    } else if (!emailExpresion.test(user.email.trim())) {
      valid = false;
      newErrors.email = "Por favor, ingresa un correo electrónico válido";
    }
    if (user.speciality.trim() === "") {
      valid = false;
      newErrors.speciality = "Por favor, ingresa una especialidad";
    } else if (!expresion.test(user.speciality.trim())) {
      newErrors.speciality = "La especialidad no pude ser un caracter";
    } else if (!numberExpresion.test(user.speciality.trim())) {
      newErrors.speciality = "La especialidad no pude inicar con numero";
    }
    if (
      user.rol_fk === null ||
      user.rol_fk === undefined ||
      user.rol_fk === ""
    ) {
      valid = false;
      newErrors.rol_fk = "Por favor, ingresa un rol";
    } else if (!expresion.test(String(user.rol_fk))) {
      newErrors.rol_fk = "El rol no puede ser un caracter";
    }

    setError(newErrors);
    console.log(error);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      axiosClient
        .post("/user", {
          username: user.username,
          email: user.email,
          speciality: user.speciality,
          rol_fk: user.rol_fk,
        })
        .then((res) => {
          getUsers();
          toast.success("Se agregó al empleado con exito");
          setTimeout(() => {
            closeModal();
          }, 1000);
        })
        .catch((err) => {
          toast.error("Error al agregar empleado");
          console.error(err);
        });
    }
  };
  return (
    <div className="h-screen w-full flex justify-center items-center bg-black bg-opacity-65 backdrop-blur-sm font-Nunito fixed left-0 top-0 ">
      <div className="bg-white h-[500px] w-auto rounded-md grid">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-around m-10 gap-10"
        >
          <h2 className="text-4xl font-semibold">Nuevo Empleado</h2>
          <div className="flex gap-10">
            <div>
              <p className="text-xl text-[#666] font-semibold">
                Nombre completo *
              </p>
              <input
                value={user.username}
                onChange={handleChangeUserName}
                type="text"
                className="w-[250px] h-8 px-2 outline-none border-[1.5px] border-[#a9a9a9] rounded-md "
              />
              <p className="text-sm text-red-600">{error.username}</p>
            </div>
            <div>
              <p className="text-xl text-[#666] font-semibold">Email *</p>
              <input
                value={user.email}
                onChange={handleChangeEmail}
                type="text"
                className="w-[250px] h-8 px-2 outline-none border-[1.5px] border-[#a9a9a9] rounded-md "
              />
              <p className="text-sm text-red-600">{error.email}</p>
            </div>
          </div>
          <div className="flex gap-10">
            <div>
              <p className="text-xl text-[#666] font-semibold">
                Especialidad *
              </p>
              <input
                value={user.speciality}
                onChange={handleChangeSpeciality}
                type="text"
                className="w-[250px] h-8 px-2 outline-none border-[1.5px] border-[#a9a9a9] rounded-md "
              />
              <p className="text-sm text-red-600">{error.speciality}</p>
            </div>

            <div className="w-full">
              <p className="text-xl text-[#666] font-semibold">Rol *</p>
              <select
                value={user.rol_fk}
                onChange={handleChangeRol}
                className="w-full text-center border-[1.5px] border-[#a9a9a9] outline-none rounded-md px-2 py-1"
              >
                {rols.map((rol) => (
                  <option key={rol.id} value={rol.id}>
                    {rol.rol}
                  </option>
                ))}
              </select>
              <p className="text-sm text-red-600">{error.rol_fk}</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
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

export default CreateEmployees;
