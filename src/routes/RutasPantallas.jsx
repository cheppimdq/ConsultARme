// RutasPantalla.jsx
import { Route, Routes, Navigate } from "react-router-dom"

import PantallaInicio from './PantallaInicio.jsx';
import PantallaPlanes from './PantallaPlanes.jsx';
import PantallaEmpresa from './PantallaEmpresa.jsx';
import PantallaContacto from './PantallaContacto.jsx';

export const RutasPantallas = () => {
    return (
        <Routes>
            <Route path="/" element={<PantallaInicio />} />
            <Route path="/servicios" element={<PantallaPlanes />} />
            <Route path="/empresa" element={<PantallaEmpresa />} />
            <Route path="/contacto" element={<PantallaContacto />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};
