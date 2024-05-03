import React from 'react';

export const ArticlePlanes = () => {
  return (
    <>
    <div className="my-3">
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
      

    </>
  );
};