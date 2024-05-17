import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TarifasTable = () => {
    return (
        <>
            <div className="my-5">
                <div className="text-center">
                    <div className="container" data-aos="fade-up">
                        <div className="table-responsive-sm">
                            <table className="table table-borderless table-sm">
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
                                <tbody className="border-bottom">
                                    <tr className="border-bottom">
                                        <th scope="row" className="h6 py-4 px-3 font-weight-semibold text-nowrap border-0 mb-0 text-center">
                                            Asistencia en el uso diario
                                        </th>
                                        <td className="py-4 px-3 border-0 text-center">
                                            <FontAwesomeIcon icon="check-circle" className="icono-verde" />
                                        </td>
                                        <td className="py-4 px-3 border-0 text-center">
                                            <FontAwesomeIcon icon="check-circle" className="icono-verde" />
                                        </td>
                                        <td className="py-4 px-3 border-0 text-center">
                                            <FontAwesomeIcon icon="check-circle" className="icono-verde" />
                                        </td>
                                        <td className="py-4 px-3 border-0 text-center">Máxima prioridad en la atención.</td>
                                    </tr>
                                    <tr className="border-bottom ">
                                        <th scope="row" className="h6 py-4 px-3 font-weight-semibold text-nowrap border-0 mb-0 text-center">
                                            Instalación y configuración de servidores y puestos
                                        </th>
                                        <td className="py-4 px-3 border-0 text-center">
                                            <FontAwesomeIcon icon="check-circle" className="icono-verde" />
                                        </td>
                                        <td className="py-4 px-3 border-0 text-center">
                                            <FontAwesomeIcon icon="check-circle" className="icono-verde" />
                                        </td>
                                        <td className="py-4 px-3 border-0 text-center">
                                            <FontAwesomeIcon icon="check-circle" className="icono-verde" />
                                        </td>
                                        <td className="py-4 px-3 border-0 text-center">Asistencia mediante mesa de ayuda.</td>
                                    </tr>
                                    <tr className="border-bottom">
                                        <th scope="row" className="h6 py-4 px-3 font-weight-semibold text-nowrap border-0 mb-0 text-center">
                                            Implementación y parametrización
                                        </th>
                                        <td className="py-4 px-3 border-0 text-center">
                                            <FontAwesomeIcon icon="check-circle" className="icono-verde" />
                                        </td>
                                        <td className="py-4 px-3 border-0 text-center">
                                            <FontAwesomeIcon icon="check-circle" className="icono-verde" />
                                        </td>
                                        <td className="py-4 px-3 border-0 text-center">
                                            <FontAwesomeIcon icon="check-circle" className="icono-verde" />
                                        </td>
                                        <td className="py-4 px-3 border-0 text-center">Asistencia en el uso diario del sistema.</td>
                                    </tr>
                                    <tr className="border-bottom">
                                        <th scope="row" className="h6 py-4 px-3 font-weight-semibold text-nowrap border-0 mb-0 text-center">Capacitacion Remota</th>
                                        <td className="py-4 px-3 border-0 text-center">
                                            <FontAwesomeIcon icon="times-circle" className="icono-rojo" />
                                        </td>
                                        <td className="py-4 px-3 border-0 text-center">
                                            <FontAwesomeIcon icon="times-circle" className="icono-rojo" />
                                        </td>
                                        <td className="py-4 px-3 border-0 text-center">Instructivos digitales para cada módulo.</td>
                                        <td className="py-4 px-3 border-0 text-center">Capacitaciones de Tango Delta Gestión, módulos ventas, compras, stock, tesorería, contabilidad, sueldos y liquidador de IVA.</td>
                                    </tr>
                                    <tr className="border-bottom">
                                        <th scope="row" className="h6 py-4 px-3 font-weight-semibold text-nowrap border-0 mb-0 text-center">Disponibilidad</th>
                                        <td className="py-4 px-3 border-0 text-center">Hasta 2 horas.</td>
                                        <td className="py-4 px-3 border-0 text-center">Hasta 3 horas.</td>
                                        <td className="py-4 px-3 border-0 text-center">Hasta 5 horas.</td>
                                        <td className="py-4 px-3 border-0 text-center">A convenir.</td>
                                    </tr>
                                </tbody>
                                <tfoot className="">
                                    <tr className="mt-3">
                                        <td colSpan="5" className="py-3 border-0 text-center">Tarifas de servicio: Si necesitas asistencia fuera de los días hábiles, habrá un costo adicional de $17,550 por cada hora.
                                            Actualización de precios: El costo de tu paquete se ajustará mensualmente según la variación del Índice de Precios al Consumidor (IPC) del último mes, según los informes del INDEC.
                                            Facturación y pagos: Te facturaremos al principio de cada mes, y deberás abonarla dentro de los primeros 10 días del período.
                                            Recargos por mora: Si la factura no se paga a tiempo, se aplicará un recargo del 1% por día de retraso. Recuerda que las horas no utilizadas no son reembolsables y el reloj se reinicia cada mes.
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
