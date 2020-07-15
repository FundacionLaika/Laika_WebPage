import React, { Component } from "react";

class Esterilizacion extends Component {
    render() {
        return (
            <div id="esterilizacion">
                <div>
                    <label htmlFor="radio-genero">Esterilizado: </label>
                    <div className="switch center">
                        <div className="quality" id="radio-especie">
                            <input
                                type="radio"
                                id="idEsterilizadoSi"
                                name="esterilizado"
                                value="Si"
                                checked={this.props.esterilizado === "Si"}
                                onChange={this.props.handleChange}
                            />
                            <label htmlFor="idEsterilizadoSi">Si</label>
                        </div>
                        <div className="quality">
                            <input
                                type="radio"
                                id="idEsterilizadoNo"
                                name="esterilizado"
                                value="No"
                                checked={this.props.esterilizado === "No"}
                                onChange={this.props.handleChange}
                            />
                            <label htmlFor="idEsterilizadoNo">No</label>
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="radio-genero">Desea Agendar Cita: </label>
                    <div className="switch center">
                        <div className="quality" id="radio-especie">
                            <input
                                type="radio"
                                id="idCitaEsterilzacionSi"
                                name="citaEsterilizacion"
                                value="Si"
                                checked={this.props.citaEsterilizacion === "Si"}
                                onChange={this.props.handleChange}
                            />
                            <label htmlFor="idCitaEsterilzacionSi">Si</label>
                        </div>
                        <div className="quality">
                            <input
                                type="radio"
                                id="idCitaEsterilzacionNo"
                                name="citaEsterilizacion"
                                value="No"
                                checked={this.props.citaEsterilizacion === "No"}
                                onChange={this.props.handleChange}
                            />
                            <label htmlFor="idCitaEsterilzacionNo">No</label>
                        </div>
                    </div>
                </div>

                <input
                    type="date"
                    id="fechaEsterilizacion"
                    name="fechaEsterilizacion"
                    value={this.props.fechaEsterilizacion}
                    onChange={this.props.handleChange}
                />
            </div>
        );
    }
}

export default Esterilizacion;
