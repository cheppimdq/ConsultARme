import React from 'react';

import { NavTransparente } from '../components/NavTransparente.jsx';
import { HeaderFull } from '../components/HeaderFull.jsx';
import { ServiciosMain } from '../components/ServiciosMain.jsx';
import { ServiciosArticle } from '../components/ServiciosArticle.jsx';
import { TarifasMain } from '../components/TarifasMain.jsx';
import { AsideClientes } from '../components/AsideClientes.jsx';
import { AsideVideos } from '../components/AsideVideos.jsx';

import { BotonFlotante } from '../components/BotonFlotante.jsx';
import { FooterNegro } from '../components/FooterNegro.jsx';

const PantallaInicio = () => {
  return (
    <>
      <NavTransparente />
      <HeaderFull />
      <ServiciosMain />
      <TarifasMain />
      <ServiciosArticle />
      <AsideClientes />
      <AsideVideos />

      <BotonFlotante />
      <FooterNegro />
    </>
  );
};

export default PantallaInicio; // Exportación predeterminada de PantallaInicio