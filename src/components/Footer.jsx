import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = () => {
    return (
        <footer className=" px-4 py-5 footer-pp">
            <div className="p-3 text-center">
                <div className='container py-3'>
                    <div className="row">
                        <div className='col-sm-12 col-md-6 py-3'>
                            <ul className="nav justify-content-start">
                                <li className="list-inline-item"><NavLink to='/' className="nav-link">Inicio</NavLink></li>
                                <li className="list-inline-item"><NavLink to='/servicios' className="nav-link">Servicios</NavLink></li>
                                <li className="list-inline-item"><NavLink to='/contacto' className="nav-link">Contacto</NavLink></li>
                            </ul>
                        </div>
                        <div className='col-sm-12 col-md-6 py-3'>
                            <ul className="nav justify-content-end">
                                <li className="list-inline-item"><Link className="nav-link" href="https://www.instagram.com/consultarme.ok/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></Link></li>
                                <li className="list-inline-item"><Link className="nav-link" href="https://www.facebook.com/ConsultARme" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></Link></li>
                                <li className="list-inline-item"><Link className="nav-link" href="https://www.linkedin.com/company/consultarme/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></Link></li>
                            </ul>
                        </div>
                        <div className='col-sm-12 py-3'>
                            <h6 className="text-white">2024 &copy; ConsultARme</h6>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};