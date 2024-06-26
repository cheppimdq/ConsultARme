import React from 'react';
import { useLocation } from 'react-router-dom';

export const Article = () => {
    const location = useLocation();
    let content;

    switch (location.pathname) {
        case '/servicios':
            content = {
                image: '/tango/any.png',
                title: 'Soporte en línea',
                text: 'Estamos disponibles para ayudarte de forma remota a través de herramientas como Team Viewer y Anydesk. Después de cada servicio realizado, te enviaremos un correo electrónico con detalles como la fecha, duración y un resumen del trabajo realizado.'
            };
            break;
        case '/contacto':
            content = {
                image: '/tango/any.png',
                title: 'Soporte en línea',
                text: 'Asistencia para cualquier tipo de contingencia que surja en el uso diario del Sistema. Instalación del Sistema y Puestos de Tango. Parametrización del Tango Sueldos para la generación del Libro Sueldos Digital para AFIP.'
            };
            break;
        default:
            content = {
                image: '/tango/any.png',
                title: 'Soporte en línea',
                text: 'Estamos disponibles para ayudarte de forma remota a través de herramientas como Team Viewer y Anydesk. Después de cada servicio realizado, te enviaremos un correo electrónico con detalles como la fecha, duración y un resumen del trabajo realizado.'
            };
            break;
    }

    return (
        <div className="text-start p-3 fondo-gris">
            <div className="container py-3 my-4" data-aos="fade-up">
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
                        <h5 className="h-1 mb-3">{content.title}</h5>
                        <p className="lead text-secondary mb-4">{content.text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};