import React from "react";
import FotoFrame from "../../../../SharedComponents/Tarjetas/FotoFrame.js";
import "./Styles/TarjetaExpedienteMedico.css";
import "./Styles/Tarjeta.css";

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
						<i
							aria-hidden="true"
							className="fa fa-user fa-fw iconoTarjeta"
						></i>
						<span className="nombreCampo"> Diagnostico: </span>
						{this.props.atropellamiento ? (
							<li> Atropellamiento </li>
						) : null}
						{this.props.tvt ? <li> TVT </li> : null}
						{this.props.sarnaPiel ? <li> Sarna Piel </li> : null}
						{this.props.viral ? <li> Viral </li> : null}
						{this.props.embarazo ? <li> Embarazo </li> : null}
						{this.props.cachorros ? <li> Cachorros </li> : null}
						{this.props.hemoparasitos ? (
							<li> Hemoparasitos </li>
						) : null}
						{this.props.otro.length ? (
							<li> {this.props.otro} </li>
						) : null}
					</div>

					<div className="vacunasTME">
						<i
							aria-hidden="true"
							className="fa fa-user fa-fw iconoTarjeta"
						></i>
						<span className="nombreCampo">
							{" "}
							Vacunas Recibidas:{" "}
						</span>
						{this.props.puppy ? <li> Puppy </li> : null}
						{this.props.refuerzoPuppy ? (
							<li> Refuerzo Puppy </li>
						) : null}
						{this.props.multiple ? <li> Multiple </li> : null}
						{this.props.refuerzoMultiple ? (
							<li> Refuerzo Multiple </li>
						) : null}
						{this.props.rabia ? <li> Rabia </li> : null}
					</div>

					<div className="esterilizadoTEM">
						<i
							aria-hidden="true"
							className="fa fa-user fa-fw iconoTarjeta"
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
							className="fa fa-user fa-fw iconoTarjeta"
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
							className="fa fa-user fa-fw iconoTarjeta"
						></i>
						<span className="nombreCampo">
							{" "}
							Fecha de Esterilización:{" "}
						</span>
						<span className="campoData">
							{" "}
							{this.props.fechaEsterilizacion}{" "}
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
