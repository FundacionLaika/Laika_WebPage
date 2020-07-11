import React, { Component } from "react";
class Consulta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tipoConsulta: "",
        };
    }

    render() {
        return (
            <div className="center">
                <input className="mt3 w-40" type="text" name="apeido" />
                <div>
                    <div className="center mt4 pa0 pb0 mb0 w-two-thirds bg-light-purple">
                        <button className="mt3" name="general">
                            General
                        </button>
                        <button className="mt3" name="medico">
                            Expdiente Medico
                        </button>
                        <button className="mt3" name="hogar">
                            Hogar Temporal
                        </button>
                        <button className="mt3" name="adopcion">
                            Adopcion
                        </button>
                    </div>
                    <div className="center mt0 pt0 bg-light-gray w-two-thirds vh-75">
                        <h3>Tabla Consulta</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Consulta;
