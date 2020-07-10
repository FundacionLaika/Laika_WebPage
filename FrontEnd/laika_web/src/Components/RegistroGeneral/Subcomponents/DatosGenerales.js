import React from "react";

export default class DatosGenerales extends React.Component {

	render() {
		return (
			<div>
				<input
					name="nombre"
					value={this.props.nombre}
					onChange={this.props.handleChange}
				/>
				<input
					name="edad"
					value={this.props.edad}
					onChange={this.props.handleChange}
				/>

				<div>
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

				<div>
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

				<input
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
