import React from 'react';

import { NavTransparente } from '../components/NavTransparente.jsx';
import { HeaderSecundario } from '../components/HeaderSecundario.jsx';
import { AsideClientes } from '../components/AsideClientes.jsx';
import { MainServicios } from '../components/MainServicios.jsx';
import { BotonFlotante } from '../components/BotonFlotante.jsx';
import { FooterNegro } from '../components/FooterNegro.jsx';

const PantallaServicios = () => {
  return (
    <>
      <NavTransparente />
      <HeaderSecundario />
      <AsideClientes />
      <MainServicios />
      <AsideClientes />
      <BotonFlotante />
      <FooterNegro />
    </>
  );
};

export default PantallaServicios; // Exportación predeterminada de PantallaNoticias
