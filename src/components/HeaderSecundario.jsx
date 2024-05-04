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
                        '/ConsultARme/1.jpg',
                        '',
                    ],
                    textos: [ 'Asistencia Tango Delta remota' ]
                };
            case '/tarifas':
                return {
                    titulos: ["Tarifas"],
                    imagenes: [
                        '/ConsultARme/2.jpg',
                        '',
                    ],
                    textos: [ 'Planes para MIPYMES' ]
                };
            case '/contacto':
                return {
                    titulos: ["Contacto"], 
                    imagenes: [
                        '/ConsultARme/3.jpg',
                        'https://images.pexels.com/photos/1714205/pexels-photo-1714205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    ],
                    textos: [ 'Comunicate con nosotros' ]
                };
            default:
                return {
                    titulos: ["ChessBayi"],
                    imagenes: [
                        '/ConsultARme/',
                        '/ConsultARme/',
                        '/ConsultARme/'
                    ],
                    textos: [ 'Ajedrez al Paso' ]
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
                    <h1>{titulos[0]}</h1>
                    <p>{textos[0]}</p>
                </div>
            </header>
        </>
    );
};
