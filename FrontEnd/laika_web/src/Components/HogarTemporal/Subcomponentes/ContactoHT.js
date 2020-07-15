import React, { Component } from "react";
import "../Styles/ContactoHT.css";

class ContactoHT extends Component {
	render() {
		return (
			<div className="contactoHT">
				<div className="tipoHT">
					<div className="select">
						<select
							className="select-text"
							required
							id="tipoHT"
							name="tipoHT"
							value={this.props.tipoHT}
							onChange={this.props.handleChange}
						>
							<option className="pad" value=""></option>
							<option className="pad" value="persona">Persona</option>
							<option className="pad" value="veterinaria">Veterinaria</option>
						</select>
						<span className="select-highlight"></span>
						<span className="select-bar"></span>
						<label className="select-label">Tipo de HT</label>
					</div>
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
						<span className="label">Nombre</span>
						<span className="focus-bg"></span>
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
						<span className="label">Teléfono</span>
						<span className="focus-bg"></span>
					</label>
				</div>

				<div className="fechas">
					<div className="fechaInicio">
						<div className="labelFechaHT">
							<label htmlFor="fechaInicioHT">Fecha Inicio</label>
						</div>
						<div className="fechaInputHT">
							<input
								type="date"
								id="fechaInicioHT"
								name="fechaInicioHT"
								value={this.props.fechaInicioHT}
								onChange={this.props.handleChange}
							/>
						</div>
					</div>
					<div className="fechaFinal">
						<div className="labelFechaHT">
							<label htmlFor="fechaFinalHT">Fecha Final</label>
						</div>
						<div className="fechaInputHT">
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
			</div>
		);
	}
}

export default ContactoHT;
