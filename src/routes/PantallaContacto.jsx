import React from 'react';

import { NavTransparente } from '../components/NavTransparente.jsx';
import { HeaderSecundario } from '../components/HeaderSecundario';
import { MainContacto } from '../components/Mains.jsx';
import { ServiciosArticle1, ServiciosArticle2 } from '../components/Articles.jsx';

import { IconosContacto } from '../components/Iconos.jsx';

import { AsideMaps } from '../components/AsideMaps.jsx';

import { AsideWp } from '../components/AsideWp.jsx';
import { FooterNegro } from '../components/FooterNegro.jsx';

const PantallaContacto = () => {
  return (
    <>
      <NavTransparente />
      <HeaderSecundario />
      <MainContacto />
      <IconosContacto />
      <ServiciosArticle1 />
      <AsideMaps />
      <AsideWp />
      <FooterNegro />
    </>
  );
};

export default PantallaContacto; // Exportación predeterminada de PantallaNoticias