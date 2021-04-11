import React, { Component } from "react";
import "../Styles/Checkboxes.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import "../../SharedComponents/Styles/TextArea.css";
import es from "date-fns/locale/es";
import DatePickerInput from "../../SharedComponents/DatePickerInput.js";
registerLocale("es", es);

class CartillaVacunacion extends Component {
    decodificarVacuna = (vacuna, especie) => {
        if (!vacuna || !especie) return "";

        const decoder = {
            vacuna1: {
                Canino: "Puppy",
                Felino: "Triple Viral Felina",
                Otro: "Vacuna 1",
            },
            vacuna2: {
                Canino: "Refuerzo Puppy",
                Felino: "Refuerzo TV Felina",
                Otro: "Vacuna 2",
            },
            vacuna3: {
                Canino: "Multiple",
                Felino: "Leucemia",
                Otro: "Vacuna 3",
            },
            vacuna4: {
                Canino: "Refuerzo Multiple",
                Felino: "Desparasitacion",
                Otro: "Vacuna 4",
            },
            vacuna5: {
                Canino: "Rabia",
                Felino: "Rabia",
                Otro: "Vacuna 5",
            },
        };

        return decoder[vacuna][especie];
    };


    render() {
        return (
            <div>
                <div className="headerCartillaVacunacion">
                    {" "}
                    <i
                        aria-hidden="true"
                        className="fa fa-medkit fa-fw separation"
                    ></i>
                    Cartilla de vacunación
                </div>
                <div className="cartillaVacunacion">
                    <div className="vacuna1">
                        <div className="cb cb-cv">
                            <input
                                autoComplete="off"
                                type="checkbox"
                                id="vacuna1"
                                name="vacuna1"
                                value="vacuna1"
                                checked={this.props.vacuna1}
                                onChange={this.props.handleChange}
                            />
                            <label htmlFor="vacuna1">
                                <span></span>
                            </label>
                        </div>

                        <div id="lb">
                            <label>
                                {this.decodificarVacuna(
                                    "vacuna1",
                                    this.props.especie
                                )}
                            </label>
                        </div>

                        <div id="dt">
                            <DatePicker
                                isClearable
                                useWeekdaysShort
                                fixedHeight
                                autoComplete
                                customInput={<DatePickerInput />}
                                title={"Fecha"}
                                id="fechaVacuna1"
                                name="fechaVacuna1"
                                locale="es"
                                selected={this.props.fechaVacuna1}
                                dateFormat="dd/MM/yyyy"
                                onChange={(date) =>
                                    this.props.handleDate(date, "fechaVacuna1")
                                }
                            />
                        </div>
                    </div>

                    <div className="vacuna2">
                        <div className="cb cb-cv">
                            <input
                                autoComplete="off"
                                type="checkbox"
                                id="vacuna2"
                                name="vacuna2"
                                value="vacuna2"
                                checked={this.props.vacuna2}
                                onChange={this.props.handleChange}
                            />
                            <label htmlFor="vacuna2">
                                <span></span>
                            </label>
                        </div>

                        <div id="lb">
                            <label>
                                {this.decodificarVacuna(
                                    "vacuna2",
                                    this.props.especie
                                )}
                            </label>
                        </div>

                        <div id="dt">
                            <DatePicker
                                isClearable
                                useWeekdaysShort
                                fixedHeight
                                autoComplete
                                customInput={<DatePickerInput />}
                                title={"Fecha"}
                                id="fechaVacuna2"
                                name="fechaVacuna2"
                                locale="es"
                                selected={this.props.fechaVacuna2}
                                dateFormat="dd/MM/yyyy"
                                onChange={(date) =>
                                    this.props.handleDate(date, "fechaVacuna2")
                                }
                            />
                        </div>
                    </div>

                    <div className="vacuna3">
                        <div className="cb cb-cv">
                            <input
                                autoComplete="off"
                                type="checkbox"
                                id="vacuna3"
                                name="vacuna3"
                                value="vacuna3"
                                checked={this.props.vacuna3}
                                onChange={this.props.handleChange}
                            />
                            <label htmlFor="vacuna3">
                                <span></span>
                            </label>
                        </div>

                        <div id="lb">
                            <label>
                                {this.decodificarVacuna(
                                    "vacuna3",
                                    this.props.especie
                                )}
                            </label>
                        </div>

                        <div id="dt">
                            <DatePicker
                                isClearable
                                useWeekdaysShort
                                fixedHeight
                                autoComplete
                                customInput={<DatePickerInput />}
                                title={"Fecha"}
                                id="fechaVacuna3"
                                name="fechaVacuna3"
                                locale="es"
                                selected={this.props.fechaVacuna3}
                                dateFormat="dd/MM/yyyy"
                                onChange={(date) =>
                                    this.props.handleDate(date, "fechaVacuna3")
                                }
                            />
                        </div>
                    </div>

                    <div className="vacuna4">
                        <div className="cb cb-cv">
                            <input
                                autoComplete="off"
                                type="checkbox"
                                id="vacuna4"
                                name="vacuna4"
                                value="vacuna4"
                                checked={this.props.vacuna4}
                                onChange={this.props.handleChange}
                            />
                            <label htmlFor="vacuna4">
                                <span></span>
                            </label>
                        </div>

                        <div id="lb">
                            <label>
                                {this.decodificarVacuna(
                                    "vacuna4",
                                    this.props.especie
                                )}
                            </label>
                        </div>

                        <div id="dt">
                            <DatePicker
                                isClearable
                                useWeekdaysShort
                                fixedHeight
                                autoComplete
                                customInput={<DatePickerInput />}
                                title={"Fecha"}
                                id="fechaVacuna4"
                                name="fechaVacuna4"
                                locale="es"
                                selected={this.props.fechaVacuna4}
                                dateFormat="dd/MM/yyyy"
                                onChange={(date) =>
                                    this.props.handleDate(date, "fechaVacuna4")
                                }
                            />
                        </div>
                    </div>

                    <div className="vacuna5">
                        <div className="cb cb-cv">
                            <input
                                autoComplete="off"
                                type="checkbox"
                                id="vacuna5"
                                name="vacuna5"
                                value="vacuna5"
                                checked={this.props.vacuna5}
                                onChange={this.props.handleChange}
                            />
                            <label htmlFor="vacuna5">
                                <span></span>
                            </label>
                        </div>

                        <div id="lb">
                            <label>
                                {this.decodificarVacuna(
                                    "vacuna5",
                                    this.props.especie
                                )}
                            </label>
                        </div>

                        <div id="dt">
                            <DatePicker
                                isClearable
                                useWeekdaysShort
                                fixedHeight
                                autoComplete
                                customInput={<DatePickerInput />}
                                title={"Fecha"}
                                id="fechaVacuna5"
                                name="fechaVacuna5"
                                locale="es"
                                selected={this.props.fechaVacuna5}
                                dateFormat="dd/MM/yyyy"
                                onChange={(date) =>
                                    this.props.handleDate(date, "fechaVacuna5")
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartillaVacunacion;
