import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Scroll from "../Scroll/Scroll";
import "./Styles/Consulta.css";
import Filtros from "./Subcomponentes/Filtros/Filtros";
import GridConsulta from "./Subcomponentes/Grid/GridConsulta";

var vacunasTemp = { 
	puppy: "",
	refuerzoPuppy: "",
	multiple: "",
	refuerzoMultiple: "",
	rabia: "",
}
var diagnostico = [0,0,0,0,0,0,0]
var medio = [0,0,0,0,0,]

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


	selectHandler = (selectedList, selectedItem, id) => {
		if (id === "Genero") {
			this.setState({
				filtros: {
					genero: selectedItem,
				},
			});
		} else if (id === "Vacunas") {
			if (selectedItem === "Puppy") {
				vacunasTemp["puppy"] = "1";
			} else if (selectedItem === "Refuerzo Puppy") {
				vacunas[1] = 1;
			} else if (selectedItem === "Múltiple") {
				vacunas[2] = 1;
			} else if (selectedItem === "Refuerzo Múltiple") {
				vacunas[3] = 1;
			} else if (selectedItem === "Rabia") {
				vacunas[4] = 1;
			}

			this.setState({
				filtros: {
					vacunas: {
						puppy: vacunas[0],
						refuerzoPuppy: vacunas[1],
						multiple: vacunas[2],
						refuerzoMultiple: vacunas[3],
						rabia: vacunas[4],
					},
				},
			});
		} else if (id === "Esterilizado") {
			this.setState({
				filtros: {
					esterilizado: selectedItem,
				},
			});
		} else if (id === "Diagnostico") {
			if (selectedItem === "Atropellamiento") {
				vacunas[0] = 1;
			} else if (selectedItem === "TVT") {
				vacunas[1] = 1;
			} else if (selectedItem === "Sarna/Piel") {
				vacunas[2] = 1;
			} else if (selectedItem === "Viral") {
				vacunas[3] = 1;
			} else if (selectedItem === "Embarazo") {
				vacunas[4] = 1;
			} else if (selectedItem === "Cachorros") {
				vacunas[5] = 1;
			} else if (selectedItem === "Hemoparásitos") {
				vacunas[6] = 1;
			} else if (selectedItem === "Otro") {
				vacunas[7] = 1;
			}

			this.setState({
				filtros: {
					diagnostico: {
						atropellamiento: diagnostico[0],
						tvt: diagnostico[1],
						sarnaPiel: diagnostico[2],
						viral: diagnostico[3],
						embarazo: diagnostico[4],
						cachorros: diagnostico[5],
						hemoparasitos: diagnostico[6],
						otro: diagnostico[7],
					}
				}
			});
		} else if (id === "TipoHT") {
			this.setState({
				filtros: {
					tipoHogar: selectedItem,
				}
			});
		} else if (id === "Medio") {
			this.setState({
				filtros: {
					medioAdopcion: {
						instagram: medio[0],
						facebook: medio[1],
						petco: medio[2],
						referencia: medio[3],
						otro: medio[4],
					}
				}
			});
		}
	};

	removeHandler = (selectedList, removeItem, id) => {
		if (id === "Genero") {
			this.setState({
				filtros: {
					genero: "",
				},
			});
		} else if (id === "Vacunas") {
			if (selectedItem === "Puppy") {
				vacunas[0] = 0;
			} else if (selectedItem === "Refuerzo Puppy") {
				vacunas[1] = 0;
			} else if (selectedListItem === "Múltiple") {
				vacunas[2] = 0;
			} else if (selectedListItem === "Refuerzo Múltiple") {
				vacunas[3] = 0;
			} else if (selectedListItem === "Rabia") {
				vacunas[4] = 0;
			}

			this.setState({
				filtros: {
					vacunas: {
						puppy: vacunas[0],
						refuerzoPuppy: vacunas[1],
						multiple: vacunas[2],
						refuerzoMultiple: vacunas[3],
						rabia: vacunas[4],
					},
				},
			});
		} else if (id === "Esterilizado") {
			this.setState({
				filtros: {
					esterilizado: "",
				},
			});
		} else if (id === "Diagnostico") {
			this.setState({});
		} else if (id === "TipoHT") {
			this.setState({
				filtros: {
					tipoHogar: "",
				},
			});
		} else if (id === "Medio") {
			this.setState({});
		}
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

	convert2CamelCase = (str) => {
		str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
		return str
			.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
				return index === 0 ? word.toLowerCase() : word.toUpperCase();
			})
			.replace(/\s+/g, "");
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
							onSelect={this.selectHandler}
							onRemove={this.removeHandler}
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
