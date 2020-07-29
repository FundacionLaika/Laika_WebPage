import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import "../../SharedComponents/Styles/TextArea.css";
import es from "date-fns/locale/es";
import DatePickerInput from "../../SharedComponents/DatePickerInput.js";
registerLocale("es", es);

class Esterilizacion extends Component {
	render() {
		return (
			<div id="esterilizacion">
				<div className="headerEsterilizacion">
					{" "}
					<i className="fa fa-user-md fa-fw separation"></i>
					Esterilizacion
				</div>
				<div className="labelEsterilizado">
					<label htmlFor="radio-genero">Esterilizado</label>
				</div>
				<div className="inputEsterilizado">
					<div className="switch3 center">
						<div className="quality3" id="radio-especie">
							<input
								type="radio"
								id="idEsterilizadoSi"
								name="esterilizado"
								value="Sí"
								checked={this.props.esterilizado === "Sí"}
								onChange={this.props.handleChange}
							/>
							<label htmlFor="idEsterilizadoSi">Sí</label>
						</div>
						<div className="quality3">
							<input
								type="radio"
								id="idEsterilizadoNo"
								name="esterilizado"
								value="No"
								checked={this.props.esterilizado === "No"}
								onChange={this.props.handleChange}
							/>
							<label htmlFor="idEsterilizadoNo">No</label>
						</div>
					</div>
				</div>

				<div className="labelCitaEsterilizacion">
					<label htmlFor="radio-genero">¿Desea Agendar Cita? </label>
				</div>
				<div className="inputCitaEsterilizacion">
					<div className="switch3 center">
						<div className="quality3" id="radio-especie">
							<input
								type="radio"
								id="idCitaEsterilzacionSi"
								name="citaEsterilizacion"
								value="Sí"
								checked={this.props.citaEsterilizacion === "Sí"}
								onChange={this.props.handleChange}
							/>
							<label htmlFor="idCitaEsterilzacionSi">Sí</label>
						</div>
						<div className="quality3">
							<input
								type="radio"
								id="idCitaEsterilzacionNo"
								name="citaEsterilizacion"
								value="No"
								checked={this.props.citaEsterilizacion === "No"}
								onChange={this.props.handleChange}
							/>
							<label htmlFor="idCitaEsterilzacionNo">No</label>
						</div>
					</div>
				</div>

				<div className="fechaEsterilizacion">
					{this.props.citaEsterilizacion === "Sí" ? (
						<DatePicker
							isClearable
							useWeekdaysShort
							fixedHeight
							autoComplete
							customInput={<DatePickerInput />}
							title="Fecha de Esterilización"
							id="fechaEsterilizacion"
							name="fechaEsterilizacion"
							locale="es"
							selected={this.props.fechaEsterilizacion}
							dateFormat="dd/MM/yyyy"
							onChange={(date) =>
								this.props.handleDate(
									date,
									"fechaEsterilizacion"
								)
							}
						/>
					) : null}
				</div>
			</div>
		);
	}
}

export default Esterilizacion;
