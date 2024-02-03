import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/NavBar.jsx";
import axiosClient from "../../../axiosConfig.js";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

function Dashboard() {
  const [showData, setShowData] = useState([]);
  const [showProjectPending, setShowProjectPending] = useState([]);
  const [showMaterials, setShowMaterials] = useState([]);
  const [showCounty, setShowCounty] = useState([]);

  const getDatachart = async () => {
    const response = await axiosClient.get("/dashboard/pie-chart");
    setShowData(response.data.data);
  };

  const getMaterials = async () => {
    const response = await axiosClient.get("/dashboard/last-materials");
    setShowMaterials(response.data.data);
  };

  const getProjectsPending = async () => {
    const response = await axiosClient.get("/dashboard/pending");
    setShowProjectPending(response.data.data);
  };

  const getCountry = async () => {
    const response = await axiosClient.get("/dashboard/count-users");
    setShowCounty(response.data.data);
  };

  // Mostrar grafica
  ChartJS.register(ArcElement, Tooltip, Legend);

  var options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  var data = {
    labels: [
      `Cancelado ${showData.canceled}`,
      `Finalizado ${showData.finished}`,
      `En curso ${showData.in_course}`,
      `en pausa ${showData.in_pause}`,
    ],
    datasets: [
      {
        label: "",
        data: [
          showData.canceled,
          showData.finished,
          showData.in_course,
          showData.in_pause,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
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
    <div className="flex w-full">
      <Sidebar />
      <div className="font-Nunito py-5 px-10 w-full">
          <h1 className="text-[65px] mb-5 font-bold">Dashboard</h1>
        <div className="grid grid-cols-2 grid-rows-2 gap-5">
          {/* Bloques a la izquierda */}
            <article className="bg-gray-100 shadow-md p-5">
                <h3 className="text-2xl text-center mb-5 font-semibold">
                  Estatus de proyectos
                </h3>
                <div className="">
                  <Pie data={data} options={options} style={{height: "200px"}}  />
                </div>
            </article>

            <article className="bg-gray-100 p-5 shadow-md">
              <h3 className="text-2xl text-center mb-5 font-semibold">Materiales añadidos</h3>
              <table className="w-full">
                <thead>
                  <tr className="text-[#555]">
                    <th className="pb-2">Nombre</th>
                    <th className="pb-2">Cantidad</th>
                    <th className="pb-2">Fecha de adicion</th>
                  </tr>
                </thead>
                  {showMaterials.length > 0 ? (
                    <tbody>
                      {showMaterials.map((material) => (
                        <tr key={material.id_material} className="border-y border-[#999]">
                          <td className="text-center py-1">{material.material_name}</td>
                          <td className="text-center">{material.quantity}</td>
                          <td className="text-center">
                            {new Date(
                              material.create_date
                            ).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  ) : (
                    <tbody>
                      <tr>
                        <td>No hay materiales disponibles.</td>
                      </tr>
                    </tbody>
                  )}
              </table>
            </article>

          {/* Bloques a la derecha */}
            <article className="bg-gray-100 p-5 shadow-md">
                <h3 className="text-2xl mb-5 text-center font-semibold">
                  Proyectos pendientes
                </h3>
              <table className="w-full">
                <thead>
                  <tr className="text-[#555]">
                    <th className="pb-2">Nombre</th>
                    <th className="pb-2">Fecha de edicion</th>
                  </tr>
                </thead>
                {showProjectPending.length > 0 ? (
                  <tbody>
                    {showProjectPending.slice(1, 3).map((item) => (
                      <tr key={item.id_project} className="border-y border-[#999]">
                        <td className="text-center py-1">{item.project_name}</td>
                        <td className="text-center">
                          {new Date(item.create_date).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ) : (
                  <tbody>
                    <tr>
                      <td>No hay proyectos pendientes.</td>
                    </tr>
                  </tbody>
                )}
              </table>
            </article>

            <div className="bg-gray-100 p-5 shadow-1x2 mt-1">
                <h3 className="text-2xl text-center mb-5 font-semibold">
                  Empleados registrados
                </h3>
              <table className="w-full">
                <thead>
                  <tr className="text-[#555]">
                    <th className="pb-2">Rol</th>
                    <th className="pb-2">Cantidad</th>
                  </tr>
                </thead>
                {showCounty.length > 0 ? (
                  <tbody>
                    {showCounty.map((item) => (
                      <tr key={item.id} className="border-y border-[#999]">
                        <td className="text-center py-1">{item.title}</td>
                        <td className="text-center">{item.userCount}</td>
                      </tr>
                    ))}
                  </tbody>
                ) : (
                  <tbody>
                    <tr>
                      <td colSpan="2">No hay empleados registrados.</td>
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
