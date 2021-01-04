import React from "react";
import "./Styles/FiltroRegistros.css";

export default class FiltroRegistros extends React.Component {
	render() {
		return (
			<div className="filtroBarRegitros">
				<nav className="menu">
					<ul className="main-menu">
						<li
							className={
								this.props.registroSeleccionado === "General"
									? "active"
									: ""
							}
							onClick={() =>
								this.props.handleFiltroRegistros("General")
							}
						>
							<i className="fa fa-id-card-o"></i>
							General
						</li>
						<li
							className={
								this.props.registroSeleccionado ===
								"ExpedienteMedico"
									? "active"
									: ""
							}
							onClick={() =>
								this.props.handleFiltroRegistros(
									"ExpedienteMedico"
								)
							}
						>
							<i className="fa fa-medkit"></i>
							Expediente Médico
						</li>
						<li
							className={
								this.props.registroSeleccionado ===
								"HogarTemporal"
									? "active"
									: ""
							}
							onClick={() =>
								this.props.handleFiltroRegistros(
									"HogarTemporal"
								)
							}
						>
							<i className="fa fa-home"></i>
							Hogar Temporal
						</li>
						<li
							className={
								this.props.registroSeleccionado === "Adopcion"
									? "active"
									: ""
							}
							onClick={() =>
								this.props.handleFiltroRegistros("Adopcion")
							}
						>
							<i className="fa fa-users"></i>
							Adopción
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}
