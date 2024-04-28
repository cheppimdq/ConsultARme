import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const EquipoEmpresa = () => {
    return (


        <>
            <main className="container mt-4">
                <div className="row link-negro">

                    <div className="row justify-content-center mb-4">
                        <div className="col-md-7 text-center">
                            <h3 className="mb-3">Experienced & Professional Team</h3>
                            <h6 className="subtitle">You can rely on our amazing features list and also our customer services will be a great experience for you without a doubt and in no time</h6>
                        </div>
                    </div>
                    <div className="row">
                        {/* column  */}
                        <div className="col-lg-3 mb-4">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <img src="/ConsultARme/victoria-1.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
                                    <div className="pt-2">
                                        <h5 className="mt-2 font-weight-medium mb-0">Victoria Vanesa Callegher</h5>
                                        <ul className="list-inline mt-1">
                                            <li className="list-inline-item"><a className="nav-link boton-in" href="https://www.linkedin.com/company/consultarme/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin-in']} className='icono-in'/></a></li>
                                            <li className="list-inline-item"><a className="nav-link" href="https://www.linkedin.com/company/consultarme/" target="_blank" rel="noopener noreferrer"><h6 className="subtitle mb-3">Socia en ConsultARme</h6>
                                            </a></li>
                                        </ul>
                                        <p className='mt-2'>Capacitación e implementación de Sistema Tango Gestión, soporte al cliente vía mesa de ayuda y supervisión de equipo técnico.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* column  */}

                        {/* Repeat the above column structure for each team member */}

                    </div>



                </div>

            </main>
        </>






    );
};