import React from "react";
import FotoFrame from "../../SharedComponents/Tarjetas/FotoFrame.js";

export default class TarjetaAdopcion extends React.Component {
	render() {
		return (
			<div>
				<FotoFrame />

				<div>
					<div className="tarjEMf1">
						<label> Adoptante: </label>
						<label> {this.props.nombreAdte} </label>

						<label> Telefono del Adoptante: </label>
						<label> {this.props.telefonoAdte} </label>

					</div>
					<div className="tarjEMf2">
						
					<label> Adoptado: </label>
					<label> {this.props.adoptado} </label>

					<label> Medio de Adopcion: </label>
					<label> {this.props.medioAdop} </label>

					<label> Fecha de Adopcion: </label>
					<label> {this.props.fechaAdop} </label>
						
					</div>
					<div className="tarjEMf3">
						<label> Visita de Adopcion: </label>
						<label> {this.props.visitaAdop} </label>

						<label> Direccion: </label>
						<label> {this.props.concatDate(this.props.calle, this.props.numero, this.props.colonia, this.props.municipio)} </label>
					</div>

					
				</div>
			</div>
		);
	}
}
