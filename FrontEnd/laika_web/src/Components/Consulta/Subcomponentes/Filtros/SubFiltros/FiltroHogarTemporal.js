import React from "react";
import MultiSelectList from "../../../../SharedComponents/MultiSelectList";
import { Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
registerLocale("es", es);

export default class FiltroHogarTemporal extends React.Component {
	color = '#008080';
	state = {
		options: [
			{ value: "persona", label: "Persona", color: this.color },
			{ value: "veterinaria", label: "Veterinaria", color: this.color },
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

	render() {
		return (
			<div>
				<DatePicker
					selectsStart
					startDate={this.state.fechaInicioHT}
					endDate={this.state.fechaFinalHT}
					isClearable
					useWeekdaysShort
					fixedHeight
					autoComplete
					id="fechaInicioHT"
					name="fechaInicioHT"
					locale="es"
					dateFormat="dd/MM/yyyy"
					selected={this.state.fechaInicioHT}
					onChange={(date) => this.handleDate(date, "fechaInicioHT")}
					placeholderText="Fecha Inicio"
					customInput={<Input icon="calendar" iconPosition="left" />}

				/>
				<DatePicker
					selectsEnd
					startDate={this.state.fechaInicioHT}
					endDate={this.state.fechaFinalHT}
					isClearable
					useWeekdaysShort
					fixedHeight
					autoComplete
					id="fechaFinalHT"
					name="fechaFinalHT"
					locale="es"
					dateFormat="dd/MM/yyyy"
					selected={this.state.fechaFinalHT}
					onChange={(date) => this.handleDate(date, "fechaFinalHT")}
					placeholderText="Fecha Final"
					customInput={<Input icon="calendar" iconPosition="left" />}

				/>

				<MultiSelectList
					options={this.state.options}
					placeholder="Tipo de HT"
					handleList={(selectedOption, action) =>
						this.props.handleList(
							selectedOption,
							action,
							"tipoHogar",
							false
						)
					}
				/>
			</div>
		);
	}
}
