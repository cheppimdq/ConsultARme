import React from 'react';

import { NavTransparente } from '../components/NavTransparente.jsx';
import { HeaderFull } from '../components/HeaderFull.jsx';

import { IndexMain, IndexArticle1, IndexArticle2 } from '../components/Index.jsx';

import { IconosServicios } from '../components/Iconos.jsx';
import { TarifasCards } from '../components/TarifasCards.jsx';

import { AsideClientes } from '../components/AsideClientes.jsx';
import { AsideWp } from '../components/AsideWp.jsx';

import { FooterNegro } from '../components/FooterNegro.jsx';

const PantallaInicio = () => {
  return (
    <>
      <NavTransparente />
      <HeaderFull />

      <IndexMain />
      <IconosServicios />
      <IndexArticle1 />
      <TarifasCards />
      <IndexArticle2 />

      <AsideClientes />
      <AsideWp />
      <FooterNegro />
    </>
  );
};

export default PantallaInicio; // Exportación predeterminada de PantallaInicio