import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Scroll from "../Scroll/Scroll";
import "./Consulta.css";
import TarjetaExpedienteMedico from "./Subcomponentes/TarjetaExpedienteMedico.js";

export default class Consulta extends Component {
    state = {
        data: [
            {
                id: "1",
                nombre: "firulais",
                edad: "5",
                especie: "perro",
                fechaRescate: "25/05/2019",
                direccion:
                    "Monterrubio #32, Paseos del Sol, Guadalajara, Jalisco",
                rescatistas: "Homero Simpson",
                senasParticulares: "Mancha de la colita",
            },
        ],
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onButtonClicked = (event) => {
        if (event.target.name === "PDF") console.log("PDF");
        else {
            this.setState({
                tipoConsulta: event.target.name,
            });
        }
    };

    render() {
        return (
            <div className="center">
                <div className="search__container mt3 w-40 center">
                    <input
                        className="searchInput search"
                        type="text"
                        name="busqueda"
                        placeholder="Buscar"
                        onChange={this.handleChange}
                    />
                </div>

                <div>
                    <div className="center mt4 pa0 pb0 mb0 w-two-thirds bg-light-purple flex center stretch justify-between">
                        <button
                            className="pa2 pt3 white bta b bg-transparent bw0 w-25 pointer"
                            name="general"
                            onClick={this.onButtonClicked}
                        >
                            General
                        </button>
                        <button
                            className="pa2 pt3 white bta b bg-transparent bw0 w-25 pointer"
                            name="medico"
                            onClick={this.onButtonClicked}
                        >
                            Expediente Medico
                        </button>
                        <button
                            className="pa2 pt3 white bta b bg-transparent bw0 w-25 pointer"
                            name="hogar"
                            onClick={this.onButtonClicked}
                        >
                            Hogar Temporal
                        </button>
                        <button
                            className="pa2 pt3 white bta b bg-transparent bw0 w-25 pointer"
                            name="adopcion"
                            onClick={this.onButtonClicked}
                        >
                            Adopcion
                        </button>
                    </div>

                    <div
                        className="center mv0 pv0  bg-light-gray w-two-thirds"
                        style={{ overflowY: "scroll", height: "65vh" }}
                    >
                        {this.state.data.map((tarjeta) => (
                            <TarjetaExpedienteMedico
                                id={tarjeta.id}
                                nombre={tarjeta.nombre}
                                edad={tarjeta.edad}
                                especie={tarjeta.especie}
                                fechaRescate={tarjeta.fechaRescate}
                                direccion={tarjeta.direccion}
                                rescatistas={tarjeta.rescatistas}
                                senasParticulares={tarjeta.senasParticulares}
                            />
                        ))}
                    </div>

                    <Link to="/GenerarPDF">
                        <button
                            className="mv0 pa2 f4 bw0 bg-light-purple white"
                            name="PDF"
                            onClick={this.onButtonClicked}
                        >
                            GenerarPDF
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}
