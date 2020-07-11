import React, { Component } from "react";
import ContactoHT from "./Subcomponentes/ContactoHT";
import DireccionHT from "./Subcomponentes/DireccionHT";
import ComentariosHT from "./Subcomponentes/ComentariosHT";
import FotoHT from "./Subcomponentes/Foto";

class HogarTemporal extends Component {
  state = {
    /*Contacto HT*/
    tipoHT: "",
    nombreHT: "",
    telefonoHT: "",
    fechaInicioHT: "",
    fechaFinalHT: "",

    /*Dirección HT*/
    calleHT: "",
    numeroHT: "",
    coloniaHT: "",
    municipioHT: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name);
    console.log(value);
  };

  render() {
    return (
      <form>
        <label>Hogar HogarTemporal</label>
        <br />
        <br />
        <ContactoHT
          tipoHT={this.state.tipoHT}
          nombreHT={this.state.nombreHT}
          telefonoHT={this.state.telefonoHT}
          fechaInicioHT={this.state.fechaInicioHT}
          fechaFinalHT={this.state.fechaFinalHT}
        />
        <DireccionHT
          calleHT={this.state.calleHT}
          numeroHT={this.state.numeroHT}
          coloniaHT={this.state.coloniaHT}
          municipioHT={this.state.municipioHT}
        />
        <ComentariosHT />
        <FotoHT />
        <button type="submit" onClick={this.handleSubmit}>
          Guardar
        </button>
      </form>
    );
  }
}

export default HogarTemporal;
