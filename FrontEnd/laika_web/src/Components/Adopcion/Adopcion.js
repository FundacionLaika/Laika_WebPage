import React from "react";
import Direccion from "../SharedComponents/Direccion";
import DatosGenerales from "./Subcomponents/DatosGenerales";
import Foto from "../SharedComponents/Foto";
import DataGrid from "../SharedComponents/DataGrid/DataGrid";
import { Link } from "react-router-dom";
import NavBarRegistros from "../SharedComponents/NavBarRegistros";
import shortid from "shortid";
import "./Styles/Adopcion.css";

export default class Adopcion extends React.Component {
  
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
		medioAdopcion: "Referencia",
		comentarios: [],
		foto: "/iconoPerro.png",
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
		console.log(this.state);
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

	handleRestablecer = () => {
		this.setState({
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
			foto: "/iconoPerro.png",
		});
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

	render() {
		return (
			<div className="RegistroAdopcion">
				<div className="NavBarRegistrosAdopcion">
					<NavBarRegistros
						tabIndicatorPosition={"75%"}
						activePosition={"Adopcion"}
					/>
				</div>
				<div
					className="FormularioAdopcion"
					style={{ overflowY: "scroll", height: "80vh" }}
				>
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
					<Link to="/Laika/HogarTemporal">
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
						onClick={this.handleSubmit}
					>
						Registrar
						<i aria-hidden="true" className="fa fa-save fa-fw"></i>
					</button>

					<Link to="/Laika/RegistroGeneral">
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
