import React, { Component } from "react";
import Diagnostico from "./Subcomponentes/Diagnostico";
import Esterilizacion from "./Subcomponentes/Esterilizacion";
import CartillaVacunacion from "./Subcomponentes/CartillaVacunacion";
import Tratamiento from "./Subcomponentes/Tratamiento";
import FotosExpedienteMedico from "./Subcomponentes/FotosExpedienteMedico";

class ExpedienteMedico extends Component {
  state = {
    /*Diagnóstico*/
    atropellamiento: false,
    tvt: false,
    sarnaPiel: false,
    viral: false,
    embarazo: false,
    cachorros: false,
    hemoparasitos: false,
    otro: false,
    otroEspecificar: "",

    /*Esterilización*/
    esterilizado: "",
    citaEsterilizacion: "",
    fechaEsterilizacion: new Date(),

    /*Cartilla de Vacunación*/
    puppy: false,
    refuerzoPuppy: false,
    multiple: false,
    refuerzoMultiple: false,
    rabia: false,
    fechaPuppy: new Date(),
    fechaRefuerzoPuppy: new Date(),
    fechaMultiple: new Date(),
    fechaRefuerzoMultiple: new Date(),
    fechaRabia: new Date(),
  };

  handleChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
    console.log(event.target.name);
    console.log(value);
  };

  render() {
    return (
      <form>
        <Diagnostico
          atropellamiento={this.state.atropellamiento}
          tvt={this.state.tvt}
          sarnaPiel={this.state.sarnaPiel}
          viral={this.state.viral}
          embarazo={this.state.embarazo}
          cachorros={this.state.cachorros}
          hemoparasitos={this.state.hemoparasitos}
          otro={this.state.otro}
          handleChange = {this.handleChange}
        />
        <br />
        <Esterilizacion
          esterilizado={this.state.esterilizado}
          citaEsterilizacion={this.state.citaEsterilizacion}
          fechaEsterilizacion={this.state.fechaEsterilizacion}
          handleChange = {this.handleChange}
        />
        <br />
        <CartillaVacunacion
          puppy={this.state.puppy}
          refuerzoPuppy={this.state.refuerzoPuppy}
          multiple={this.state.multiple}
          refuerzoMultiple={this.state.refuerzoMultiple}
          rabia={this.state.rabia}
          fechaPuppy={this.state.fechaPuppy}
          fechaRefuerzoPuppy={this.state.fechaRefuerzoPuppy}
          fechaMultiple={this.state.fechaMultiple}
          fechaRefuerzoMultiple={this.state.fechaRefuerzoMultiple}
          fechaRabia={this.state.fechaRabia}
          handleChange = {this.handleChange}
        />
        <br />
        <Tratamiento />
        <br />
        <FotosExpedienteMedico/>
        <button type="submit" onClick={this.preventDefault}>
          Guardar
        </button>
      </form>
    );
  }
}

export default ExpedienteMedico;
