import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export const ContactoArticle = () => {
    return (
        <>
            <div className="my-4">
                <div className="p-3 text-center fondo-gris">
                    <div className="container py-3">
                        <div className="row my-4 link-negro ">
                            <div className="col-sm-12 col-md-6 d-flex gap-4 p-3 justify-content-center align-items-center">
                                <div className='boton-contacto'>
                                    <Link to="#" className="icono-contacto"><FontAwesomeIcon icon="fa-solid fa-phone" /></Link>
                                </div>
                                <div className="text-start">
                                    <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Telefono</h3>
                                    <Link to="#" ><p>+54 221 5923513</p></Link>
                                </div>
                            </div>
                            
                            <div className="col-sm-12 col-md-6 d-flex gap-4 p-3 justify-content-center align-items-center">
                                <div className='boton-contacto'>
                                    <Link to="#" className="icono-contacto"><FontAwesomeIcon icon="fa-solid fa-clock" /></Link>
                                </div>
                                <div className="text-start">
                                    <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Horario</h3>
                                    <p>Lunes a viernes de 8:30 a 16:30 Hs</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 d-flex gap-4 p-3 justify-content-center align-items-center">
                                <div className='boton-contacto'>
                                    <Link to="#" className="icono-contacto"><FontAwesomeIcon icon="fa-solid fa-envelope" /></Link>
                                </div>
                                <div className="text-start">
                                    <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Correo</h3>
                                    <Link to="#" ><p>info@gmail.com</p></Link>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 d-flex gap-4 p-3 justify-content-center align-items-center">
                                <div className='boton-contacto'>
                                    <Link to="#" className="icono-contacto"><FontAwesomeIcon icon="fa-solid fa-map-location-dot" /></Link>
                                </div>
                                <div className="text-start">
                                    <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Dirección</h3>
                                    <p>Direcccion 125, Epuyén, Argentina</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};