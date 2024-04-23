import React from 'react';

export const MainIndex = () => {
    return (
        <>
            <main className="container mt-4">
                <div className="row link-negro">
                    <section className="col-sm-12 col-md-8">

                        <a className="col-sm-12" href="./pages/noticias.html" target="_blank"><h3>Noticias</h3></a>

                        <div className="col-sm-12 py-1">
                            <div className="card">
                                <a href="./open-faogba-2024.html">
                                    <img src="" className="card-img-top" alt="Imagen ilustrativa del artículo" />
                                </a>
                                <div className="card-body">
                                    <a href="./open-faogba-2024.html">
                                        <h3 className="card-title">II Abierto Internacional de FAOGBA</h3>
                                    </a>
                                    <p>Del 12 al 19 de marzo de 2024, se llevará a cabo el tan esperado Abierto Internacional de FAOGBA, un evento que promete emociones ajedrecísticas de primer nivel. Con un atractivo total de 1.000.000 pesos en premios, este torneo se perfila como uno de los más destacados del año en el mundo del ajedrez.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 py-1">
                                <div className="card">
                                    <a href="./pages/articulo-template.html">
                                        <img src="" alt="Comunidad destacada" className="card-img-top" />
                                    </a>
                                    <div className="card-body">
                                        <a href="./pages/articulo-template.html"><h3 className="card-title">53° Abierto Internacional Ciudad de Mar del Plata</h3></a>
                                        <p className="card-text">El escenario elegido para este emocionante encuentro será el Hotel Provincial, un lugar emblemático que ha sido testigo de grandes gestas ajedrecísticas a lo largo de los años. Con un cupo de 300 jugadores, se espera la participación de talentosos ajedrecistas de todas partes, dispuestos a demostrar su destreza en cada partida.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 py-1">
                                <div className="card">
                                    <a href="./pages/articulo-template.html">
                                        <img src="" alt="Comunidad destacada" className="card-img-top" />
                                    </a>
                                    <div className="card-body">
                                        <a href="./pages/articulo-template.html"><h3 className="card-title">Club de Regatas La Plata - 120 años de historia</h3></a>
                                        <p className="card-text">Luego de la fundación de la ciudad de La Plata en el año 1882 y después de construido el puerto de Ensenada (llamado Puerto La Plata) el Delta del Río Santiago fue el escenario ideal para lugareños e inmigrantes porteños y sus paseos dominicales en búsqueda tanto de naturaleza como de la belleza exótica que proponían la selva marginal y sus arroyos que reemplazan al tradicional paseo del Bosque.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </section>

                    <section className="col-sm-12 col-md-4">

                        <a className="" href="./pages/noticias.html" target="_blank">
                            <h4 className="mb-2">Lo último en Ajedrez</h4>
                        </a>

                        <div className="py-1">
                            <div className="card">
                                <a href="./src/pages/articulo-template.html">
                                    <img src="" alt="Imagen ilustrativa del articulo" className="card-img-top" />
                                </a>
                                <div className="card-body">
                                    <a href="./pages/articulo-template.html"><h5 className="card-title">53° Abierto Internacional Ciudad de Mar del Plata</h5></a>
                                    <p>El escenario elegido para este emocionante encuentro será el Hotel Provincial, un lugar emblemático que ha sido testigo de grandes gestas ajedrecísticas a lo largo de los años. Con un cupo de 300 jugadores, se espera la participación de talentosos ajedrecistas de todas partes, dispuestos a demostrar su destreza en cada partida.</p>
                                </div>
                            </div>
                        </div>

                        <div className="py-1 ocultar">
                            <div className="card">
                                <a href="./pages/articulo-template.html">
                                    <img src="" alt="Imagen ilustrativa del articulo" className="card-img-top" />
                                </a>
                                <div className="card-body">
                                    <a href="./pages/articulo-template.html"><h5 className="card-title">"Ábrete sésamo": el ingreso a la cuarta revolución industrial</h5></a>
                                    <p>Gastón Figueras - Lic. en Ciencias Políticas y Relaciones Internacionales</p>
                                </div>
                            </div>
                        </div>

                    </section>

                </div>

            </main>
        </>
    );
};