import React from 'react';

import { NavTransparente } from '../components/NavTransparente.jsx';
import { HeaderSecundario } from '../components/HeaderSecundario.jsx';
import { ServiciosMain } from '../components/ServiciosMain.jsx';
import { ServiciosArticle } from '../components/ServiciosArticle.jsx';
import { BotonFlotante } from '../components/BotonFlotante.jsx';
import { FooterNegro } from '../components/FooterNegro.jsx';

const PantallaServicios = () => {
  return (
    <>
      <NavTransparente />
      <HeaderSecundario />
      <ServiciosMain />
      <ServiciosArticle />
      <BotonFlotante />
      <FooterNegro />
    </>
  );
};

export default PantallaServicios; // Exportación predeterminada de PantallaNoticias
