import React, { useState } from "react";

export const MainPlanes = () => {
  const [activeTab, setActiveTab] = useState("p3-2"); // Inicia con el segundo plan activo

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>

      <div className="my-5">
        <div className="p-5 text-center bg-body-tertiary">
          <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row align-items-center g-5 py-5">
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Servicios Tango Delta en forma remota</h1>
                <p className="lead">Asistencia para cualquier tipo de contingencia que surja en el uso diario del Sistema. Instalación del Sistema y Puestos de Tango. Parametrización del Tango Sueldos para la generación del Libro Sueldos Digital para AFIP.</p>
              </div>
              <div className="col-10 col-sm-8 col-lg-6">
                <img
                  src="/ConsultARme/tango.png"
                  className="d-block mx-lg-auto img-fluid"
                  alt="Bootstrap Themes"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="container px-2 px-md-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Custom cards</h2>

        <div className="row row-cols-1 row-cols-md-4 g-4 py-5">
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('/ConsultARme/bronce.jpg')" }}>
              <div className="d-flex flex-column h-100 p-3 p-md-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-3 pt-md-5 mt-3 mt-md-5 mb-3 mb-md-4 display-6 lh-1 fw-bold">Bronce</h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                    <small>Earth</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Repeat the above structure for other cards */}

        </div>
      </div>
    </>
  );
};

