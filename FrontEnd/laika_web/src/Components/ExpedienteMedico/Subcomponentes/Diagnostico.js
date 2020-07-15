import React, { Component } from "react";

class Diagnostico extends Component {
    render() {
        return (
            <div id="diagnostico">
                <label>Diagnóstico</label>
                <div id="atropellamiento">
                    <input
                        type="checkbox"
                        name="atropellamiento"
                        value="atropellamiento"
                        checked={this.props.atropellamiento}
                        onChange={this.props.handleChange}
                    />
                    <label htmlFor="atropellamiento">Atropellamiento</label>
                </div>
                <div id="tvt">
                    <input
                        type="checkbox"
                        name="tvt"
                        value="tvt"
                        checked={this.props.tvt}
                        onChange={this.props.handleChange}
                    />
                    <label htmlFor="tvt">TVT</label>
                </div>
                <div id="sarnaPiel">
                    <input
                        type="checkbox"
                        name="sarnaPiel"
                        value="sarnaPiel"
                        checked={this.props.sarnaPiel}
                        onChange={this.props.handleChange}
                    />
                    <label htmlFor="sarnaPiel">Sarna/Piel</label>
                </div>
                <div id="viral">
                    <input
                        type="checkbox"
                        name="viral"
                        value="viral"
                        checked={this.props.viral}
                        onChange={this.props.handleChange}
                    />
                    <label htmlFor="viral">Viral</label>
                </div>
                <div id="embarazo">
                    <input
                        type="checkbox"
                        name="embarazo"
                        value="embarazo"
                        checked={this.props.embarazo}
                        onChange={this.props.handleChange}
                    />
                    <label htmlFor="embarazo">Embarazo</label>
                </div>
                <div id="cachorros">
                    <input
                        type="checkbox"
                        name="cachorros"
                        value="cachorros"
                        checked={this.props.cachorros}
                        onChange={this.props.handleChange}
                    />
                    <label htmlFor="cachorros">Cachorros</label>
                </div>
                <div id="hemoparasitos">
                    <input
                        type="checkbox"
                        name="hemoparasitos"
                        value="hemoparasitos"
                        checked={this.props.hemoparasitos}
                        onChange={this.props.handleChange}
                    />
                    <label htmlFor="hemoparasitos">Hemoparásitos</label>
                </div>
                <div id="otro">
                    <input
                        type="checkbox"
                        name="otro"
                        value="otro"
                        checked={this.props.otro}
                        onChange={this.props.handleChange}
                    />
                    <label htmlFor="otro">Otro</label>
                </div>
                <div id="otroEspecificar">
                    <label htmlFor="otroEspecificar">Especificar</label>
                    <input
                        type="text"
                        name="otroEspecificar"
                        value={this.props.otroEspecificar}
                        onChange={this.props.handleChange}
                    />
                </div>
            </div>
        );
    }
}

export default Diagnostico;
