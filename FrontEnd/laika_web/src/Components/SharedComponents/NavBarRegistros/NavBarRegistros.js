import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Styles/NavBarRegistros.css";

class NavBarRegistros extends Component {

	render() {
	
		return (
			<div className="tabs">
				<div className="tab-header">
					<div className={this.props.activePosition==="RegistroGeneral"?"active":""}>
						<Link
							to="/RegistroGeneral"
							style={{
								color: "inherit",
								textDecoration: "inherit",
							}}
						>
							<i className="fa fa-id-card-o fa-fw"></i>
							Registro General
						</Link>
					</div>

					<div className={this.props.activePosition==="ExpedienteMedico"?"active":""}>
						<Link
							to="/ExpedienteMedico"
							style={{
								color: "inherit",
								textDecoration: "inherit",
							}}
						>
							<i className="fa fa-medkit fa-fw"></i>
							Expediente Médico
						</Link>
					</div>

					<div className={this.props.activePosition==="HogarTemporal"?"active":""}>
						<Link
							to="/HogarTemporal"
							style={{
								color: "inherit",
								textDecoration: "inherit",
							}}
						>
							<i className="fa fa-home fa-fw"></i>
							Hogar Temporal
						</Link>
					</div>

					<div className={this.props.activePosition==="Adopcion"?"active":""}>
						<Link
							to="/Adopcion"
							style={{
								color: "inherit",
								textDecoration: "inherit",
							}}
						>
							<i className="fa fa-users fa-fw"></i>
							Adopción
						</Link>
					</div>
				</div>
				<div className="tab-indicator" style={{ left: this.props.tabIndicatorPosition }}></div>
			</div>
		);
	}
}

export default NavBarRegistros;
