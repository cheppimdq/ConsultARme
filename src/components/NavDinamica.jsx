import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NavDinamica = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'nav-blanco' : 'nav-transparente'}`}>
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={scrolled ? "/ConsultARme/marca/nav-celeste.png" : "/ConsultARme/marca/nav-blanco.png"} alt="" width="30" height="30" className="logo-pp" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon="fa-solid fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto me-0 navbar-nav-scroll">
              <li className="nav-item px-0 px-lg-4"><NavLink to='/' className={`nav-link ${scrolled ? 'link-celeste' : 'link-blanco'}`}>Inicio</NavLink></li>
              <li className="nav-item px-0 px-lg-4"><NavLink to='/servicios' className={`nav-link ${scrolled ? 'link-celeste' : 'link-blanco'}`}>Servicios</NavLink></li>
              <li className="nav-item px-0 px-lg-4"><NavLink to='/contacto' className={`nav-link ${scrolled ? 'link-celeste' : 'link-blanco'}`}>Contacto</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};