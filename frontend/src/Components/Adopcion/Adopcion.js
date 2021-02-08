import React from "react";
import Direccion from "../SharedComponents/Direccion";
import DatosGenerales from "./Subcomponents/DatosGenerales";
import Foto from "../SharedComponents/Foto";
import DataGrid from "../SharedComponents/DataGrid/DataGrid";
import { Link, withRouter } from "react-router-dom";
import NavBarRegistros from "../SharedComponents/NavBarRegistros";
import shortid from "shortid";
import "./Styles/Adopcion.css";
import queryString from "query-string";
import { validationAdop } from "./Functions/validationAdop";
import AlertTitle from "@material-ui/lab/AlertTitle";
import Collapse from "@material-ui/core/Collapse";
import Alert from "@material-ui/lab/Alert";


class Adopcion extends React.Component {
	state = {
		id: "",
		visitaDeAdopcion: null,
		adoptante: "",
		adoptado: "",
		telefono: "",
		calle: "",
		numero: "",
		colonia: "",
		municipio: "",
		fechaAdopcion: null,
		medioAdopcion: "",
		comentarios: [],
		foto: null,

		openError: false,
		openSuccess: false,
		msg: "",
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	/*Manejador de dates*/
	handleDate = (fecha, name) => {
		this.setState({
			[name]: fecha,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.updateDB();
	};

	updateDB = () => {
		fetch("http://localhost:3001/adopcion", {
			method: "put",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(this.state),
		})
			.then((response) => response.json())
			.catch((err) => console.log(err));
	};

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

	handleRestablecer = () => {
		this.fetchData();
	};

	fetchData = () => {
		let url = this.props.location.search;
		let params = queryString.parse(url);

		fetch("http://localhost:3001/adopcion/?id=" + params.id, {
			method: "get",
			headers: { "Content-Type": "application/json" },
		})
			.then((response) => response.json())
			.then((response) => {
				for (const element in response) {
					if (
						element.includes("fecha") ||
						element.includes("visita")
					) {
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

	render() {
		return (
			<div className="RegistroAdopcion">
				<div className="NavBarRegistrosAdopcion">
					<NavBarRegistros
						tabIndicatorPosition={"75%"}
						activePosition={"Adopcion"}
						id={this.state.id}
					/>
				</div>
				<div
					className="FormularioAdopcion"
					style={{ overflowY: "scroll", height: "80vh" }}
				>
					<div className="alertAdop">
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
					<div className="DatosGeneralesAdopcion">
						<DatosGenerales
							handleChange={this.handleChange}
							handleDate={this.handleDate}
							visitaDeAdopcion={this.state.visitaDeAdopcion}
							adoptante={this.state.adoptante}
							adoptado={this.state.adoptado}
							telefono={this.state.telefono}
							fechaAdopcion={this.state.fechaAdopcion}
							medioAdopcion={this.state.medioAdopcion}
						/>
					</div>
					<div className="DireccionAdopcion">
						<Direccion
							handleChange={this.handleChange}
							calle={this.state.calle}
							numero={this.state.numero}
							colonia={this.state.colonia}
							municipio={this.state.municipio}
						/>
					</div>
					<div className="DataGridAdopcion">
						<div className="labelDataGridAdopcion">
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

				<div className="BotonesRegistroAdopcion">
					<Link
						to={"/Laika/HogarTemporal" + this.props.location.search}
					>
						<button className="BotonAdopcionTransicion BotonAnteriorAdopcion">
							<i
								aria-hidden="true"
								className="fa fa-chevron-circle-left fa-fw"
							></i>
							Hogar Temporal
						</button>
					</Link>

					<button
						className="BotonAdopcionRestablecer BotonCentralAdopcion"
						onClick={this.handleRestablecer}
					>
						Restablecer
						<i
							aria-hidden="true"
							className="fa fa-eraser fa-fw"
						></i>
					</button>
					<button
						className="BotonAdopcionGuardar BotonCentralAdopcion"
						onClick={(event) => {
							const alert = validationAdop(this.state);
							if (alert.isValid) {
								// this.handleSubmit(event);
								this.handleAlert("openSuccess");
							} else {
								this.handleAlert("openError", alert.msg);
							}
						}}
					>
						Guardar
						<i aria-hidden="true" className="fa fa-save fa-fw"></i>
					</button>

					<Link
						to={
							"/Laika/RegistroGeneral" +
							this.props.location.search
						}
					>
						<button className="BotonAdopcionTransicion BotonSiguienteAdopcion">
							Registro General
							<i
								aria-hidden="true"
								className="fa fa-chevron-circle-right fa-fw"
							></i>
						</button>
					</Link>
				</div>
				<div className="BarraLateralAdopcion">
					<div className="idLabelAdopcion">
						<label>ID: {this.state.id}</label>
					</div>
					<div className="fotoAdopcion">
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

export default withRouter(Adopcion);
