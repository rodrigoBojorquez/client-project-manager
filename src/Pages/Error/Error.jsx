import img from "../../img/rob.jpg";
const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-white to-white-500">
      <div className="text-center text-black">
        
        <img src={img} className="object-cover max-w-md mx-auto mb-8 rounded-md" />

        <p className="text-lg  font-semibold mb-8">No te preocupes, estamos aquí para guiarte de vuelta.</p>
        <a href="/" className="bg-[#038554] text-white py-2 px-4 rounded-full font-bold text-lg">
          Regresar
        </a>
      </div>
    </div>
  );
};

export default Error;