import React from 'react';
import { NavTransparente } from '../components/NavTransparente.jsx';
import { HeaderFull } from '../components/HeaderFull.jsx';
import { ServiciosMain, ServiciosArticle1, ServiciosArticle2 } from '../components/ServiciosMain.jsx';
import { ServiciosIconos } from '../components/ServiciosIconos.jsx';
import { TarifasMain } from '../components/TarifasMain.jsx';
import { AsideClientes } from '../components/AsideClientes.jsx';
import { BotonFlotante } from '../components/BotonFlotante.jsx';
import { FooterNegro } from '../components/FooterNegro.jsx';

const PantallaInicio = () => {
  return (
    <>
      <NavTransparente />
      <HeaderFull />

      <ServiciosMain />
      <ServiciosIconos />
      <ServiciosArticle1 />
      <TarifasMain />

      <ServiciosArticle2 />

      <AsideClientes />


      <BotonFlotante />
      <FooterNegro />
    </>
  );
};

export default PantallaInicio; // Exportación predeterminada de PantallaInicio