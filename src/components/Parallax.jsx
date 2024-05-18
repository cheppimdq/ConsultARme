import React from 'react';
import { NavLink } from 'react-router-dom';

export const Parallax1 = () => {
    return (
        <section class="parallax-pp">
            <div class="parallax-inner-pp p-3 text-center">
                <div className="container py-3">
                    <div className="row align-items-center justify-content-center my-4">
                        <div className="col-sm-8">
                            <img
                                src="/ConsultARme/logonav.svg"
                                className="d-block mx-lg-auto"
                                alt="Bootstrap Themes"
                                loading="lazy"
                            />
                        </div>
                        <div className="">
                            <h3 className="display-7 fw-bold lh-1 mb-4">Servicios Tango Delta en forma remota</h3>
                            <NavLink to='/servicios' className="nav-link"><button className="btn btn-light px-5 mb-5" type="button">
                                Servicios
                            </button></NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </section>



    );
};

