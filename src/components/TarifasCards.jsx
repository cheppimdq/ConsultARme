import React from 'react';

export const TarifasCards = () => {
    return (
        <div className="fondo-gris">
            <div className="p-5 text-center">
                <div className="container p-3">
                    <div className="row g-5 link-negro">
                        {/* BRONCE */}
                        <div className="col-md-3">
                            <div className="card shadow border-0 fondo-gris">
                                <img className="card-img-top" src="/ConsultARme/tango/tango-2.jpg" alt="..." />
                                <div className="card-body p-4">
                                    <h5 className="card-title">Plan Cobre</h5>
                                    <p className="card-text">Asistencia en el uso diario</p>
                                    <p className="card-text">Instalación y configuración de servidores y puestos</p>
                                    <p className="card-text">Implementación y parametrización de módulos</p>
                                    <p className="card-text">Hasta 2 horas</p>

                                </div>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div className="small">
                                        <div className="fw-bold">$25.686</div>
                                        <div className="text-muted">Tarifa mensual</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Otros planes aquí */}
                        <div className="col-md-3">
                            <div className="card shadow border-0 fondo-gris">
                                <img className="card-img-top" src="/ConsultARme/tango/tango-2.jpg" alt="..." />
                                <div className="card-body p-4">
                                    <h5 className="card-title">Plan Plata</h5>
                                    <p className="card-text">Asistencia en el uso diario</p>
                                    <p className="card-text">Instalación y configuración de servidores y puestos</p>
                                    <p className="card-text">Implementación y parametrización de módulos</p>
                                    <p className="card-text">Hasta 3 horas</p>
                                </div>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div className="small">
                                        <div className="fw-bold">$35.529</div>
                                        <div className="text-muted">Tarifa mensual</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Otros planes aquí */}
                        <div className="col-md-3">
                            <div className="card shadow border-0 bg-warning">
                                <img className="card-img-top" src="/ConsultARme/tango/tango-2.jpg" alt="..." />
                                <div className="card-body p-4">
                                    <h5 className="card-title">Plan Oro</h5>
                                    <p className="card-text">Asistencia en el uso diario</p>
                                    <p className="card-text">Instalación y configuración de servidores y puestos</p>
                                    <p className="card-text">Implementación y parametrización de módulos</p>
                                    <p className="card-text">Hasta 5 horas</p>
                                    <p className="card-text">Instructivos digitales</p>
                                </div>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div className="small">
                                        <div className="fw-bold">$48.207</div>
                                        <div className="text-muted">Tarifa mensual</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Otros planes aquí */}
                        <div className="col-md-3">
                            <div className="card shadow border-0 fondo-gris">
                                <img className="card-img-top" src="/ConsultARme/tango/tango-2.jpg" alt="..." />
                                <div className="card-body p-4">
                                    <h5 className="card-title">Plan Platino</h5>
                                    <p className="card-text">Asistencia en el uso diario</p>
                                    <p className="card-text">Máxima prioridad en la atención</p>
                                    <p className="card-text">Asistencia mediante mesa de ayuda</p>
                                    <p className="card-text">Instructivos digitales</p>
                                    <p className="card-text">Capacitaciones de Tango Delta Gestión</p>

                                </div>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div className="small">
                                        <div className="fw-bold">Personalizada</div>
                                        <div className="text-muted">Tarifa mensual</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

