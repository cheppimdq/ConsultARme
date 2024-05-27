import React from 'react';
import { Link } from 'react-router-dom';

export const Acordion = () => {
    return (
        <section class="py-3 py-5">
            <div class="container">
                <div class="row gy-5">
                    <div class="col-12 col-lg-6">
                        <h5 class="h-2 mb-3">¿Cómo se calcula el importe de mi factura?</h5>
                        <p class="lead text-secondary mb-4">Después de cada servicio realizado, te enviaremos un correo electrónico con detalles como la fecha, duración y un resumen del trabajo realizado. </p>
                        <Link href="https://api.whatsapp.com/send?phone=5492215923513" class="btn btn-lg bsb-btn-2xl btn-info">Consultanos</Link>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="row justify-content-xl-end">
                            <div class="col-12 col-xl-11">
                                <div class="accordion accordion-flush" id="accordionExample">
                                    <div class="accordion-item mb-4 shadow-sm">
                                        <p class="accordion-header" id="headingOne">
                                            <button class="accordion-button bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                ¿Cuándo recibo mi factura?
                                            </button>
                                        </p>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <p>Te facturaremos al principio de cada mes, y deberás abonarla dentro de los primeros 10 días del período.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item mb-4 shadow-sm">
                                        <p class="accordion-header" id="headingTwo">
                                            <button class="accordion-button collapsed bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                ¿Cómo funciona la política de incremento recurrente de precios?
                                            </button>
                                        </p>
                                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo">
                                            <div class="accordion-body">
                                                El costo de tu paquete se ajustará mensualmente según la variación del Índice de Precios al Consumidor (IPC) del último mes, según los informes del INDEC.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item mb-4 shadow-sm">
                                        <p class="accordion-header" id="headingThree">
                                            <button class="accordion-button collapsed bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                ¿Hay algún costo adicional al valor mensual?
                                            </button>
                                        </p>
                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree">
                                            <div class="accordion-body">
                                                Si necesitas asistencia fuera de los días hábiles, habrá un costo adicional de $17,550 por cada hora.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item mb-4 shadow-sm">
                                        <p class="accordion-header" id="headingFour">
                                            <button class="accordion-button collapsed bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                ¿Qué sucede si pago mi factura fuera del plazo establecido?
                                            </button>
                                        </p>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour">
                                            <div class="accordion-body">
                                                Si la factura no se paga a tiempo, se aplicará un recargo del 1% por día de retraso.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}