import React, { Component } from "react";
import ContactoHT from "./Subcomponentes/ContactoHT";
import Direccion from "../SharedComponents/Direccion";
import Foto from "../SharedComponents/Foto";
import { Link } from "react-router-dom";
import NavBarRegistros from "../SharedComponents/NavBarRegistros";
import DataGrid from "../SharedComponents/DataGrid/DataGrid";
import shortid from "shortid";
import "./Styles/HogarTemporal.css";

class HogarTemporal extends Component {
	state = {
		/*Contacto HT*/
		tipoHT: "Ninguno",
		nombreHT: "",
		telefonoHT: "",
		fechaInicioHT: "",
		fechaFinalHT: "",

		/*Dirección HT*/
		calle: "",
		numero: "",
		colonia: "",
		municipio: "",

		/*Foto*/
		foto: "/iconoPerro.png",

		/**/
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
			fechaInicioHT: "",
			fechaFinalHT: "",
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

	/*Expediente Hogar Temporal*/
	render() {
		return (
			<div className="RegistroHT">
				<div className="NavBarRegistrosHT">
					<NavBarRegistros />
				</div>
				<div className="FormularioHT">
					<label>HogarTemporal</label>
					<div>
						<ContactoHT
							tipoHT={this.state.tipoHT}
							nombreHT={this.state.nombreHT}
							telefonoHT={this.state.telefonoHT}
							fechaInicioHT={this.state.fechaInicioHT}
							fechaFinalHT={this.state.fechaFinalHT}
							handleChange={this.handleChange}
						/>
					</div>
					<div>
						<Direccion
							calle={this.state.calle}
							numero={this.state.numero}
							colonia={this.state.colonia}
							municipio={this.state.municipio}
							handleChange={this.handleChange}
						/>
					</div>
					<div>
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
							<i class="fa fa-chevron-circle-left fa-fw"></i>
							Expediente Médico
						</button>
					</Link>
					<button
						className="BotonHTRestablecer BotonCentralHT"
						onClick={this.handleRestablecer}
					>
						Restablecer
						<i class="fa fa-eraser fa-fw"></i>
					</button>
					<button
						className="BotonHTGuardar BotonCentralHT"
						onClick={this.handleSubmit}
					>
						Guardar
						<i class="fa fa-save fa-fw"></i>
					</button>
					<Link to="/Adopcion">
						<button className="BotonHTTransicion BotonSiguienteHT">
							Adopción
							<i class="fa fa-chevron-circle-right fa-fw"></i>
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
