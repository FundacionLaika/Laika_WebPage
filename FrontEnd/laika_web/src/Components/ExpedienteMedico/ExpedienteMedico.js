import React, { Component } from "react";
import Diagnostico from "./Subcomponentes/Diagnostico";
import Esterilizacion from "./Subcomponentes/Esterilizacion";
import CartillaVacunacion from "./Subcomponentes/CartillaVacunacion";
import { Link } from "react-router-dom";
import NavBarRegistros from "../SharedComponents/NavBarRegistros/NavBarRegistros";
import shortid from "shortid";
import DataGridMed from "./Subcomponentes/DataGridMed";
import Foto from "../SharedComponents/Foto";
import "./Styles/ExpedienteMedico.css";

class ExpedienteMedico extends Component {
	state = {
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
		foto1: "/iconoPerro.png",
		foto2: "/iconoPerro.png",
		foto3: "/iconoPerro.png",

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
		this.setState({
			...this.state,
			[event.target.name]: value,
		});
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
	};

	/*Manejadores de Restablecer*/
	handleRestablecer = () => {
		this.setState({
			atropellamiento: false,
			tvt: false,
			sarnaPiel: false,
			viral: false,
			embarazo: false,
			cachorros: false,
			hemoparasitos: false,
			otro: false,
			otroEspecificar: "",
			esterilizado: "",
			citaEsterilizacion: "",
			fechaEsterilizacion: null,
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
			foto1: "/iconoPerro.png",
			foto2: "/iconoPerro.png",
			foto3: "/iconoPerro.png",
		});
	};

	/*Manejador de datagrid medico*/
	addRow = (event) => {
		event.preventDefault();
		const newRow = {
			id: shortid.generate(),
			fechaInicio: "",
			fechaFinal: "",
			comentarios: "",
			accion: "",
			citaMedica: "",
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

	modifyRow = (event) => {
		let dataTemp = this.state.tratamiento;

		dataTemp.forEach((element) => {
			if (element.id === event.target.id) {
				if (event.target.name === "fechaInicio")
					element.fechaInicio = event.target.value;
				else if (event.target.name === "fechaFinal")
					element.fechaFinal = event.target.value;
				else if (event.target.name === "comentarios")
					element.comentarios = event.target.value;
				else if (event.target.name === "accion")
					element.accion = event.target.value;
				else if (event.target.name === "citaMedica")
					element.citaMedica = event.target.value;
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
					/>
				</div>
				<div className="FormularioMedico">
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
						<DataGridMed
							data={this.state.tratamiento}
							modifyRow={this.modifyRow}
							addRow={this.addRow}
							deleteRow={this.deleteRow}
						/>
					</div>
				</div>
				<div className="BotonesRegistroMedico">
					<Link to="/RegistroGeneral">
						<button className="BotonMedicoTransicion BotonAnteriorMedico">
							{" "}
							<i className="fa fa-chevron-circle-left fa-fw"></i>
							Registro General
						</button>
					</Link>
					<button
						className="BotonMedicoRestablecer BotonCentralMedico"
						onClick={this.handleRestablecer}
					>
						Restablecer <i className="fa fa-eraser fa-fw"></i>
					</button>
					<button
						className="BotonMedicoGuardar BotonCentralMedico"
						onClick={this.handleSubmit}
					>
						Guardar <i className="fa fa-save fa-fw"></i>
					</button>
					<Link to="/HogarTemporal">
						<button className="BotonMedicoTransicion BotonSiguienteMedico">
							Hogar Temporal{" "}
							<i className="fa fa-chevron-circle-right fa-fw"></i>
						</button>
					</Link>
				</div>
				<div className="BarraLateralMedico flex items-center justify-center flex-column justify-between pv3">
					<Foto
						id="foto1"
						className="pt3"
						foto={this.state.foto1}
						imageHandler={this.imageHandler}
					/>
					<Foto
						id="foto2"
						className="pt3"
						foto={this.state.foto2}
						imageHandler={this.imageHandler}
					/>
					<Foto
						id="foto3"
						className="pt3"
						foto={this.state.foto3}
						imageHandler={this.imageHandler}
					/>
				</div>
			</div>
		);
	}
}

export default ExpedienteMedico;
