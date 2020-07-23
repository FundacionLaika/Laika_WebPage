import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import "../../SharedComponents/Styles/TextArea.css";
import es from "date-fns/locale/es";
import DatePickerInput from "../../SharedComponents/DatePickerInput.js";
registerLocale("es", es);

class Esterilizacion extends Component {
	state = {
		showMeCitaEsterilziacion: false,
	};

	
	showCitaEsterilizacionTrue = () => {
		this.setState({
			showMeCitaEsterilziacion: true,
		});
	}

	showCitaEsterilizacionFalse = () => {
		this.setState({
			showMeCitaEsterilziacion: false,
		});
	}

	render() {
		return (
			<div id="esterilizacion">
				<div className="headerEsterilizacion">Esterilizacion</div>
				<div className="labelEsterilizado">
					<label htmlFor="radio-genero">Esterilizado</label>
				</div>
				<div className="inputEsterilizado">
					<div className="switch center">
						<div className="quality" id="radio-especie">
							<input
								type="radio"
								id="idEsterilizadoSi"
								name="esterilizado"
								value="Si"
								checked={this.props.esterilizado === "Si"}
								onChange={this.props.handleChange}
							/>
							<label htmlFor="idEsterilizadoSi">Si</label>
						</div>
						<div className="quality">
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
					<div className="switch center">
						<div className="quality" id="radio-especie">
							<input
								type="radio"
								id="idCitaEsterilzacionSi"
								name="citaEsterilizacion"
								value="Si"
								checked={this.props.citaEsterilizacion === "Si"}
								onChange={this.props.handleChange}
								onClick={this.showCitaEsterilizacionTrue}
							/>
							<label htmlFor="idCitaEsterilzacionSi">Si</label>
						</div>
						<div className="quality">
							<input
								type="radio"
								id="idCitaEsterilzacionNo"
								name="citaEsterilizacion"
								value="No"
								checked={this.props.citaEsterilizacion === "No"}
								onChange={this.props.handleChange}
								onClick={this.showCitaEsterilizacionFalse}
							/>
							<label htmlFor="idCitaEsterilzacionNo">No</label>
						</div>
					</div>
				</div>

				<div className="fechaEsterilizacion">
					{this.state.showMeCitaEsterilziacion ? (
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
