import React from "react";

export default class DatosGenerales extends React.Component {

	render() {
		return (
			<div>
				<label htmlFor="nombre">Nombre: </label>
				<input
					id="nombre"
					type="text"
					name="nombre"
					value={this.props.nombre}
					onChange={this.props.handleChange}
				/>

				<label htmlFor="edad">Edad: </label>
				<input
					id="edad"
					type="text"
					name="edad"
					value={this.props.edad}
					onChange={this.props.handleChange}
				/>

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

				<label htmlFor="fechaDeRescate">Fecha de Rescate: </label>
				<input
					id="fechaDeRescate"
					type="date"
					name="fechaDeRescate"
					value={this.props.fechaDeRescate}
					onChange={this.props.handleChange}
				/>

				<button type="submit">Registrar</button>
			</div>
		);
	}
}
