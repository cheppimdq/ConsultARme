import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const EquipoEmpresa = () => {
    return (


        <>
            <main className="container mt-4">
                <div className="row link-negro">

                    {/* <div className="col-md-4 p-3">
                        <img className="empresa-perfil" src="/vic.jpeg" alt="Foto Perfil" />
                        <h3 className="text-center">Victoria Vanesa Callegher</h3>
                        <div className="flex-pp">
                            <a className="boton-in" href="https://www.linkedin.com/in/jor-amoreo-casotti/" target="_blank">
                                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                            </a>
                            <p className="mb-0 mx-2">Socia y Asistente en ConsultARme Argentina</p>
                        </div>
                    </div> */}

                    <div className="py-5 team4">
                        <div className="container">
                            <div className="row justify-content-center mb-4">
                                <div className="col-md-7 text-center">
                                    <h3 className="mb-3">Experienced & Professional Team</h3>
                                    <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                                </div>
                            </div>
                            <div className="row">
                                {/* column */}
                                <div className="col-lg-3 mb-4">
                                    {/* Row */}
                                    <div className="row">
                                        <div className="col-md-12">
                                            <img src="ConsultARme/victoria1.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
                                        </div>
                                        <div className="col-md-12 text-center">
                                            <div className="pt-2">
                                                <h5 className="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                                                <h6 className="subtitle mb-3">Property Specialist</h6>
                                                <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-facebook"></i></a></li>
                                                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-twitter"></i></a></li>
                                                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-instagram"></i></a></li>
                                                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-behance"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Row */}
                                </div>
                                {/* column */}
                                {/* Repeat the above column code for other team members */}
                            </div>
                        </div>
                    </div>


                </div>

            </main>
        </>






    );
};