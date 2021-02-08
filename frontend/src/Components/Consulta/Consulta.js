import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import Scroll from "../Scroll/Scroll";
import "./Styles/Consulta.css";
import Filtros from "./Subcomponentes/Filtros/Filtros";
import GridConsulta from "./Subcomponentes/Grid/GridConsulta";
import ModalConsulta from "./Subcomponentes/ModalConsulta";

//var toSentenceCase = require('to-sentence-case')
class Consulta extends Component {
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
			fechaInicioHT: null,
			fechaFinalHT: null,
		},
		medioAdopcion: {
			instagram: "",
			facebook: "",
			petco: "",
			referencia: "",
			otro: "",
		},
		rangoFechaAdopcion: {
			fechaInicioAdop: null,
			fechaFinalAdop: null,
		},

		//Modal
		open: false,
		id: null,
		fotoModal: null,
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
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleFiltroRegistros = (registroSeleccionado) => {
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
		if (calle && calle.length) direccion += calle;
		if (numero && numero.length && calle && calle.length)
			direccion += " #" + numero;
		if (colonia && colonia.length)
			direccion += (direccion.length ? ", " : "") + colonia;
		direccion +=
			(direccion && direccion.length ? ", " : "") + municipio + ".";
		return direccion !== "." ? direccion : "No hay Información";
	};

	handleOrdenarToggle = () => {
		this.setState({
			ordenarDeMenorAMayor: !this.state.ordenarDeMenorAMayor,
		});
	};

	formatDate = (date) => {
		if (!date || date === "0000-00-00") return "No hay Información";
		var d = new Date(date),
			month = "" + (d.getMonth() + 1),
			day = "" + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = "0" + month;
		if (day.length < 2) day = "0" + day;

		return [day, month, year].join("-");
	};

	handleDate = (fecha, filterName, dateName) => {
		this.setState(
			Object.assign(this.state[filterName], {
				[dateName]: fecha,
			})
		);
	};

	onChangeDropdown = (name, value) => {
		this.setState({
			[name]: value,
		});
	};

	closeModal = () => {
		this.setState({ ...this.state, open: false });
	};

	openModal = () => {
		this.setState({ ...this.state, open: true });
	};

	setID = (id, foto) => {
		if (foto) {
			var buffer = Buffer.from(foto.data);
			foto = buffer.toString("utf8");
			this.setState({ ...this.state, id: id, fotoModal: foto });
		} else {
			this.setState({ ...this.state, id: id, fotoModal: null });
		}
	};

	render() {
		return (

			<div className="consulta"  style={{backgroundImage: `url("/9.png")`}}>
				{this.state.open ? (
					<ModalConsulta
						closeModal={this.closeModal}
						id={this.state.id}
						fotoModal={this.state.fotoModal}
					/>
				) : null}

    <Filtros
					filtros={this.state}
					handleFiltroRegistros={this.handleFiltroRegistros}
					handleList={this.handleList}
					handleKeyWord={this.handleKeyWord}
					handleOrdenarToggle={this.handleOrdenarToggle}
					handleDate={this.handleDate}
					onChangeDropdown={this.onChangeDropdown}
				/>

				<GridConsulta
					className="gridConsulta"
					tarjeta={this.state.tarjeta}
					concatAddress={this.concatAddress}
					filtros={this.state}
					formatDate={this.formatDate}
					openModal={this.openModal}
					setID={this.setID}
				/>
			</div>
		);
	}
}

export default withRouter(Consulta);
