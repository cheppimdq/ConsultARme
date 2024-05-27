import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const Parallax = () => {
    const location = useLocation();
    let content;

    switch (location.pathname) {
        case '/servicios':
            content = {
                background: '/ConsultARme/img/axof.jpg',
                title: 'Comunicate con nosotros',
                buttonText: 'Soporte en línea',
                buttonLink: 'https://api.whatsapp.com/send?phone=5492215923513'
            };
            break;
        case '/contacto':
            content = {
                background: '/ConsultARme/img/axof.jpg',
                title: 'Comunicate con nosotros',
                buttonText: 'Soporte en línea',
                buttonLink: 'https://api.whatsapp.com/send?phone=5492215923513'
            };
            break;
        default:
            content = {
                background: '/ConsultARme/img/axof.jpg',
                title: 'Servicio Tango Delta',
                buttonText: 'Servicios',
                buttonLink: '/servicios'
            };
            break;
    }

    return (
        <section className="parallax-pp" style={{ background: content.background }}>
            <div className="parallax-inner-pp p-3 text-center">
                <div className="container py-3">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-sm-7">
                            <img
                                src="/ConsultARme/marca/logo.svg"
                                className="d-block mx-lg-auto mb-3"
                                alt="Bootstrap Themes"
                                loading="lazy"
                            />
                        </div>
                        <div className="col-sm-7">
                            <h3 className="display-6 fw-bold lh-1 mb-5">{content.title}</h3>
                            <NavLink to={content.buttonLink} className="nav-link">
                                <button className="btn btn-lg bsb-btn-2xl btn-info">
                                    {content.buttonText}
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};