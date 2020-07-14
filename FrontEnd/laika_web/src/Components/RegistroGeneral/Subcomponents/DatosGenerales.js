import React from "react";
import "../Styles/DatosGenerales.css";

export default class DatosGenerales extends React.Component {
	render() {
		return (
			<div className="datosGenerales">
				<div className="nombre">
					<label htmlFor="nombre" className="inp">
						<input
							id="nombre"
							type="text"
							name="nombre"
							value={this.props.nombre}
							onChange={this.props.handleChange}
							placeholder="&nbsp;"
						/>
						<span className="label">Nombre</span>
						<span className="focus-bg"></span>
					</label>
				</div>
				<div className="edad">
					<label htmlFor="edad" className="inp">
						<input
							id="edad"
							type="text"
							name="edad"
							value={this.props.edad}
							onChange={this.props.handleChange}
							placeholder="&nbsp;"
						/>
						<span className="label">Edad</span>
						<span className="focus-bg"></span>
					</label>
				</div>
				<div className="genero">
					<label htmlFor="radio-genero">Genero: </label>
					<div id="radio-genero">
						<input
							type="radio"
							value="Macho"
							name="genero"
							checked={this.props.genero === "Macho"}
							onChange={this.props.handleChange}
						/>
						Macho
						<input
							type="radio"
							value="Hembra"
							name="genero"
							checked={this.props.genero === "Hembra"}
							onChange={this.props.handleChange}
						/>
						Hembra
					</div>
				</div>
				<div className="especie">
					<label htmlFor="radio-especie">Especie: </label>
					<div id="radio-especie">
						<input
							type="radio"
							value="Canino"
							name="especie"
							checked={this.props.especie === "Canino"}
							onChange={this.props.handleChange}
						/>
						Canino
						<input
							type="radio"
							value="Felino"
							name="especie"
							checked={this.props.especie === "Felino"}
							onChange={this.props.handleChange}
						/>
						Felino
						<input
							type="radio"
							value="Otro"
							name="especie"
							checked={this.props.especie === "Otro"}
							onChange={this.props.handleChange}
						/>
						Otro
					</div>
				</div>
				<div className="fechaRescate">
					<div className="labelFechaRescate">
						<label htmlFor="fechaDeRescate">
							Fecha de Rescate:{" "}
						</label>
					</div>
					<div className="fechaInputRescate">
						<input
							id="fechaDeRescate"
							type="date"
							name="fechaDeRescate"
							value={this.props.fechaDeRescate}
							onChange={this.props.handleChange}
						/>
					</div>
				</div>
			</div>
		);
	}
}
