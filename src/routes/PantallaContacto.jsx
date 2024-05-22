import React from 'react';

import { NavTransparente } from '../components/NavTransparente.jsx';
import { HeaderSecundario } from '../components/HeaderSecundario';

import { ContactoMain, ContactoArticle1, ContactoArticle2 } from '../components/Contacto.jsx';

import { Parallax1 } from '../components/Parallax.jsx';

import { NumerosContacto } from '../components/_AsideNumeros.jsx';

// import { IconosContacto } from '../components/Iconos.jsx';

import { AsideMaps } from '../components/AsideMaps.jsx';

import { AsideWp } from '../components/AsideWp.jsx';
import { FooterNegro } from '../components/FooterNegro.jsx';

const PantallaContacto = () => {
  return (
    <>
      <NavTransparente />
      <HeaderSecundario />

      <ContactoMain />

      <NumerosContacto />

      {/* <IconosContacto /> */}
      <ContactoArticle1 />

      <Parallax1 />
      <ContactoArticle2 />

      <AsideMaps />

      <AsideWp />
      <FooterNegro />
    </>
  );
};

export default PantallaContacto; // Exportación predeterminada de PantallaNoticias