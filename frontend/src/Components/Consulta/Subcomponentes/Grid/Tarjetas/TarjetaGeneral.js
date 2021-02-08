import React from "react";
import FotoFrame from "../../../../SharedComponents/Tarjetas/FotoFrame.js";
import "./Styles/TarjetaGeneral.css";
import "./Styles/Tarjeta.css";
import BotonPDF from "../../../../SharedComponents/BotonPDF.js";
import { Link } from "react-router-dom";

export default class TGarjetaGeneral extends React.Component {
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
							style={{ fontSize: "1.2em" }}
							aria-hidden="true"
							className="fa fa-info-circle fa-fw iconoTarjeta"
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
							{this.props.formatDate(this.props.fechaRescate)}
						</span>
					</div>
					<div className="direccionTG">
						<i
							aria-hidden="true"
							className="fa fa-address-card-o fa-fw iconoTarjeta"
						></i>
						<span className="nombreCampo"> Dirección: </span>
						<span className="campoData">
							{this.props.concatAddress(
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
					<div className="senasParticularesT">
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
					<Link to={"/Laika/RegistroGeneral?id=" + this.props.id}>
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
