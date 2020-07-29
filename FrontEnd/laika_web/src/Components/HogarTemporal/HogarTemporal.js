import React, { Component } from "react";
import ContactoHT from "./Subcomponentes/ContactoHT";
import Direccion from "../SharedComponents/Direccion";
import Foto from "../SharedComponents/Foto";
import { Link } from "react-router-dom";
import NavBarRegistros from "../SharedComponents/NavBarRegistros/NavBarRegistros";
import DataGrid from "../SharedComponents/DataGrid/DataGrid";
import shortid from "shortid";
import "../SharedComponents/Styles/InputText.css";
import "./Styles/HogarTemporal.css";
import "../SharedComponents/Styles/SelectBox.css";

class HogarTemporal extends Component {
	state = {
		/*Contacto HT*/
		tipoHT: "Ninguno",
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
		foto: "/iconoPerro.png",

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
	};

	/*Manejador de Restablecer*/
	handleRestablecer = () => {
		this.setState({
			tipoHT: "Ninguno",
			nombreHT: "",
			telefonoHT: "",
			fechaInicioHT: null,
			fechaFinalHT: null,
			calle: "",
			numero: "",
			colonia: "",
			municipio: "",
			foto: "/iconoPerro.png",
		});
	};

	addRow = (event) => {
		event.preventDefault();
		const newRow = {
			id: shortid.generate(),
			observaciones: "",
			accion: "",
			fecha: "",
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

	modifyRow = (event) => {
		let dataTemp = this.state.comentarios;

		dataTemp.forEach((element) => {
			if (element.id === event.target.id) {
				if (event.target.name === "observaciones")
					element.observaciones = event.target.value;
				else if (event.target.name === "accion")
					element.accion = event.target.value;
				else if (event.target.name === "fecha")
					element.fecha = event.target.value;
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
					<Link to="/ExpedienteMedico">
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
					<Link to="/Adopcion">
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
					<Foto
						id={"foto"}
						foto={this.state.foto}
						imageHandler={this.imageHandler}
					/>
				</div>
			</div>
		);
	}
}

export default HogarTemporal;
