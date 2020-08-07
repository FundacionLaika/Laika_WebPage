import React, { Component } from "react";
// import Scroll from "../Scroll/Scroll";
import "./Styles/Consulta.css";
import Filtros from "./Subcomponentes/Filtros/Filtros";
import GridConsulta from "./Subcomponentes/Grid/GridConsulta";

//var toSentenceCase = require('to-sentence-case')
export default class Consulta extends Component {
	state = {
		tarjeta: "General",
		keyword: "",
		filtroPorKeyWord: "nombreRescatado",
		ordenarPor: "nombreRescatado",
		ordenarDeMenorAMayor: true,
		genero: "",
		especie: {
			canino: "",
			felino: "",
			otro: "",
		},
		estatus: {
			activo: "",
			fallecido: "",
			enTratamiento: "",
			adoptado: "",
		},
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
					[id]: selectedOption[0].value,
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

	concatAddress = (calle, numero, colonia, municipio) => {
		var direccion = "";
		if (calle.length) direccion += calle;
		if (numero.length && calle.length) direccion += " #" + numero;
		if (colonia.length)
			direccion += (direccion.length ? ", " : "") + colonia;
		direccion += (direccion.length ? ", " : "") + municipio + ".";
		return direccion;
	};

	handleOrdenarToggle = () => {
		this.setState(
			{
				ordenarDeMenorAMayor: !this.state.ordenarDeMenorAMayor,
			},
			console.log(this.state.ordenarDeMenorAMayor)
		);
	};

	formatDate = (date) => {
		var d = new Date(date),
			month = "" + (d.getMonth() + 1),
			day = "" + d.getDate(),
			year = d.getFullYear();
	
		if (month.length < 2) month = "0" + month;
		if (day.length < 2) day = "0" + day;
	
		return [day, month, year].join("-");
	};

	render() {
		return (
			<div className="consulta">
				<Filtros
					filtros={this.state}
					handleFiltroRegistros={this.handleFiltroRegistros}
					handleList={this.handleList}
					handleKeyWord={this.handleKeyWord}
					handleOrdenarToggle={this.handleOrdenarToggle}
				/>

				<GridConsulta
					className="gridConsulta"
					tarjeta={this.state.tarjeta}
					concatAddress={this.concatAddress}
					filtros={this.state}
					formatDate={this.formatDate}
				/>
			</div>
		);
	}
}
