import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AsideWp = () => {
  return (
    <aside className="container">
      <Link to="https://api.whatsapp.com/send?phone=5492215923513" target="_blank" className="boton-wp">
        <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
      </Link>
    </aside>
  );
};
