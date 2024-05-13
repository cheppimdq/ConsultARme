import React from 'react';

import { NavTransparente } from '../components/NavTransparente.jsx';
import { HeaderSecundario } from '../components/HeaderSecundario.jsx';
import { MainIndex } from '../components/Mains.jsx';

import { ServiciosArticle1, ServiciosArticle2 } from '../components/Articles.jsx';

import { IconosServicios } from '../components/Iconos.jsx';
import { AsideClientes } from '../components/AsideClientes.jsx';
import { AsideWp } from '../components/AsideWp.jsx';
import { FooterNegro } from '../components/FooterNegro.jsx';

const PantallaServicios = () => {
  return (
    <>
      <NavTransparente />
      <HeaderSecundario />
      <MainIndex />
      <IconosServicios />
      <ServiciosArticle1 />

      <AsideClientes />
      <AsideWp />
      <FooterNegro />
    </>
  );
};

export default PantallaServicios; // Exportación predeterminada de PantallaNoticias
