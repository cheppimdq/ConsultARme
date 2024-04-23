import React from 'react';

import { NavTransparente } from '../components/NavTransparente.jsx';
import { HeaderSecundario } from '../components/HeaderSecundario.jsx';
import { EquipoEmpresa } from '../components/EquipoEmpresa.jsx';
import { BotonFlotante } from '../components/BotonFlotante.jsx';
import { FooterNegro } from '../components/FooterNegro.jsx';

const PantallaEmpresa = () => {
  return (
    <>
      <NavTransparente />
      <HeaderSecundario />
      <EquipoEmpresa />
      <BotonFlotante />
      <FooterNegro />
    </>
  );
};

export default PantallaEmpresa; // Exportación predeterminada de PantallaNoticias
