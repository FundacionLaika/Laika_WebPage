import React from "react";
import "../Styles/DatosGenerales.css";
import "../../SharedComponents/Styles/RadioB.css";
<<<<<<< HEAD
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
registerLocale("es", es);

=======
>>>>>>> master
export default class DatosGeneralesRG extends React.Component {
	render() {
		return (
			<div className="datosGenerales">
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
					<label htmlFor="edad" className="inp">
						<input
							id="edad"
							type="text"
							name="edad"
							value={this.props.edad}
							onChange={this.props.handleChange}
							placeholder="&nbsp;"
						/>
						<span className="label">Edad</span>
						<span className="focus-bg"></span>
					</label>
				</div>

				<div>
					<label htmlFor="radio-genero">Genero: </label>
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

				<div>
					<label htmlFor="radio-especie">Especie: </label>
					<div className="switch2 center">
						<div className="quality quality2">
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
						<div className="quality quality2">
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
						<div className="quality quality2">
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

				<div className="fechaRescate">
					<div className="date">
						<DatePicker
							useWeekdaysShort
							fixedHeight
							autoComplete
							className="date-text"
							id="fechaDeRescate"
							name="fechaDeRescate"
							locale="es"
							selected={this.props.fechaDeRescate}
							dateFormat="dd/MM/yyyy"
							onChange={(date) =>
								this.props.handleDate(date, "fechaDeRescate")
							}
						/>
						<span className="date-highlight"></span>
						<label className="date-label">Fecha de rescate</label>
					</div>
				</div>
			</div>
		);
	}
}
