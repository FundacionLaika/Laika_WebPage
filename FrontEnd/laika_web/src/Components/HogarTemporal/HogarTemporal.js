import React, { Component } from "react";
import ContactoHT from "./Subcomponentes/ContactoHT";
import Direccion from "../SharedComponents/Direccion";
import ComentariosHT from "./Subcomponentes/ComentariosHT";
import Foto from "../SharedComponents/Foto";
import { Link } from "react-router-dom";
import NavBarRegistros from "../SharedComponents/NavBarRegistros";

class HogarTemporal extends Component {
	state = {
		/*Contacto HT*/
		tipoHT: "Ninguno",
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
		foto: "/iconoPerro.png",
	};

	/*Manejador de fotos*/
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
		this.setState({
			[event.target.name]: event.target.value,
		});
		console.log(event.target.name);
	};

	/*Manejador del botón submit*/
	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
		const data = new FormData(event.target);

		fetch("/api/form-submit-url", {
			method: "POST",
			body: data,
		});
	};

	/*Manejador de Restablecer*/
	handleRestablecer = () => {
		this.setState({
			tipoHT: "Ninguno",
			nombreHT: "",
			telefonoHT: "",
			fechaInicioHT: "",
			fechaFinalHT: "",
			calle: "",
			numero: "",
			colonia: "",
			municipio: "",
			foto:
				"https://icons-for-free.com/iconfiles/png/512/avatar+person+profile+user+icon-1320086059654790795.png",
		});
	};

	/*Expediente Hogar Temporal*/
	render() {
		return (
			<div>
				<NavBarRegistros />
				<form onSubmit={this.handleSubmit}>
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
					<button>Guardar</button>
				</form>
				<Link to="/Components/ExpedienteMedico/ExpedienteMedico">
					<button>Expediente Médico</button>
				</Link>
				<button onClick={this.handleRestablecer}>Restablecer</button>
				<Link to="/Components/RegistroGeneral/RegistroGeneral">
					<button>Registro General</button>
				</Link>
			</div>
		);
	}
}

export default HogarTemporal;
