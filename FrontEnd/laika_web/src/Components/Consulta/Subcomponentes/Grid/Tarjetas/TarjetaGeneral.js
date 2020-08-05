import React from "react";
import FotoFrame from "../../../../SharedComponents/Tarjetas/FotoFrame.js";
import "./Styles/TarjetaGeneral.css";
export default class TGarjetaGeneral extends React.Component {
	formatDate = (date) => {
		var d = new Date(date),
			month = "" + (d.getMonth() + 1),
			day = "" + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = "0" + month;
		if (day.length < 2) day = "0" + day;

		return [day, month, year].join("-");
	};
	render() {
		return (
			<div className="tarjetaGeneral">
				<div className="fotoFrame">
					<div className="fotoTG">
						<FotoFrame />
					</div>
					<div className="idTG">
						<div className="idIconT">
							<img src="/icon-id-2.png" alt="" />
						</div>
						<div className="campoData">
							<span> {this.props.id} </span>
						</div>
					</div>
				</div>

				<div className="infoTarjetaG">
					<div className="nombreRescatadoTG">
						<i
							aria-hidden="true"
							className="fa fa-user fa-fw iconoTarjeta"
						></i>
						<span className="nombreCampo"> Nombre: </span>
						<span className="campoData"> {this.props.nombre} </span>
					</div>
					<div className="edadTG">
						<i
							aria-hidden="true"
							className="fa fa-birthday-cake fa-fw iconoTarjeta"
						></i>
						<span className="nombreCampo"> Edad: </span>
						<span className="campoData"> {this.props.edad} </span>
					</div>
					<div className="generoTG">
						<i
							aria-hidden="true"
							className="fa fa-venus-mars fa-fw iconoTarjeta"
						></i>
						<span className="nombreCampo"> Género: </span>
						<span className="campoData"> {this.props.genero} </span>
					</div>
					<div className="estatusTG">
						<i
							aria-hidden="true"
							className="fa fa-legal fa-fw iconoTarjeta"
						></i>
						<span className="nombreCampo"> Estatus: </span>
						<span className="campoData">{this.props.estatus}</span>
					</div>

					<div className="especieTG">
						<i
							aria-hidden="true"
							className="fa fa-paw fa-fw iconoTarjeta"
						></i>
						<span className="nombreCampo"> Especie: </span>
						<span className="campoData">{this.props.especie}</span>
					</div>

					<div className="fechaRescateTG">
						<i
							aria-hidden="true"
							className="fa fa-calendar fa-fw iconoTarjeta"
						></i>
						<span className="nombreCampo"> Fecha de Rescate: </span>
						<span className="campoData">
							{this.formatDate(this.props.fechaRescate)}
						</span>
					</div>
					<div className="direccionTG">
						<i
							aria-hidden="true"
							className="fa fa-address-card-o fa-fw iconoTarjeta"
						></i>
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
						<i
							aria-hidden="true"
							className="fa fa-users fa-fw iconoTarjeta"
						></i>
						<span className="nombreCampo"> Rescatistas: </span>
						<span className="campoData">
							{this.props.rescatistas}
						</span>
					</div>
					<div className="senasParticularesTG">
						<i
							aria-hidden="true"
							className="fa fa-bookmark fa-fw iconoTarjeta"
						></i>
						<span className="nombreCampo">Señas Particulares:</span>
						<span className="campoData">
							{this.props.senasParticulares}
						</span>
					</div>
				</div>
				<div className="panelConfiguracionT">
					<button className="editarTarjeta" title="Editar">
						<i aria-hidden="true" className="fa fa-edit fa-fw"></i>
					</button>

					<button className="generarPDFTarjeta" title="Generar PDF">
						<i
							aria-hidden="true"
							className="fa fa-file-pdf-o fa-fw"
						></i>
					</button>
				</div>
			</div>
		);
	}
}
