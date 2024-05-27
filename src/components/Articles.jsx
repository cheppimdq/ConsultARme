import React from 'react';
import { useLocation } from 'react-router-dom';

export const Article = () => {
    const location = useLocation();
    let content;

    switch (location.pathname) {
        case '/servicios':
            content = {
                image: '/ConsultARme/tango/any.png',
                title: 'Soporte en línea',
                text: 'Estamos disponibles para ayudarte de forma remota a través de herramientas como Team Viewer y Anydesk. Después de cada servicio realizado, te enviaremos un correo electrónico con detalles como la fecha, duración y un resumen del trabajo realizado.'
            };
            break;
        case '/contacto':
            content = {
                image: '/ConsultARme/tango/any.png',
                title: 'Soporte en línea',
                text: 'Estamos disponibles para ayudarte de forma remota a través de herramientas como Team Viewer y Anydesk. Después de cada servicio realizado, te enviaremos un correo electrónico con detalles como la fecha, duración y un resumen del trabajo realizado.'
            };
            break;
        default:
            content = {
                image: '/ConsultARme/tango/any.png',
                title: 'Soporte en línea',
                text: 'Estamos disponibles para ayudarte de forma remota a través de herramientas como Team Viewer y Anydesk. Después de cada servicio realizado, te enviaremos un correo electrónico con detalles como la fecha, duración y un resumen del trabajo realizado.'
            };
            break;
    }

    return (
        <div className="my-4 px-4 py-5">
            <div className="p-3 text-center">
                <div className="container py-3" data-aos="fade-up">
                    <div className="row flex-lg-row-reverse align-items-center">
                        <div className="col-sm-12 col-md-6">
                            <img
                                src={content.image}
                                className="d-block mx-lg-auto"
                                alt={content.title}
                                width="700"
                                height="500"
                                loading="lazy"
                            />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{content.title}</h1>
                            <p className="lead">{content.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};