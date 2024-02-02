import { useState } from "react";
import { useParams } from "react-router-dom";

import { BsEyeSlash, BsEyeFill } from "react-icons/bs";

const ActivetAcount = (props) => {
  const { token } = useParams()

  const [showPassword, setShowPassword] = useState(false);
  const [showRepetPassword, setShowRepetPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleRepetPasswordVisibility = () => {
    setShowRepetPassword(!showRepetPassword);
  };
  return (
    <div className="bg-[#ddd] h-screen w-full flex items-center justify-center font-Nunito">
      <div className="bg-white flex flex-col w-[500px] p-5 rounded-xl">
        <h1 className="text-3xl font-bold">Activar cuenta</h1>
        <form
          action=""
          className="flex flex-col gap-5 mt-6 justify-center font-semibold"
        >
          <div className="flex w-full flex-col px-10">
            <label htmlFor="">Ingresar contraseña</label>
            <div className="flex items-cente justify-centerr w-full gap-2">
              <input
                className="p-1 px-2 outline-[#666] border-2 border-[#a1a1a1] w-[500px] rounded-md"
                type={showPassword ? "text" : "password"}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="font-bold text-lg"
              >
                {showPassword ? (
                  <BsEyeFill className="text-[#1DAF90]" />
                ) : (
                  <BsEyeSlash className="text-[#1DAF90]" />
                )}
              </button>
            </div>
          </div>
          <div className="flex flex-col px-10">
            <label htmlFor="">Repetir contraseña contraseña</label>
            <div className="flex items-cente justify-centerr w-full gap-2">
              <input
                className="p-1 px-2 outline-[#666] border-2 border-[#a1a1a1] w-[500px] rounded-md"
                type={showRepetPassword ? "text" : "password"}
              />
              <button
                type="button"
                onClick={toggleRepetPasswordVisibility}
                className="font-bold text-lg"
              >
                {showRepetPassword ? (
                  <BsEyeFill className="text-[#1DAF90]" />
                ) : (
                  <BsEyeSlash className="text-[#1DAF90]" />
                )}
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="flex gap-2 items-center text-lg text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] font-semibold border-2 border-[#1DAF90] px-2 py-1 rounded-md"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ActivetAcount;
