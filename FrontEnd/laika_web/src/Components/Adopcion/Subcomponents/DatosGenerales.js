import React from "react";
import "../Styles/DatosGeneralesAdopcion.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import "../../SharedComponents/Styles/TextArea.css";
import es from "date-fns/locale/es";
import DatePickerInput from "../../SharedComponents/DatePickerInput.js";
registerLocale("es", es);

export default class DatosGenerales extends React.Component {
	render() {
		return (
			<div className="adopcion">
				<div className="adoptante">
					<label htmlFor="adoptante" className="inp">
						<input
							type="text"
							id="adoptante"
							name="adoptante"
							value={this.props.adoptante}
							onChange={this.props.handleChange}
							placeholder="&nbsp;"
						/>
						<span className="label">Adoptante</span>
						<span className="focus-bg"></span>
					</label>
				</div>
				<div className="adoptado">
					<label htmlFor="adoptado" className="inp">
						<input
							type="text"
							id="adoptado"
							name="adoptado"
							value={this.props.adoptado}
							onChange={this.props.handleChange}
							placeholder="&nbsp;"
						/>
						<span className="label">Adoptado</span>
						<span className="focus-bg"></span>
					</label>
				</div>
				<div className="medioAdopcion">
					<div className="select">
						<select
							className="select-text"
							required
							id="medioAdopcion"
							name="medioAdopcion"
							value={this.props.medioAdopcion}
							onChange={this.props.handleChange}
						>
							<option value=""></option>
							<option value="instagram">Instagram</option>
							<option value="facebook">Facebook</option>
							<option value="Petco">Petco</option>
							<option value="referencia">Referencia</option>
							<option value="otro">Otro</option>
						</select>
						<span className="select-highlight"></span>
						<span className="select-bar"></span>
						<label className="select-label">Medio</label>
					</div>
				</div>
				<div className="telefonoAdopcion">
					<label htmlFor="telefono" className="inp">
						<input
							type="text"
							id="telefono"
							name="telefono"
							value={this.props.telefono}
							onChange={this.props.handleChange}
							placeholder="&nbsp;"
						/>
						<span className="label">Teléfono</span>
						<span className="focus-bg"></span>
					</label>
				</div>
				<div className="visitaDeAdopcion">
					<DatePicker
						isClearable
						useWeekdaysShort
						fixedHeight
						autoComplete
						customInput={<DatePickerInput />}
						id="visitaDeAdopcion"
						name="visitaDeAdopcion"
						locale="es"
						selected={this.props.visitaDeAdopcion}
						dateFormat="dd/MM/yyyy"
						onChange={(date) =>
							this.props.handleDate(date, "visitaDeAdopcion")
						}
					/>
				</div>
				<div className="fechaAdopcion">
					<DatePicker
						isClearable
						useWeekdaysShort
						fixedHeight
						autoComplete
						customInput={<DatePickerInput />}
						id="fechaAdopcion"
						name="fechaAdopcion"
						locale="es"
						selected={this.props.fechaAdopcion}
						dateFormat="dd/MM/yyyy"
						onChange={(date) =>
							this.props.handleDate(date, "fechaAdopcion")
						}
					/>
				</div>
			</div>
		);
	}
}
