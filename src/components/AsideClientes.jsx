import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const logosClientes = [
    { url: 'https://www.ejemplo.com/cliente-1', image: '/ConsultARme/cliente-1.png' },
    { url: 'https://www.ejemplo.com/cliente-2', image: '/ConsultARme/cliente-2.png' },
    { url: 'https://www.ejemplo.com/cliente-3', image: '/ConsultARme/cliente-3.png' },
    { url: 'https://www.ejemplo.com/cliente-4', image: '/ConsultARme/cliente-4.png' },
    { url: 'https://www.ejemplo.com/cliente-5', image: '/ConsultARme/cliente-5.png' },
    { url: 'https://www.ejemplo.com/cliente-6', image: '/ConsultARme/cliente-6.png' },
    { url: 'https://www.ejemplo.com/cliente-7', image: '/ConsultARme/cliente-7.png' },
    { url: 'https://www.ejemplo.com/cliente-8', image: '/ConsultARme/cliente-8.png' },
];



export const AsideClientes = () => {
    const settings = {
        infinite: true,
        speed: 1500, // Aumenta la velocidad para hacer la transición más lenta y suave
        slidesToShow: 4, // Muestra menos diapositivas a la vez
        slidesToScroll: 4, // Desplázate una diapositiva a la vez
        autoplay: true,
        autoplaySpeed: 4000, // Incrementa el tiempo entre diapositivas para hacerlo más lento

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="my-3">
                <div className="p-3 text-center bg-body-tertiary">
                    <div className="container py-3">
                        <Slider {...settings}>
                            {logosClientes.map((logo, index) => (
                                <div className="col-sm-12 col-md-4 p-3" key={index}>
                                    <Link to={logo.url} target="_blank" rel="noopener noreferrer">
                                        <img src={logo.image} alt={`Cliente ${index + 1}`} />
                                    </Link>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};