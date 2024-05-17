import React from 'react';

import { NavTransparente } from '../components/NavTransparente.jsx';
import { HeaderSecundario } from '../components/HeaderSecundario';

import { ContactoMain, ContactoArticle1, ContactoArticle2 } from '../components/Contacto.jsx';

import { IconosContacto } from '../components/Iconos.jsx';

import { AsideMaps } from '../components/AsideMaps.jsx';

import { AsideWp } from '../components/AsideWp.jsx';
import { FooterNegro } from '../components/FooterNegro.jsx';

const PantallaContacto = () => {
  return (
    <>
      <NavTransparente />
      <HeaderSecundario />

      <ContactoMain />

      <IconosContacto />
      <ContactoArticle1 />
      <AsideMaps />
      <ContactoArticle2 />



      <AsideWp />
      <FooterNegro />
    </>
  );
};

export default PantallaContacto; // Exportación predeterminada de PantallaNoticias