import React, { Component } from "react";

class Esterilizacion extends Component {
  render() {
    return (
      <div>
        <label>Esterilización</label>
        <br />
        <div>
          <label>Esterilizado</label>
          <input
            type="radio"
            name="esterilizado"
            value="Si"
            checked={this.props.esterilizado === "Si"}
            onChange={this.props.handleChange}
          />
          <input
            type="radio"
            name="esterilizado"
            value="No"
            checked={this.props.esterilizado === "No"}
            onChange={this.props.handleChange}
          />
        </div>

        <div>
          <label>¿Desea agendar cita?</label>
          <input
            type="radio"
            name="citaEsterilizacion"
            value="Si"
            checked={this.props.citaEsterilizacion === "Si"}
            onChange={this.props.handleChange}
          />
          <input
            type="radio"
            name="citaEsterilizacion"
            value="No"
            checked={this.props.citaEsterilizacion === "No"}
            onChange={this.props.handleChange}
          />
        </div>

        <input
          type="date"
          id="fechaEsterilizacion"
          name="fechaEsterilizacion"
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default Esterilizacion;
