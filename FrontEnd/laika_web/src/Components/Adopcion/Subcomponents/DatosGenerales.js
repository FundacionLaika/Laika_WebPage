import React from "react";
import "../Styles/DatosGeneralesAdopcion.css";

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
					<div className="labelAdopcion">
						<label htmlFor="labelAdopcion">
							Visita de Adopcion:{" "}
						</label>
					</div>
					<div className="fechaInputAdopcion">
						<input
							id="visitaDeAdopcion"
							type="date"
							name="visitaDeAdopcion"
							value={this.props.visitaDeAdopcion}
							onChange={this.props.handleChange}
						/>
					</div>
				</div>
				<div className="fechaAdopcion">
					<div className="labelAdopcion">
						<label htmlFor="fechaAdopcion">
							Fecha de Adopcion:{" "}
						</label>
					</div>
					<div className="fechaInputAdopcion">
						<input
							id="fechaAdopcion"
							type="date"
							name="fechaAdopcion"
							value={this.props.fechaAdopcion}
							onChange={this.props.handleChange}
						/>
					</div>
				</div>
			</div>
		);
	}
}
