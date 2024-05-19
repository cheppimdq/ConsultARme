import React from 'react';

import { NavTransparente } from '../components/NavTransparente.jsx';
import { HeaderSecundario } from '../components/HeaderSecundario.jsx';

import { ServiciosMain, ServiciosArticle1, ServiciosArticle2 } from '../components/Servicios.jsx';

import { Parallax1 } from '../components/Parallax.jsx';

import { IconosServicios } from '../components/Iconos.jsx';

import { AsideClientes } from '../components/AsideClientes.jsx';
import { AsideWp } from '../components/AsideWp.jsx';

import { FooterNegro } from '../components/FooterNegro.jsx';

const PantallaServicios = () => {
  return (
    <>
      <NavTransparente />
      <HeaderSecundario />

      <ServiciosMain />
      <IconosServicios />
      <ServiciosArticle1 />

      <Parallax1 />

      <ServiciosArticle2 />

      <AsideClientes />
      <AsideWp />

      <FooterNegro />
    </>
  );
};

export default PantallaServicios; // Exportación predeterminada de PantallaNoticias
