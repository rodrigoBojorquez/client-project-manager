// EmployeesPage.jsx
import Sidebar from '../../Components/NavBar.jsx';
import { BsFillPlusCircleFill } from "react-icons/bs";
import { HiMagnifyingGlass } from "react-icons/hi2";

const Materiales = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="" style={{ marginTop: '30px', border: '2px ', marginLeft: '2cm' }}>
      <div className="font-Nunito mt-6 ml-8 w-">
  <div className="w-full items-baseline flex gap-5">
          <h1 className="text-[65px] font-bold">Materiales</h1>
          <button
            
            className="flex items-center justify-center gap-2 text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] h-12 w-[8rem] rounded-xl"
          >
            <BsFillPlusCircleFill className="text-3xl" />
            <p className="text-xl font-bold">Nuevo</p>
          </button>
        </div>
        </div>
        <div className="flex items-center mt-8 ml-1">
          <input
           
            type="text"
            className="w-[400px] h-9 px-4 bg-[#EEE] rounded-s-md focus:outline-[#ccc]"
            placeholder="Buscar material"
          />
          <HiMagnifyingGlass className="text-[#A1A1A1] text-md w-14 px-4 bg-[#eee] h-9 rounded-e-md" />
        </div>
        <div className="" style={{ marginTop: '20px', border: '1px ', marginLeft: '2cm' }}/>
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
          <tr className="text-[#555] text-xl font-semibold">
                <th className="pr-[16rem] pb-4">Nombre</th>
                <th className="pr-[16rem] pb-4">Cantidad</th>
                <th className="pr-[4rem] pb-4">Acciones</th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Rodrigo Noe</td>
              <td style={{ textAlign: 'centetr', padding: '8px', borderBottom: '1px solid #ddd' }}>10 unidades</td>
              <td style={{ textAlign: 'center', padding: '8px', borderBottom: '1px solid #ddd' }}><button className=" bg-[#1DAF90] text-white font-semibold py-1 px-4 rounded">
            editar
          </button>
          <button style={{ marginLeft: '20px' }} className="bg-red-600 text-white font-semibold py-1 px-4 rounded">
            eliminar
          </button></td>
              <td style={{ textAlign: 'center', padding: '8px', borderBottom: '1px solid #ddd' }}>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Rodrigo Noe</td>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>5 unidades</td>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}><button className=" bg-[#1DAF90] text-white font-semibold py-1 px-4 rounded">
            editar
          </button>
          <button style={{ marginLeft: '20px' }} className="bg-red-600 text-white font-semibold py-1 px-4 rounded">
            eliminar
          </button></td>
              <td style={{ textAlign: 'center', padding: '8px', borderBottom: '1px solid #ddd' }}>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Jesus Martinez</td>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>50 unidades</td>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}><button className=" bg-[#1DAF90] text-white font-semibold py-1 px-4 rounded">
            editar
          </button>
          <button style={{ marginLeft: '20px' }} className="bg-red-600 text-white font-semibold py-1 px-4 rounded">
            eliminar
          </button></td>
              <td style={{ textAlign: 'center', padding: '8px', borderBottom: '1px solid #ddd' }}>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Alex Sanchez</td>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>15 unidades</td>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}><button className="bg-[#1DAF90] text-white font-semibold py-1 px-4 rounded">
            editar
          </button>
          <button style={{ marginLeft: '20px' }} className="bg-red-600 text-white font-semibold py-1 px-4 rounded">
            eliminar
          </button></td>
              <td style={{ textAlign: 'center', padding: '8px', borderBottom: '1px solid #ddd' }}>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Michell Meza</td>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>10 unidades</td>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}><button className=" bg-[#1DAF90] text-white font-semibold py-1 px-4 rounded">
            editar
          </button>
          <button style={{ marginLeft: '20px' }} className="bg-red-600 text-white font-semibold py-1 px-4 rounded">
            eliminar
          </button></td>
              <td style={{ textAlign: 'center', padding: '8px', borderBottom: '1px solid #ddd' }}>
              </td>
            </tr>
            <div style={{ marginTop: '20px' }}>
    <button className="bg-white hover:bg-gray-100 text-gray-400 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
      Anterior
    </button>
    <button style={{ marginLeft: '20px' }} className="bg-white hover:bg-gray-100 text-black-500 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
      Siguiente
    </button>
  </div>
          </tbody>
        </table>
</div>
    </div>
  );
};

export default Materiales;
