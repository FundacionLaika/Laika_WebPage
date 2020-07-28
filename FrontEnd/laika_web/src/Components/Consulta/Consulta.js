import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Scroll from "../Scroll/Scroll";
import "./Styles/Consulta.css";
import Filtros from "./Subcomponentes/Filtros/Filtros";
import GridConsulta from "./Subcomponentes/Grid/GridConsulta";

//var toSentenceCase = require('to-sentence-case')
export default class Consulta extends Component {

	_isMounted = false;

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
			especie: {
				canino: "",
				felino: "",
				otro: ""
			},
			estatus: {
				activo: "",
				fallecido: "",
				enTratamiento: "",
				adoptado: ""
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
		},

		data: [],
		transaccionCompletada: true,
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
		const temp = this.state.filtros;


		if (action.action === "select-option") {
			temp[id] = esMultiSelect
				? this.handleOptionsReceived(temp[id], selectedOption, "1")
				: selectedOption[0].value;
		} 
		else if (action.action === "remove-value") {
			if (esMultiSelect) temp[id][action.removedValue.value] = "";
			else temp[id] = "";

		} 
		else if (action.action === "clear") {
			temp[id] = esMultiSelect ? this.handleClear(temp[id]) : "";
		}

		this.setState({ filtros: temp }, console.log(this.state));
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

		if (this._isMounted && this.state.transaccionCompletada) {
			this.setState(
				{
					filtros: filtrosTemp,
					transaccionCompletada: false,
				},
				() => {
					this.handleFetch();
				}
			);
		}
	};

	handleKeyWord = (value) => {
		this.setState(
			Object.assign(this.state.filtros, {
				keyword: value,
			})
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
			.then(() => {
				if (this._isMounted) {
					this.setState({
						transaccionCompletada: true,
					});
				}
			})
			.catch((err) => console.log(err));
	};

	componentDidUpdate() {
		this._isMounted = true;
	}

	componentWillUnmount() {
		this._isMounted = false;
	}


	render() {
		if (!this.state.data.length) this.handleFetch(); //Solo hace Fetch de los datos si no se tiene Data
		return (
			<div className="consulta">
				<Filtros
					dataLength={this.state.data.length}
					transaccionCompletada={this.state.transaccionCompletada}
					filtros={this.state.filtros}
					handleFiltroRegistros={this.handleFiltroRegistros}
					handleList={this.handleList}
					handleKeyWord={this.handleKeyWord}
				/>

				<GridConsulta
					className="gridConsulta"
					data={this.state.data}
					transaccionCompletada={this.state.transaccionCompletada}
					tarjeta={this.state.filtros.tarjeta}
					concatDate={this.concatDate}
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
