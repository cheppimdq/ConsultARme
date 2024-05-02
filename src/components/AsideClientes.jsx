import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const logosClientes = [
    '/cliente-1.jpg',
    '/cliente-2.jpg',
    '/cliente-3.png',
    '/cliente-4.png',
    '/cliente-5.png',
    '/cliente-6.png',
    '/cliente-7.jpg',
    '/cliente-8.png',
];

// Componentes de flechas personalizados
const CustomNextArrow = (props) => {
    const { onClick } = props;
    return <div className="custom-next-arrow" onClick={onClick}></div>;
};

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return <div className="custom-prev-arrow" onClick={onClick}></div>;
};

export const AsideClientes = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
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
        appendDots: (dots) => (
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
                <ul style={{ display: 'inline-block' }}> {dots.slice(0, 3)} </ul>
            </div>
        ),
    };

    return (
        <>
            <aside className="container link-negro">
                <div className="row mb-3">
                    <Slider {...settings}>
                        {logosClientes.map((logo, index) => (
                            <div className="col-sm-12 col-md-4 columna-articulo-footer p-3" key={index}>
                                <img src={logo} alt={`Cliente ${index + 1}`} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </aside>
        </>
    );
};