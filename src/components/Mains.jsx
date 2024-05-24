import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const Main = () => {
    const location = useLocation();
    let mainContent;
    let articleContent;

    switch (location.pathname) {
        case '/servicios':
            mainContent = {
                image: '/ConsultARme/dispositivo-1.png',
                title: 'Servicios Tango Delta',
                text: 'Asistencia para cualquier tipo de contingencia que surja en el uso diario del Sistema. Instalación del Sistema y Puestos de Tango. Parametrización del Tango Sueldos para la generación del Libro Sueldos Digital para AFIP.',
                buttonText: 'Planes y tarifas',
                buttonLink: '/tarifas'
            };
            articleContent = {
                image: '/ConsultARme/dispositivo-2.png',
                title: 'Instalación',
                text: 'Nos encargamos de instalar el sistema en nuevos servidores o puestos, así como de migrarlo o actualizarlo cuando sea necesario. Solo necesitas proporcionar el equipo con los requisitos mínimos.'
            };
            break;
        case '/contacto':
            mainContent = {
                image: '/ConsultARme/dispositivo-3.png',
                title: 'Soporte en línea',
                text: 'Estamos disponibles para ayudarte de forma remota a través de herramientas como Team Viewer y Anydesk. Después de cada servicio realizado, te enviaremos un correo electrónico con detalles como la fecha, duración y un resumen del trabajo realizado.',
                buttonText: 'Contacto',
                buttonLink: '/contacto'
            };
            articleContent = {
                image: '/ConsultARme/dispositivo-2.png',
                title: 'Contáctanos',
                text: 'Estamos aquí para ayudarte. Puedes contactarnos a través de nuestro formulario en línea o llamarnos directamente.'
            };
            break;
        default:
            mainContent = {
                image: '/ConsultARme/dispositivo-1.png',
                title: 'Servicio Tango Delta',
                text: 'Asistencia para cualquier tipo de contingencia que surja en el uso diario del Sistema. Instalación del Sistema y Puestos de Tango. Parametrización del Tango Sueldos para la generación del Libro Sueldos Digital para AFIP.',
                buttonText: 'Conoce más',
                buttonLink: '/'
            };
            articleContent = {
                image: '/ConsultARme/dispositivo-2.png',
                title: 'Instalación',
                text: 'Nos encargamos de instalar el sistema en nuevos servidores o puestos, así como de migrarlo o actualizarlo cuando sea necesario. Solo necesitas proporcionar el equipo con los requisitos mínimos.'
            };
            break;
    }

    return (
        <>
            <main className="my-3 px-3 py-3">
                <div className="p-3 text-center">
                    <div className="container py-3" data-aos="fade-up">
                        <div className="row flex-lg-row-reverse align-items-center">
                            <div className="col-sm-12 col-md-6">
                                <img
                                    src={mainContent.image}
                                    className="d-block mx-lg-auto"
                                    alt={mainContent.title}
                                    width="700"
                                    height="500"
                                    loading="lazy"
                                />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{mainContent.title}</h1>
                                <p className="lead">{mainContent.text}</p>
                                <NavLink to={mainContent.buttonLink} className="nav-link">
                                    <button type="button" className="btn btn-dark btn-sm p-2">
                                        {mainContent.buttonText}
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <article className="my-3 px-3 py-3">
                <div className="p-3 text-center">
                    <div className="container py-3" data-aos="fade-up">
                        <div className="row flex-lg-row-reverse align-items-center">
                            <div className="col-sm-12 col-md-6 mb-4 mb-md-0">
                                <h1 className="display-5 fw-bold text-body-emphasis lh-1">{articleContent.title}</h1>
                                <p className="lead mt-3">{articleContent.text}</p>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <img
                                    src={articleContent.image}
                                    className="d-block mx-auto"
                                    alt={articleContent.title}
                                    width="700"
                                    height="500"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};