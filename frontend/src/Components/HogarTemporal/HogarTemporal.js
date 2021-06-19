import React, { Component } from "react";
import ContactoHT from "./Subcomponentes/ContactoHT";
import Direccion from "../SharedComponents/Direccion";
import Foto from "../SharedComponents/Foto";
import { Link, withRouter } from "react-router-dom";
import NavBarRegistros from "../SharedComponents/NavBarRegistros";
import DataGrid from "../SharedComponents/DataGrid/DataGrid";
import shortid from "shortid";
import "../SharedComponents/Styles/InputText.css";
import "./Styles/HogarTemporal.css";
import "../SharedComponents/Styles/SelectBox.css";
import queryString from "query-string";
import { validationHT } from "./Functions/validationHT";
import AlertTitle from "@material-ui/lab/AlertTitle";
import Collapse from "@material-ui/core/Collapse";
import Alert from "@material-ui/lab/Alert";
import ErrorPage from "../SharedComponents/ErrorPage";

class HogarTemporal extends Component {
	state = {
		/*ID*/
		id: "",

		/*Contacto HT*/
		tipoHT: "",
		nombreHT: "",
		telefonoHT: "",
		fechaInicioHT: null,
		fechaFinalHT: null,

		/*Dirección HT*/
		calle: "",
		numero: "",
		colonia: "",
		municipio: "",

		/*Foto*/
		foto: null,

		/*Comentarios*/
		comentarios: [],

		openError: false,
		openSuccess: false,
		msg: "",
		showErrorPage: false

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
		reader.readAsDataURL(event.target.files[0]);
	};

	/*Manejador de eventos*/
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	/*Manejador del botón submit*/
	handleSubmit = (event) => {
		event.preventDefault();
		this.updateDB();
	};

	updateDB = () => {
		fetch("https://fundacionlaika.herokuapp.com/hogarTemporal", {
			method: "put",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(this.state),
		})
			.then((response) => response.json())
			.then((response) => {
			})
			.catch((err) => console.log(err));
	};

	/*Manejador de Restablecer*/
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

		fetch("https://fundacionlaika.herokuapp.com/hogarTemporal/?id=" + params.id, {
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
					} else if (element.includes("foto")) {
						if (response[element]) {

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

	addRow = (event) => {
		event.preventDefault();
		const newRow = {
			id: shortid.generate(),
			observaciones: "",
			accion: "",
			fecha: null,
		};
		this.setState((state) => ({
			comentarios: [newRow, ...state.comentarios],
		}));
	};

	deleteRow = (id) => {
		this.setState((state) => ({
			comentarios: state.comentarios.filter((row) => row.id !== id),
		}));
	};

	modifyRow = (id, name, value) => {
		let dataTemp = this.state.comentarios;
		if (!dataTemp) return;

		dataTemp.forEach((element) => {
			if (element.id === id) {
				if (name === "observaciones") element.observaciones = value;
				else if (name === "accion") element.accion = value;
				else if (name === "fecha") element.fecha = value;
			}
		});
		this.setState({
			comentarios: dataTemp,
		});
	};

	/*Manejador de dates*/
	handleDate = (fecha, name) => {
		this.setState({
			[name]: fecha,
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

	/*Expediente Hogar Temporal*/
	render() {
		if (this.state.showErrorPage) return (<ErrorPage />);

		return (
			<div className="RegistroHT">
				<div className="NavBarRegistrosHT">
					<NavBarRegistros
						tabIndicatorPosition={"50%"}
						activePosition={"HogarTemporal"}
						id={this.state.id}
					/>
				</div>
				<div
					className="FormularioHT"
				>
					<div className="alertHT">
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
					<div className="contactoHT">
						<ContactoHT
							tipoHT={this.state.tipoHT}
							nombreHT={this.state.nombreHT}
							telefonoHT={this.state.telefonoHT}
							fechaInicioHT={this.state.fechaInicioHT}
							fechaFinalHT={this.state.fechaFinalHT}
							handleChange={this.handleChange}
							handleDate={this.handleDate}
						/>
					</div>
					<div className="direccionHT">
						<Direccion
							calle={this.state.calle}
							numero={this.state.numero}
							colonia={this.state.colonia}
							municipio={this.state.municipio}
							handleChange={this.handleChange}
						/>
					</div>
					<div className="dataGridHT">
						<div className="headerDataGridHT">
							<i
								aria-hidden="true"
								className="fa fa-comments-o separation"
							></i>
							Comentarios
						</div>
						<DataGrid
							data={this.state.comentarios}
							modifyRow={this.modifyRow}
							addRow={this.addRow}
							deleteRow={this.deleteRow}
						/>
					</div>
				</div>

				<div className="BotonesRegistroHT">
					<Link
						to={
							"/Laika/ExpedienteMedico" +
							this.props.location.search
						}
					>
						<button className="BotonHTTransicion BotonAnteriorHT">
							<i
								aria-hidden="true"
								className="fa fa-chevron-circle-left fa-fw"
							></i>
							Expediente Médico
						</button>
					</Link>
					<button
						className="BotonHTRestablecer BotonCentralHT"
						onClick={this.handleRestablecer}
					>
						Restablecer
						<i
							aria-hidden="true"
							className="fa fa-eraser fa-fw"
						></i>
					</button>
					<button
						className="BotonHTGuardar BotonCentralHT"
						onClick={(event) => {
							const alert = validationHT(this.state);
							if (alert.isValid) {
								this.handleSubmit(event);
								this.handleAlert("openSuccess");
							} else {
								this.handleAlert("openError", alert.msg);
							}
						}}
					>
						Guardar
						<i aria-hidden="true" className="fa fa-save fa-fw"></i>
					</button>
					<Link to={"/Laika/Adopcion" + this.props.location.search}>
						<button className="BotonHTTransicion BotonSiguienteHT">
							Adopción
							<i
								aria-hidden="true"
								className="fa fa-chevron-circle-right fa-fw"
							></i>
						</button>
					</Link>
				</div>
				<div className="BarraLateralHT">
					<div className="idLabelHogarTemporal">
						<label>ID: {this.state.id}</label>
					</div>
					<div className="fotoHogarTemporal">
						<Foto
							id={"foto"}
							foto={this.state.foto}
							imageHandler={this.imageHandler}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(HogarTemporal);
