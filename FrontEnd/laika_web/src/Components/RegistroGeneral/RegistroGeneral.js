import React from "react";
import Rescatistas from "./Subcomponents/Rescatistas";
import DatosGenerales from "./Subcomponents/DatosGenerales";
import Direccion from "../SharedComponents/Direccion";
import Foto from "../SharedComponents/Foto";
import NavBarRegistros from "../SharedComponents/NavBarRegistros";
import { Link } from "react-router-dom";
import "./Styles/RegistroGeneral.css";

export default class RegistroGeneral extends React.Component {
	state = {
		nombre: "",
		edad: "",
		genero: "",
		especie: "",
		fechaDeRescate: "",
		rescatistas: [],
		calle: "",
		numero: "",
		colonia: "",
		municipio: "",
		senasParticulares: "",
		foto: "/iconoPerro.png",
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

	handleRestablecer = () => {
		this.setState({
			nombre: "",
			edad: "",
			genero: "",
			especie: "",
			fechaDeRescate: "",
			rescatistas: [],
			calle: "",
			numero: "",
			colonia: "",
			municipio: "",
			senasParticulares: "",
			foto: "/iconoPerro.png",
		});
	};

	render() {
		return (
			<div className="Registro">
				<div id="NavBarRegistros">
					<NavBarRegistros />
				</div>

				<div onSubmit={this.handleSubmit} id="Formulario">
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

					<Direccion
						handleChange={this.handleChange}
						calle={this.state.calle}
						numero={this.state.numero}
						colonia={this.state.colonia}
						municipio={this.state.municipio}
					/>

					<label htmlFor="senasParticulares">
						Señas Particulares:{" "}
					</label>
					<textarea
						id="senasParticulares"
						type="text"
						name="senasParticulares"
						value={this.props.senasParticulares}
						onChange={this.handleChange}
					/>

					<button type="submit">Registrar</button>
				</div>

				<div id="BotonesRegistro">
					<Link to="/Adopcion">
						<button>Adopcion</button>
					</Link>

					<button onClick={this.handleRestablecer}>Restablecer</button>

					<Link to="/ExpedienteMedico">
						<button class="button">Expediente Médico</button>
					</Link>
				</div>

				<div
					id="BarraLateral"
				>
					<Foto
						id="foto"
						foto={this.state.foto}
						imageHandler={this.imageHandler}
					/>
				</div>
				
			</div>
		);
	}
}



