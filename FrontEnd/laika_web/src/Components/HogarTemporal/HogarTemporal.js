import React, { Component } from "react";
import ContactoHT from "./Subcomponentes/ContactoHT";
import Direccion from "../SharedComponents/Direccion";
import ComentariosHT from "./Subcomponentes/ComentariosHT";
import Foto from "../SharedComponents/Foto";

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

		/*Foto*/
		fotoHT:
			"https://icons-for-free.com/iconfiles/png/512/avatar+person+profile+user+icon-1320086059654790795.png",
	};

	imageHandler = (event) => {
		const reader = new FileReader();
		const foto = event.target.id;
		reader.onload = () => {
			if (reader.readyState === 2) {
				this.setState({ [foto]: reader.result });
			}
		};
		reader.readAsDataURL(event.target.files[0]);
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
		console.log(event.target.name);
    };
    
    handleSubmit = () => {
        console.log(this.state);
    }

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
				<Direccion
					calleHT={this.state.calleHT}
					numeroHT={this.state.numeroHT}
					coloniaHT={this.state.coloniaHT}
					municipioHT={this.state.municipioHT}
				/>
				<ComentariosHT />
				<Foto
					id={"fotoHT"}
					foto={this.state.foto}
					imageHandler={this.imageHandler}
				/>
				<button type="submit" onClick={this.handleSubmit}>Guardar</button>
			</form>
		);
	}
}

export default HogarTemporal;
