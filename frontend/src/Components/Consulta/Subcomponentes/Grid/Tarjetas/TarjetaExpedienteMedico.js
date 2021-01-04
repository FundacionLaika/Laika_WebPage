import React from "react";
import FotoFrame from "../../../../SharedComponents/Tarjetas/FotoFrame.js";
import "./Styles/TarjetaExpedienteMedico.css";
import "./Styles/Tarjeta.css";
import BotonPDF from "../../../../SharedComponents/BotonPDF.js";
import { Link } from "react-router-dom";

export default class TarjetaExpedienteMedico extends React.Component {
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

				<div className="infoTarjetaEM">
					<div className="diagnosticoTEM">
						<div className="nombreSeccionT">
							<i
								aria-hidden="true"
								className="fa fa-stethoscope fa-fw iconoTarjeta"
							></i>
							<span className="nombreCampo"> Diagnóstico: </span>
						</div>

						<ul className="listaTEMD">
							{this.props.atropellamiento ? (
								<li> Atropellamiento </li>
							) : null}
							{this.props.tvt ? <li> TVT </li> : null}
							{this.props.sarnaPiel ? (
								<li> Sarna Piel </li>
							) : null}
							{this.props.viral ? <li> Viral </li> : null}
							{this.props.embarazo ? <li> Embarazo </li> : null}
							{this.props.cachorros ? <li> Cachorros </li> : null}
							{this.props.hemoparasitos ? (
								<li> Hemoparasitos </li>
							) : null}
							{this.props.otro.length ? (
								<li> {this.props.otro} </li>
							) : null}
						</ul>
					</div>

					<div className="vacunasTEM">
						<div className="nombreSeccionT">
							<i
								aria-hidden="true"
								className="fa fa-medkit fa-fw iconoTarjeta"
							></i>
							<span className="nombreCampo">
								{" "}
								Vacunas Recibidas:{" "}
							</span>
						</div>
						<ul className="listaTEMV">
							{this.props.puppy ? <li> Puppy </li> : null}
							{this.props.refuerzoPuppy ? (
								<li> Refuerzo Puppy </li>
							) : null}
							{this.props.multiple ? <li> Multiple </li> : null}
							{this.props.refuerzoMultiple ? (
								<li> Refuerzo Multiple </li>
							) : null}
							{this.props.rabia ? <li> Rabia </li> : null}
						</ul>
					</div>

					<div className="esterilizadoTEM">
						<i
							aria-hidden="true"
							className="fa fa-user-md fa-fw iconoTarjeta"
						></i>
						<span className="nombreCampo"> Esterilizado: </span>
						<span className="campoData">
							{" "}
							{this.props.estaEsterilizado === "1"
								? "Si"
								: "No"}{" "}
						</span>
					</div>

					<div className="citaAgendadaTEM">
						<i
							aria-hidden="true"
							className="fa fa-calendar-o fa-fw iconoTarjeta"
						></i>
						<span className="nombreCampo"> Cita Agendada: </span>
						<span className="campoData">
							{" "}
							{this.props.citaAgendada}{" "}
						</span>
					</div>
					<div className="fechaEsterilizacionTEM">
						<i
							aria-hidden="true"
							className="fa fa-calendar fa-fw iconoTarjeta"
						></i>
						<span className="nombreCampo">
							{" "}
							Fecha de Esterilización:{" "}
						</span>
						<span className="campoData">
							{" "}
							{this.props.formatDate(
								this.props.fechaEsterilizacion
							)}{" "}
						</span>
					</div>
				</div>
				<div className="panelConfiguracionT">
					<Link to={"/Laika/ExpedienteMedico?id=" + this.props.id}>
						<button className="editarTarjeta" title="Editar">
							<i
								aria-hidden="true"
								className="fa fa-edit fa-fw"
							></i>
						</button>
					</Link>

					<BotonPDF id={this.props.id} />
				</div>
			</div>
		);
	}
}
