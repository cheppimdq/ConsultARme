import React from 'react';

import { NavTransparente } from '../components/NavTransparente.jsx';
import { HeaderSecundario } from '../components/HeaderSecundario.jsx';

import { TarifasCards } from '../components/TarifasCards.jsx';
import { TarifasTable } from '../components/TarifasTable.jsx';

import { AsideClientes } from '../components/AsideClientes.jsx';
import { AsideWp } from '../components/AsideWp.jsx'
import { FooterNegro } from '../components/FooterNegro.jsx'

const PantallaTarifas = () => {
  return (
    <>
      <NavTransparente />
      <HeaderSecundario />
      <TarifasCards />
      <TarifasTable />
      <AsideClientes />
      <AsideWp />
      <FooterNegro />
    </>
  );
};

export default PantallaTarifas; // Exportación predeterminada de PantallaNoticias
