import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import { DatePickerInput2 } from "../../SharedComponents/DatePickerInput.js";
registerLocale("es", es);

export default class Row extends React.Component {
	validateRow = () => {
		return (
			this.props.observaciones &&
			this.props.accion &&
			this.props.fecha 
		);
	};

	render() {
		return (
			<div className={"rowGA " + (this.validateRow() ? "" : "rowGAInvalid")}>
				<div className="observacionesGA">
					<textarea
						id={this.props.id}
						type="text"
						name="observaciones"
						value={
							this.props.observaciones
								? this.props.observaciones
								: ""
						}
						onChange={(event) => {
							this.props.modifyRow(
								this.props.id,
								event.target.name,
								event.target.value
							);
						}}
						rows="3"
					/>
				</div>
				<div className="accionGA">
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
						rows="3"
					/>
				</div>

				<div className="fechaGA">
					<DatePicker
						useWeekdaysShort
						fixedHeight
						autoComplete
						customInput={
							<DatePickerInput2 className="fechaPicker" />
						}
						title="Fecha"
						id={this.props.id}
						name="fecha"
						locale="es"
						selected={
							this.props.fecha ? new Date(this.props.fecha) : null
						}
						dateFormat="dd/MM/yyyy"
						onChange={(date) => {
							this.props.modifyRow(this.props.id, "fecha", date);
						}}
					/>
				</div>

				<div className="botonBorrar">
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
