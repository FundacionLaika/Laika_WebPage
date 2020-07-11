import React from "react";
import Rescatistas from "./Subcomponents/Rescatistas";
import DatosGenerales from "./Subcomponents/DatosGenerales";
import DireccionRescate from "./Subcomponents/DireccionRescate";
import ImageChooser from "./Subcomponents/ImageChooser";

export default class RegistroGeneral extends React.Component {
	state = {
		nombre: "",
		edad: "",
		genero: "",
		especie: "",
		fechaDeRescate: new Date(),
		rescatistas: [],
		calle: "",
		numero: "",
		colonia: "",
		municipio: "",
		senasParticulares: "",
		imagen: ""
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
	};

	agregarRescatista = (rescatista) => {
		this.setState((state) => ({
			rescatistas: [rescatista, ...state.rescatistas],
		}));
	};

	eliminarRescatista = (id) => {
		this.setState((state) => ({
			rescatistas: state.rescatistas.filter(
				(rescatista) => rescatista.id !== id
			),
		}));
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<DatosGenerales
					handleChange={this.handleChange}
					nombre={this.state.nombre}
					edad={this.state.edad}
					genero={this.state.genero}
					especie={this.state.especie}
					fechaDeRescate={this.state.fechaDeRescate}
				/>

				<Rescatistas
					rescatistas={this.state.rescatistas}
					agregarRescatista={this.agregarRescatista}
					eliminarRescatista={this.eliminarRescatista}
				/>

				<DireccionRescate
					handleChange={this.handleChange}
					calle={this.state.calle}
					numero={this.state.numero}
					colonia={this.state.colonia}
					municipio={this.state.municipio}
				/>

				<textarea
					name="senasParticulares"
					value={this.props.senasParticulares}
					onChange={this.handleChange}
				/>


				<ImageChooser />

				<button type="submit">Registrar</button>
			</form>
		);
	}
}
