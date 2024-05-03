import React from 'react';
import { Link } from 'react-router-dom';

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
    return (
        <>
            <div className="my-3">
                <div className="p-3 text-center bg-body-tertiary">
                    <div className="container py-3">
                        <div className="row">
                            {logosClientes.map((logo, index) => (
                                <div className="col-6 col-md-3 mb-4" key={index}>
                                    <Link to={logo.url} target="_blank" rel="noopener noreferrer">
                                        <img src={logo.image} alt={`Cliente ${index + 1}`} className="img-fluid" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
