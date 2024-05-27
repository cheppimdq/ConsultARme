import React from 'react';
import { useLocation } from 'react-router-dom';

export const HeaderSecundario = () => {
    const location = useLocation();
    const { pathname } = location;

    const obtenerContenidoPorSeccion = () => {
        switch (pathname) {
            case '/servicios':
                return {
                    titulos: ["Servicios"],
                    imagenes: [
                        '/ConsultARme/tango/empleados.webp',
                    ],
                    textos: [ 'Asistencia Tango Delta remota' ]
                };
            case '/contacto':
                return {
                    titulos: ["Contacto"], 
                    imagenes: [
                        '/ConsultARme/epuyen.jpg',
                    ],
                    textos: [ 'Comunicate con nosotros' ]
                };
            default:
                return {
                    titulos: ["Lorem"],
                    imagenes: [
                        '/ConsultARme/',
                    ],
                    textos: [ 'lorem' ]
                };
        }
    };

    const { titulos, imagenes, textos } = obtenerContenidoPorSeccion();

    return (
        <>
            <header id="carouselExampleCaptions" className="carousel slide carousel-pp" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {imagenes.map((imagen, index) => (
                        <div key={index} className={`carousel-item altura-79 ${index === 0 ? 'active' : ''}`}>
                            <img src={imagen} alt={`Imagen ${index + 1}`} />
                        </div>
                    ))}
                </div>
            
                <div className="carousel-caption">
                    <h1 className='h-1'>{titulos[0]}</h1>
                    <p>{textos[0]}</p>
                </div>
            </header>
        </>
    );
};
