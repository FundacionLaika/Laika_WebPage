import React, { Component } from "react";
import ContactoHT from "./Subcomponentes/ContactoHT";
import Direccion from "../SharedComponents/Direccion";
import Foto from "../SharedComponents/Foto";
import { Link, withRouter, useHistory } from "react-router-dom";
import NavBarRegistros from "../SharedComponents/NavBarRegistros";
import DataGrid from "../SharedComponents/DataGrid/DataGrid";
import shortid from "shortid";
import "../SharedComponents/Styles/InputText.css";
import "./Styles/HogarTemporal.css";
import "../SharedComponents/Styles/SelectBox.css";
import queryString from 'query-string';

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
		console.log(event.target.id);
		reader.readAsDataURL(event.target.files[0]);
	};

	/*Manejador de eventos*/
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
		console.log(event.target.name);
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

		fetch("http://localhost:3001/hogarTemporal", {
			method: "put",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(this.state)
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				
			})
			.catch((err) => console.log(err));
	}

	/*Manejador de Restablecer*/
	handleRestablecer = () => {
		this.fetchData();
	};

	fetchData = () => {
		let url = this.props.location.search;
		let params = queryString.parse(url);

		fetch("http://localhost:3001/hogarTemporal/?id=" + params.id, {
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
					else if (element.includes("foto")) {

						if (response[element]) {
							console.log(response[element]);

							var buffer = Buffer.from(response[element].data);

							this.setState({
								[element]: buffer.toString('utf8'),
							});
						}
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

	/*Expediente Hogar Temporal*/
	render() {
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
					style={{ overflowY: "scroll", height: "80vh" }}
				>
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
					<Link to={"/Laika/ExpedienteMedico"+this.props.location.search}>
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
						onClick={this.handleSubmit}
					>
						Guardar
						<i aria-hidden="true" className="fa fa-save fa-fw"></i>
					</button>
					<Link to={"/Laika/Adopcion"+this.props.location.search}>
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
