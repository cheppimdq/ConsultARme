import React from 'react';

import { NavTransparente } from '../components/NavTransparente.jsx';
import { HeaderFull } from '../components/HeaderFull.jsx';
import { MainIndex } from '../components/MainIndex.jsx';
import { ClientesEmpresa } from '../components/ClientesEmpresa.jsx';
import { BotonFlotante } from '../components/BotonFlotante.jsx';
import { FooterNegro } from '../components/FooterNegro.jsx';

const PantallaInicio = () => {
  return (
    <>
      <NavTransparente />
      <HeaderFull />
      <MainIndex />
      <ClientesEmpresa />
      <BotonFlotante />
      <FooterNegro />
    </>
  );
};

export default PantallaInicio; // Exportación predeterminada de PantallaInicio