import React, { Component } from "react";
import Diagnostico from "./Subcomponentes/Diagnostico";
import Esterilizacion from "./Subcomponentes/Esterilizacion";
import CartillaVacunacion from "./Subcomponentes/CartillaVacunacion";
import Tratamiento from "./Subcomponentes/Tratamiento";
import FotosExpedienteMedico from "./Subcomponentes/FotosExpedienteMedico";
import { Link } from "react-router-dom";
import NavBarRegistros from "../SharedComponents/NavBarRegistros";

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
		foto1: "/iconoPerro.png",
		foto2: "/iconoPerro.png",
		foto3: "/iconoPerro.png",
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
		const data = new FormData(event.target);

		fetch("/api/form-submit-url", {
			method: "POST",
			body: data,
		});
	};

	/*Manejadores de Restablecer*/
	handleRestablecer = () => {
		this.setState({
			atropellamiento: false,
			tvt: false,
			sarnaPiel: false,
			viral: false,
			embarazo: false,
			cachorros: false,
			hemoparasitos: false,
			otro: false,
			otroEspecificar: "",
			esterilizado: "",
			citaEsterilizacion: "",
			fechaEsterilizacion: "",
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
			foto1: "/iconoPerro.png",
			foto2: "/iconoPerro.png",
			foto3: "/iconoPerro.png",
		});
	};

	/*Expediente Médico*/
	render() {
		return (
			<div>
				<NavBarRegistros />
				<form onSubmit={this.handleSubmit}>
					<Diagnostico
						atropellamiento={this.state.atropellamiento}
						tvt={this.state.tvt}
						sarnaPiel={this.state.sarnaPiel}
						viral={this.state.viral}
						embarazo={this.state.embarazo}
						cachorros={this.state.cachorros}
						hemoparasitos={this.state.hemoparasitos}
						otro={this.state.otro}
						otroEspecificar={this.state.otroEspecificar}
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
					<button>Guardar</button>
				</form>
				<Link to="/Components/RegistroGeneral/RegistroGeneral">
					<button>Registro General</button>
				</Link>
				<button onClick={this.handleRestablecer}>Restablecer</button>
				<Link to="/Components/HogarTemporal/HogarTemporal">
					<button>Hogar Temporal</button>
				</Link>
			</div>
		);
	}
}

export default ExpedienteMedico;
