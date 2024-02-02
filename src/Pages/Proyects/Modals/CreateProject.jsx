import { useState, useEffect } from "react";
import axios from "axios";

// const expresion = /^[^!@#$%^&*()_+{}[\]:;<>,.?~""''|°\\/-]/;

function CreateEmployees({ closeModal }) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    speciality: "",
    rol: "",
  });
  const [error, setError] = useState({
    username: "",
    email: "",
    speciality: "",
    rol: "",
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
      rol: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      username: "",
      email: "",
      speciality: "",
      rol: "",
    };

    if (user.username.trim() === "") {
      valid = false;
      newErrors.username = "Por favor, ingresa el nombre del usuario";
    } else if (!expresion.test(user.username.trim())) {
      valid = false;
      newErrors.name = "El nombre no puede iniciar con caracteres especiales.";
    }
    if (user.email.trim() === "") {
      valid = false;
      newErrors.email = "Por favor, ingresa un email";
    } else if (!expresion.test(user.email.trim())) {
      newErrors.email = "El email no pude ser un caracter";
    }
    if (user.speciality.trim() === "") {
      valid = false;
      newErrors.speciality = "Por favor, ingresa una especialidad";
    } else if (!expresion.test(user.speciality.trim())) {
      newErrors.speciality = "La especialidad no pude ser un caracter";
    }
    if (user.rol.trim() === "") {
      valid = false;
      newErrors.rol = "Por favor, ingresa un rol";
    } else if (!expresion.test(user.rol.trim())) {
      newErrors.rol = "El rol no pude ser un caracter";
    }
    setError(newErrors);
    return valid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://localhost:8000/project-manager/warehouse",
          {
            username: user.username,
            email: user.email,
            speciality: user.speciality,
            rol: user.rol,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Formulario enviado", user);
        console.log("Respuesta del servidor:", response.data);
        closeModal();
      } catch (error) {
        console.error("Error en la solicitud", error.message);
      }
    } else {
      console.log("Errores en el formulario");
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
              <p className="text-xl text-[#666] font-semibold">Nombres *</p>
              <input
                value={user.username}
                onChange={handleChangeUserName}
                type="text"
                className="w-[250px] h-8 px-2 outline-none border border-[#a9a9a9] rounded-md "
              />
              <p className="text-sm text-red-600">{error.username}</p>
            </div>
            <div>
              <p className="text-xl text-[#666] font-semibold">Email</p>
              <input
                value={user.email}
                onChange={handleChangeEmail}
                type="email"
                className="w-[250px] h-8 px-2 outline-none border border-[#a9a9a9] rounded-md "
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
                className="w-[250px] h-8 px-2 outline-none border border-[#a9a9a9] rounded-md "
              />
              <p className="text-sm text-red-600">{error.speciality}</p>
            </div>

            <div className="flex gap-16">
              <div>
                <p className="text-xl text-[#666] font-semibold">Rol *</p>
                <input
                  value={user.rol}
                  onChange={handleChangeRol}
                  type="text"
                  className="w-[250px] h-8 px-2 outline-none border border-[#a9a9a9] rounded-md "
                />
                <p className="text-sm text-red-600">{error.rol}</p>
              </div>
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
    </div>
  );
}

export default CreateEmployees;