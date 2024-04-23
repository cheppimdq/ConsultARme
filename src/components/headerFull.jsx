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
                            <p>Soluciones empresariales</p>
                        </div>
                        <video
                            id="header-video"
                            src="https://videos.pexels.com/video-files/3209176/3209176-uhd_3840_2160_25fps.mp4"
                            alt="Vídeo de Vlada Karpovich: https://www.pexels.com/es-es/video/hombre-sentado-jugando-emocionante-6058909/"
                            type="video/mp4"
                            autoPlay  // Reproducción automática
                            muted     // Video silenciado (importante para algunos navegadores)
                            loop      // Reproducción en bucle
                            playsInline // Reproducción en línea (importante para dispositivos móviles)
                        ></video>
                    </div>

                    <div className="carousel-item altura-100">
                        <img src="https://images.pexels.com/photos/8438953/pexels-photo-8438953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..."></img>
                        <div className="carousel-caption">
                            <a href=""><h2>Noticias</h2></a>
                            <p>Lo último en Ajedrez</p>
                        </div>
                    </div>

                    <div className="carousel-item altura-100">
                        <img src="https://images.pexels.com/photos/11363590/pexels-photo-11363590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..."></img>
                        <div className="carousel-caption">
                            <a href=""><h2>Calendario</h2></a>
                            <p>Planificá con nuestro calendario</p>
                        </div>
                    </div>

                    <div className="carousel-item altura-100">
                        <img src="https://images.pexels.com/photos/1714205/pexels-photo-1714205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..."></img>
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
