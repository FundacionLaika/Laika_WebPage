import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Scroll from "../Scroll/Scroll";
import "./Styles/Consulta.css";
import Filtros from "./Subcomponentes/Filtros/Filtros";
import GridConsulta from "./Subcomponentes/Grid/GridConsulta";


//var toSentenceCase = require('to-sentence-case')
export default class Consulta extends Component {
	state = {
		filtros: {
			tarjeta: "General",
			keyword: "",
			filtroPorKeyWord: "",
			ordenar: "",
			rangoEdad: {
				edadInicial: "",
				edadFinal: "",
			},
			genero: "",
			vacunas: {
				puppy: "",
				refuerzoPuppy: "",
				multiple: "",
				refuerzoMultiple: "",
				rabia: "",
			},
			esterilizado: "",
			diagnostico: {
				atropellamiento: "",
				tvt: "",
				sarnaPiel: "",
				viral: "",
				embarazo: "",
				cachorros: "",
				hemoparasitos: "",
				otro: "",
			},
			tipoHogar: "",
			rangoFechaHT: {
				fechaInicioHT: "",
				fechaFinalHT: "",
			},
			medioAdopcion: {
				instagram: "",
				facebook: "",
				petco: "",
				referencia: "",
				otro: "",
			},
			rangoFechaAdopcion: {
				fechaInicioAdop: "",
				fechaFinalAdop: "",
			},
		},

		data: [],
		transaccionCompletada: true,
	};


	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleFiltroRegistros = (registroSeleccionado) => {
		console.log("holaaaaaaa", registroSeleccionado);
		const filtrosTemp = this.state.filtros;
		filtrosTemp.tarjeta = registroSeleccionado;
		this.setState(
			{
				filtros: filtrosTemp,
				transaccionCompletada: false,
			},
			() => {
				this.handleFetch();
			}
		);
	};

	concatDate = (calle, numero, colonia, municipio) => {
		var direccion = "";
		if (calle.length) direccion += calle;
		if (numero.length && calle.length) direccion += " #" + numero;
		if (colonia.length)
			direccion += (direccion.length ? ", " : "") + colonia;
		direccion += (direccion.length ? ", " : "") + municipio + ".";
		return direccion;
	};

	handleFetch = () => {
		fetch("http://localhost:3001/consulta", {
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(this.state.filtros),
		})
			.then((response) => response.json())
			.then((response) => {
				this.setState({
					data: response,
				});
			})
			.then((response) => {
				this.setState({
					transaccionCompletada: true,
				});
			})
			.catch((err) => console.log(err));
	};

	render() {
		if (!this.state.data.length) this.handleFetch(); //Solo hace Fetch de los datos si no se tiene Data
		return (
			<div className="center">
				<div>
					<div>
						<Filtros
							dataLength={this.state.data.length}
							transaccionCompletada={
								this.state.transaccionCompletada
							}
							filtros={this.state.filtros}
							handleFiltroRegistros={this.handleFiltroRegistros}
						/>
					</div>
					<div>
						<GridConsulta
							data={this.state.data}
							transaccionCompletada={
								this.state.transaccionCompletada
							}
							tarjeta={this.state.filtros.tarjeta}
							concatDate={this.concatDate}
						/>
					</div>

					<Link to="/GenerarPDF">
						<button
							className="mv0 pa2 f4 bw0 bg-light-purple white"
							name="PDF"
							onClick={this.onButtonClicked}
						>
							GenerarPDF
						</button>
					</Link>
				</div>
			</div>
		);
	}
}
