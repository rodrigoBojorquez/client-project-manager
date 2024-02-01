

function CreateMaterials({ closeModal }) {
    return (<div className="h-screen w-full flex justify-center items-center bg-black bg-opacity-65 backdrop-blur-sm font-Nunito fixed left-0 top-0 ">
<div className="bg-white h-auto w-auto rounded-md grid ">
  <form action="" className="flex flex-col m-10 gap-10">
    <h2 className="text-4xl font-semibold">Nuevo Material</h2>
    <div className="flex flex-col">
      <label htmlFor="" className="text-xl text-[#666] font-semibold">
        Nombre *
      </label>
      <input
        type="text"
        className="w-[390px] h-8 px-2 outline-none border border-[#a9a9a9] rounded-md "
      />
    </div>
    <div className="flex gap-16">
      <div>
        <p className="text-xl text-[#666] font-semibold">Cantidad *</p>
        <input
        type="text"
        className="w-[150px] h-8 px-2 outline-none border border-[#a9a9a9] rounded-md "
      />
      </div>
      <div>
        <p className="text-xl text-[#666] font-semibold">Unidad de medida *</p>
        <input
        type="text"
        className="w-[180px] h-8 px-2 outline-none border border-[#a9a9a9] rounded-md "
      />
      </div>
    </div>
    <div className="flex flex-col">
      <label htmlFor="" className="text-xl text-[#666] font-semibold">
        Descripcion 
      </label>
      <input
        type="text"
        className="w-[390px] h-16 px-2 outline-none border border-[#a9a9a9] rounded-md "
      />
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

export default CreateMaterials;