import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export const ContactoMain = () => {
    return (
        <>

            <div className="my-4">
                <div className="p-3 text-center fondo-gris">
                    <div className="container py-3">
                        <div className="row flex-lg-row-reverse align-items-center">
                            <div className="col-sm-12 col-md-6">
                                <img
                                    src="/ConsultARme/dispositivo-2.png"
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main className="container mt-4">
                <div className="row link-negro d-flex justify-content-evenly">
                    <div className="col-md-3 mb-4 text-center pt-3 px-3">
                        <img src="/ConsultARme/victoria-1.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
                        <h5 className="mt-3 mb-0 font-weight-medium">Victoria Callegher</h5>
                        <ul className="list-inline mt-2">
                            <li className="list-inline-item"><Link className="nav-link boton-in" href="https://www.linkedin.com/in/victoria-vanesa-callegher-a18880b9/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin-in']} className='icono-in' /></Link></li>
                            <li className="list-inline-item"><Link className="nav-link" href="https://www.linkedin.com/in/victoria-vanesa-callegher-a18880b9/" target="_blank" rel="noopener noreferrer"><h6 className="subtitle mb-0">Socia en ConsultARme</h6></Link></li>
                        </ul>
                        <p className='mt-3'>Capacitación e implementación de Sistema Tango Gestión, soporte al cliente vía mesa de ayuda y supervisión de equipo técnico.</p>
                    </div>

                    <div className="col-md-3 mb-4 text-center pt-3 px-3">
                        <img src="/ConsultARme/gus-1.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
                        <h5 className="mt-3 mb-0 font-weight-medium">Gustavo Boye</h5>
                        <ul className="list-inline mt-2">
                            <li className="list-inline-item"><Link className="nav-link boton-in" href="https://www.linkedin.com/in/gustavo-boye-80712772/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin-in']} className='icono-in' /></Link></li>
                            <li className="list-inline-item"><Link className="nav-link" href="https://www.linkedin.com/in/gustavo-boye-80712772/" target="_blank" rel="noopener noreferrer"><h6 className="subtitle mb-0">Socio en ConsultARme</h6></Link></li>
                        </ul>
                        <p className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam illum non, doloribus nihil omnis harum commodi.</p>
                    </div>
                </div>
            </main>



        </>
    );
};
