import React from 'react';

import { NavTransparente } from '../components/NavTransparente.jsx';
import { HeaderSecundario } from '../components/HeaderSecundario';
import { MainContacto } from '../components/MainContacto.jsx';

import { BotonFlotante } from '../components/BotonFlotante.jsx';
import { FooterNegro } from '../components/FooterNegro.jsx';

const PantallaNoticias = () => {
  return (
    <>
      <NavTransparente />
      <HeaderSecundario />
      <MainContacto />
      <BotonFlotante />
      <FooterNegro />
    </>
  );
};

export default PantallaNoticias; // Exportación predeterminada de PantallaNoticias