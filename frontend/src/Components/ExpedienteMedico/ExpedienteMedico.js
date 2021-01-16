import React, { Component } from "react";
import Scroll from "../SharedComponents/Scroll";
import Diagnostico from "./Subcomponentes/Diagnostico";
import Esterilizacion from "./Subcomponentes/Esterilizacion";
import CartillaVacunacion from "./Subcomponentes/CartillaVacunacion";
import { Link } from "react-router-dom";
import NavBarRegistros from "../SharedComponents/NavBarRegistros";
import shortid from "shortid";
import DataGridMed from "./Subcomponentes/DataGridMed";
import Foto from "../SharedComponents/Foto";
import "./Styles/ExpedienteMedico.css";
import queryString from "query-string";

class ExpedienteMedico extends Component {
	state = {
		/*ID*/
		id: "",

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
		fechaEsterilizacion: null,

		/*Cartilla de Vacunación*/
		puppy: false,
		refuerzoPuppy: false,
		multiple: false,
		refuerzoMultiple: false,
		rabia: false,
		fechaPuppy: null,
		fechaRefuerzoPuppy: null,
		fechaMultiple: null,
		fechaRefuerzoMultiple: null,
		fechaRabia: null,

		/*Fotos*/
		foto1: null,
		foto2: null,
		foto3: null,

		/*Tratamiento*/
		tratamiento: [],
	};

	/*Manejador de imágenes*/
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

	/*Manejador de eventos*/
	handleChange = (event) => {
		const value =
			event.target.type === "checkbox"
				? event.target.checked
				: event.target.value;
		if (event.target.name === "otro") {
			this.setState({
				...this.state,
				otroEspecificar: "",
				[event.target.name]: value,
			});
		} else if (event.target.id === "idCitaEsterilzacionNo") {
			this.setState({
				...this.state,
				fechaEsterilizacion: null,
				[event.target.name]: value,
			});
		} else {
			this.setState({
				...this.state,
				[event.target.name]: value,
			});
		}

		console.log(event.target.name);
		console.log(value);
	};

	/*Manejador de dates*/
	handleDate = (fecha, name) => {
		this.setState({
			[name]: fecha,
		});
	};

