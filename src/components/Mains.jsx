import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const Main = () => {
    const location = useLocation();
    let mainContent;
    let articleContent;

    switch (location.pathname) {
        case '/servicios':
            mainContent = {
                image: '/tango/dispositivo-1.png',
                title: 'Servicios Tango Delta',
                text: 'Asistencia para cualquier tipo de contingencia que surja en el uso diario del Sistema. Instalación del Sistema y Puestos de Tango. Parametrización del Tango Sueldos para la generación del Libro Sueldos Digital para AFIP.',
                buttonText: 'Planes y tarifas',
                buttonLink: '/tarifas'
            };
            articleContent = {
                image: '/tango/dispositivo-2.png',
                title: 'Instalación',
                text: 'Nos encargamos de instalar el sistema en nuevos servidores o puestos, así como de migrarlo o actualizarlo cuando sea necesario. Solo necesitas proporcionar el equipo con los requisitos mínimos.'
            };
            break;
        case '/contacto':
            mainContent = {
                image: '/tango/dispositivo-3.png',
                title: 'Soporte en línea',
                text: 'Estamos disponibles para ayudarte de forma remota a través de herramientas como Team Viewer y Anydesk. Después de cada servicio realizado, te enviaremos un correo electrónico con detalles como la fecha, duración y un resumen del trabajo realizado.',
                buttonText: 'Contacto',
                buttonLink: '/contacto'
            };
            articleContent = {
                image: '/tango/dispositivo-2.png',
                title: 'Comunicacion constante',
                text: 'Después de cada servicio realizado, te enviaremos un correo electrónico con detalles como la fecha, duración y un resumen del trabajo realizado.'
            };
            break;
        default:
            mainContent = {
                image: '/tango/dispositivo-1.png',
                title: 'Servicio Tango Delta',
                text: 'Asistencia para cualquier tipo de contingencia que surja en el uso diario del Sistema. Instalación del Sistema y Puestos de Tango. Parametrización del Tango Sueldos para la generación del Libro Sueldos Digital para AFIP.',
                buttonText: 'Conoce más',
                buttonLink: '/'
            };
            articleContent = {
                image: '/tango/dispositivo-2.png',
                title: 'Instalación',
                text: 'Nos encargamos de instalar el sistema en nuevos servidores o puestos, así como de migrarlo o actualizarlo cuando sea necesario. Solo necesitas proporcionar el equipo con los requisitos mínimos.'
            };
            break;
    }

    return (
        <>
            <main className="my-3 p-3 text-start">
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
                            <h3 className="h1 mb-3">{mainContent.title}</h3>
                            <p className="lead text-secondary mb-4">{mainContent.text}</p>
                            <NavLink to={mainContent.buttonLink} className="nav-link">
                                <button type="button" className="btn btn-lg bsb-btn-2xl btn-info">
                                    {mainContent.buttonText}
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </main>
            <article className="my-3 p-3 text-center fondo-gris">
                    <div className="container py-3" data-aos="fade-up">
                        <div className="row flex-lg-row-reverse align-items-center">
                            <div className="col-sm-12 col-md-6 mb-4 mb-md-0">
                                <h4 className="h2 mb-3">{articleContent.title}</h4>
                                <p className="lead text-secondary mb-4">{articleContent.text}</p>
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
            </article>
        </>
    );
};