import React from "react";
import FotoFrame from "../../SharedComponents/Tarjetas/FotoFrame.js";

export default class TarjetaGeneral extends React.Component {
	render() {
		return (
			<div>
				<FotoFrame />

				<div>
					<div className="tarjEMf1">
						<label> Nombre: </label>
						<label> {this.props.nombre} </label>

						<label> Edad: </label>
						<label> {this.props.edad} </label>

						<label> Genero: </label>
						<label> {this.props.genero} </label>

						<label> Estatus: </label>
						<label> {this.props.estatus} </label>
					</div>
					<div className="tarjEMf2">
						<label> Especie: </label>
						<label> {this.props.especie} </label>

						<label> Fecha De Rescate: </label>
						<label> {this.props.fechaRescate} </label>

						<label> Direccion: </label>
						<label>
							{this.props.concatDate(this.props.calle, this.props.numero, this.props.colonia, this.props.municipio)}
						</label>
					</div>
					<div className="tarjEMf3">
						<label> Rescatistas: </label>
						<label> {this.props.rescatistas} </label>
					</div>
					<div className="tarjEMf4">
						<label> Senas Particulares: </label>
						<label> {this.props.senasParticulares} </label>
					</div>
				</div>
			</div>
		);
	}
}
