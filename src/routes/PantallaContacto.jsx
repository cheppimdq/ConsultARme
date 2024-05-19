import React from 'react';

import { NavTransparente } from '../components/NavTransparente.jsx';
import { HeaderSecundario } from '../components/HeaderSecundario';

import { ContactoMain, ContactoArticle1 } from '../components/Contacto.jsx';

import { Parallax1 } from '../components/Parallax.jsx';


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

      <Parallax1 />

      <AsideMaps />

      <AsideWp />
      <FooterNegro />
    </>
  );
};

export default PantallaContacto; // Exportación predeterminada de PantallaNoticias