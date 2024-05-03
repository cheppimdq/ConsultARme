import React from 'react';

import { NavTransparente } from '../components/NavTransparente.jsx';
import { HeaderSecundario } from '../components/HeaderSecundario';
import { MainContacto } from '../components/MainContacto.jsx';
import { BotonFlotante } from '../components/BotonFlotante.jsx';
import { FooterNegro } from '../components/FooterNegro.jsx';

const PantallaContacto = () => {
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

export default PantallaContacto; // Exportación predeterminada de PantallaNoticias