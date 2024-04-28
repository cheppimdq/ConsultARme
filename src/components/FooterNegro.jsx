import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const FooterNegro = () => {
    return (
        <>
            <footer className="container-fluid mt-4">
                <div className="row footer-negro link-gris">
                    <ul className="nav col-sm-12 col-md-7 flex-footer">
                        <li className="list-inline-item"><NavLink to='/' className="nav-link">Inicio</NavLink></li>
                        <li className="list-inline-item"><NavLink to='/empresa' className="nav-link">Empresa</NavLink></li>
                        <li className="list-inline-item"><NavLink to='/planes' className="nav-link">Servicios</NavLink></li>
                        <li className="list-inline-item"><NavLink to='/contacto' className="nav-link">Contacto</NavLink></li>
                    </ul>
                    <ul className="nav col-sm-12 col-md-5 flex-footer">
                    <li className="list-inline-item"><a className="nav-link" href="https://www.instagram.com/consultarme.ok/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
                        <li className="list-inline-item"><a className="nav-link" href="https://www.facebook.com/ConsultARme" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a></li>
                        <li className="list-inline-item"><a className="nav-link" href="https://www.linkedin.com/company/consultarme/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a></li></ul>
                    <h6 className="col-sm-12 flex-footer">2024 &copy; ConsultARme</h6>
                </div>
            </footer>
        </>
    );
};
