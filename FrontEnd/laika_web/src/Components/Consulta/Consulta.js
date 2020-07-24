import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Scroll from "../Scroll/Scroll";
import "./Consulta.css";
import TarjetaGeneral from "./Subcomponentes/TarjetaGeneral";
import TarjetaExpedienteMedico from "./Subcomponentes/TarjetaExpedienteMedico";
import TarjetaHogarTemporal from "./Subcomponentes/TarjetaHogarTemporal";
import TarjetaAdopcion from "./Subcomponentes/TarjetaAdopcion";

//var toSentenceCase = require('to-sentence-case')
export default class Consulta extends Component {
    
	state = {
		filtros: {
			tarjeta: "Adopcion",
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
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	onButtonClicked = (event) => {
		this.handleFetch();
    };
    
    concatDate = (calle, numero, colonia, municipio) => {
        var direccion = "";
        if (calle.length) direccion += calle
        if (numero.length && calle.length) direccion += " #" + numero;
        if (colonia.length) direccion += (direccion.length ? ", " : "") + colonia;
        direccion += (direccion.length ? ", " : "") + municipio + ".";
        return direccion;
    }

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
			.catch((err) => console.log(err));
    };
    
	render() {
		if (!this.state.data.length) this.handleFetch(); //Solo hace Fetch de los datos si no se tiene Data

		return (
			<div className="center">
				<div className="search__container mt3 w-40 center">
					<input
						className="searchInput search"
						type="text"
						name="busqueda"
						placeholder="Buscar"
						onChange={this.handleChange}
					/>
				</div>

				<div>
					<div className="center mt4 pa0 pb0 mb0 w-two-thirds bg-light-purple flex center stretch justify-between">
						<button
							className="pa2 pt3 white bta b bg-transparent bw0 w-25 pointer"
							name="general"
							onClick={this.onButtonClicked}
						>
							General
						</button>
						<button
							className="pa2 pt3 white bta b bg-transparent bw0 w-25 pointer"
							name="medico"
							onClick={this.onButtonClicked}
						>
							Expediente Medico
						</button>
						<button
							className="pa2 pt3 white bta b bg-transparent bw0 w-25 pointer"
							name="hogar"
							onClick={this.onButtonClicked}
						>
							Hogar Temporal
						</button>
						<button
							className="pa2 pt3 white bta b bg-transparent bw0 w-25 pointer"
							name="adopcion"
							onClick={this.onButtonClicked}
						>
							Adopcion
						</button>
					</div>

					<div
						className="center mv0 pv0  bg-light-gray w-two-thirds"
						style={{ overflowY: "scroll", height: "65vh" }}
					>
						{(() => {
							switch (this.state.filtros.tarjeta) {
								case "General":
									if (this.state.data.length) {
										return this.state.data.map(
											(tarjeta) => (
												<TarjetaGeneral
													key={tarjeta.ID_Animal}
													id={tarjeta.ID_Animal}
													nombre={tarjeta.Nombre}
													edad={tarjeta.Edad}
													genero={tarjeta.Genero}
													especie={tarjeta.Especie}
													estatus={tarjeta.Estatus}
													senasParticulares={tarjeta.SenasParticulares}
													fechaRescate={tarjeta.FechaRescate}
													calle={tarjeta.RteCalle}
													numero={tarjeta.RteNumero}
													colonia={tarjeta.RteColonia}
													municipio={tarjeta.RteMunicipio}
                                                    rescatistas={tarjeta.Rescatistas}
                                                    concatDate={this.concatDate}
												/>
											)
										);
                                    }
                                    break;
								case "ExpedienteMedico":
									if (this.state.data.length) {
										return this.state.data.map(
											(tarjeta) => (
												<TarjetaExpedienteMedico
													key={tarjeta.ID_Animal}
                                                    id={tarjeta.ID_Animal}
                                                    atropellamiento={tarjeta.Atropellamiento}
                                                    tvt={tarjeta.TVT}
                                                    sarnaPiel={tarjeta.Sarna_Piel}
                                                    viral={tarjeta.Viral}
                                                    embarazo={tarjeta.Embarazo}
                                                    cachorros={tarjeta.Cachorros}
                                                    hemoparasitos={tarjeta.Hemoparasitos}
                                                    otro={tarjeta.Otro}
                                                    puppy={tarjeta.Puppy}
                                                    refuerzoPuppy={tarjeta.RefuerzoPuppy}
                                                    multiple={tarjeta.Multiple}
                                                    refuerzoMultiple={tarjeta.RefuerzoMultiple}
                                                    rabia={tarjeta.Rabia}
                                                    fechaEsterilizacion={tarjeta.FechaEsterilizacion}
                                                    citaAgendada={tarjeta.CitaAgendada}
                                                    estaEsterilizado={tarjeta.EstaEsterilizado}
												/>
											)
										);
                                    }
                                    break;
								case "HogarTemporal":
									if (this.state.data.length) {
										return this.state.data.map(
											(tarjeta) => (
												<TarjetaHogarTemporal
													key={tarjeta.ID_Animal}
													id={tarjeta.ID_Animal}
													tipoHT={tarjeta.Tipo_HT}
													responsableHT={tarjeta.ResponsableHT}
													telefonoHT={tarjeta.TelefonoHT}
													fechaInicioHT={tarjeta.FechaInicioHT}
													fechaFinalHT={tarjeta.FechaFinalHT}
													calle={tarjeta.CalleHT}
													numero={tarjeta.NumeroHT}
													colonia={tarjeta.ColoniaHT}
													municipio={tarjeta.MunicipioHT}
													concatDate={this.concatDate}
												/>
											)
										);
                                    }
                                    break;
								case "Adopcion":
									if (this.state.data.length) {
										return this.state.data.map(
											(tarjeta) => (
												<TarjetaAdopcion
													key={tarjeta.ID_Animal}
													id={tarjeta.ID_Animal}
													nombreAdte={tarjeta.NombreAdte}
													telefonoAdte={tarjeta.TelefonoAdte}
													adoptado={tarjeta.Adoptado}
													medioAdop={tarjeta.MedioAdop}
													fechaAdop={tarjeta.FechaAdop}
													visitaAdop={tarjeta.VisitaAdop}
													calle={tarjeta.CalleAdte}
													numero={tarjeta.NumeroAdte}
													colonia={tarjeta.ColoniaAdte}
													municipio={tarjeta.MunicipioAdte}
													concatDate={this.concatDate}
												/>
											)
										);
                                    }
                                    break;
								default:
                                    return null;
							}
						})()}
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
