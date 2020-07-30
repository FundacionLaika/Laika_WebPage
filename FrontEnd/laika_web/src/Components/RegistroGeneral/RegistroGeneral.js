import React from "react";
import Rescatistas from "./Subcomponents/Rescatistas";
import DatosGeneralesRG from "./Subcomponents/DatosGeneralesRG";
import Direccion from "../SharedComponents/Direccion";
import Foto from "../SharedComponents/Foto";
import NavBarRegistros from "../SharedComponents/NavBarRegistros/NavBarRegistros";
import { Link } from "react-router-dom";
import "./Styles/RegistroGeneral.css";

export default class RegistroGeneral extends React.Component {
	state = {
		id: "perro",
		nombre: "",
		edad: "",
		genero: "",
		especie: "",
		fechaDeRescate: null,
		estatus: "",
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

	handleDate = (fecha, name) => {
		this.setState({
			[name]: fecha,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
	};

	agregarRescatista = (rescatista) => {
		console.log(rescatista.text);
		if (rescatista.text !== "") {
			this.setState((state) => ({
				rescatistas: [rescatista, ...state.rescatistas],
			}));
		}
	};

	eliminarRescatista = (id) => {
		this.setState((state) => ({
			rescatistas: state.rescatistas.filter(
				(rescatista) => rescatista.id !== id
			),
		}));
	};

	imageHandler = (event) => {
		try {
			const reader = new FileReader();
			const foto = event.target.id;

			reader.onload = () => {
				if (reader.readyState === 2) {
					this.setState({ [foto]: reader.result });
				}
			};
			console.log(event.target.id);
			reader.readAsDataURL(event.target.files[0]);
		} catch (error) {}
	};

	handleRestablecer = () => {
		this.setState({
			nombre: "",
			edad: "",
			genero: "",
			especie: "",
			fechaDeRescate: null,
			estatus: "",
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


				   <div
                className="FormularioGeneral"
                style={{ overflowY: "scroll", height: "80vh" }}
            >
					<div className="DatosGenerales">
						<DatosGeneralesRG
							handleChange={this.handleChange}
							handleDate={this.handleDate}
							nombre={this.state.nombre}
							edad={this.state.edad}
							genero={this.state.genero}
							especie={this.state.especie}
							fechaDeRescate={this.state.fechaDeRescate}
							estatus={this.state.estatus}
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
						<div className="form-field">
							<div className="form-field__control">
								<textarea
									id="senasParticulares"
									className="form-field__textarea"
									placeholder=" "
									rows="4"
									name="senasParticulares"
									value={this.props.senasParticulares}
									onChange={this.handleChange}
								></textarea>
								<label
									htmlFor="senasParticulares"
									className="form-field__label"
								>
									Señas Particulares
								</label>
								<div className="form-field__bar"></div>
							</div>
						</div>
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
						<i className="fa fa-venus-mars fa-fw" aria-hidden="true"></i>
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

				<div className="BarraLateralGeneral flex items-center justify-around">
					<div>
						<label>
							{this.state.id}
						</label>
					</div>
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
