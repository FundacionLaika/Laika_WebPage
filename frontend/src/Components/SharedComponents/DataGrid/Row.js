import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import {DatePickerInput2} from "../../SharedComponents/DatePickerInput.js";
registerLocale("es", es);

export default class Row extends React.Component {
	state = {
		id: this.props.id,
		observaciones: this.props.observaciones,
		accion: this.props.accion,
		fecha: this.props.fecha ? new Date(this.props.fecha) : this.props.fecha,
    };
    
    handleDate = (fecha, name) => {
        this.setState({
          [name]: fecha,
        });
    };

	render() {
		return (
			<div className="rowGA">
				<div className="observacionesGA">
					<textarea
						id={this.props.id}
						type="text"
						name="observaciones"
						value={this.props.observaciones}
						onChange={this.props.handleChange}
						rows="3"
					/>
				</div>
				<div className="accionGA">
					<textarea
						id={this.props.id}
						type="text"
						name="accion"
						value={this.props.accion}
						onChange={this.props.handleChange}
						rows="3"
					/>
				</div>

				<div className="fechaGA">
					<DatePicker
						useWeekdaysShort
						fixedHeight
						autoComplete
						customInput={<DatePickerInput2 className="fechaPicker"/>}
						title="Fecha"
						id={this.props.id}
						name="fecha"
						locale="es"
						selected={this.state.fecha}
						dateFormat="dd/MM/yyyy"
						onChange={(date) =>
							this.handleDate(date, "fecha")
                        }
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
