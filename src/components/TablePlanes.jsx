import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TablePlanes = () => {
    return (
        <>
            <div className="container mt-4">
                <div className="table-responsive-sm">
                    <table className="table table-hover table-borderless bg-white table-sm">
                        <thead className="border-bottom">
                            <tr className="text-center">
                                <th scope="col" className="text-center text-nowrap">
                                    <div className="h4 font-weight-bold mb-0">Planes</div>
                                    <p className="font-weight-normal text-muted">Tarifa</p>
                                </th>
                                <th scope="col" className="text-center text-nowrap">
                                    <div className="h4 font-weight-bold mb-0">Bronce</div>
                                    <p className="font-weight-normal text-muted">$25.686/m</p>
                                </th>
                                <th scope="col" className="text-center text-nowrap">
                                    <div className="h4 font-weight-bold mb-0">Plata</div>
                                    <p className="font-weight-normal text-muted">$35.529/m</p>
                                </th>
                                <th scope="col" className="text-center text-nowrap">
                                    <div className="h4 font-weight-bold mb-0">Oro</div>
                                    <p className="font-weight-normal text-muted">$48.207/m</p>
                                </th>
                                <th scope="col" className="text-center text-nowrap">
                                    <div className="h4 font-weight-bold mb-0">Platino</div>
                                    <p className="font-weight-normal text-muted">Tarifa personalizada</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-bottom bg-light">
                                <th scope="row" className="h6 py-3 font-weight-semibold text-nowrap border-0 mb-0">
                                    Asistencia en el uso diario
                                </th>
                                <td className="py-3 border-0 text-center">
                                    <FontAwesomeIcon icon="check-circle" className="icono-verde" />
                                </td>
                                <td className="py-3 border-0 text-center">
                                    <FontAwesomeIcon icon="check-circle" className="icono-verde" />
                                </td>
                                <td className="py-3 border-0 text-center">
                                    <FontAwesomeIcon icon="check-circle" className="icono-verde" />
                                </td>
                                <td className="py-3 border-0 text-center">Máxima prioridad en la atención.</td>
                            </tr>
                            <tr className="border-bottom bg-light">
                                <th scope="row" className="h6 py-3 font-weight-semibold text-nowrap border-0 mb-0">
                                    Instalación y configuración de servidores y puestos
                                </th>
                                <td className="py-3 border-0 text-center">
                                    <FontAwesomeIcon icon="check-circle" className="icono-verde" />
                                </td>
                                <td className="py-3 border-0 text-center">
                                    <FontAwesomeIcon icon="check-circle" className="icono-verde" />
                                </td>
                                <td className="py-3 border-0 text-center">
                                    <FontAwesomeIcon icon="check-circle" className="icono-verde" />
                                </td>
                                <td className="py-3 border-0 text-center">Asistencia mediante mesa de ayuda.</td>
                            </tr>
                            <tr className="border-bottom bg-light">
                                <th scope="row" className="h6 py-3 font-weight-semibold text-nowrap border-0 mb-0">
                                    Implementación y parametrización
                                </th>
                                <td className="py-3 border-0 text-center">
                                    <FontAwesomeIcon icon="check-circle" className="icono-verde" />
                                </td>
                                <td className="py-3 border-0 text-center">
                                    <FontAwesomeIcon icon="check-circle" className="icono-verde" />
                                </td>
                                <td className="py-3 border-0 text-center">
                                    <FontAwesomeIcon icon="check-circle" className="icono-verde" />
                                </td>
                                <td className="py-3 border-0 text-center">Asistencia en el uso diario del sistema.</td>
                            </tr>
                            <tr className="border-bottom bg-light">
                                <th scope="row" className="h6 py-3 font-weight-semibold text-nowrap border-0 mb-0">Capacitacion Remota</th>
                                <td className="py-3 border-0 text-center">
                                    <FontAwesomeIcon icon="times-circle" className="icono-rojo" />
                                </td>
                                <td className="py-3 border-0 text-center">
                                    <FontAwesomeIcon icon="times-circle" className="icono-rojo" />
                                </td>
                                <td className="py-3 border-0 text-center">Instructivos digitales para cada módulo.</td>
                                <td className="py-3 border-0 text-center">Capacitaciones de Tango Delta Gestión, módulos ventas, compras, stock, tesorería, contabilidad, sueldos y liquidador de IVA.</td>
                            </tr>
                            <tr className="border-bottom bg-light">
                                <th scope="row" className="h6 py-3 font-weight-semibold text-nowrap border-0 mb-0">Tarifas</th>
                                <td className="py-3 border-0 text-center">Hasta 2 horas de trabajo.</td>
                                <td className="py-3 border-0 text-center">Hasta 3 horas de trabajo.</td>
                                <td className="py-3 border-0 text-center">Hasta 5 horas de trabajo.</td>
                                <td className="py-3 border-0 text-center">Sin límite.</td>
                            </tr>
                        </tbody>
                        <tfoot className="bg-white">
                            <tr>
                                <td colSpan="5" className="py-3 border-0 text-center">*exceso del límite mensual del paquete contratado $17,550.-</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

        </>
    );
};
