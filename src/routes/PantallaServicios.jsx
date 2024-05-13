import React from 'react';

import { NavTransparente } from '../components/NavTransparente.jsx';
import { HeaderSecundario } from '../components/HeaderSecundario.jsx';
import { MainIndex } from '../components/Mains.jsx';
import { IconosServicios } from '../components/Iconos.jsx';
import { AsideClientes } from '../components/AsideClientes.jsx';
import { AsideVideos } from '../components/AsideVideos.jsx';
import { AsideWp } from '../components/AsideWp.jsx';
import { FooterNegro } from '../components/FooterNegro.jsx';

const PantallaServicios = () => {
  return (
    <>
      <NavTransparente />
      <HeaderSecundario />
      <MainIndex />
      <IconosServicios />
      <AsideVideos />

      <AsideClientes />
      <AsideWp />
      <FooterNegro />
    </>
  );
};

export default PantallaServicios; // Exportación predeterminada de PantallaNoticias
