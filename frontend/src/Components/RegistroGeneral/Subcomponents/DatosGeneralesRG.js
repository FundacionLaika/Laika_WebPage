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
						<input autoComplete="off"
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

							<option className="pad" value="0">
								{"Menos de 1 año"}
							</option>
							<option className="pad" value="1">
								1 año
							</option>
							<option className="pad" value="2">
								2 años
							</option>
							<option className="pad" value="3">
								3 años
							</option>
							<option className="pad" value="4">
								4 años
							</option>
							<option className="pad" value="5">
								5 años
							</option>
							<option className="pad" value="6">
								6 años
							</option>
							<option className="pad" value="7">
								7 años
							</option>
							<option className="pad" value="8">
								8 años
							</option>
							<option className="pad" value="9">
								9 años
							</option>
							<option className="pad" value="10">
								10 años
							</option>
							<option className="pad" value="11">
								11 años
							</option>
							<option className="pad" value="12">
								12 años
							</option>
							<option className="pad" value="13">
								13 años
							</option>
							<option className="pad" value="14">
								14 años
							</option>
							<option className="pad" value="15">
								15 años
							</option>
							<option className="pad" value="16">
								16 años
							</option>
							<option className="pad" value="17">
								17 años
							</option>
							<option className="pad" value="18">
								18 años
							</option>
							<option className="pad" value="19">
								19 años
							</option>
							<option className="pad" value="20">
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
							<input autoComplete="off"
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
							<input autoComplete="off"
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
							<input autoComplete="off"
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
							<input autoComplete="off"
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
							<input autoComplete="off"
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
							<option className="pad" value="Activo">
								Activo
							</option>
							<option className="pad" value="Fallecido">
								Fallecido
							</option>
							<option className="pad" value="En Tratamiento">
								En Tratamiento
							</option>
							<option className="pad" value="Adoptado">
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
