import React, { Component } from "react";
import { Link } from "react-router-dom";
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
                <input
                    className="mt3 w-40"
                    type="text"
                    name="apeido"
                    onChange={this.handleChange}
                />
                <div>
                    <div className="center mt4 pa0 pb0 mb0 w-two-thirds bg-light-purple">
                        <button
                            className="mt3"
                            name="general"
                            onClick={this.onButtonClicked}
                        >
                            General
                        </button>
                        <button
                            className="mt3"
                            name="medico"
                            onClick={this.onButtonClicked}
                        >
                            Expediente Medico
                        </button>
                        <button
                            className="mt3"
                            name="hogar"
                            onClick={this.onButtonClicked}
                        >
                            Hogar Temporal
                        </button>
                        <button
                            className="mt3"
                            name="adopcion"
                            onClick={this.onButtonClicked}
                        >
                            Adopcion
                        </button>
                    </div>
                    <div className="center mv0 pv0  bg-light-gray w-two-thirds vh-50">
                        {/*Todo Agregar los componentes de las tarjetas*/}
                    </div>
                    <Link to="../GenerarPDF/GenerarPDF">
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
