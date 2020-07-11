import React, { Component } from "react";
import ContactoHT from "./Subcomponentes/ContactoHT";
import Direccion from "../SharedComponents/Direccion";
import ComentariosHT from "./Subcomponentes/ComentariosHT";
import Foto from "../SharedComponents/Foto";

class HogarTemporal extends Component {
	state = {
		/*Contacto HT*/
		tipoHT: "Persona",
		nombreHT: "",
		telefonoHT: "",
		fechaInicioHT: "",
		fechaFinalHT: "",

		/*Dirección HT*/
		calle: "",
		numero: "",
		colonia: "",
		municipio: "",

		/*Foto*/
		foto:
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
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

	render() {
		return (
			<form>
				<label>HogarTemporal</label>
				<br />
				<br />
				<ContactoHT
					tipoHT={this.state.tipoHT}
					nombreHT={this.state.nombreHT}
					telefonoHT={this.state.telefonoHT}
					fechaInicioHT={this.state.fechaInicioHT}
                    fechaFinalHT={this.state.fechaFinalHT}
                    handleChange={this.handleChange}
				/>
				<Direccion
					calle={this.state.calle}
					numero={this.state.numero}
					colonia={this.state.colonia}
                    municipio={this.state.municipio}
                    handleChange={this.handleChange}
				/>
				<ComentariosHT />
				<Foto
					id={"foto"}
					foto={this.state.foto}
					imageHandler={this.imageHandler}
				/>
				<button type="submit" onClick={this.handleSubmit}>Guardar</button>
			</form>
		);
	}
}

export default HogarTemporal;
