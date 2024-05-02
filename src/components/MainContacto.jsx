import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export const MainContacto = () => {
    return (
        <>
            <main className="container mt-4">
                <div className="row link-negro">
                    <div className='col-md-7 py-1'>
                        <h2 className="h1 mb-3">Comunicate</h2>
                        <p className="lead fs-4 text-secondary mb-5">Estamos siempre en búsqueda de nuevos clientes. Si estás interesado en trabajar con nosotros, por favor contáctanos de alguna de las siguientes formas.</p>
                        <div className="d-flex">
                            <div className='mb-5 col-sm-6 d-flex align-items-center'>
                                <div className="me-4 boton-contacto">
                                    <Link to="#" className="icono-contacto"><FontAwesomeIcon icon={['fas', 'compass']} /></Link>
                                </div>
                                <div>
                                    <h4 className="mb-0">Dirección</h4>
                                    <p className="mb-0">Dirección 1234, Epuyén</p>
                                    <p className="mb-0">Chubut, Argentina</p>

                                </div>
                            </div>
                            <div className="mb-5 col-sm-6 d-flex align-items-center">
                                <div className="me-4 boton-contacto">
                                    <Link to="#" className="icono-contacto"> <FontAwesomeIcon icon={['fas', 'envelope']} /></Link>
                                </div>
                                <div>
                                    <h4 className="mb-0">Correo</h4>
                                    <Link href="mailto:correo@gmail.com" className="mb-0">correo@gmail.com</Link>
                                </div>
                            </div>

                        </div>
                        <div className='d-flex'>
                            
                            <div className="mb-5 col-sm-6 d-flex align-items-center">
                                <div className="me-4 boton-contacto">
                                    <Link to="#" className="icono-contacto"><FontAwesomeIcon icon={['fas', 'clock']} /></Link>
                                </div>
                                <div>
                                    <h4 className="mb-0">Horario</h4>
                                    <p className="mb-0">Lunes a Viernes</p>
                                    <p className="mb-0">8:30 - 16:30 Hs</p>
                                </div>
                            </div>
                            <div className='mb-5 col-sm-6 d-flex align-items-center'>
                                <div className="me-4 boton-contacto">
                                    <Link to="#" className="icono-contacto"> <FontAwesomeIcon icon={['fas', 'phone']} /></Link>
                                </div>
                                <div>
                                    <h4 className="mb-0">Teléfono</h4>
                                    <Link href="tel:+5492215923513" className="mb-0">+54 221 5923513</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 py-1'>
                        <iframe className='iframe-maps'
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5908.684724594333!2d-71.36103115956003!3d-42.22849825291371!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961b87d8d8391ad7%3A0xff6964d741c7b3b6!2zRXB1ecOpbiwgQ2h1YnV0!5e0!3m2!1ses!2sar!4v1714322802092!5m2!1ses!2sar"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </main>
        </>
    );
};
