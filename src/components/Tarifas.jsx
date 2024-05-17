import React from 'react';

export const TarifasMain = () => {
    return (
        <>
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
        </>
    );
};
