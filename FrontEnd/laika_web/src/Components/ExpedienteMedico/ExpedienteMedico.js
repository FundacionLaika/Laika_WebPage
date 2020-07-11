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
    fechaEsterilizacion: "",

    /*Cartilla de Vacunación*/
    puppy: false,
    refuerzoPuppy: false,
    multiple: false,
    refuerzoMultiple: false,
    rabia: false,
    fechaPuppy: "",
    fechaRefuerzoPuppy: "",
    fechaMultiple: "",
    fechaRefuerzoMultiple: "",
    fechaRabia: "",

    /*Fotos*/
    foto1:
      "https://icons-for-free.com/iconfiles/png/512/avatar+person+profile+user+icon-1320086059654790795.png",

    foto2:
      "https://icons-for-free.com/iconfiles/png/512/avatar+person+profile+user+icon-1320086059654790795.png",

    foto3:
      "https://icons-for-free.com/iconfiles/png/512/avatar+person+profile+user+icon-1320086059654790795.png",
  };

  /*Manejador de imágenes*/
  imageHandler = (event) => {
    const reader = new FileReader();
    const foto = event.target.id;

    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ [foto]: reader.result });
      }
    };
    console.log(event.target.id);
    reader.readAsDataURL(event.target.files[0]);
  };

  /*Manejador de eventos*/
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

  /*Manejador del botón submit*/
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  /*Expediente Médico*/
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
          handleChange={this.handleChange}
        />
        <br />
        <Esterilizacion
          esterilizado={this.state.esterilizado}
          citaEsterilizacion={this.state.citaEsterilizacion}
          fechaEsterilizacion={this.state.fechaEsterilizacion}
          handleChange={this.handleChange}
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
          handleChange={this.handleChange}
        />
        <br />
        <Tratamiento />
        <br />
        <FotosExpedienteMedico
          foto1={this.state.foto1}
          foto2={this.state.foto2}
          foto3={this.state.foto3}
          imageHandler={this.imageHandler}
        />
        <button id="idGuardarMed" type="submit" onClick={this.handleSubmit}>
          Guardar
        </button>
      </form>
    );
  }
}

export default ExpedienteMedico;
