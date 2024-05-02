import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ArticlePlanes = () => {
    return (
        <div className="container mt-4">
            <div className="table-responsive aos-init aos-animate" data-aos="fade-up">
                <table className="table table-hover table-borderless bg-white">
                    <thead className="border-bottom">
                        <tr className="text-center">
                            <th scope="col" className="text-center text-nowrap">
                                <div className="h4 font-weight-bold mb-0">Planes</div>
                                <p className="font-weight-normal text-muted">Tarifa mensual</p>
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
                            <td className="py-3 border-0">
                                <FontAwesomeIcon icon="check-circle" />
                            </td>
                            <td className="py-3 border-0">
                                <FontAwesomeIcon icon="check-circle" />
                            </td>
                            <td className="py-3 border-0">
                                <FontAwesomeIcon icon="check-circle" />
                            </td>
                            <td className="py-3 border-0">Máxima prioridad en la atención.</td>
                        </tr>
                        <tr className="border-bottom bg-light">
                            <th scope="row" className="h6 py-3 font-weight-semibold text-nowrap border-0 mb-0">
                                Instalación y configuración de servidores y puestos
                            </th>
                            <td className="py-3 border-0">
                                <FontAwesomeIcon icon="check-circle" />
                            </td>
                            <td className="py-3 border-0">
                                <FontAwesomeIcon icon="check-circle" />
                            </td>
                            <td className="py-3 border-0">
                                <FontAwesomeIcon icon="check-circle" />
                            </td>
                            <td className="py-3 border-0">Asistencia mediante mesa de ayuda.</td>
                        </tr>
                        <tr className="border-bottom bg-light">
                            <th scope="row" className="h6 py-3 font-weight-semibold text-nowrap border-0 mb-0">
                                Implementación y parametrización
                            </th>
                            <td className="py-3 border-0">
                                <FontAwesomeIcon icon="check-circle" />
                            </td>
                            <td className="py-3 border-0">
                                <FontAwesomeIcon icon="check-circle" />
                            </td>
                            <td className="py-3 border-0">
                                <FontAwesomeIcon icon="check-circle" />
                            </td>
                            <td className="py-3 border-0">Asistencia en el uso diario del sistema.</td>
                        </tr>
                        <tr className="border-bottom bg-light">
                            <th scope="row" className="h6 py-3 font-weight-semibold text-nowrap border-0 mb-0">Capacitacion Remota</th>
                            <td className="py-3 border-0">
                                <FontAwesomeIcon icon="times-circle" />
                            </td>
                            <td className="py-3 border-0">
                                <FontAwesomeIcon icon="times-circle" />
                            </td>
                            <td className="py-3 border-0">Instructivos digitales para cada módulo.</td>
                            <td className="py-3 border-0">Capacitaciones de Tango Delta Gestión, módulos ventas, compras, stock, tesorería, contabilidad, sueldos y liquidador de IVA.</td>
                        </tr>
                        <tr className="border-bottom bg-light">
                            <th scope="row" className="h6 py-3 font-weight-semibold text-nowrap border-0 mb-0">Tarifas</th>
                            <td className="py-3 border-0">Hasta 2 horas de trabajo.</td>
                            <td className="py-3 border-0">Hasta 3 horas de trabajo.</td>
                            <td className="py-3 border-0">Hasta 5 horas de trabajo.</td>
                            <td className="py-3 border-0">Sin limite.</td>
                        </tr>
                    </tbody>
                    <tfoot className="text-center bg-white">
                        <tr>
                            <td colSpan="5">*exceso del límite mensual del paquete contratado $17,550.-</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};
