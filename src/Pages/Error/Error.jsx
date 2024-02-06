import { Link, useNavigate, useLocation } from "react-router-dom";
import img from "../../img/rob.jpg";

const Error = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleGoBack = () => {
    // Si la página de error fue accedida debido a un error de autorización,
    // redirigir al usuario a la página de inicio en lugar de intentar volver atrás
    // if (location.state && location.state.fromUnauthorized) {
      navigate(-1);
    // } else {
    //   // De lo contrario, intentar volver atrás como de costumbre
    //   navigate(-2);
    // }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-white to-white-500">
      <div className="text-center text-black">
        <img src={img} className="object-cover max-w-md mx-auto mb-8 rounded-md" alt="Error" />
        <p className="text-lg font-semibold mb-8">Página no encontrada</p>
        <button onClick={handleGoBack} className="bg-[#038554] text-white py-2 px-4 rounded-full font-bold text-lg">
          Volver
        </button>
      </div>
    </div>
  );
};

export default Error;
