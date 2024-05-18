import React from 'react';

//FALTA ARREGLAR EL MARGEN
export const AsideVideos = () => {
    return (
        <>
            <div className="my-4">
                <div className="p-3 text-center fondo-gris">
                    <article className="container py-3 link-negro">
                        <div className="row">

                            <div className="col-md-4">
                                <div className="card">
                                    <iframe className="card-img-top" src="https://www.youtube.com/embed/TjH1IP5qyiU?si=w3mGvSlzkJ_USu6A" width="100%" height="215" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card">
                                    <iframe className="card-img-top" src="https://www.youtube.com/embed/mgRFUxznwHs?si=56lelww4sliJvGre" width="100%" height="215" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card">
                                    <iframe className="card-img-top" src="https://www.youtube.com/embed/WUQbdkB6aKs?si=Jhr_R_UXrgGmuOOt" width="100%" height="215" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>
                                </div>
                            </div>

                        </div>
                    </article>
                </div>
            </div>
        </>
    );
};