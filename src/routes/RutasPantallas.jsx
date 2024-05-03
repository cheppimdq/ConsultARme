// RutasPantalla.jsx
import { Route, Routes, Navigate } from "react-router-dom"

import PantallaInicio from './PantallaInicio.jsx';
import PantallaServicios from './PantallaServicios.jsx';
import PantallaTarifas from './PantallaTarifas.jsx';
import PantallaContacto from './PantallaContacto.jsx';

export const RutasPantallas = () => {
    return (
        <Routes>
            <Route path="/" element={<PantallaInicio />} />
            <Route path="/servicios" element={<PantallaServicios />} />
            <Route path="/tarifas" element={<PantallaTarifas />} />
            <Route path="/contacto" element={<PantallaContacto />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};
