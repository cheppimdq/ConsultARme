import React from 'react';
import { Link } from 'react-router-dom';


export const TarifasMain = () => {
    return (
        <>

            <div className="my-5">
                <div className="p-5 text-center bg-body-tertiary">
                    <div className="container p-3">
                        <div className="row g-5 link-negro">
                            <div className="col-md-3">
                                <div className="card h-100 shadow border-0">
                                    <img className="card-img-top" src="/ConsultARme/tango-2.jpg" alt="..." />
                                    <div className="card-body p-4">
                                        <div className="badge bg-dark bg-gradient rounded-pill mb-2">$25.686</div>
                                        <Link className="text-decoration-none link-dark stretched-link" href=""><h5 className="card-title mb-3">Plan Cobre</h5></Link>
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
                            <div className="col-md-3">
                                <div className="card h-100 shadow border-0">
                                    <img className="card-img-top" src="/ConsultARme/tango-2.jpg" alt="..." />
                                    <div className="card-body p-4">
                                        <div className="badge bg-dark bg-gradient rounded-pill mb-2">$25.686</div>
                                        <Link className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">Plan Plata</h5></Link>
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
                            <div className="col-md-3">
                                <div className="card h-100 shadow border-0">
                                    <img className="card-img-top" src="/ConsultARme/tango-2.jpg" alt="..." />
                                    <div className="card-body p-4">
                                        <div className="badge bg-dark bg-gradient rounded-pill mb-2">$25.686</div>
                                        <Link className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">Plan Oro</h5></Link>
                                        <p className="card-text mb-0">Asistencia en el uso diario del sistema.</p>
                                        <p className="card-text mb-0">Instalación y configuración de servidores y puestos.</p>
                                        <p className="card-text mb-0">Implementación y parametrización de módulos.</p>
                                    </div>
                                    <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                        <div className="d-flex align-items-center">
                                            <div className="small">
                                                <div className="fw-bold">Kelly Rowan</div>
                                                <div className="text-muted">March 12, 2023 · 6 min read</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card h-100 shadow border-0">
                                    <img className="card-img-top" src="/ConsultARme/tango-2.jpg" alt="..." />
                                    <div className="card-body p-4">
                                        <div className="badge bg-dark bg-gradient rounded-pill mb-2">$25.686</div>
                                        <Link className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">Plan Platino</h5></Link>
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
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
