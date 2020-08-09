import React from "react";
import FotoFrame from "../../../../SharedComponents/Tarjetas/FotoFrame.js";
import "./Styles/TarjetaHogarTemporal.css";
import "./Styles/Tarjeta.css";
import BotonPDF from "../../../../SharedComponents/BotonPDF.js";
import { Link } from "react-router-dom";


export default class TarjetaHogarTemporal extends React.Component {
	render() {
		return (
			<div className="tarjeta">
				<div className="fotoFrame">
					<div className="fotoT">
						<FotoFrame />
					</div>
					<div className="idT">
						<div className="idIconT">
							<img src="/icon-id-2.png" alt="" />
						</div>
						<div className="campoData">
							<span> {this.props.id} </span>
						</div>
					</div>
				</div>

				<div className="infoTarjetaHT">
					<div className="tipoHogarTHT">
						<i
							aria-hidden="true"
							className="fa fa-home fa-fw iconoTarjeta"
						></i>
						<span className="nombreCampo">
							{" "}
							Tipo de Hogar Temporal:{" "}
						</span>
						<span className="campoData"> {this.props.tipoHT} </span>
					</div>

					<div className="responsableTHT">
						<i
							aria-hidden="true"
							className="fa fa-user fa-fw iconoTarjeta"
						></i>
						<span className="nombreCampo"> Responsable: </span>
						<span className="campoData">
							{" "}
							{this.props.responsableHT}{" "}
						</span>
					</div>

					<div className="telefonoTHT">
						<i
							aria-hidden="true"
							className="fa fa-phone fa-fw iconoTarjeta"
							
						></i>
						<span className="nombreCampo"> Télefono: </span>
						<span className="campoData">
							{" "}
							{this.props.telefonoHT}{" "}
						</span>
					</div>

					<div className="fechaInicioTHT">
						<i
							aria-hidden="true"
							className="fa fa-calendar fa-fw iconoTarjeta"
						></i>
						<span className="nombreCampo"> Fecha de Inicio:: </span>
						<span className="campoData">
							{" "}
							{this.props.formatDate(
								this.props.fechaInicioHT
							)}{" "}
						</span>
					</div>

					<div className="fechaFinalTHT">
						<i
							aria-hidden="true"
							className="fa fa-calendar fa-fw iconoTarjeta"
						></i>
						<span className="nombreCampo"> Fecha Final: </span>
						<span className="campoData">
							{" "}
							{this.props.formatDate(
								this.props.fechaFinalHT
							)}{" "}
						</span>
					</div>

					<div className="direccionTHT">
						<i
							aria-hidden="true"
							className="fa fa-address-card-o fa-fw iconoTarjeta"
						></i>
						<span className="nombreCampo"> Dirección: </span>
						<span className="campoData">
							{" "}
							{this.props.concatAddress(
								this.props.calle,
								this.props.numero,
								this.props.colonia,
								this.props.municipio
							)}{" "}
						</span>
					</div>
				</div>

				<div className="panelConfiguracionT">
				<Link to={"/Laika/HogarTemporal?id=" + this.props.id}>
				<button className="editarTarjeta" title="Editar">
					<i
						aria-hidden="true"
						className="fa fa-edit fa-fw"
					></i>
				</button>
			</Link>

					<BotonPDF />
				</div>
			</div>
		);
	}
}
