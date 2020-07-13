import React, { Component } from "react";

class ContactoHT extends Component {
	render() {
		return (
			<div>
				<label htmlFor="tipoHT">Seleccionar tipo de HT: </label>
				<select
					id="tipoHT"
					name="tipoHT"
					value={this.props.tipoHT}
					onChange={this.props.handleChange}
				>
					<option value="ninguno">Ninguno</option>
					<option value="persona">Persona</option>
					<option value="veterinaria">Veterinaria</option>
				</select>
				<br />
				<br />
				<label htmlFor="nombreHT">Nombre: </label>
				<input
					type="text"
					id="nombreHT"
					name="nombreHT"
					value={this.props.nombreHT}
					onChange={this.props.handleChange}
				/>
				<br />
				<label htmlFor="telefonoHT">Teléfono: </label>
				<input
					type="text"
					id="telefonoHT"
					name="telefonoHT"
					value={this.props.telefonoHT}
					onChange={this.props.handleChange}
				/>
				<br />

				<table>
					<thead>
						<tr>
							<th>Fecha Inicio</th>
							<th>Fecha Final</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<input
									type="date"
									id="fechaInicioHT"
									name="fechaInicioHT"
									value={this.props.fechaInicioHT}
									onChange={this.props.handleChange}
								/>
							</td>
							<td>
								<input
									type="date"
									id="fechaFinalHT"
									name="fechaFinalHT"
									value={this.props.fechaFinalHT}
									onChange={this.props.handleChange}
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default ContactoHT;
