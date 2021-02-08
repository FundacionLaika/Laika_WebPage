import React from "react";
import FotoFrame from "../../../../SharedComponents/Tarjetas/FotoFrame.js";
import "./Styles/TarjetaAdopcion.css";
import "./Styles/Tarjeta.css";
import BotonPDF from "../../../../SharedComponents/BotonPDF.js";
import { Link } from "react-router-dom";

export default class TarjetaAdopcion extends React.Component {
	render() {
		return (
			<div className="tarjeta">
				<div className="fotoFrame">
					<div className="fotoT">
						<FotoFrame foto={this.props.foto} />
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

				<div className="infoTarjetaA">
					<div className="adoptanteTA">
						<i
							aria-hidden="true"
							className="fa fa-user fa-fw iconoTarjeta"
						></i>
						<span className="nombreCampo"> Adoptante: </span>
						<span className="campoData">
							{" "}
							{this.props.nombreAdte
								? this.props.nombreAdte
								: "No hay Información"}{" "}
						</span>
					</div>

					<div className="telefonoTA">
						<i
							aria-hidden="true"
							className="fa fa-phone fa-fw iconoTarjeta"
						></i>
						<span className="nombreCampo">
							{" "}
							Teléfono del Adoptante:{" "}
						</span>
						<span className="campoData">
							{" "}
							{this.props.telefonoAdte
								? this.props.telefonoAdte
								: "No hay Información"}{" "}
						</span>
					</div>

					<div className="adoptadoTA">
						<i
							aria-hidden="true"
							className="fa fa-paw fa-fw iconoTarjeta"
						></i>
						<span className="nombreCampo"> Adoptado: </span>
						<span className="campoData">
							{" "}
							{this.props.adoptado
								? this.props.adoptado
								: "No hay Información"}{" "}
						</span>
					</div>

					<div className="medioAdopcionTA">
						<i
							aria-hidden="true"
							className="fa fa-handshake-o fa-fw iconoTarjeta"
						></i>
						<span className="nombreCampo">
							{" "}
							Medio de Adopción:{" "}
						</span>
						<span className="campoData">
							{" "}
							{this.props.medioAdop
								? this.props.medioAdop
								: "No hay Información"}{" "}
						</span>
					</div>

					<div className="fechaAdopcionTA">
						<i
							aria-hidden="true"
							className="fa fa-calendar fa-fw iconoTarjeta"
						></i>
						<span className="nombreCampo">
							{" "}
							Fecha de Adopción:{" "}
						</span>
						<span className="campoData">
							{" "}
							{this.props.fechaAdop
								? this.props.formatDate(this.props.fechaAdop)
								: "No hay Información"}{" "}
						</span>
					</div>

					<div className="visitaAdopcionTA">
						<i
							aria-hidden="true"
							className="fa fa-calendar-o fa-fw iconoTarjeta"
						></i>
						<span className="nombreCampo">
							{" "}
							Visita de Adopción:{" "}
						</span>
						<span className="campoData">
							{" "}
							{this.props.visitaAdop
								? this.props.formatDate(this.props.visitaAdop)
								: "No hay Información"}{" "}
						</span>
					</div>

					<div className="direccionTA">
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
					<Link to={"/Laika/Adopcion?id=" + this.props.id}>
						<button className="editarTarjeta" title="Editar">
							<i
								aria-hidden="true"
								className="fa fa-edit fa-fw"
							></i>
						</button>
					</Link>

					<BotonPDF
						id={this.props.id}
						openModal={this.props.openModal}
						setID={this.props.setID}
						foto={this.props.foto}
					/>
				</div>
			</div>
		);
	}
}
