import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Scroll from "../Scroll/Scroll";
import "./Styles/Consulta.css";
import Filtros from "./Subcomponentes/Filtros/Filtros";
import GridConsulta from "./Subcomponentes/Grid/GridConsulta";

//var toSentenceCase = require('to-sentence-case')
export default class Consulta extends Component {

	state = {
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
	};

	handleOptionsReceived = (filter, itemsSelected, replaceValue) => {
		if (!itemsSelected) return filter;
		itemsSelected.forEach((item) => {
			filter[item.value] = replaceValue;
		});

		return filter;
	};

	handleClear = (filter) => {
		for (const element in filter) {
			filter[element] = "";
		}
		return filter;
	};

	handleList = (selectedOption, action, id, esMultiSelect) => {
		if (action.action === "select-option") {
			if (esMultiSelect) {
				this.setState({
					[id]: this.handleOptionsReceived(
						this.state[id],
						selectedOption,
						"1"
					),
				});
			} else {
				this.setState({
					[id]: selectedOption[0].value
				});
			}
		} else if (action.action === "remove-value") {
			if (esMultiSelect) {
				this.setState(
                    Object.assign(this.state[id], {
                        [action.removedValue.value]: "",
                    })
				);
				
			} else {
				this.setState({
					[id]: "",
				});
			}
		} else if (action.action === "clear") {
			if (esMultiSelect) {
				this.setState({
					[id]: this.handleClear(this.state[id]),
				});
			} else {
				this.setState({
					[id]: "",
				});
			}
		}
		console.log(this.state);
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleFiltroRegistros = (registroSeleccionado) => {
		console.log("holaaaaaaa", registroSeleccionado);

		this.setState({
			tarjeta: registroSeleccionado,
		});
	};

	handleKeyWord = (value) => {
		this.setState({
			keyword: value,
		});
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


	render() {
		return (
			<div className="consulta">
				<Filtros
					filtros={this.state}
					handleFiltroRegistros={this.handleFiltroRegistros}
					handleList={this.handleList}
					handleKeyWord={this.handleKeyWord}
				/>

				<GridConsulta
					className="gridConsulta"
					tarjeta={this.state.tarjeta}
					concatDate={this.concatDate}
					filtros={this.state}
				/>

				<div>
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
