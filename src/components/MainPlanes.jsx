import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                      <h2 className="text-uppercase title m-b-0">Premium</h2>
                      <h6 className="subtitle">The base monthly plan</h6>
                      <ul className="list-inline">
                        <li><i className="text-center overflow-hidden d-inline-block icon-picture"></i> <span>50 Premium images <br />Per day</span></li>
                        <li><i className="text-center overflow-hidden d-inline-block icon-camrecorder"></i> <span>50 Premium Videos <br />Per day</span></li>
                        <li><i className="text-center overflow-hidden d-inline-block icon-people"></i> <span>Users can operate the <br />Account</span></li>
                      </ul>
                      <div className="d-flex align-items-center">
                        <span className="display-5 text-dark mr-3 font-weight-medium">$10</span>

                      </div>
                    </div>
                  </div>
                  {/* Column */}
                  <div className="col-lg-5 bg-image text-center align-items-end position-relative d-flex" style={{ backgroundImage: 'url(/oro.jpg)' }}>
                    <div className="quote-box">
                      <h3 className="text-white font-weight-light mb-4">I am using this plan for the last two years and I am very much impressed with the quality ...</h3>
                      <h6 className="text-white">Hanna Gover</h6>
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
                      <h2 className="text-uppercase title m-b-0">Ultimate</h2>
                      <h6 className="subtitle">The base monthly plan</h6>
                      <ul className="list-inline">
                        <li><i className="text-center overflow-hidden d-inline-block icon-picture"></i> <span>100 Premium images <br />Per day</span></li>
                        <li><i className="text-center overflow-hidden d-inline-block icon-camrecorder"></i> <span>100 Premium Videos <br />Per day</span></li>
                        <li><i className="text-center overflow-hidden d-inline-block icon-people"></i> <span>Users can operate the <br />Account</span></li>
                      </ul>
                      <div className="d-flex align-items-center">
                        <span className="display-6 text-dark mr-3 font-weight-medium">Consulte</span>
                      </div>
                    </div>
                  </div>
                  {/* Column */}
                  <div className="col-lg-5 bg-image text-center align-items-end position-relative d-flex" style={{ backgroundImage: 'url(/platino.jpg)' }}>
                    <div className="quote-box">
                      <h3 className="text-white font-weight-light mb-4">I am using this plan for the last two years and I am very much impressed with the quality ...</h3>
                      <h6 className="text-white">Hanna Gover</h6>
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

export const ArticlePlanes = () => {
  return (
    <article className="container mt-4">
      <div className="row mb-3">
        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h5>
        <table className="table-responsive table-borderless">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col" className="bg-light text-black p-2 p-lg-3 border">Bronce</th>
              <th scope="col" className="bg-light text-black p-2 p-lg-3 border">Plata</th>
              <th scope="col" className="bg-warning text-black p-2 p-lg-3 border">Oro</th>
              <th scope="col" className="bg-ligth text-black p-2 p-lg-3 border">Platino</th>
            </tr>
          </thead>
          <tbody>
            {/* ASISTENCIA */}
            <tr>
              <th scope="row" className="pr-lg-3">Asistencia
                <br />
                <span className="text-muted">Contingencias en el uso diario del sistema</span>
              </th>
              <td className="bg-white p-2 p-lg-3 border">Hasta 2 horas de trabajo. </td>
              <td className="bg-white p-2 p-lg-3 border">Hasta 3 horas de trabajo. </td>
              <td className="bg-white p-2 p-lg-3 border">Hasta 5 horas de trabajo.  </td>
              <td className="bg-white p-2 p-lg-3 border">Máxima prioridad en la atención. </td>
            </tr>
            {/* INSTALACION */}
            <tr>
              <th scope="row" className="pr-lg-3">Instalación
                <br />
                <span className="text-muted">Configuración de servidores y puestos</span>
              </th>
              <td className="bg-white p-2 p-lg-3 border"><FontAwesomeIcon icon="check" /> </td>
              <td className="bg-white p-2 p-lg-3 border"><FontAwesomeIcon icon="check" /> </td>
              <td className="bg-white p-2 p-lg-3 border"><FontAwesomeIcon icon="check" /> </td>
              <td className="bg-white p-2 p-lg-3 border">Soporte técnico para cualquier tipo de contingencia. </td>
            </tr>
            {/* IMPLEMENTACION */}
            <tr>
              <th scope="row" className="pr-lg-3">Implementación
                <br />
                <span className="text-muted">Parametrización de módulos del sistema</span>
              </th>
              <td className="bg-white p-2 p-lg-3 border"><FontAwesomeIcon icon="check" /> </td>
              <td className="bg-white p-2 p-lg-3 border"><FontAwesomeIcon icon="check" /> </td>
              <td className="bg-white p-2 p-lg-3 border"><FontAwesomeIcon icon="check" /> </td>
              <td className="bg-white p-2 p-lg-3 border">Asistencia mediante mesa de ayuda.  </td>
            </tr>
            {/* CAPACITACIONES */}
            <tr>
              <th scope="row" className="pr-lg-3">Capacitación
                <br />
                <span className="text-muted">Instructivos digitales para cada módulo.  </span>
              </th>
              <td className="bg-white p-2 p-lg-3 border"><FontAwesomeIcon icon="times" /> </td>
              <td className="bg-white p-2 p-lg-3 border"><FontAwesomeIcon icon="times" /> </td>
              <td className="bg-white p-2 p-lg-3 border"><FontAwesomeIcon icon="check" /></td>
              <td className="bg-white p-2 p-lg-3 border">Capacitaciones de Tango Delta Gestión, módulos de Ventas, compras, stock, tesorería, contabilidad, sueldos y liquidador de IVA. </td>
            </tr>
            {/* TARIFAS */}
            <tr>
              <th scope="row" className="pr-lg-3">Tarifas
                <br />
                <span className="text-muted">-</span>
              </th>
              <td className="bg-white p-2 p-lg-3 border">$25.686 </td>
              <td className="bg-white p-2 p-lg-3 border">$35.529 </td>
              <td className="bg-white p-2 p-lg-3 border">$48.207 </td>
              <td className="bg-white p-2 p-lg-3 border">Tarifa personalizada </td>
            </tr>
          </tbody>
        </table>
        <div><p>*Cuando el total de las horas de servicios utilizadas en el mes excedan el límite del paquete contratado se cobrará el tiempo adicional por el valor del paquete más alto ($17,550)</p></div>
      </div>
    </article>
  );
};
