// EmployeesPage.jsx
import Sidebar from '../../Components/NavBar.jsx';


const Materiales = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="" style={{ marginTop: '30px', border: '2px ', marginLeft: '2cm' }}>
  <h1 style={{ fontSize: '3em', fontWeight: 'bold' }}>Materiales</h1>
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Nombre</th>
              <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ddd' }}>Cantidad</th>
              <th style={{ textAlign: 'center', padding: '10px', borderBottom: '1px solid #ddd' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Rodrigo Noe</td>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>10 unidades</td>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}><button className=" bg-[#038554] text-white font-semibold py-1 px-4 rounded">
            editar
          </button>
          <button style={{ marginLeft: '20px' }} className="bg-red-600 text-white font-semibold py-1 px-4 rounded">
            eliminar
          </button></td>
              <td style={{ textAlign: 'center', padding: '8px', borderBottom: '1px solid #ddd' }}>
                
                {/* ... Botones de acciones aquí ... */}
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Rodrigo Noe</td>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>5 unidades</td>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}><button className=" bg-[#038554] text-white font-semibold py-1 px-4 rounded">
            editar
          </button>
          <button style={{ marginLeft: '20px' }} className="bg-red-600 text-white font-semibold py-1 px-4 rounded">
            eliminar
          </button></td>
              <td style={{ textAlign: 'center', padding: '8px', borderBottom: '1px solid #ddd' }}>
                
                {/* ... Botones de acciones aquí ... */}
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Jesus Martinez</td>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>50 unidades</td>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}><button className=" bg-[#038554] text-white font-semibold py-1 px-4 rounded">
            editar
          </button>
          <button style={{ marginLeft: '20px' }} className="bg-red-600 text-white font-semibold py-1 px-4 rounded">
            eliminar
          </button></td>
              <td style={{ textAlign: 'center', padding: '8px', borderBottom: '1px solid #ddd' }}>
                
                {/* ... Botones de acciones aquí ... */}
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Alex Sanchez</td>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>15 unidades</td>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}><button className=" bg-[#038554] text-white font-semibold py-1 px-4 rounded">
            editar
          </button>
          <button style={{ marginLeft: '20px' }} className="bg-red-600 text-white font-semibold py-1 px-4 rounded">
            eliminar
          </button></td>
              <td style={{ textAlign: 'center', padding: '8px', borderBottom: '1px solid #ddd' }}>
                
                {/* ... Botones de acciones aquí ... */}
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Michell Meza</td>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>10 unidades</td>
              <td style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}><button className=" bg-[#038554] text-white font-semibold py-1 px-4 rounded">
            editar
          </button>
          <button style={{ marginLeft: '20px' }} className="bg-red-600 text-white font-semibold py-1 px-4 rounded">
            eliminar
          </button></td>
              <td style={{ textAlign: 'center', padding: '8px', borderBottom: '1px solid #ddd' }}>
                
                {/* ... Botones de acciones aquí ... */}
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
