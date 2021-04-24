import React, { Component } from "react";
import Scroll from "../SharedComponents/Scroll";
import Diagnostico from "./Subcomponentes/Diagnostico";
import Esterilizacion from "./Subcomponentes/Esterilizacion";
import CartillaVacunacion from "./Subcomponentes/CartillaVacunacion";
import { Link, withRouter } from "react-router-dom";
import NavBarRegistros from "../SharedComponents/NavBarRegistros";
import shortid from "shortid";
import DataGridMed from "./Subcomponentes/DataGridMed";
import Foto from "../SharedComponents/Foto";
import "./Styles/ExpedienteMedico.css";
import queryString from "query-string";
import { validationExpMed } from "./Functions/validationExpMed";
import AlertTitle from "@material-ui/lab/AlertTitle";
import Collapse from "@material-ui/core/Collapse";
import Alert from "@material-ui/lab/Alert";
import ErrorPage from "../SharedComponents/ErrorPage";


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
		vacuna1: false,
		vacuna2: false,
		vacuna3: false,
		vacuna4: false,
		vacuna5: false,

		fechaVacuna1: null,
		fechaVacuna2: null,
		fechaVacuna3: null,
		fechaVacuna4: null,
		fechaVacuna5: null,

		/*Fotos*/
		foto1: null,
		foto2: null,
		foto3: null,

		/*Tratamiento*/
		tratamiento: [],

		especie: "",

		openError: false,
		openSuccess: false,
		msg: "",
		showErrorPage: false
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
		this.updateDB();
	};

	updateDB = () => {
		fetch("http://localhost:3001/expedienteMedico", {
			method: "put",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(this.state),
		})
			.then((response) => response.json())
			.then((response) => {
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

		if (!params.id) {
			this.setState({
				showErrorPage: true
			});
			return;
		}

		else {
			this.setState({
				id: params.id
			});
		}

		fetch("http://localhost:3001/expedienteMedico/?id=" + params.id, {
			method: "get",
			headers: { "Content-Type": "application/json" },
		})
			.then((response) => response.json())
			.then((response) => {
				if (Object.keys(response).length === 1) {
					this.setState({
						showErrorPage: true
					});
					return
				}
				for (const element in response) {
					if (element.includes("fecha")) {
						const date = response[element];
						if (!date || date === "" || date === "0000-00-00")
							continue;
						this.setState({
							[element]: new Date(date),
						});
					} 
					else if (element.includes("foto")) {
						if (response[element]) {

							var buffer = Buffer.from(response[element].data);

							this.setState({
								[element]: buffer.toString("utf8"),
							});
						}
					} 
					else {
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

	handleAlert(e, msg) {
		if (e === "openSuccess") {
			this.setState({
				...this.state,
				openError: false,
				openSuccess: true,
			});
		} else if (e === "openError") {
			this.setState({
				...this.state,
				openError: true,
				openSuccess: false,
				msg: msg,
			});
		}
	}

	/*Expediente Médico*/
	render() {
		if (this.state.showErrorPage) return (<ErrorPage />);

		return (
			<div className="RegistroMedico">
				<div className="NavBarRegistrosMedico">
					<NavBarRegistros
						tabIndicatorPosition={"25%"}
						activePosition={"ExpedienteMedico"}
						id={this.state.id}
					/>
				</div>

				<div className="alertExp">
						<Collapse in={this.state.openError}>
							<Alert
								onClose={() => {
									this.setState({
										...this.state,
										openError: false,
									});
								}}
								variant="outlined"
								severity="error"
							>
								<AlertTitle>
									Error - Faltan llenar los siguientes campos
								</AlertTitle>
								{this.state.msg}
							</Alert>
						</Collapse>

						<Collapse in={this.state.openSuccess}>
							<Alert
								onClose={() => {
									this.setState({
										...this.state,
										openSuccess: false,
									});
								}}
								variant="outlined"
								severity="success"
							>
								<AlertTitle>Datos guardados</AlertTitle>
							</Alert>
						</Collapse>
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
							vacuna1={this.state.vacuna1}
							vacuna2={this.state.vacuna2}
							vacuna3={this.state.vacuna3}
							vacuna4={this.state.vacuna4}
							vacuna5={this.state.vacuna5}

							fechaVacuna1={this.state.fechaVacuna1}
							fechaVacuna2={this.state.fechaVacuna2}
							fechaVacuna3={this.state.fechaVacuna3}
							fechaVacuna4={this.state.fechaVacuna4}
							fechaVacuna5={this.state.fechaVacuna5}

							handleChange={this.handleChange}
							handleDate={this.handleDate}
							especie={this.state.especie}
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
						onClick={(event) => {
							const alert = validationExpMed(this.state);
							if (alert.isValid) {
								this.handleSubmit(event);
								this.handleAlert("openSuccess");
							} else {
								this.handleAlert("openError", alert.msg);
							}
						}}
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

export default withRouter(ExpedienteMedico);
