import React from "react";
import MultiSelectList from "../../../../SharedComponents/MultiSelectList";
import { Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import "./Styles/FiltroHogarTemporal.css";
import es from "date-fns/locale/es";
registerLocale("es", es);

export default class FiltroHogarTemporal extends React.Component {
	color = "#008080";
	state = {
		options: [
			{
				value: "persona",
				label: "Persona",
				color: this.color,
				isDisabled: false,
			},
			{
				value: "veterinaria",
				label: "Veterinaria",
				color: this.color,
				isDisabled: false,
			},
		],
		fechaInicioHT: null,
		fechaFinalHT: null,
	};
	/*Manejador de dates*/
	handleDate = (fecha, name) => {
		this.setState({
			[name]: fecha,
		});
		console.log(this.state);
	};

	handleEvent = (selectedOption) => {
		var stateCopy = this.state;

		if (selectedOption == null || selectedOption.length === 0) {
			stateCopy.options[0].isDisabled = false;
			stateCopy.options[1].isDisabled = false;

			this.setState(stateCopy);
		} else if (selectedOption[0].value === "persona") {
			stateCopy.options[0].isDisabled = false;
			stateCopy.options[1].isDisabled = true;

			this.setState(stateCopy);
		} else if (selectedOption[0].value === "veterinaria") {
			stateCopy.options[0].isDisabled = true;
			stateCopy.options[1].isDisabled = false;

			this.setState(stateCopy);
		}
	};

	render() {
		return (
			<div className="filtroHogarTemporal">
				<div className="filtroTipoHogar">
					<div className="nombreFiltro">
						<span>
							{" "}
							<i className="fa fa-home fa-fw" aria-hidden="true"></i> Tipo de Hogar Temporal{" "}
						</span>
					</div>
					<div className="multiselectFiltro">
						<MultiSelectList
							options={this.state.options}
							placeholder="Tipo de HT"
							handleList={(selectedOption, action) => {
								this.props.handleList(
									selectedOption,
									action,
									"tipoHogar",
									false
								);
								this.handleEvent(selectedOption);
							}}
						/>
					</div>
				</div>
				<div className="filtroRangoFechaHT">
					<div className="nombreFiltro">
						<span>
							{" "}
							<i className="fa fa-calendar fa-fw" aria-hidden="true"></i> Rango de fecha de Hogar Temporal{" "}
						</span>
					</div>
					<div className="multiselectFiltro">
						<div className="fInicio">
							<DatePicker
								selectsStart
								startDate={this.state.fechaInicioHT}
								endDate={this.state.fechaFinalHT}
								isClearable
								useWeekdaysShort
								fixedHeight
								autoComplete="true"
								id="fechaInicioHT"
								name="fechaInicioHT"
								locale="es"
								dateFormat="dd/MM/yyyy"
								selected={this.state.fechaInicioHT}
								onChange={(date) =>
									this.handleDate(date, "fechaInicioHT")
								}
								placeholderText="Fecha Inicio"
								customInput={
									<Input
										icon="calendar"
										iconPosition="left"
									/>
								}
							/>
						</div>

						<div className="fFinal">
							<DatePicker
								selectsEnd
								startDate={this.state.fechaInicioHT}
								endDate={this.state.fechaFinalHT}
								isClearable
								useWeekdaysShort
								fixedHeight
								autoComplete="true"
								id="fechaFinalHT"
								name="fechaFinalHT"
								locale="es"
								dateFormat="dd/MM/yyyy"
								selected={this.state.fechaFinalHT}
								onChange={(date) =>
									this.handleDate(date, "fechaFinalHT")
								}
								placeholderText="Fecha Final"
								customInput={
									<Input
										icon="calendar"
										iconPosition="left"
									/>
								}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
