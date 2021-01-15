import React from "react";
import Rescatistas from "./Subcomponents/Rescatistas";
import DatosGeneralesRG from "./Subcomponents/DatosGeneralesRG";
import Direccion from "../SharedComponents/Direccion";
import Foto from "../SharedComponents/Foto";
import NavBarRegistros from "../SharedComponents/NavBarRegistros";
import { Link } from "react-router-dom";
import "./Styles/RegistroGeneral.css";
import queryString from 'query-string';


export default class RegistroGeneral extends React.Component {
	state = {
		id: "",
		nombre: "",
		edad: "",
		genero: "",
		especie: "",
		fechaDeRescate: null,
		estatus: "",
		calle: "",
		numero: "",
		colonia: "",
		municipio: "",
		senasParticulares: "",
		foto: "/iconoPerro.png",
		rescatistas: [],
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
			reader.readAsDataURL(event.target.files[0]);
		} catch (error) {}
	};

	handleRestablecer = () => {
		this.fetchData();
	};

	fetchData = () => {
		let url = this.props.location.search;
		console.log("url", url);
		let params = queryString.parse(url);

		fetch("http://localhost:3001/registroGeneral/?id=" + params.id, {
			method: "get",
			headers: { "Content-Type": "application/json" },
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				for (const element in response) {

					if (element.includes("fecha")) {
						this.setState({
							[element]: new Date(response[element])
						});
					}
					else {
						this.setState({
							[element]: response[element]
						});
					}
					
				}
			})
			.catch((err) => console.log(err));
	}

	componentDidMount() {
		this.fetchData();
	}

	

	render() {
		return (
			<div className="RegistroGeneral">
				<div className="NavBarRegistrosGeneral">
					<NavBarRegistros
						tabIndicatorPosition={"0%"}
						activePosition={"RegistroGeneral"}
						id={this.state.id}
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
									value={this.state.senasParticulares}
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
					<Link to={"/Laika/Adopcion"+this.props.location.search}>
						<button className="BotonGeneralTransicion BotonAnteriorGeneral">
							<i
								aria-hidden="true"
								className="fa fa-chevron-circle-left fa-fw"
							></i>
							Adopcion
						</button>
					</Link>

					<button
						className="BotonGeneralRestablecer BotonCentralGeneral"
						onClick={this.handleRestablecer}
					>
						Restablecer
						<i
							aria-hidden="true"
							className="fa fa-eraser fa-fw"
						></i>
					</button>
					<button
						className="BotonGeneralGuardar BotonCentralGeneral"
						onClick={this.handleSubmit}
					>
						Registrar
						<i aria-hidden="true" className="fa fa-save fa-fw"></i>
					</button>

					<Link to={"/Laika/ExpedienteMedico"+this.props.location.search}>
						<button className="BotonGeneralTransicion BotonSiguienteGeneral">
							Expediente Médico
							<i className="fa fa-chevron-circle-right fa-fw"></i>
						</button>
					</Link>
				</div>

				<div className="BarraLateralGeneral">
					<div className="idLabelGeneral">
						<label>ID:{this.state.id}</label>
					</div>
					<div className="fotoGeneral">
						<Foto
							id="foto"
							foto={this.state.foto}
							imageHandler={this.imageHandler}
						/>
					</div>
				</div>
			</div>
		);
	}
}