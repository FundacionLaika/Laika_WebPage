import React, { Component } from "react";

class Diagnostico extends Component {
  render() {
    return (
      <div>
        <label>Diagnóstico</label>
        <br />
        <input
          type="checkbox"
          id="atropellamiento"
          name="atropellamiento"
          value="atropellamiento"
          checked={this.props.atropellamiento}
          onChange={this.props.handleChange}
        />
        <label htmlFor="atropellamiento">Atropellamiento</label>
        <br />
        <input
          type="checkbox"
          id="tvt"
          name="tvt"
          value="tvt"
          checked={this.props.tvt}
          onChange={this.props.handleChange}
        />
        <label htmlFor="tvt">TVT</label>
        <br />
        <input
          type="checkbox"
          id="sarnaPiel"
          name="sarnaPiel"
          value="sarnaPiel"
          checked={this.props.sarnaPiel}
          onChange={this.props.handleChange}
        />
        <label htmlFor="sarnaPiel">Sarna/Piel</label>
        <br />
        <input
          type="checkbox"
          id="viral"
          name="viral"
          value="viral"
          checked={this.props.viral}
          onChange={this.props.handleChange}
        />
        <label htmlFor="viral">Viral</label>
        <br />
        <input
          type="checkbox"
          id="embarazo"
          name="embarazo"
          value="embarazo"
          checked={this.props.embarazo}
          onChange={this.props.handleChange}
        />
        <label htmlFor="embarazo">Embarazo</label>
        <br />
        <input
          type="checkbox"
          id="cachorros"
          name="cachorros"
          value="cachorros"
          checked={this.props.cachorros}
          onChange={this.props.handleChange}
        />
        <label htmlFor="cachorros">Cachorros</label>
        <br />
        <input
          type="checkbox"
          id="hemoparasitos"
          name="hemoparasitos"
          value="hemoparasitos"
          checked={this.props.hemoparasitos}
          onChange={this.props.handleChange}
        />
        <label htmlFor="hemoparasitos">Hemoparásitos</label>
        <br />
        <input
          type="checkbox"
          id="otro"
          name="otro"
          value="otro"
          checked={this.props.otro}
          onChange={this.props.handleChange}
        />
        <label htmlFor="otro">Otro</label>
        <br />
        <label htmlFor="otroEspecificar">Especificar</label>
        <input
          type="text"
          id="otroEspecificar"
          name="otroEspecificar"
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default Diagnostico;
