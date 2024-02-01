import Sidebar from "../../Components/NavBar.jsx";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="font-Nunito mt-6 ml-8">
        <div className="w-full items-baseline flex gap-5">
          <h1 className="text-[65px] font-bold">Dashboard</h1>
        </div>
        <div className="flex gap-4">
          {/* Bloques a la izquierda */}
          <div className="flex flex-col items-center gap-3">
            <div className="bg-gray-100 grid grid-cols-2 w-[500px] h-[298px] place-items-center rounded-2xl px-5 mb-1">
              <div className="col-span-2 h-2">
                <h3 className="text-2xl font-semibold">Estatus de proyectos</h3>
              </div>
            </div>

            <div className="bg-gray-100 grid w-[500px] h-[326px] place-items-center rounded-2xl px-5 shadow-1x2 mt-1">
              <div className="col-span-2 h-2">
                <h3 className="text-2xl font-semibold">Materiales añadidos</h3>
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "8px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      Nombre
                    </th>
                    <th
                      style={{
                        textAlign: "center",
                        padding: "10px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      Cantidad
                    </th>
                    <th
                      style={{
                        textAlign: "right",
                        padding: "10px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      Fecha de adicion
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        padding: "8px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      Salones
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        padding: "8px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      5 unidades
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        padding: "8px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      14-Ene-2024
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        padding: "8px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      {/* ... Botones de acciones aquí ... */}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        padding: "8px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      Salones
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        padding: "8px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      5 unidades
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        padding: "8px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      14-Ene-2024
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        padding: "8px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      {/* ... Botones de acciones aquí ... */}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        padding: "8px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      Salones
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        padding: "8px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      5 unidades
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        padding: "8px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      14-Ene-2024
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan="3"
                      style={{ padding: "8px", textAlign: "right" }}
                    >
                      <div style={{ marginTop: "20px" }}>
                        <button className="bg-[#038554] text-white font-semibold py-1 px-4 rounded">
                          Detalles
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Bloques a la derecha */}
          <div className="flex flex-col items-center gap-3">
            <div className="bg-gray-100 grid  w-[398px] h-[285px] place-items-center rounded-2x1 px-5 shadow-1x2  mb-1">
              <div className="col-span-2 h-2">
                <h3 className="text-2xl font-semibold">Proyectos creados</h3>
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th
                      style={{
                        textAlign: "center",
                        padding: "8px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      Nombre
                    </th>
                    <th
                      style={{
                        textAlign: "right",
                        padding: "10px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      Fecha de edicion
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        padding: "8px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      proyecto
                    </td>
                    <td
                      style={{
                        textAlign: "right",
                        padding: "8px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      14-Ene-2024
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        padding: "8px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      Salones
                    </td>
                    <td
                      style={{
                        textAlign: "right",
                        padding: "8px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      14-Ene-2024
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        padding: "8px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      Salones
                    </td>
                    <td
                      style={{
                        textAlign: "right",
                        padding: "8px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      14-Ene-2024
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan="2"
                      style={{ padding: "8px", textAlign: "right" }}
                    >
                      <div style={{ marginTop: "20px" }}>
                        <button className="bg-[#038554] text-white font-semibold py-1 px-4 rounded">
                          Detalles
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-100 grid w-[398px] h-[296px] place-items-center rounded-2xl px-5 shadow-1x2 mt-1">
              <div className="col-span-2 h-2">
                <h3 className="text-2xl font-semibold">Proyectos eliminados</h3>
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "8px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      Nombre
                    </th>
                    <th
                      style={{
                        textAlign: "right",
                        padding: "10px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      Fecha de adicion
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        padding: "8px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      Salones
                    </td>
                    <td
                      style={{
                        textAlign: "right",
                        padding: "8px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      14-Ene-2024
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        padding: "8px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      Salones
                    </td>
                    <td
                      style={{
                        textAlign: "right",
                        padding: "8px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      14-Ene-2024
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        padding: "8px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      Salones
                    </td>
                    <td
                      style={{
                        textAlign: "right",
                        padding: "8px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      14-Ene-2024
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
