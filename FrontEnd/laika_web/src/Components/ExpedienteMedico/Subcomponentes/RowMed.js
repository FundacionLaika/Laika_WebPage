import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import { DatePickerInput2 } from "../../SharedComponents/DatePickerInput.js";
registerLocale("es", es);

export default class RowMed extends React.Component {
	state = {
		id: this.props.id,
		fechaInicio: this.props.fechaInicio,
		fechaFinal: this.props.fechaFinal,
		comentarios: this.props.comentarios,
		accion: this.props.accion,
		citaMedica: this.props.citaMedica,
	};

	handleDate = (fecha, name) => {
		this.setState({
			[name]: fecha,
		});
	};

	render() {
		return (
			<div className="rowDG">
				<div className="dg-col1 fechaDG">
					<DatePicker
						useWeekdaysShort
						fixedHeight
						autoComplete
						customInput={
							<DatePickerInput2 className="fechaPicker" />
						}
						title="Fecha"
						id={this.props.id}
						name="fechaInicio"
						locale="es"
						selected={this.state.fechaInicio}
						dateFormat="dd/MM/yyyy"
						onChange={(date) =>
							this.handleDate(date, "fechaInicio")
						}
					/>
				</div>
				<div className="dg-col2 fechaDG">
					<DatePicker
						useWeekdaysShort
						fixedHeight
						autoComplete
						customInput={
							<DatePickerInput2 className="fechaPicker" />
						}
						title="Fecha"
						id={this.props.id}
						name="fechaFinal"
						locale="es"
						selected={this.state.fechaFinal}
						dateFormat="dd/MM/yyyy"
						onChange={(date) => this.handleDate(date, "fechaFinal")}
					/>
				</div>
				<div className="dg-col3">
					<textarea
						id={this.props.id}
						type="text"
						name="comentarios"
						value={this.props.comentarios}
						onChange={this.props.handleChange}
						rows="4"
					/>
				</div>

				<div className="dg-col4">
					<textarea
						id={this.props.id}
						type="text"
						name="accion"
						value={this.props.accion}
						onChange={this.props.handleChange}
						rows="4"
					/>
				</div>

				<div className="dg-col5 fechaDG">
					<DatePicker
						useWeekdaysShort
						fixedHeight
						autoComplete
						customInput={
							<DatePickerInput2 className="fechaPicker" />
						}
						title="Fecha"
						id={this.props.id}
						name="citaMedica"
						locale="es"
						selected={this.state.citaMedica}
						dateFormat="dd/MM/yyyy"
						onChange={(date) => this.handleDate(date, "citaMedica")}
					/>
				</div>

				<div className="botonBorrarDG">
					<button onClick={this.props.deleteRow}>
						<i
							className="fa fa-times-circle"
							aria-hidden="true"
						></i>
					</button>
				</div>
			</div>
		);
	}
}
