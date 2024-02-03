import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/NavBar.jsx";
import axiosClient from "../../../axiosConfig.js";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

function Dashboard() {
  const [showData, setShowData] = useState([]);
  const [showProjectPending, setShowProjectPending] = useState([]);
  const [showMaterials, setShowMaterials] = useState([]);
  const [showCounty, setShowCounty] = useState([]);

  const getDatachart = async () => {
    const response = await axiosClient.get("/dashboard/pie-chart");
    setShowData(response.data);
    // console.log(response);
  };

  const getMaterials = async () => {
    const response = await axiosClient.get("/dashboard/last-materials");
    setShowMaterials(response.data);
  };

  const getProjectsPending = async () => {
    const response = await axiosClient.get("/dashboard/pending");
    setShowProjectPending(response.data);
  };

  const getCountry = async () => {
    const response = await axiosClient.get("/dashboard/count-users");
    setShowCounty(response.data);
  };

// Mostrar grafica
ChartJS.register(ArcElement, Tooltip, Legend);

var options = {
    responsive : true,
    maintainAspectRatio: false,
};

var data = {
    labels: [`Cancelado ${showData.canceled}`, `Finalizado ${showData.finished}`,`En curso ${showData.in_course}`,`en pausa ${showData.in_pause}`],
    datasets: [
        {
            label: '',
            data: [showData.canceled, showData.finished, showData.in_course, showData.in_pause],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

  useEffect(() => {
    getMaterials();
    getProjectsPending();
    getCountry();
    getDatachart();
  }, []);

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
                <h3 className="text-2xl -mt-[100px] font-semibold">Estatus de proyectos</h3>
                <div className="w-96" ><Pie data={data} options={options} /></div>
              </div>
            </div>

            <div className="bg-gray-100 grid w-[500px] h-[326px] place-items-center rounded-2xl px-5 shadow-1x2 mt-1">
              <div key="uniqueKey" className="col-span-2 h-2">
                <h3 className="text-2xl font-semibold">Materiales añadidos</h3>
                {/* TODO: GRAFICA */}
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
                  {showMaterials.map((material) => (
                    <tr key={material.id_material}>
                      <td
                        style={{
                          textAlign: "left",
                          padding: "8px",
                          borderBottom: "1px solid #ddd",
                        }}
                      >
                        {material.material_name}
                      </td>
                      <td
                        style={{
                          textAlign: "center",
                          padding: "8px",
                          borderBottom: "1px solid #ddd",
                        }}
                      >
                        {material.quantity}
                      </td>
                      <td
                        style={{
                          textAlign: "center",
                          padding: "8px",
                          borderBottom: "1px solid #ddd",
                        }}
                      >
                        {new Date(material.create_date).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
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
            <div className="bg-gray-100 grid  w-[450px] h-[300px] place-items-center rounded-2x1 px-5 shadow-1x2  mb-1">
              <div className="col-span-2 h-2">
                <h3 className="text-2xl pb-6 font-semibold">
                  Proyectos pendientes
                </h3>
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th
                      style={{
                        textAlign: "center",
                        padding: "6px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      Nombre
                    </th>
                    <th
                      style={{
                        textAlign: "right",
                        padding: "1px",
                        fontSize: "14px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      Fecha de edicion
                    </th>
                  </tr>
                </thead>
                {/*  */}
                <tbody>
                  {showProjectPending.slice(1, 3).map((item) => (
                    <tr key={item.id_project}>
                      <td
                        style={{
                          textAlign: "left",
                          padding: "8px",
                          borderBottom: "1px solid #ddd",
                        }}
                      >
                        {item.project_name}
                      </td>
                      <td
                        style={{
                          textAlign: "right",
                          padding: "8px",
                          borderBottom: "1px solid #ddd",
                        }}
                      ></td>
                      {new Date(item.create_date).toLocaleDateString()}
                    </tr>
                  ))}
                  {/*  */}
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

            <div className="bg-gray-100 grid w-[398px] h-[300px] place-items-center rounded-2xl px-5 shadow-1x2 mt-1">
              <div className="col-span-2 h-2">
                <h3 className="text-2xl font-semibold">
                  Empleados registrados
                </h3>
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
                      Rol
                    </th>
                    <th
                      style={{
                        textAlign: "right",
                        padding: "10px",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      Cantidad
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {showCounty.map((item) => (
                    <tr key={item.id}>
                      <td
                        style={{
                          textAlign: "left",
                          padding: "8px",
                          borderBottom: "1px solid #ddd",
                        }}
                      >
                        {item.title}
                      </td>
                      <td
                        style={{
                          textAlign: "right",
                          padding: "8px",
                          borderBottom: "1px solid #ddd",
                        }}
                      >
                        {item.userCount}
                      </td>
                    </tr>
                  ))}
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
