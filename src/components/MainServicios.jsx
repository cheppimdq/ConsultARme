import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MainServicios = () => {
  return (
    <>
      <div className="my-4">
        <div className="p-3 text-center bg-body-tertiary">
          <div className="container col-xxl-8 px-4 py-3">
            <div className="row flex-lg-row-reverse align-items-center">
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
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Servicios Tango Delta en forma remota</h1>
                <p className="lead">Asistencia para cualquier tipo de contingencia que surja en el uso diario del Sistema. Instalación del Sistema y Puestos de Tango. Parametrización del Tango Sueldos para la generación del Libro Sueldos Digital para AFIP.</p>
                <button type="button" className="btn btn-dark btn-sm btn-lg px-4 me-md-2">Planes y tarifas</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <article className="container py-3">
        <div className="row my-4">
          <div className="col-sm-12 col-md-4 d-flex gap-4 p-3">
            <div className='boton-planes'>
              <FontAwesomeIcon icon="fa-solid fa-headset" className='icono-planes' />
            </div>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Asistencia</h3>
              <p>en el uso diario del sistema</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 d-flex gap-4 p-3">
            <div className='boton-planes'>
              <FontAwesomeIcon icon="fa-regular fa-circle-down" className='icono-planes' />
            </div>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Instalación</h3>
              <p>configuración de servidores y puestos</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 d-flex gap-4 p-3">
            <div className='boton-planes'>
              <FontAwesomeIcon icon="fa-solid fa-route" className='icono-planes' />
            </div>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Implementación</h3>
              <p>y parametrización de módulos del sistema</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 d-flex gap-4 p-3">
            <div className='boton-planes'>
              <FontAwesomeIcon icon="fa-regular fa-file" className='icono-planes' />
            </div>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Instructivos digitales</h3>
              <p>para cada módulo según lo visto en remoto</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 d-flex gap-4 p-3">
            <div className='boton-planes'>
              <FontAwesomeIcon icon="fa-solid fa-graduation-cap" className='icono-planes' />
            </div>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Capacitaciones</h3>
              <p>Tango Delta Gestión</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 d-flex gap-4 p-3">
            <div className='boton-planes'>
              <FontAwesomeIcon icon="fa-regular fa-keyboard" className='icono-planes' />
            </div>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Soporte online</h3>
              <p>mediante mesa de ayuda</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};