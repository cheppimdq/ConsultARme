import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const EquipoEmpresa = () => {
    return (
        <>
            <main className="container mt-4">
                <div className="row link-negro d-flex justify-content-evenly">
                    <div className="col-md-3 text-center">
                        <img src="/ConsultARme/victoria-1.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
                        <div className="pt-2">
                            <h5 className="mt-2 font-weight-medium mb-0">Victoria Callegher</h5>
                            <ul className="list-inline mt-1">
                                <li className="list-inline-item"><a className="nav-link boton-in" href="https://www.linkedin.com/in/victoria-vanesa-callegher-a18880b9/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin-in']} className='icono-in' /></a></li>
                                <li className="list-inline-item"><a className="nav-link" href="https://www.linkedin.com/in/victoria-vanesa-callegher-a18880b9/" target="_blank" rel="noopener noreferrer"><h6 className="subtitle mb-3">Socia en ConsultARme</h6></a></li>
                            </ul>
                            <p className='mt-2'>Capacitación e implementación de Sistema Tango Gestión, soporte al cliente vía mesa de ayuda y supervisión de equipo técnico.</p>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <img src="/ConsultARme/gus-1.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
                        <div className="pt-2">
                            <h5 className="mt-2 font-weight-medium mb-0">Gustavo Boye</h5>
                            <ul className="list-inline mt-1">
                                <li className="list-inline-item"><a className="nav-link boton-in" href="https://www.linkedin.com/in/gustavo-boye-80712772/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin-in']} className='icono-in' /></a></li>
                                <li className="list-inline-item"><a className="nav-link" href="https://www.linkedin.com/in/gustavo-boye-80712772/" target="_blank" rel="noopener noreferrer"><h6 className="subtitle mb-3">Socio en ConsultARme</h6></a></li>
                            </ul>
                            <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio neque et, alias culpa laboriosam inventore.</p>
                        </div>
                    </div>
                    
                </div>
            </main>
        </>
    );
};