	/*Manejador del botón submit*/
	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
		this.updateDB();
	};

	updateDB = () => {
		let url = this.props.location.search;
		console.log("url", url);
		let params = queryString.parse(url);

		fetch("http://localhost:3001/expedienteMedico", {
			method: "put",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(this.state),
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
			})
			.catch((err) => console.log(err));
	};

	/*Manejadores de Restablecer*/
	handleRestablecer = () => {
		this.fetchData();
	};

	fetchData = () => {
		let url = this.props.location.search;
		let params = queryString.parse(url);

		fetch("http://localhost:3001/expedienteMedico/?id=" + params.id, {
			method: "get",
			headers: { "Content-Type": "application/json" },
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				for (const element in response) {
					if (element.includes("fecha")) {
						this.setState({
							[element]: new Date(response[element]),
						});
					} else if (element.includes("foto")) {
						if (response[element]) {
							console.log(response[element]);

							var buffer = Buffer.from(response[element].data);

							this.setState({
								[element]: buffer.toString("utf8"),
							});
						}
					} else {
						this.setState({
							[element]: response[element],
						});
					}
				}
			})
			.catch((err) => console.log(err));
	};

	componentDidMount() {
		this.fetchData();
	}

	/*Manejador de datagrid medico*/
	addRow = (event) => {
		event.preventDefault();
		const newRow = {
			id: shortid.generate(),
			fechaInicio: null,
			fechaFinal: null,
			comentarios: "",
			accion: "",
			citaMedica: null,
		};
		this.setState((state) => ({
			tratamiento: [newRow, ...state.tratamiento],
		}));
	};

	deleteRow = (id) => {
		this.setState((state) => ({
			tratamiento: state.tratamiento.filter((row) => row.id !== id),
		}));
	};

	modifyRow = (id, name, value) => {
		let dataTemp = this.state.tratamiento;
		if (!dataTemp) return;

		dataTemp.forEach((element) => {
			if (element.id === id) {
				if (name === "fechaInicio") element.fechaInicio = value;
				else if (name === "fechaFinal") element.fechaFinal = value;
				else if (name === "comentarios") element.comentarios = value;
				else if (name === "accion") element.accion = value;
				else if (name === "citaMedica") element.citaMedica = value;
			}
		});
		this.setState({
			tratamiento: dataTemp,
		});
	};

	/*Expediente Médico*/
	render() {
		return (
			<div className="RegistroMedico">
				<div className="NavBarRegistrosMedico">
					<NavBarRegistros
						tabIndicatorPosition={"25%"}
						activePosition={"ExpedienteMedico"}
						id={this.state.id}
					/>
				</div>

				<div
					className="FormularioMedico"
					style={{ overflowY: "scroll", height: "85vh" }}
				>
					<div className="diagnostico">
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
					</div>
					<div className="esterilizacion">
						<Esterilizacion
							esterilizado={this.state.esterilizado}
							citaEsterilizacion={this.state.citaEsterilizacion}
							fechaEsterilizacion={this.state.fechaEsterilizacion}
							handleChange={this.handleChange}
							handleDate={this.handleDate}
						/>
					</div>
					<div className="cartillaVacunacion">
						<CartillaVacunacion
							puppy={this.state.puppy}
							refuerzoPuppy={this.state.refuerzoPuppy}
							multiple={this.state.multiple}
							refuerzoMultiple={this.state.refuerzoMultiple}
							rabia={this.state.rabia}
							fechaPuppy={this.state.fechaPuppy}
							fechaRefuerzoPuppy={this.state.fechaRefuerzoPuppy}
							fechaMultiple={this.state.fechaMultiple}
							fechaRefuerzoMultiple={
								this.state.fechaRefuerzoMultiple
							}
							fechaRabia={this.state.fechaRabia}
							handleChange={this.handleChange}
							handleDate={this.handleDate}
						/>
					</div>
					<div className="tratamiento">
						<div className="headerTratamiento">
							{" "}
							<i
								aria-hidden="true"
								className="fa fa-heartbeat fa-fw separation"
							></i>
							Tratamiento
						</div>

						<DataGridMed
							data={this.state.tratamiento}
							modifyRow={this.modifyRow}
							addRow={this.addRow}
							deleteRow={this.deleteRow}
						/>
					</div>
				</div>

				<div className="BarraLateralMedico">
					<Scroll>
						<div className="idLabelMedico">
							<label>ID: {this.state.id}</label>
						</div>
						<div className="fotoMedico1">
							<Foto
								id="foto1"
								className="pt3"
								foto={this.state.foto1}
								imageHandler={this.imageHandler}
							/>
						</div>
						<div className="fotoMedico2">
							<Foto
								id="foto2"
								className="pt3"
								foto={this.state.foto2}
								imageHandler={this.imageHandler}
							/>
						</div>
						<div className="fotoMedico3">
							<Foto
								id="foto3"
								className="pt3"
								foto={this.state.foto3}
								imageHandler={this.imageHandler}
							/>
						</div>
					</Scroll>
				</div>

				<div className="BotonesRegistroMedico">
					<Link
						to={
							"/Laika/RegistroGeneral" +
							this.props.location.search
						}
					>
						<button className="BotonMedicoTransicion BotonAnteriorMedico">
							{" "}
							<i
								aria-hidden="true"
								className="fa fa-chevron-circle-left fa-fw"
							></i>
							Registro General
						</button>
					</Link>
					<button
						className="BotonMedicoRestablecer BotonCentralMedico"
						onClick={this.handleRestablecer}
					>
						Restablecer{" "}
						<i
							aria-hidden="true"
							className="fa fa-eraser fa-fw"
						></i>
					</button>
					<button
						className="BotonMedicoGuardar BotonCentralMedico"
						onClick={this.handleSubmit}
					>
						Guardar{" "}
						<i aria-hidden="true" className="fa fa-save fa-fw"></i>
					</button>
					<Link
						to={"/Laika/HogarTemporal" + this.props.location.search}
					>
						<button className="BotonMedicoTransicion BotonSiguienteMedico">
							Hogar Temporal{" "}
							<i
								aria-hidden="true"
								className="fa fa-chevron-circle-right fa-fw"
							></i>
						</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default ExpedienteMedico;
