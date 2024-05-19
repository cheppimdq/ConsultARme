import React from 'react';
import { NavLink } from 'react-router-dom';

export const Parallax1 = () => {
    return (
        <section class="parallax-pp my-4 px-4 py-5">
            <div class="parallax-inner-pp p-3 text-center">
                <div className="container py-3">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-sm-7">
                            <img
                                src="/ConsultARme/logonav.svg"
                                className="d-block mx-lg-auto mb-3"
                                alt="Bootstrap Themes"
                                loading="lazy"
                            />
                        </div>
                        <div className="col-sm-7">
                            <h3 className="display-6 fw-bold lh-1 mb-5">Servicios Tango Delta en forma remota</h3>
                            <NavLink to='/servicios' className="nav-link"><button className="btn btn-dark px-5 mb-5" type="button">
                                Servicios
                            </button></NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </section>



    );
};

