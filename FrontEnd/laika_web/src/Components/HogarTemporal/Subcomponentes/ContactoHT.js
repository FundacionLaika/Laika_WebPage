import React, { Component } from "react";
import "../Styles/ContactoHT.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import "../../SharedComponents/Styles/TextArea.css";
import es from "date-fns/locale/es";
import DatePickerInput from "../../SharedComponents/DatePickerInput.js";
registerLocale("es", es);

class ContactoHT extends Component {
	render() {
		return (
			<div className="contactoHT">
				<div className="labelHT">
					Hogar Temporal
				</div>
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
							<option className="pad" value="persona">
								Persona
							</option>
							<option className="pad" value="veterinaria">
								Veterinaria
							</option>
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
						<DatePicker
							isClearable
							useWeekdaysShort
							fixedHeight
							autoComplete
							customInput={<DatePickerInput/>}
							title="Fecha Inicio"
							id="fechaInicioHT"
							name="fechaInicioHT"
							locale="es"
							selected={this.props.fechaInicioHT}
							dateFormat="dd/MM/yyyy"
							onChange={(date) =>
								this.props.handleDate(date, "fechaInicioHT")
							}
						/>
					</div>
					<div className="fechaFinal">
						<DatePicker
							isClearable
							useWeekdaysShort
							fixedHeight
							autoComplete
							customInput={<DatePickerInput/>}
							title="Fecha Final"
							id="fechaFinalHT"
							name="fechaFinalHT"
							locale="es"
							selected={this.props.fechaFinalHT}
							dateFormat="dd/MM/yyyy"
							onChange={(date) =>
								this.props.handleDate(date, "fechaFinalHT")
							}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactoHT;
