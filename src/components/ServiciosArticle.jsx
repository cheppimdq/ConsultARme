import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ServiciosArticle = () => {
    return (
        <>
            <div className="container py-3">
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
            </div>
        </>
    );
};