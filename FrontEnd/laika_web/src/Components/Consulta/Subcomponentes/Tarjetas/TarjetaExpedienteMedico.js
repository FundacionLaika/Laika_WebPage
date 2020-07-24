import React from "react";
import FotoFrame from "../../../SharedComponents/Tarjetas/FotoFrame.js";

export default class TarjetaExpedienteMedico extends React.Component {
	render() {
		return (
			<div>
				<FotoFrame />

				<div>
					<div className="tarjEMf1">
						<label> Diagnostico: </label>
						{this.props.atropellamiento ? <li> Atropellamiento </li> : null}
						{this.props.tvt ? <li> TVT </li> : null}
						{this.props.sarnaPiel ? <li> Sarna Piel </li> : null}
						{this.props.viral ? <li> Viral </li> : null}
						{this.props.embarazo ? <li> Embarazo </li> : null}
						{this.props.cachorros ? <li> Cachorros </li> : null}
						{this.props.hemoparasitos ? <li> Hemoparasitos </li> : null}
						{this.props.otro.length ? <li> {this.props.otro} </li> : null}
						
					</div>
					<div className="tarjEMf2">
						<label> Esterilizado: </label>
						<label> {this.props.estaEsterilizado==="1" ? "Si" : "No"} </label>

						<label> Cita Agendada: </label>
						<label> {this.props.citaAgendada} </label>

						<label> Fecha de Esterilización: </label>
						<label> {this.props.fechaEsterilizacion} </label>
					</div>
					<div className="tarjEMf3">
						<label> Vacunas Recibidas: </label>

						
							{this.props.puppy ? <li> Puppy </li> : null}
							{this.props.refuerzoPuppy ? <li> Refuerzo Puppy </li> : null}
							{this.props.multiple ? <li> Multiple </li> : null}
							{this.props.refuerzoMultiple ? <li> Refuerzo Multiple </li> : null}
							{this.props.rabia ? <li> Rabia </li> : null}
						
					</div>
				</div>
			</div>
		);
	}
}
