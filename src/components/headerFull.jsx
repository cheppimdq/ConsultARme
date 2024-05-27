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
                </div>

                <div className="carousel-inner link-blanco">
                    <div className="carousel-item altura-100 active">
                        <div className="carousel-caption">
                            <a href=""><h1 className='h-1'>ConsultARme</h1></a>
                            <p>Soluciones empresariales</p>
                        </div>
                        <video
                            // id="header-video"
                            src="/header/video-1.mp4"
                            alt="Vídeo de Pressmaster: https://www.pexels.com/es-es/video/un-hombre-caminando-dentro-de-una-planta-de-produccion-3209176/"
                            type="video/mp4"
                            autoPlay  // Reproducción automática
                            muted     // Video silenciado (importante para algunos navegadores)
                            loop      // Reproducción en bucle
                            playsInline // Reproducción en línea (importante para dispositivos móviles)
                        ></video>
                    </div>

                    <div className="carousel-item altura-100">
                        <img src="/tango/empleados.webp"></img>
                        <div className="carousel-caption">
                            <a href=""><h2 className='h-1'>Servicios</h2></a>
                            <p>Asistencia Tango Delta remota</p>
                        </div>
                    </div>

                    <div className="carousel-item altura-100">
                        <img src="/header/epuyen.jpg" alt="..."></img>
                        <div className="carousel-caption">
                            <a href=""><h2 className='h-1'>Contacto</h2></a>
                            <p>Comunicate con nosotros</p>
                        </div>
                    </div>
                </div>
            </header>
        </>

    );
};
