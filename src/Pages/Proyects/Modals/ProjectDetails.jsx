import React, { useState } from "react";

const ProjectDetails = ({ closeDetailsModanl }) => {
  const [data, setData] = useState([]);

  return (
    <div className="h-screen w-full flex justify-center items-center bg-black bg-opacity-65 backdrop-blur-sm">
      <div className="bg-white w-[850px] h-auto font-Nunito flex flex-col justify-center p-10 gap-10 rounded-lg">
        <p className="text-4xl font-bold">Detalles del proyecto</p>
        <div className="text-[#666] flex gap-20 text-xl font-semibold">
          <div className="space-y-5">
            <div className="flex flex-col">
              <p>Nombre del proyecto</p>
              <div className="text-base mt-2 text-black w-[200px] p-1 border-2 border-[#a9a9a9]  rounded">
                <p>Proyecto de estadias</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div>Descripción</div>
              <div className="border-2 border-[#a9a9a9] text-base p-2 rounded-md h-[420px] overflow-y-auto">
                <p>
                  Phasellus pharetra libero venenatis, accumsan mi vitae, semper
                  nunc. Donec euismod diam sit amet tincidunt maximus. Donec ac
                  massa auctor, rhoncus dolor sit amet, vestibulum mauris.
                  Suspendisse sit amet rutrum lectus. Nulla vel ante convallis,
                  congue justo vel, placerat orci. Curabitur vitae congue elit,
                  consectetur tempus mi. Vivamus pellentesque iaculis lorem, a
                  rhoncus quam laoreet et. Curabitur at orci sed magna hendrerit
                  finibus. Phasellus eu pulvinar enim. Nunc sem velit, consequat
                  id quam sed, mattis fermentum nunc. Mauris ultrices ligula et
                  est porttitor, ut faucibus mauris luctus. Quisque facilisis
                  sodales blandit. Pellentesque ante diam, molestie ac leo
                  rutrum, pretium tempus ipsum. In faucibus eros commodo
                  consequat vehicula. Cras convallis elementum elit, at interdum
                  nisi mollis vitae. Nullam lectus sapien, tempor nec ornare a,
                  maximus in metus. Proin eget magna a velit elementum pulvinar
                  et in massa. Suspendisse luctus pellentesque euismod.
                  Vestibulum gravida magna quis neque interdum facilisis.
                  Suspendisse gravida, eros sed condimentum finibus, turpis
                  augue vulputate orci, vel cursus erat est ut lacus. Mauris
                  fringilla lacus sed fermentum euismod. Vivamus pellentesque
                  eleifend nisi, nec tincidunt ex sodales id. Quisque tempor leo
                  et enim volutpat, eget mollis risus pellentesque. Vestibulum
                  sit amet tellus libero.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-5 w-full">
            <div className="flex flex-col gap-3 justify-center mb-16">
              <p>Materiales</p>
              <div className="flex flex-col justify-center items-center w-full gap-5">
                <table className="">
                  <tr className="text-lg font-semibold">
                    <td className="pr-32">Nombre</td>
                    <td className="">Cantidad</td>
                  </tr>
                  <tr className="text-sm border-y border-[#999] h-10">
                    <td>Nombre del material</td>
                    <td>0</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <p>Lider del proyecto</p>
              <div className="text-base mt-2 text-black p-1 border-2 border-[#a9a9a9]  rounded">
                <p>Proyecto de estadias</p>
              </div>
            </div>
            <div className="flex flex-col w-full mt-10">
              <p>Fecha de inicio</p>
              <div className="text-base mt-2 text-black p-1 border-2 border-[#a9a9a9]  rounded">
                <p>Proyecto de estadias</p>
              </div>
            </div>
            <div className="mt-32 space-x-10 flex items-center justify-center">
              <button
                onClick={closeDetailsModanl}
                className=" rounded-md text-semibold border-2 border-[#1DAF90] text-[#1DAF90] hover:text-white hover:bg-[#1DAF90] px-3 py-1"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;