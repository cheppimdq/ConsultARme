import { Link, NavLink } from 'react-router-dom';
import React, { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const NavTransparente = () => {
  useEffect(() => {
    const handleScroll = () => {
      var nav = document.getElementById('navTransparente');
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // El array vacío [] asegura que este efecto se ejecute solo una vez al montar el componente

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top nav-negro" id="navTransparente">
        <div className="container link-blanco">

          <Link to="/" className="navbar-brand col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2">
            <img src="/ConsultARme/logonav.svg" alt="" width="30" height="24" className="logo-pp" />
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon="fa-solid fa-bars" />
          </button>

          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item"><NavLink to='/' className="nav-link">Inicio</NavLink></li>
              <li className="nav-item"><NavLink to='/servicios' className="nav-link">Servicios</NavLink></li>
              <li className="nav-item"><NavLink to='/tarifas' className="nav-link">Tarifas</NavLink></li>
              <li className="nav-item"><NavLink to='/contacto' className="nav-link">Contacto</NavLink></li>
            </ul>
          </div>

        </div>
      </nav>
    </>
  );
};
