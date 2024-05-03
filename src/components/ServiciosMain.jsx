import React from 'react';

export const ServiciosMain = () => {
  return (
    <>
      <div className="my-4">
        <div className="p-3 text-center bg-body-tertiary">
          <div className="container py-3">
            <div className="row flex-lg-row-reverse align-items-center">
              <div className="col-sm-12 col-md-6">
                <img
                  src="/ConsultARme/tango.png"
                  className="d-block mx-lg-auto"
                  alt="Bootstrap Themes"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
              <div className="col-sm-12 col-md-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Servicios Tango Delta en forma remota</h1>
                <p className="lead">Asistencia para cualquier tipo de contingencia que surja en el uso diario del Sistema. Instalación del Sistema y Puestos de Tango. Parametrización del Tango Sueldos para la generación del Libro Sueldos Digital para AFIP.</p>
                <button type="button" className="btn btn-warning btn-sm p-2 ">Planes y tarifas</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};