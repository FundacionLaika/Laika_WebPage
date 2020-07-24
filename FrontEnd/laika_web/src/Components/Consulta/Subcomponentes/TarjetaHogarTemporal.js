import React from "react";
import FotoFrame from "../../SharedComponents/Tarjetas/FotoFrame.js";

export default class TarjetaHogarTemporal extends React.Component {
	render() {
		return (
			<div>
				<FotoFrame />													

				<div>
					<div className="tarjEMf1">
						<label> Tipo de Hogar Temporal: </label>
						<label> {this.props.tipoHT} </label>

						<label> Responsable: </label>
						<label> {this.props.responsableHT} </label>

						<label> Telefono: </label>
						<label> {this.props.telefonoHT} </label>

					</div>
					<div className="tarjEMf2">
						<label> Fecha de Inicio: </label>
						<label> {this.props.fechaInicioHT} </label>

						<label> Fecha Final </label>
						<label> {this.props.fechaFinalHT} </label>

					</div>
					<div className="tarjEMf3">
						<label> Direccion: </label>
						<label> {this.props.concatDate(this.props.calle, this.props.numero, this.props.colonia, this.props.municipio)} </label>
					</div>
					
				</div>
			</div>
		);
	}
}
