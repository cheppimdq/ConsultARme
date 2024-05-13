import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const logosClientes = [
    { url: 'https://www.ejemplo.com/cliente-1', image: '/ConsultARme/clientes/cliente-1.png' },
    { url: 'https://www.ejemplo.com/cliente-2', image: '/ConsultARme/clientes/cliente-2.png' },
    { url: 'https://www.ejemplo.com/cliente-3', image: '/ConsultARme/clientes/cliente-3.png' },
    { url: 'https://www.ejemplo.com/cliente-4', image: '/ConsultARme/clientes/cliente-4.png' },
    { url: 'https://www.ejemplo.com/cliente-5', image: '/ConsultARme/clientes/cliente-5.png' },
    { url: 'https://www.ejemplo.com/cliente-6', image: '/ConsultARme/clientes/cliente-6.png' },
    { url: 'https://www.ejemplo.com/cliente-7', image: '/ConsultARme/clientes/cliente-7.png' },
    { url: 'https://www.ejemplo.com/cliente-8', image: '/ConsultARme/clientes/cliente-8.png' },
    
    { url: 'https://www.ejemplo.com/cliente-1', image: '/ConsultARme/clientes/cliente-9.png' },
    { url: 'https://www.ejemplo.com/cliente-2', image: '/ConsultARme/clientes/cliente-10.png' },
    { url: 'https://www.ejemplo.com/cliente-3', image: '/ConsultARme/clientes/cliente-11.png' },
    { url: 'https://www.ejemplo.com/cliente-4', image: '/ConsultARme/clientes/cliente-12.png' },
    { url: 'https://www.ejemplo.com/cliente-5', image: '/ConsultARme/clientes/cliente-13.png' },
    { url: 'https://www.ejemplo.com/cliente-6', image: '/ConsultARme/clientes/cliente-14.png' },
    { url: 'https://www.ejemplo.com/cliente-7', image: '/ConsultARme/clientes/cliente-15.png' },
    { url: 'https://www.ejemplo.com/cliente-8', image: '/ConsultARme/clientes/cliente-16.png' },
];

export const AsideClientes = () => {
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex((prevIndex) => (prevIndex + 8) % logosClientes.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed:3000,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 2, // Configuración para dos filas
        autoplay: true,
        autoplaySpeed: 6000,
    };

    return (
        <>
            <aside className="fondo-gris">
                <div className="p-3 text-center">
                    <div className="container py-3">
                        <Slider {...settings}>
                            {logosClientes.map((logo, index) => (
                                <div className="col-6 col-md-3 mb-4" key={index}>
                                    <Link to={logo.url} target="_blank" rel="noopener noreferrer">
                                        <img src={logo.image} alt={`Cliente ${index + 1}`} className="img-fluid" />
                                    </Link>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </aside>
        </>
    );
};
