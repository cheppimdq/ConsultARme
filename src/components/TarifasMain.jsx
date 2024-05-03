import React from 'react';

export const TarifasMain = () => {
    return (
        <>
            <div className="container px-5 my-5">
                <div className="row gx-5">
                    <div className="col-lg-4 mb-5">
                        <div className="card h-100 shadow border-0">
                            <img className="card-img-top" src="/ConsultARme/bronce.jpg" alt="..." />
                            <div className="card-body p-4">
                                <div className="badge bg-dark bg-gradient rounded-pill mb-2">$25.686</div>
                                <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">Plan Cobre</h5></a>
                                <p className="card-text mb-0">Asistencia en el uso diario del sistema.</p>
                                <p className="card-text mb-0">Instalación y configuración de servidores y puestos.</p>
                                <p className="card-text mb-0">Implementación y parametrización de módulos.</p>
                            </div>
                            <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                <div className="d-flex align-items-end">
                                    <div className="small">
                                        <div className="fw-bold">Kelly Rowan</div>
                                        <div className="text-muted">March 12, 2023 · 6 min read</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Repeat similar structures for other cards */}
                </div>
            </div>
        </>
    );
};
