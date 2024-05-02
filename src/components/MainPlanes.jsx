import React, { useState } from "react";

export const MainPlanes = () => {
  const [activeTab, setActiveTab] = useState("p3-2"); // Inicia con el segundo plan activo

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="pricing3 py-5">
      <div className="container">
        <div className="row">
          {/* BOTONES */}
          <div className="col-lg-2 col-md-3 align-self-center">
            <div className="nav flex-column nav-pills" role="tablist">
              <button
                className={`nav-link btn ${activeTab === "p3-1" ? "active" : ""}`}
                onClick={() => handleTabChange("p3-1")}
              >
                <h2>Bronce</h2>
                <h6 className="subtitle">$25.686<small>/m</small></h6>
              </button>
              <button
                className={`nav-link btn ${activeTab === "p3-2" ? "active" : ""}`}
                onClick={() => handleTabChange("p3-2")}
              >
                <h2>Plata</h2>
                <h6 className="subtitle">$35.529<small>/m</small></h6>
              </button>
              <button
                className={`nav-link btn ${activeTab === "p3-3" ? "active" : ""}`}
                onClick={() => handleTabChange("p3-3")}
              >
                <h2>Oro</h2>
                <h6 className="subtitle">$48.207<small>/m</small></h6>
              </button>
              <button
                className={`nav-link btn ${activeTab === "p3-4" ? "active" : ""}`}
                onClick={() => handleTabChange("p3-4")}
              >
                <h2>Platino</h2>
                <h6 className="subtitle">Consulte</h6>
              </button>
            </div>
          </div>
          {/* TARJERTAS */}
          <div className="col-lg-10 col-md-9">
            <div className="tab-content">
              <div className={`tab-pane fade ${activeTab === "p3-1" ? "show active" : ""}`} id="p3-1" role="tabpanel">
                <div className="row">
                  {/* Column */}
                  <div className="col-lg-7">
                    <div className="pricing-box">
                      <h2 className="text-uppercase title mb-0">Bronce</h2>
                      <h6 className="subtitle">Hasta 2 horas de trabajo</h6>
                      <ul className="list-inline">
                        <li><i className="text-center overflow-hidden d-inline-block icon-picture"></i> <span>Asistencia de contingencias e inquietudes en el uso diario del sistema.</span></li>
                        <li><i className="text-center overflow-hidden d-inline-block icon-camrecorder"></i> <span>Instalación y configuración de servidores y puestos.</span></li>
                        <li><i className="text-center overflow-hidden d-inline-block icon-people"></i> <span>Implementación y parametrización de los distintos módulos del .</span></li>
                        <li><i className="text-center overflow-hidden d-inline-block icon-people"></i> <span>Exceso del límite mensual del paquete contratado $17,550.</span></li>
                      </ul>
                      <div className="d-flex align-items-center">
                        <span className="display-6 text-dark mr-3 vm font-weight-medium">$25.686<small>/m</small></span>
                      </div>
                    </div>
                  </div>
                  {/* Column */}
                  <div className="col-lg-5 bg-image text-center align-items-end position-relative d-flex" style={{ backgroundImage: 'url(/bronce.jpg)' }}>
                    <div className="quote-box">
                      <h3 className="text-white font-weight-light mb-4">Asistencia diaria, instalación, implementación y parametrización</h3>
                      <h6 className="text-white">Victoria Callegher</h6>
                    </div>
                  </div>
                  {/* Column */}
                </div>
              </div>
              <div className={`tab-pane fade ${activeTab === "p3-2" ? "show active" : ""}`} id="p3-2" role="tabpanel">
                <div className="row">
                  {/* Column */}
                  <div className="col-lg-7">
                    <div className="pricing-box">
                      <h2 className="text-uppercase title mb-0">Plata</h2>
                      <h6 className="subtitle">Hasta 3 horas de trabajo</h6>
                      <ul className="list-inline">
                        <li><i className="text-center overflow-hidden d-inline-block icon-picture"></i> <span>Asistencia de contingencias e inquietudes en el uso diario del sistema.</span></li>
                        <li><i className="text-center overflow-hidden d-inline-block icon-camrecorder"></i> <span>Instalación y configuración de servidores y puestos.</span></li>
                        <li><i className="text-center overflow-hidden d-inline-block icon-people"></i> <span>Implementación y parametrización de módulos</span></li>
                        <li><i className="text-center overflow-hidden d-inline-block icon-people"></i> <span> Exceso del límite mensual del paquete contratado $17,550.</span></li>
                      </ul>
                      <div className="d-flex align-items-center">
                        <span className="display-6 text-dark mr-3 vm font-weight-medium">$35.529<small>/m</small></span>
                      </div>
                    </div>
                  </div>
                  {/* Column */}
                  <div className="col-lg-5 bg-image text-center align-items-end position-relative d-flex" style={{ backgroundImage: 'url(/plata.jpg)' }}>
                    <div className="quote-box">
                      <h3 className="text-white font-weight-light mb-4">Asistencia diaria, instalación, implementación y parametrización</h3>
                      <h6 className="text-white">Victoria Callegher</h6>
                    </div>
                  </div>
                  {/* Column */}
                </div>
              </div>
              <div className={`tab-pane fade ${activeTab === "p3-3" ? "show active" : ""}`} id="p3-3" role="tabpanel">
                <div className="row">
                  {/* Column */}
                  <div className="col-lg-7">
                    <div className="pricing-box">
                      <h2 className="text-uppercase title m-b-0">Oro</h2>
                      <h6 className="subtitle">Hasta 5 horas de trabajo</h6>
                      <ul className="list-inline">
                        <li><i className="text-center overflow-hidden d-inline-block icon-picture"></i> <span>Asistencia de contingencias e inquietudes en el uso diario del sistema.</span></li>
                        <li><i className="text-center overflow-hidden d-inline-block icon-camrecorder"></i> <span>Instalación y configuración de servidores y puestos.</span></li>
                        <li><i className="text-center overflow-hidden d-inline-block icon-people"></i> <span>Implementación y parametrización de módulos</span></li>
                        <li><i className="text-center overflow-hidden d-inline-block icon-people"></i> <span> Exceso del límite mensual del paquete contratado $17,550.</span></li>
                      </ul>
                      <div className="d-flex align-items-center">
                        <span className="display-5 text-dark mr-3 font-weight-medium">$48.207</span>
                      </div>
                    </div>
                  </div>
                  {/* Column */}
                  <div className="col-lg-5 bg-image text-center align-items-end position-relative d-flex" style={{ backgroundImage: 'url(/oro.jpg)' }}>
                    <div className="quote-box">
                      <h3 className="text-white font-weight-light mb-4">Asistencia diaria, instalación, implementación y parametrización</h3>
                      <h6 className="text-white">Victoria Callegher</h6>
                    </div>
                  </div>
                  {/* Column */}
                </div>
              </div>
              <div className={`tab-pane fade ${activeTab === "p3-4" ? "show active" : ""}`} id="p3-4" role="tabpanel">
                <div className="row">
                  {/* Column */}
                  <div className="col-lg-7">
                    <div className="pricing-box">
                      <h2 className="text-uppercase title m-b-0">Platino</h2>
                      <h6 className="subtitle">Máxima prioridad en la atención</h6>
                      <ul className="list-inline">
                        <li><i className="text-center overflow-hidden d-inline-block icon-picture"></i><span>Soporte técnico para cualquier tipo de contingencia.</span></li>
                        <li><i className="text-center overflow-hidden d-inline-block icon-camrecorder"></i> <span>Máxima prioridad en la atención. Asistencia mediante mesa de ayuda.</span></li>
                        <li><i className="text-center overflow-hidden d-inline-block icon-people"></i> <span>Capacitaciones de Tango Delta Gestión, módulos de Ventas, compras, stock, tesorería, contabilidad, sueldos y liquidador de IVA.</span></li>
                      </ul>
                      <div className="d-flex align-items-center">
                        <span className="display-6 text-dark mr-3 font-weight-medium">Tarifa personalizada</span>
                      </div>
                    </div>
                  </div>
                  {/* Column */}
                  <div className="col-lg-5 bg-image text-center align-items-end position-relative d-flex" style={{ backgroundImage: 'url(/platino.jpg)' }}>
                    <div className="quote-box">
                    <h3 className="text-white font-weight-light mb-4">Asistencia diaria, instalación, implementación y parametrización</h3>
                      <h6 className="text-white">Victoria Callegher</h6>
                    </div>
                  </div>
                  {/* Column */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};