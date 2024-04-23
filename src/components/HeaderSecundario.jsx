import React from 'react';
import { useLocation } from 'react-router-dom';

export const HeaderSecundario = () => {
    const location = useLocation();
    const { pathname } = location;

    const obtenerContenidoPorSeccion = () => {
        switch (pathname) {
            case '/planes':
                return {
                    titulos: ["Planes"],
                    imagenes: [
                        '/ConsultARme/planes.jpg',
                        '',
                    ],
                    textos: [ 'Excelentes planes de precios para todos' ]
                };
            case '/empresa':
                return {
                    titulos: ["Empresa"],
                    imagenes: [
                        'https://images.pexels.com/photos/6794967/pexels-photo-6794967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        'https://images.pexels.com/photos/273153/pexels-photo-273153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    ],
                    textos: [ 'Servicios de consultoría para MIPYMES' ]
                };
            case '/contacto':
                return {
                    titulos: ["Contacto"],
                    imagenes: [
                        '/ConsultARme/banner-2.jpg',
                        'https://images.pexels.com/photos/15322501/pexels-photo-15322501/free-photo-of-beach-and-resort-on-cape.jpeg',
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
                    textos: [ 'ConsultARme' ]
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
