import React from 'react';
import { NavLink } from 'react-router-dom';

export const IndexMain = () => {
    return (
        <>
            <main className="my-4 px-4 py-5">
                <div className="p-3 text-center">
                    <div className="container py-3">
                        <div className="row flex-lg-row-reverse align-items-center">
                            <div className="col-sm-12 col-md-6">
                                <img
                                    src="/ConsultARme/dispositivos/dispositivo-1.png"
                                    className="d-block mx-lg-auto"
                                    alt="Bootstrap Themes"
                                    width="700"
                                    height="500"
                                    loading="lazy"
                                />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Servicios Tango Delta en forma remota</h1>
                                <p className="lead">Asistencia para cualquier tipo de contingencia que surja en el uso diario del Sistema. Instalación del Sistema y Puestos de Tango. Parametrización del Tango Sueldos para la generación del Libro Sueldos Digital para AFIP.</p>
                                <NavLink to='/tarifas' className="nav-link"><button type="button" className="btn btn-danger btn-sm p-2 ">Planes y tarifas</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export const IndexArticle1 = () => {
    return (
        <div className="my-4 px-4 py-5">
            <div className="p-3 text-center">
                <div className="container py-3" data-aos="fade-up">
                    <div className="row flex-lg-row-reverse align-items-center">
                        <div className="col-sm-12 col-md-6 mb-4 mb-md-0">
                            <h1 className="display-5 fw-bold text-body-emphasis lh-1">Instalación y configuración</h1>
                            <p className="lead mt-3">Nos encargamos de instalar el sistema en nuevos servidores o puestos, así como de migrarlo o actualizarlo cuando sea necesario. Solo necesitas proporcionar el equipo con los requisitos mínimos.</p>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <img
                                src="/ConsultARme/dispositivos/dispositivo-8.png"
                                className="d-block mx-auto"
                                alt="Bootstrap Themes"
                                width="700"
                                height="500"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const IndexArticle2 = () => {
    return (
        <>
            <div className="my-4 px-4 py-5">
                <div className="p-3 text-center">
                    <div className="container py-3" data-aos="fade-up">
                        <div className="row flex-lg-row-reverse align-items-center">
                            <div className="col-sm-12 col-md-6">
                                <img
                                    src="/ConsultARme/dispositivos/dispositivo-6.png"
                                    className="d-block mx-lg-auto"
                                    alt="Bootstrap Themes"
                                    width="700"
                                    height="500"
                                    loading="lazy"
                                />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Soporte y seguimiento en linea</h1>
                                <p className="lead">Estamos disponibles para ayudarte de forma remota a través de herramientas como Team Viewer y Anydesk. Después de cada servicio realizado, te enviaremos un correo electrónico con detalles como la fecha, duración y un resumen del trabajo realizado

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}