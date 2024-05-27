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

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0); // Hacer scroll al principio de la página al hacer clic en un enlace
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'nav-blanco' : 'nav-transparente'}`}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={scrolled ? "/marca/nav-celeste.png" : "/marca/nav-blanco.png"} alt="" className="img-fluid foto-pp" style={{ maxHeight: '60px' }} />
        </Link>
        <button className={`navbar-toggler ${scrolled ? 'link-celeste' : 'link-blanco'}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={['fas', 'bars']} />
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav ms-auto me-0 navbar-nav-scroll">
            <li className="nav-item px-0 px-lg-4"><NavLink to='/' className={`nav-link ${scrolled ? 'link-celeste' : 'link-blanco'}`} onClick={handleNavLinkClick}>Inicio</NavLink></li>
            <li className="nav-item px-0 px-lg-4"><NavLink to='/servicios' className={`nav-link ${scrolled ? 'link-celeste' : 'link-blanco'}`} onClick={handleNavLinkClick}>Servicios</NavLink></li>
            <li className="nav-item px-0 px-lg-4"><NavLink to='/contacto' className={`nav-link ${scrolled ? 'link-celeste' : 'link-blanco'}`} onClick={handleNavLinkClick}>Contacto</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
