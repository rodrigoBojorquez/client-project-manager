

function CreateEmployees({ closeModal }) {
    return (<div className="h-screen w-full flex justify-center items-center bg-black bg-opacity-65 backdrop-blur-sm font-Nunito fixed left-0 top-0 ">
<div className="bg-white h-auto w-auto rounded-md grid">
  <form action="" className="flex flex-col m-10 gap-10">
    <h2 className="text-4xl font-semibold">Nuevo Empleado</h2>
    <div className="flex flex-col">
    <div className="flex gap-16">
      <div>
        <p className="text-xl text-[#666] font-semibold">Nombres *</p>
        <input
        type="text"
        className="w-[250px] h-8 px-2 outline-none border border-[#a9a9a9] rounded-md "
      />
      </div>
      <div>
        <p className="text-xl text-[#666] font-semibold">Apellidos *</p>
        <input
        type="text"
        className="w-[250px] h-8 px-2 outline-none border border-[#a9a9a9] rounded-md "
      />
      </div>
    </div>
    </div>
    <div className="flex gap-16">
      <div>
        <p className="text-xl text-[#666] font-semibold">RFC *</p>
        <input
        type="text"
        className="w-[250px] h-8 px-2 outline-none border border-[#a9a9a9] rounded-md "
      />
      </div>
      <div>
        <p className="text-xl text-[#666] font-semibold">Telefono *</p>
        <input
        type="text"
        className="w-[250px] h-8 px-2 outline-none border border-[#a9a9a9] rounded-md "
      />
      </div>
    </div>
    <div className="flex gap-16">
      <div>
        <p className="text-xl text-[#666] font-semibold">Correo *</p>
        <input
        type="text"
        className="w-[250px] h-8 px-2 outline-none border border-[#a9a9a9] rounded-md "
      />
      </div>
      <div>
        <p className="text-xl text-[#666] font-semibold">Especialidad</p>
        <input
        type="text"
        className="w-[250px] h-8 px-2 outline-none border border-[#a9a9a9] rounded-md "
      />
      </div>
    </div>
    <div>
      <button className="flex gap-2 items-center text-lg text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] font-semibold border-2 border-[#1DAF90] px-2 py-1 rounded-md">
        <p className="text-3xl" />
        Añadir 
      </button>
    </div>
    <div className="flex items-center justify-center m-10 gap-6">
   
    </div>
  </form>
</div>
</div>
);
}

export default CreateEmployees;