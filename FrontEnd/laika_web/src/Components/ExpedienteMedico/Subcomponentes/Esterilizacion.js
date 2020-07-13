import React, { Component } from "react";

class Esterilizacion extends Component {
	render() {
		return (
			<div id="esterilizacion">
				<label>Esterilización</label>
				<br />
				<div>
					<label>Esterilizado</label>
					<label htmlFor="idEsterilizadoSi">Sí</label>
					<input
						type="radio"
						id="idEsterilizadoSi"
						name="esterilizado"
						value="Si"
						checked={this.props.esterilizado === "Si"}
						onChange={this.props.handleChange}
					/>
					<label htmlFor="idEsterilizadoNo">No</label>
					<input
						type="radio"
						id="idEsterilizadoNo"
						name="esterilizado"
						value="No"
						checked={this.props.esterilizado === "No"}
						onChange={this.props.handleChange}
					/>
				</div>

				<div>
					<label>¿Desea agendar cita?</label>
					<label htmlFor="idCitaEsterilzacionSi">Sí</label>
					<input
						type="radio"
						id="idCitaEsterilzacionSi"
						name="citaEsterilizacion"
						value="Si"
						checked={this.props.citaEsterilizacion === "Si"}
						onChange={this.props.handleChange}
					/>
					<label htmlFor="idCitaEsterilzacionNo">No</label>
					<input
						type="radio"
						id="idCitaEsterilzacionNo"
						name="citaEsterilizacion"
						value="No"
						checked={this.props.citaEsterilizacion === "No"}
						onChange={this.props.handleChange}
					/>
				</div>

				<input
					type="date"
					id="fechaEsterilizacion"
					name="fechaEsterilizacion"
					value={this.props.fechaEsterilizacion}
					onChange={this.props.handleChange}
				/>
			</div>
		);
	}
}

export default Esterilizacion;
