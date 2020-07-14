import React from "react";
import Rescatistas from "./Subcomponents/Rescatistas";
import DatosGenerales from "./Subcomponents/DatosGenerales";
import Direccion from "../SharedComponents/Direccion";
import Foto from "../SharedComponents/Foto";
import NavBarRegistros from "../SharedComponents/NavBarRegistros/NavBarRegistros";
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
			<div className="RegistroGeneral">
				<div className="NavBarRegistrosGeneral">
					<NavBarRegistros
						tabIndicatorPosition={"0%"}
						activePosition={"RegistroGeneral"}
					/>
				</div>

				<div className="FormularioGeneral">
					<div className="DatosGenerales">
						<DatosGenerales
							handleChange={this.handleChange}
							nombre={this.state.nombre}
							edad={this.state.edad}
							genero={this.state.genero}
							especie={this.state.especie}
							fechaDeRescate={this.state.fechaDeRescate}
						/>
					</div>
					<div className="Rescatistas">
						<Rescatistas
							rescatistas={this.state.rescatistas}
							agregarRescatista={this.agregarRescatista}
							eliminarRescatista={this.eliminarRescatista}
						/>
					</div>
					<div className="DireccionGeneral">
						<Direccion
							handleChange={this.handleChange}
							calle={this.state.calle}
							numero={this.state.numero}
							colonia={this.state.colonia}
							municipio={this.state.municipio}
						/>
					</div>
					<div className="SenasParticulares">
						<div>
							<label htmlFor="senasParticulares">
								Señas Particulares:{" "}
							</label>
						</div>
						<textarea
							id="senasParticulares"
							type="text"
							name="senasParticulares"
							value={this.props.senasParticulares}
							onChange={this.handleChange}
						/>
					</div>
				</div>

				<div className="BotonesRegistroGeneral">
					<Link to="/Adopcion">
						<button className="BotonGeneralTransicion BotonAnteriorGeneral">
							<i className="fa fa-chevron-circle-left fa-fw"></i>
							Adopcion
						</button>
					</Link>

					<button
						className="BotonGeneralRestablecer BotonCentralGeneral"
						onClick={this.handleRestablecer}
					>
						Restablecer
						<i className="fa fa-eraser fa-fw"></i>
					</button>
					<button
						className="BotonGeneralGuardar BotonCentralGeneral"
						onClick={this.handleSubmit}
					>
						Registrar
						<i className="fa fa-save fa-fw"></i>
					</button>

					<Link to="/ExpedienteMedico">
						<button className="BotonGeneralTransicion BotonSiguienteGeneral">
							Expediente Médico
							<i className="fa fa-chevron-circle-right fa-fw"></i>
						</button>
					</Link>
				</div>

				<div className="BarraLateralGeneral">
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
