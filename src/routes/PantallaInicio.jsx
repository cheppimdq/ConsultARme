import React from 'react';

import { NavTransparente } from '../components/NavTransparente.jsx';
import { HeaderFull } from '../components/HeaderFull.jsx';
import { AsideVideos } from '../components/AsideVideos.jsx';
import { AsideClientes } from '../components/AsideClientes.jsx';
import { BotonFlotante } from '../components/BotonFlotante.jsx';
import { FooterNegro } from '../components/FooterNegro.jsx';

const PantallaInicio = () => {
  return (
    <>
      <NavTransparente />
      <HeaderFull />
      <AsideVideos />
      <AsideClientes />
      <BotonFlotante />
      <FooterNegro />
    </>
  );
};

export default PantallaInicio; // Exportación predeterminada de PantallaInicio