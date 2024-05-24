import React from 'react';

import { NavDinamica } from '../components/NavDinamica.jsx';
import { HeaderFull } from '../components/HeaderFull.jsx';
import { Main } from '../components/Mains.jsx';
import { Article } from '../components/Articles.jsx';
import { Parallax } from '../components/Parallax.jsx';
import { SlideClientes } from '../components/SlideClientes.jsx';
import { AsideWp } from '../components/Asides.jsx';
import { Footer } from '../components/Footer.jsx';

const PantallaInicio = () => {
  return (
    <>
      <NavDinamica />
      <HeaderFull />
      <Main />
      <Parallax />
      <Article />
      <SlideClientes />
      <AsideWp />
      <Footer />
    </>
  );
};

export default PantallaInicio;