import React from "react";
import "../Styles/DatosGenerales.css";
import "../../SharedComponents/Styles/RadioB.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import "../../SharedComponents/Styles/TextArea.css";
import es from "date-fns/locale/es";
import DatePickerInput from "../../SharedComponents/DatePickerInput.js";
registerLocale("es", es);

export default class DatosGeneralesRG extends React.Component {
	render() {
		return (
			<div className="datosGenerales">
				<div className="labelDatosGenerales">
					{" "}
					<i
						aria-hidden="true"
						className="fa fa-address-book-o fa-fw separation"
					></i>
					Datos Generales
				</div>
				<div className="nombre">
					<label htmlFor="nombre" className="inp">
						<input
							id="nombre"
							type="text"
							name="nombre"
							value={this.props.nombre}
							onChange={this.props.handleChange}
							placeholder="&nbsp;"
						/>
						<span className="label">Nombre</span>
						<span className="focus-bg"></span>
					</label>
				</div>
				<div className="edad">
					<div className="select">
						<select
							className="select-text"
							required
							id="edad"
							name="edad"
							value={this.props.edad}
							onChange={this.props.handleChange}
						>
							<option className="pad" value=""></option>
							<option className="pad" value="03m">
								0 a 3 meses
							</option>
							<option className="pad" value="46m">
								4 a 6 meses
							</option>
							<option className="pad" value="711m">
								7 a 11 meses
							</option>
							<option className="pad" value="1a">
								1 año
							</option>
							<option className="pad" value="2a">
								2 años
							</option>
							<option className="pad" value="3a">
								3 años
							</option>
							<option className="pad" value="4a">
								4 años
							</option>
							<option className="pad" value="5a">
								5 años
							</option>
							<option className="pad" value="6a">
								6 años
							</option>
							<option className="pad" value="7a">
								7 años
							</option>
							<option className="pad" value="8a">
								8 años
							</option>
							<option className="pad" value="9a">
								9 años
							</option>
							<option className="pad" value="10a">
								10 años
							</option>
							<option className="pad" value="11a">
								11 años
							</option>
							<option className="pad" value="12a">
								12 años
							</option>
							<option className="pad" value="13a">
								13 años
							</option>
							<option className="pad" value="14a">
								14 años
							</option>
							<option className="pad" value="15a">
								15 años
							</option>
							<option className="pad" value="16a">
								16 años
							</option>
							<option className="pad" value="17a">
								17 años
							</option>
							<option className="pad" value="18a">
								18 años
							</option>
							<option className="pad" value="19a">
								19 años
							</option>
							<option className="pad" value="20aOmas">
								20 años o más
							</option>
						</select>
						<span className="select-highlight"></span>
						<span className="select-bar"></span>
						<label className="select-label">Edad</label>
					</div>
				</div>

				<div className="genero">
					<label htmlFor="radio-genero">Género</label>
					<div className="switch center">
						<div className="quality" id="radio-especie">
							<input
								id="q1"
								name="genero"
								type="radio"
								value="Hembra"
								checked={this.props.genero === "Hembra"}
								onChange={this.props.handleChange}
							/>
							<label htmlFor="q1">Hembra</label>
						</div>
						<div className="quality">
							<input
								id="q2"
								name="genero"
								type="radio"
								value="Macho"
								checked={this.props.genero === "Macho"}
								onChange={this.props.handleChange}
							/>
							<label htmlFor="q2">Macho</label>
						</div>
					</div>
				</div>

				<div className="especie">
					<label htmlFor="radio-especie">Especie</label>
					<div className="switch2 center">
						<div className="quality2">
							<input
								id="q3"
								type="radio"
								value="Canino"
								name="especie"
								checked={this.props.especie === "Canino"}
								onChange={this.props.handleChange}
							/>
							<label htmlFor="q3">Canino</label>
						</div>
						<div className="quality2">
							<input
								id="q4"
								type="radio"
								value="Felino"
								name="especie"
								checked={this.props.especie === "Felino"}
								onChange={this.props.handleChange}
							/>
							<label htmlFor="q4">Felino</label>
						</div>
						<div className="quality2">
							<input
								id="q5"
								type="radio"
								value="Otro"
								name="especie"
								checked={this.props.especie === "Otro"}
								onChange={this.props.handleChange}
							/>
							<label htmlFor="q5">Otro</label>
						</div>
					</div>
				</div>
				<div className="fechaRescate ajusteFecha">
					<DatePicker
						isClearable
						useWeekdaysShort
						fixedHeight
						autoComplete
						customInput={<DatePickerInput />}
						title="Fecha de rescate"
						id="fechaDeRescate"
						name="fechaDeRescate"
						locale="es"
						selected={this.props.fechaDeRescate}
						dateFormat="dd/MM/yyyy"
						onChange={(date) =>
							this.props.handleDate(date, "fechaDeRescate")
						}
					/>
				</div>
				<div className="estatus">
					<div className="select">
						<select
							className="select-text"
							required
							id="estatus"
							name="estatus"
							value={this.props.estatus}
							onChange={this.props.handleChange}
						>
							<option className="pad" value=""></option>
							<option className="pad" value="activo">
								Activo
							</option>
							<option className="pad" value="fallecido">
								Fallecido
							</option>
							<option className="pad" value="enTratamiento">
								En tratamiento
							</option>
							<option className="pad" value="adoptado">
								Adoptado
							</option>
						</select>
						<span className="select-highlight"></span>
						<span className="select-bar"></span>
						<label className="select-label">Estatus</label>
					</div>
				</div>
			</div>
		);
	}
}
