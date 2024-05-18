import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const FooterNegro = () => {
    return (
        <>
            <footer className="fondo-negro">
                <div className="row footer-negro link-gris">
                    <ul className="nav col-sm-12 col-md-7 flex-footer">
                        <li className="list-inline-item"><NavLink to='/' className="nav-link">Inicio</NavLink></li>
                        <li className="list-inline-item"><NavLink to='/servicios' className="nav-link">Servicios</NavLink></li>
                        <li className="list-inline-item"><NavLink to='/tarifas' className="nav-link">Tarifas</NavLink></li>
                        <li className="list-inline-item"><NavLink to='/contacto' className="nav-link">Contacto</NavLink></li>
                    </ul>
                    <ul className="nav col-sm-12 col-md-5 flex-footer">
                        <li className="list-inline-item"><Link className="nav-link" href="https://www.instagram.com/consultarme.ok/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></Link></li>
                        <li className="list-inline-item"><Link className="nav-link" href="https://www.facebook.com/ConsultARme" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></Link></li>
                        <li className="list-inline-item"><Link className="nav-link" href="https://www.linkedin.com/company/consultarme/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></Link></li>
                    </ul>
                    <h6 className="col-sm-12 flex-footer">2024 &copy; ConsultARme</h6>
                </div>
            </footer>
        </>
    );
};
