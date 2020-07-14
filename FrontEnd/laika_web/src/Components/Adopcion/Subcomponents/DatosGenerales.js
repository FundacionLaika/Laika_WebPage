import React from "react";
import "../Styles/DatosGenerales.css";

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
						<span class="label">Adoptante</span>
						<span class="focus-bg"></span>
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
						<span class="label">Adoptado</span>
						<span class="focus-bg"></span>
					</label>
				</div>
				<div className="medioAdopcion">
					<label htmlFor="medioAdopcion">Medio:</label>
					<select
						id="medioAdopcion"
						name="medioAdopcion"
						value={this.props.medioAdopcion}
						onChange={this.props.handleChange}
					>
						<option value="ninguno">Ninguno</option>
						<option value="instagram">Instagram</option>
						<option value="facebook">Facebook</option>
						<option value="Petco">Petco</option>
						<option value="referencia">Referencia</option>
						<option value="otro">Otro</option>
					</select>
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
						<span class="label">Teléfono</span>
						<span class="focus-bg"></span>
					</label>
				</div>
				<div className="visitaDeAdopcion">
					<label htmlFor="visitaDeAdopcion">
						Visita de Adopcion:{" "}
					</label>
					<input
						id="visitaDeAdopcion"
						type="date"
						name="visitaDeAdopcion"
						value={this.props.visitaDeAdopcion}
						onChange={this.props.handleChange}
					/>
				</div>
				<div className="fechaAdopcion">
					<label htmlFor="fechaAdopcion">Fecha de Adopcion: </label>
					<input
						id="fechaAdopcion"
						type="date"
						name="fechaAdopcion"
						value={this.props.fechaAdopcion}
						onChange={this.props.handleChange}
					/>
				</div>
			</div>
		);
	}
}
