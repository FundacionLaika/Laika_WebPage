import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import { DatePickerInput2 } from "../../SharedComponents/DatePickerInput.js";
registerLocale("es", es);

export default class RowMed extends React.Component {
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
						selected={
							this.props.fechaInicio
								? new Date(this.props.fechaInicio)
								: null
						}
						selectsStart
						startDate={
							this.props.fechaInicio
								? new Date(this.props.fechaInicio)
								: null
						}
						endDate={
							this.props.fechaFinal
								? new Date(this.props.fechaFinal)
								: null
						}
						dateFormat="dd/MM/yyyy"
						onChange={(date) => {
							this.props.modifyRow(
								this.props.id,
								"fechaInicio",
								date
							);
						}}
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
						selected={
							this.props.fechaFinal
								? new Date(this.props.fechaFinal)
								: null
						}
						selectsEnd
						startDate={
							this.props.fechaInicio
								? new Date(this.props.fechaInicio)
								: null
						}
						endDate={
							this.props.fechaFinal
								? new Date(this.props.fechaFinal)
								: null
						}
						dateFormat="dd/MM/yyyy"
						onChange={(date) => {
							this.props.modifyRow(
								this.props.id,
								"fechaFinal",
								date
							);
						}}
					/>
				</div>
				<div className="dg-col3">
					<textarea
						id={this.props.id}
						type="text"
						name="comentarios"
						value={this.props.comentarios ? this.props.comentarios : ""}
						onChange={(event) => {
							this.props.modifyRow(
								this.props.id,
								event.target.name,
								event.target.value
							);
						}}
						rows="4"
					/>
				</div>

				<div className="dg-col4">
					<textarea
						id={this.props.id}
						type="text"
						name="accion"
						value={this.props.accion ? this.props.accion : ""}
						onChange={(event) => {
							this.props.modifyRow(
								this.props.id,
								event.target.name,
								event.target.value
							);
						}}
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
						selected={
							this.props.citaMedica
								? new Date(this.props.citaMedica)
								: null
						}
						dateFormat="dd/MM/yyyy"
						onChange={(date) => {
							this.props.modifyRow(
								this.props.id,
								"citaMedica",
								date
							);
						}}
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
