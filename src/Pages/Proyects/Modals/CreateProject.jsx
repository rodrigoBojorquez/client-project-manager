import { useState } from "react";

const expresion = /^[^!@#$%^&*()_+{}[\]:;<>,.?~""''|°\\/-]/;

const CreateProject = ({ closeCreateProjectModanl }) => {
  const [proyecto, setProyecto] = useState({
    nombre: "",
    descripcion: "",
    estado: "",
  });
  const [error, setError] = useState({ nombre: "", descripcion: "" });

  const handleChangeNombre = (e) => {
    const { value } = e.target;
    setProyecto({
      ...proyecto,
      nombre: value,
    });
  };

  const handleChangeDescripcion = (e) => {
    const { value } = e.target;
    setProyecto({
      ...proyecto,
      descripcion: value,
    });
  };

  const handleChangeEstado = (e) => {
    const { value } = e.target;
    setProyecto({
      ...proyecto,
      estado: value,
    });
  };

  const validarFormulario = () => {
    let valid = true;
    //Objeto para almacenar errores
    const newErrors = {
      nombre: "",
      descripcion: "",
    };

    // Validar nombre del proyecto
    if (proyecto.nombre.trim() === "") {
      valid = false;
      newErrors.nombre = "Por favor, ingresa un nombre de proyecto.";
    } else if (!expresion.test(proyecto.nombre.trim())) {
      valid = false;
      newErrors.nombre =
        "El nombre no puede iniciar con caracteres especiales.";
    }

    // Validar descripción del proyecto
    if (proyecto.descripcion.trim() === "") {
      valid = false;
      newErrors.descripcion = "Por favor, ingresa una descripción.";
    } else if (!expresion.test(proyecto.descripcion.trim())) {
      valid = false;
      newErrors.descripcion =
        "La descripción no puede iniciar con caracteres especiales.";
    }
    //Validar estado del proyecto
    if (proyecto.estado === "") {
      setProyecto({
        ...proyecto,
        estado: "Pendiente",
      });
    }

    setError(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar el formulario antes de enviar
    if (validarFormulario()) {
      closeCreateProjectModanl();
      console.log("Formulario enviado:", proyecto);
    } else {
      console.log("El formulario tiene errores. No se puede enviar.");
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-black bg-opacity-65 backdrop-blur-sm">
      <div className="bg-white w-[850px] h-auto font-Nunito flex flex-col justify-center p-10 gap-10 rounded-lg">
        <p className="text-4xl font-bold">Crear proyecto</p>
        <form
          onSubmit={handleSubmit}
          className="text-[#666] flex gap-20 text-xl font-semibold"
        >
          <div className="space-y-5">
            <div className="flex flex-col">
              <label htmlFor="">Nombre del proyecto</label>
              <input
                value={proyecto.nombre}
                onChange={handleChangeNombre}
                type="text"
                className="text-base px-2 py-1 outline-[#666] border-2 border-[#a9a9a9]  rounded"
              />
              <div>
                <p className="text-red-600 text-sm">{error.nombre}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Descripción</label>
              <textarea
                value={proyecto.descripcion}
                onChange={handleChangeDescripcion}
                name=""
                id=""
                cols="40"
                rows="16"
                className="border-2 border-[#a9a9a9] text-base p-2 outline-[#666] rounded-md"
                placeholder="Detalles del proyecto"
              ></textarea>
              <div>
                <p className="text-sm text-red-600">{error.descripcion}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-5 w-full">
            <div className="flex flex-col gap-3 justify-center mb-16">
              <p>Materiales *</p>
              <div className="flex flex-col justify-center items-center w-full gap-5">
                <table className="">
                  <tr className="text-lg font-semibold">
                    <td className="pr-32">Nombre</td>
                    <td className="">Cantidad</td>
                  </tr>
                  <tr className="text-sm border-y border-[#999] h-10">
                    <td>Nombre del material</td>
                    <td>0</td>
                  </tr>
                </table>
                <button className=" font-semibold border-2 border-[#1DAF90] text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] rounded-md px-3">
                  Agregar
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <p>Estado del proyecto</p>
              <select
                onChange={handleChangeEstado}
                name=""
                id=""
                className=" outline-none border-2 border-[#a9a9a9] rounded-md text-base text-center"
              >
                <option value="">Selecciona el estado</option>
                <option value="Completado" className="text-[#1DAF90]">
                  Completado
                </option>
                <option value="En curso" className="text-[#FF9900]">
                  En curso
                </option>
                <option value="Pendiente" className="text-[#FF0000]">
                  Pendiente
                </option>
              </select>
            </div>
            <div className="mt-32 space-x-10 flex items-center justify-center">
              <button
                type="submit"
                className=" rounded-md text-semibold border-2 border-[#1DAF90] text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] px-3 py-1"
              >
                Crear
              </button>
              <button
                onClick={closeCreateProjectModanl}
                className=" rounded-md border-2 text-semibold border-[#a9a9a9] hover:text-white hover:bg-red-600 px-3 py-1"
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

export default CreateProject;
