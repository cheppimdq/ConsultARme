import React from 'react';

import { NavDinamica } from '../components/NavDinamica.jsx';
import { HeaderSecundario } from '../components/HeaderSecundario';
import { Main } from '../components/Mains.jsx';
import { Article } from '../components/Articles.jsx';
import { Parallax } from '../components/Parallax.jsx';
import { AsideMaps, AsideWp  } from '../components/Asides.jsx';
import { Footer } from '../components/Footer.jsx';

const PantallaContacto = () => {
  return (
    <>
      <NavDinamica />
      <HeaderSecundario />
      <Main />
      <Parallax />
      <Article />
      <AsideMaps />
      <AsideWp />
      <Footer />
    </>
  );
};

export default PantallaContacto;