import React from "react";
import FotoFrame from "../../../../SharedComponents/Tarjetas/FotoFrame.js";
import "./Styles/TarjetaGeneral.css";
export default class TGarjetaGeneral extends React.Component {

	formatDate = (date) => {
		var d = new Date(date),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();
	
		if (month.length < 2) 
			month = '0' + month;
		if (day.length < 2) 
			day = '0' + day;
	
		return [day, month, year].join('-');
	}
	render() {
		return (
			<div className="tarjetaGeneral">
				<div className="fotoFrame">
					<div className="fotoTG">
					<FotoFrame />

					</div>
				</div>

				<div className="infoTarjetaG">
					<div className="nombreRescatadoTG">
						<span className="nombreCampo"> Nombre: </span>
						<span className="campoData"> {this.props.nombre} </span>
					</div>
					<div className="edadTG">
						<span className="nombreCampo"> Edad: </span>
						<span className="campoData"> {this.props.edad} </span>
					</div>
					<div className="generoTG">
						{" "}
						<span className="nombreCampo"> Género: </span>
						<span className="campoData"> {this.props.genero} </span>
					</div>
					<div className="estatusTG">
						<span className="nombreCampo"> Estatus: </span>
						<span className="campoData">
							{" "}
							{this.props.estatus}{" "}
						</span>
					</div>

					<div className="especieTG">
						<span className="nombreCampo"> Especie: </span>
						<span className="campoData">
							{" "}
							{this.props.especie}{" "}
						</span>
					</div>
					<div className="fechaRescateTG">
						<span className="nombreCampo"> Fecha de Rescate: </span>
						<span className="campoData">
							{" "}
							{this.formatDate(this.props.fechaRescate)}{" "}
						</span>
					</div>
					<div className="direccionTG">
						<span className="nombreCampo"> Dirección: </span>
						<span className="campoData">
							{this.props.concatDate(
								this.props.calle,
								this.props.numero,
								this.props.colonia,
								this.props.municipio
							)}
						</span>
					</div>

					<div className="rescatistasTG">
						<span className="nombreCampo"> Rescatistas: </span>
						<span className="campoData">
							{" "}
							{this.props.rescatistas}{" "}
						</span>
					</div>
					<div className="senasParticularesTG">
						<span className="nombreCampo">
							{" "}
							Señas Particulares:{" "}
						</span>
						<span className="campoData">
							{" "}
							{this.props.senasParticulares}{" "}
						</span>
					</div>
					<div className="idTG">
						
						<span className="campoData">
							{" "}
							{this.props.id}{" "}
						</span>
						<span className="nombreCampo">
							{" "}
							ID:{" "}
						</span>
					</div>
				</div>
			</div>
		);
	}
}
