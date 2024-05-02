import React, { useState } from "react";

export const MainPlanes = () => {
  const [activeTab, setActiveTab] = useState("p3-2"); // Inicia con el segundo plan activo

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="pricing3 py-5 mt-4">
      <div className="container">
        <div className="row">
          {/* BOTONES */}
          <div className="col-md-3 align-self-center">
            <div className="nav flex-column nav-pills" role="tablist">
              {["p3-1", "p3-2", "p3-3", "p3-4"].map((tabId) => (
                <button
                  key={tabId}
                  className={`nav-link btn ${activeTab === tabId ? "active" : ""}`}
                  onClick={() => handleTabChange(tabId)}
                >
                  {tabId === "p3-1" && (
                    <>
                      <h2>Bronce</h2>
                      <h6 className="subtitle">$25.686</h6>
                    </>
                  )}
                  {tabId === "p3-2" && (
                    <>
                      <h2>Plata</h2>
                      <h6 className="subtitle">$35.529</h6>
                    </>
                  )}
                  {tabId === "p3-3" && (
                    <>
                      <h2>Oro</h2>
                      <h6 className="subtitle">$48.207</h6>
                    </>
                  )}
                  {tabId === "p3-4" && (
                    <>
                      <h2>Platino</h2>
                      <h6 className="subtitle">Consulte</h6>
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>
          {/* TARJETAS */}
          <div className="col-md-9">
            <div className="tab-content">
              {["p3-1", "p3-2", "p3-3", "p3-4"].map((tabId) => (
                <div
                  key={tabId}
                  className={`tab-pane fade ${activeTab === tabId ? "show active" : ""}`}
                  id={tabId}
                  role="tabpanel"
                >
                  <div className="row">
                    {/* Column */}
                    <div className="col-md-7">
                      <div className="pricing-box">
                        {tabId === "p3-1" && (
                          <>
                            <h2 className="text-uppercase title mb-0">Bronce</h2>
                            <h6 className="subtitle">Hasta 2 horas de trabajo</h6>
                            <ul className="list-inline">
                              <li>
                                <i className="icon-picture"></i>{" "}
                                <span>Asistencia de contingencias e inquietudes en el uso diario del sistema.</span>
                              </li>
                              <li>
                                <i className="icon-camrecorder"></i>{" "}
                                <span>Instalación y configuración de servidores y puestos.</span>
                              </li>
                              <li>
                                <i className="icon-people"></i>{" "}
                                <span>Implementación y parametrización de módulos.</span>
                              </li>
                              <li>
                                <i className="icon-people"></i>{" "}
                                <span>Exceso del límite mensual del paquete contratado $17,550.</span>
                              </li>
                            </ul>
                          </>
                        )}
                        {tabId === "p3-2" && (
                          <>
                            <h2 className="text-uppercase title mb-0">Plata</h2>
                            <h6 className="subtitle">Hasta 3 horas de trabajo</h6>
                            <ul className="list-inline">
                              <li>
                                <i className="icon-picture"></i>{" "}
                                <span>Asistencia de contingencias e inquietudes en el uso diario del sistema.</span>
                              </li>
                              <li>
                                <i className="icon-camrecorder"></i>{" "}
                                <span>Instalación y configuración de servidores y puestos.</span>
                              </li>
                              <li>
                                <i className="icon-people"></i>{" "}
                                <span>Implementación y parametrización de módulos.</span>
                              </li>
                              <li>
                                <i className="icon-people"></i>{" "}
                                <span>Exceso del límite mensual del paquete contratado $17,550.</span>
                              </li>
                            </ul>
                          </>
                        )}
                        {tabId === "p3-3" && (
                          <>
                            <h2 className="text-uppercase title m-b-0">Oro</h2>
                            <h6 className="subtitle">Hasta 5 horas de trabajo</h6>
                            <ul className="list-inline">
                              <li>
                                <i className="icon-picture"></i>{" "}
                                <span>Asistencia de contingencias e inquietudes en el uso diario del sistema.</span>
                              </li>
                              <li>
                                <i className="icon-camrecorder"></i>{" "}
                                <span>Instalación y configuración de servidores y puestos.</span>
                              </li>
                              <li>
                                <i className="icon-people"></i>{" "}
                                <span>Implementación y parametrización de módulos</span>
                              </li>
                              <li>
                                <i className="icon-people"></i>{" "}
                                <span>Exceso del límite mensual del paquete contratado $17,550.</span>
                              </li>
                            </ul>
                          </>
                        )}
                        {tabId === "p3-4" && (
                          <>
                            <h2 className="text-uppercase title m-b-0">Platino</h2>
                            <h6 className="subtitle">Sin limite</h6>
                            <ul className="list-inline">
                              <li>
                                <i className="icon-picture"></i><span>Soporte técnico para cualquier tipo de contingencia. Máxima prioridad en la atención. </span>
                              </li>
                              <li>
                                <i className="icon-camrecorder"></i>{" "}
                                <span>Asistencia mediante mesa de ayuda.</span>
                              </li>
                              <li>
                                <i className="icon-people"></i>{" "}
                                <span>Capacitaciones de Tango Delta Gestión, módulos de Ventas, compras, stock, tesorería, contabilidad, sueldos y liquidador de IVA.</span>
                              </li>
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                    {/* Column */}
                    <div
                      className="col-md-5 bg-image text-center align-items-end position-relative d-flex"
                      style={{ backgroundImage: 'url(/ConsultARme/bronce.jpg)' }}
                    >
                      <div className="quote-box">
                        <h3 className="text-white font-weight-light mb-4">
                          Asistencia diaria, instalación, implementación y parametrización
                        </h3>
                        <h6 className="text-white">Victoria Callegher</h6>
                      </div>
                    </div>
                    {/* Column */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

