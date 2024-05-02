import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MainPlanes = () => {
  return (
    <>
      <main className="container mt-4">
        <div className="row mb-3 row-cols-1 row-cols-md-4  text-center">
          {/* Tarjeta de Bronce */}
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Bronce</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$25686<small className="text-body-secondary fw-light">/mes</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Asistencia para cualquier contingencia e inquietudes del uso diario del Sistema</li>
                  <li>Instalación y configuración de servidores y puestos (máximo 2 horas)</li>
                  <li>Implementación y parametrización de los distintos Módulos del Sistema</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-outline-primary">Contratar Bronce</button>
              </div>
            </div>
          </div>
          {/* Tarjeta de Plata */}
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Plata</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$35529<small className="text-body-secondary fw-light">/mes</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Asistencia para cualquier contingencia e inquietudes del uso diario del Sistema</li>
                  <li>Instalación y configuración de servidores y puestos (máximo 3 horas)</li>
                  <li>Implementación y parametrización de los distintos Módulos del Sistema</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">Contratar Plata</button>
              </div>
            </div>
          </div>
          {/* Tarjeta de Oro */}
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Oro</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$48207<small className="text-body-secondary fw-light">/mes</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Asistencia para cualquier contingencia e inquietud del uso diario del sistema</li>
                  <li>Instalación y configuración de servidores y puestos, hasta un maximo de 3hs</li>
                  <li>Implementación y parametrización de módulos</li>
                  <li>*Cuando el total de las horas de servicios utilizadas en el mes excedan el límite del paquete contratado se cobrará el tiempo adicional por el valor del paquete más alto</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">Contratar Oro</button>
              </div>
            </div>
          </div>
          {/* Tarjeta de Platino */}
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Platino</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">-</h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Máxima prioridad en la atención</li>
                  <li>Asistencia mediante mesa de ayuda sobre las inquietudes del uso diario del sistema</li>
                  <li>Soporte técnico con máxima prioridad en la atención para cualquier tipo de contingencia que surja en el uso del Sistema</li>
                  <li>Capacitaciones de Tango Delta Gestión de los Módulos de Ventas, Compras, Stock, Tesorería, Contabilidad, Sueldos y Liquidador de IVA</li>
                  <li>Instalación y configuración de servidores y puestos</li>
                  <li>Implementación y parametrización de los distintos Módulos del Sistema</li>
                  <li>Entrega de instructivos digitales para cada módulo según lo visto en el Remoto</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">Contactar para Platino</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export const ArticlePlanes = () => {
  return (
    <>
      <article className="container mt-4">

        <div className="row mb-3">
          <div className="col">
            <table className="table-responsive table-borderless">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col" className="bg-light text-black p-2 p-lg-3 border">Bronce</th>
                  <th scope="col" className="bg-light text-black p-2 p-lg-3 border">Plata</th>
                  <th scope="col" className="bg-warning text-black p-2 p-lg-3 border">Oro</th>
                  <th scope="col" className="bg-black text-light p-2 p-lg-3 border">Platino</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="pr-lg-3">Asistencia
                    <br />
                    <span className="text-muted">Contingencias del uso diario del sistema</span>
                  </th>
                  <td className="bg-white p-2 p-lg-3 border"><FontAwesomeIcon icon="fa-solid fa-circle-check" /> </td>
                  <td className="bg-white p-2 p-lg-3 border"><FontAwesomeIcon icon="fa-solid fa-circle-check" /> </td>
                  <td className="bg-white p-2 p-lg-3 border"><FontAwesomeIcon icon="fa-solid fa-circle-check" /> </td>
                  <td className="bg-white p-2 p-lg-3 border">Máxima prioridad en la atención. </td>
                </tr>
                {/* Resto de las filas */}
                <tr>
                  <th scope="row" className="pr-lg-3">Instalación
                    <br />
                    <span className="text-muted">Configuración de servidores y puestos</span>
                  </th>
                  <td className="bg-white p-2 p-lg-3 border">Maximo 2hs de trabajo. </td>
                  <td className="bg-white p-2 p-lg-3 border">Maximo 3hs de trabajo. </td>
                  <td className="bg-white p-2 p-lg-3 border">Maximo 3hs de trabajo. </td>
                  <td className="bg-white p-2 p-lg-3 border">Asistencia mediante mesa de ayuda. </td>
                </tr>
                {/* Resto de las filas */}
                <tr>
                  <th scope="row" className="pr-lg-3">Implementación
                    <br />
                    <span className="text-muted">Parametrización de los distintos Módulos del Sistema</span>
                  </th>
                  <td className="bg-white p-2 p-lg-3 border"><FontAwesomeIcon icon="fa-solid fa-circle-check" /> </td>
                  <td className="bg-white p-2 p-lg-3 border"><FontAwesomeIcon icon="fa-solid fa-circle-check" /> </td>
                  <td className="bg-white p-2 p-lg-3 border"><FontAwesomeIcon icon="fa-solid fa-circle-check" /> </td>
                  <td className="bg-white p-2 p-lg-3 border">Soporte técnico con máxima prioridad en la atención para cualquier tipo de contingencia. </td>
                </tr>
                {/* Resto de las filas */}
                <tr>
                <th scope="row" className="pr-lg-3">Capacitación
                    <br />
                    <span className="text-muted">-</span>
                  </th>
                  <td className="bg-white p-2 p-lg-3 border"><FontAwesomeIcon icon="fa-solid fa-circle-xmark" /> </td>
                  <td className="bg-white p-2 p-lg-3 border"><FontAwesomeIcon icon="fa-solid fa-circle-xmark" /> </td>
                  <td className="bg-white p-2 p-lg-3 border">Instructivos digitales para cada módulo. </td>
                  <td className="bg-white p-2 p-lg-3 border">Capacitaciones de Tango Delta Gestión de los Módulos de Ventas, Compras, Stock, Tesorería, Contabilidad, Sueldos y Liquidador de IVA. Instructivos digitales para cada módulo según lo visto en el Remoto. </td>
                </tr>
                {/* Resto de las filas */}
                <tr>
                <th scope="row" className="pr-lg-3">Tarifas
                    <br />
                    <span className="text-muted">-</span>
                  </th>
                  <td className="bg-white p-2 p-lg-3 border">$25686 </td>
                  <td className="bg-white p-2 p-lg-3 border">$35529 </td>
                  <td className="bg-white p-2 p-lg-3 border">$48207 </td>
                  <td className="bg-white p-2 p-lg-3 border">- </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </article>
    </>
  );
};
