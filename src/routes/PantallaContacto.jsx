import React from 'react';

import { NavDinamica } from '../components/NavDinamica.jsx';
import { HeaderSecundario } from '../components/HeaderSecundario';
import { Main } from '../components/Mains.jsx';
import { Article } from '../components/Articles.jsx';
import { Parallaxs } from '../components/Parallaxs.jsx';
import { AsideMaps, AsideWp  } from '../components/Asides.jsx';
import { Footer } from '../components/Footer.jsx';

const PantallaContacto = () => {
  return (
    <>
      <NavDinamica />
      <HeaderSecundario />
      <Main />
      <Parallaxs />
      <Article />
      <AsideMaps />
      <AsideWp />
      <Footer />
    </>
  );
};

export default PantallaContacto;