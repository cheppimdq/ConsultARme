import React from 'react';

// FALTA ARREGLAR EL MARGEN
export const NumerosServicios = () => {
    return (
        <section className="bsb-fact-5 py-3 py-md-5 fondo-gris">
            {/* <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-7">
                        <h3 className="fs-5 mb-2 text-secondary text-center text-uppercase">Our Success</h3>
                        <h2 className="display-5 mb-5 mb-xl-9 text-center">We have a proven track record of success.</h2>
                    </div>
                </div>
            </div> */}

            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-12">
                        <div className="container-fluid bg-light border shadow">
                            <div className="row">
                                <div className="col-12 col-md-4 p-0">
                                    <div className="card border-0 bg-transparent">
                                        <div className="card-body text-center p-4 p-xxl-5">
                                            <h3 className="display-4 fw-bold mb-2">60+</h3>
                                            <p className="fs-5 mb-0 text-secondary">Finished Projects</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 p-0 border-top border-bottom border-start border-end">
                                    <div className="card border-0 bg-transparent">
                                        <div className="card-body text-center p-4 p-xxl-5">
                                            <h3 className="display-4 fw-bold mb-2">18k+</h3>
                                            <p className="fs-5 mb-0 text-secondary">Issues Solved</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 p-0">
                                    <div className="card border-0 bg-transparent">
                                        <div className="card-body text-center p-4 p-xxl-5">
                                            <h3 className="display-4 fw-bold mb-2">10k+</h3>
                                            <p className="fs-5 mb-0 text-secondary">Happy Customers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};