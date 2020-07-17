import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Scroll from "../Scroll/Scroll";
import "./Consulta.css";

class Consulta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textField: "",
            tipoConsulta: "general",
        };
    }

    handleChange = (event) => {
        this.setState({
            textField: event.target.value,
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
                        {/*Todo Agregar los componentes de las tarjetas*/}
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

export default Consulta;
