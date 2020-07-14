import React, { Component } from "react";
import "../Styles/ContactoHT.css";

class ContactoHT extends Component {
	render() {
		return (
			<div className="contactoHT">
				<div className="tipoHT">
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
				</div>

				<div className="nombreHT">
					<label htmlFor="nombreHT" className="inp">
						<input
							type="text"
							id="nombreHT"
							name="nombreHT"
							value={this.props.nombreHT}
							onChange={this.props.handleChange}
							placeholder="&nbsp;"
						/>
						<span class="label">Nombre</span>
						<span class="focus-bg"></span>
					</label>
				</div>

				<div className="telefonoHT">
					<label htmlFor="telefonoHT" className="inp">
						<input
							type="text"
							id="telefonoHT"
							name="telefonoHT"
							value={this.props.telefonoHT}
							onChange={this.props.handleChange}
							placeholder="&nbsp;"
						/>
						<span class="label">Teléfono</span>
						<span class="focus-bg"></span>
					</label>
				</div>

				<div className="fechas">
					<div className="fechaInicio">
						<label htmlFor="fechaInicioHT">Fecha Inicio</label>
						<input
							type="date"
							id="fechaInicioHT"
							name="fechaInicioHT"
							value={this.props.fechaInicioHT}
							onChange={this.props.handleChange}
						/>
					</div>
					<div className="fechaFinal">
						<label htmlFor="fechaFinalHT">Fecha Final</label>
						<input
							type="date"
							id="fechaFinalHT"
							name="fechaFinalHT"
							value={this.props.fechaFinalHT}
							onChange={this.props.handleChange}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactoHT;
