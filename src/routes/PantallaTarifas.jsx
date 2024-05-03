import React from 'react';

import { NavTransparente } from '../components/NavTransparente.jsx';
import { HeaderSecundario } from '../components/HeaderSecundario.jsx';
import { TarifasMain } from '../components/TarifasMain.jsx';
import { TarifasTable } from '../components/TarifasTable.jsx';
import { BotonFlotante } from '../components/BotonFlotante.jsx'
import { FooterNegro } from '../components/FooterNegro.jsx'

const PantallaTarifas = () => {
  return (
    <>
      <NavTransparente />
      <HeaderSecundario />
      <TarifasMain />
      <TarifasTable />
      <BotonFlotante />
      <FooterNegro />
    </>
  );
};

export default PantallaTarifas; // Exportación predeterminada de PantallaNoticias
