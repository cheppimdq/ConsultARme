import React from 'react';

import { NavTransparente } from '../components/NavTransparente.jsx';
import { HeaderSecundario } from '../components/HeaderSecundario.jsx';
import { MainPlanes, ArticlePlanes } from '../components/MainPlanes.jsx';
import { AsideClientes } from '../components/AsideClientes.jsx';
import { BotonFlotante } from '../components/BotonFlotante.jsx'
import { FooterNegro } from '../components/FooterNegro.jsx'

const PantallaPlanes = () => {
  return (
    <>
      <NavTransparente />
      <HeaderSecundario />
      <MainPlanes />
      <ArticlePlanes />
      <AsideClientes />
      <BotonFlotante />
      <FooterNegro />
    </>
  );
};

export default PantallaPlanes; // Exportación predeterminada de PantallaNoticias
