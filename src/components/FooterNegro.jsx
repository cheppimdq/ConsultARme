import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const FooterNegro = () => {
    return (
        <>
            <footer className="container-fluid mt-4">
                <div className="row footer-negro link-gris">
                    <ul className="nav col-sm-12 col-md-7 flex-footer">
                        <li className="list-inline-item"><NavLink to='/' className="nav-link">Inicio</NavLink></li>
                        <li className="list-inline-item"><NavLink to='/planes' className="nav-link">Planes</NavLink></li>
                        <li className="list-inline-item"><NavLink to='/empresa' className="nav-link">Empresa</NavLink></li>
                        <li className="list-inline-item"><NavLink to='/contacto' className="nav-link">Contacto</NavLink></li>
                    </ul>
                    <ul className="nav col-sm-12 col-md-5 flex-footer">
                        <li className="list-inline-item"><Link className="nav-link" href="https://www.instagram.com/consultarme.ok/"><FontAwesomeIcon icon="fa-brands fa-instagram" /></Link></li>
                        <li className="list-inline-item"><Link className="nav-link" href="https://www.facebook.com/ConsultARme"><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></Link></li>
                        <li className="list-inline-item"><Link className="nav-link" href="https://www.linkedin.com/company/consultarme/"><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></Link></li>
                    </ul>
                    <h6 className="col-sm-12 flex-footer">2024 &copy; ConsultARme</h6>
                </div>
            </footer>
        </>
    );
};
