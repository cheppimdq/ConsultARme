import React from 'react';

import { NavDinamica } from '../components/NavDinamica.jsx';
import { HeaderSecundario } from '../components/HeaderSecundario.jsx';
import { Main } from '../components/Mains.jsx';
import { Article } from '../components/Articles.jsx';
import { Parallax } from '../components/Parallax.jsx';
import { SlideClientes } from '../components/SlideClientes.jsx';
import { AsideWp } from '../components/Asides.jsx';
import { Footer } from '../components/Footer.jsx';

const PantallaServicios = () => {
  return (
    <>
      <NavDinamica />
      <HeaderSecundario />
      <Main />
      <Parallax />
      <Article />
      <SlideClientes />
      <AsideWp />
      <Footer />
    </>
  );
};

export default PantallaServicios;