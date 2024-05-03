import React from 'react';

import { NavTransparente } from '../components/NavTransparente.jsx';
import { HeaderSecundario } from '../components/HeaderSecundario.jsx';
import { TablePlanes } from '../components/TablePlanes.jsx';
import { AsideClientes } from '../components/AsideClientes.jsx';
import { BotonFlotante } from '../components/BotonFlotante.jsx'
import { FooterNegro } from '../components/FooterNegro.jsx'

const PantallaTarifas = () => {
  return (
    <>
      <NavTransparente />
      <HeaderSecundario />
      <AsideClientes />
      <TablePlanes />
      <AsideClientes />
      <BotonFlotante />
      <FooterNegro />
    </>
  );
};

export default PantallaTarifas; // Exportación predeterminada de PantallaNoticias
