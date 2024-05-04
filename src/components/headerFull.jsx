import React, { useEffect, useRef } from 'react';

export const HeaderFull = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        const playVideo = () => {
            video.play()
                .catch(error => {
                    console.error('Error al reproducir el video automáticamente:', error);
                });
        };

        // Agregar evento de click para activar la reproducción
        document.addEventListener('click', playVideo);

        return () => {
            document.removeEventListener('click', playVideo);
        };
    }, []);
    return (
        <>
            <header id="carouselExampleCaptions" className="carousel slide carousel-pp" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>

                <div className="carousel-inner link-blanco">
                    <div className="carousel-item altura-100 active">
                        <div className="carousel-caption">
                            <a href=""><h1>ConsultARme</h1></a>
                            <p>Servicio remoto Tango Gestión</p>
                        </div>
                        <video
                            id="header-video"
                            src="/ConsultARme/headerfull.mp4"
                            alt="Vídeo de Pressmaster: https://www.pexels.com/es-es/video/un-hombre-caminando-dentro-de-una-planta-de-produccion-3209176/"
                            type="video/mp4"
                            autoPlay  // Reproducción automática
                            muted     // Video silenciado (importante para algunos navegadores)
                            loop      // Reproducción en bucle
                            playsInline // Reproducción en línea (importante para dispositivos móviles)
                        ></video>
                    </div>

                    <div className="carousel-item altura-100">
                        <img src="/ConsultARme/1.jpg"></img>
                        <div className="carousel-caption">
                            <a href=""><h2>Servicios</h2></a>
                            <p>Asistencia Tango Delta remota</p>
                        </div>
                    </div>

                    <div className="carousel-item altura-100">
                        <img src="/ConsultARme/2.jpg" alt="..."></img>
                        <div className="carousel-caption">
                            <a href=""><h2>Tarifas</h2></a>
                            <p>Planes para MIPYMES</p>
                        </div>
                    </div>

                    <div className="carousel-item altura-100">
                        <img src="/ConsultARme/4.jpg" alt="..."></img>
                        <div className="carousel-caption">
                            <a href=""><h2>Contacto</h2></a>
                            <p>Comunicate con nosotros</p>
                        </div>
                    </div>
                </div>
            </header>
        </>

    );
};
