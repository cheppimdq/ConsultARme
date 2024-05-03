import React from 'react';

import { NavTransparente } from '../components/NavTransparente.jsx';
import { HeaderSecundario } from '../components/HeaderSecundario.jsx';
import { ArticleEmpresa } from '../components/ArticleEmpresa.jsx';
import { BotonFlotante } from '../components/BotonFlotante.jsx';
import { FooterNegro } from '../components/FooterNegro.jsx';

const PantallaEmpresa = () => {
  return (
    <>
      <NavTransparente />
      <HeaderSecundario />
      <ArticleEmpresa />
      <BotonFlotante />
      <FooterNegro />
    </>
  );
};

export default PantallaEmpresa; // Exportación predeterminada de PantallaNoticias
