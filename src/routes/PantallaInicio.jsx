import React from 'react';
import { NavTransparente } from '../components/NavTransparente.jsx';
import { HeaderFull } from '../components/HeaderFull.jsx';
import { MainIndex } from '../components/Mains.jsx';
import { ServiciosArticle1, ServiciosArticle2 } from '../components/Articles.jsx';
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
      <MainIndex />
      <IconosServicios />
      <ServiciosArticle1 />
      <TarifasCards />
      <ServiciosArticle2 />
      <AsideClientes />
      <AsideWp />
      <FooterNegro />
    </>
  );
};

export default PantallaInicio; // Exportación predeterminada de PantallaInicio