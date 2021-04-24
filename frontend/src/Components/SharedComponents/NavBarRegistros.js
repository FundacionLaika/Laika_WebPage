import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Styles/NavBarRegistros.css";

class NavBarRegistros extends Component {

	render() {
		
		const idQuery = (this.props.id) ? "?id=" + this.props.id : "";
		return (
			<div className="tabs">
				<div className="tab-header">
					<div className={this.props.activePosition==="RegistroGeneral"?"active":""}>
						<Link
							to={"/Laika/RegistroGeneral" + idQuery}
							style={{
								color: "inherit",
								textDecoration: "inherit",
							}}
						>
							<i aria-hidden="true" className="fa fa-id-card-o fa-fw separation"></i>
							Registro General
						</Link>
					</div>

					<div className={this.props.activePosition==="ExpedienteMedico"?"active":""}>
						<Link
							to={"/Laika/ExpedienteMedico"+idQuery}
							style={{
								color: "inherit",
								textDecoration: "inherit",
							}}
						>
							<i aria-hidden="true" className="fa fa-medkit fa-fw separation"></i>
							Expediente Médico
						</Link>
					</div>

					<div className={this.props.activePosition==="HogarTemporal"?"active":""}>
						<Link
							to={"/Laika/HogarTemporal"+idQuery}
							style={{
								color: "inherit",
								textDecoration: "inherit",
							}}
						>
							<i aria-hidden="true" className="fa fa-home fa-fw separation"></i>
							Hogar Temporal
						</Link>
					</div>

					<div className={this.props.activePosition==="Adopcion"?"active":""}>
						<Link
							to={"/Laika/Adopcion"+idQuery}
							style={{
								color: "inherit",
								textDecoration: "inherit",
							}}
						>
							<i aria-hidden="true" className="fa fa-paw fa-fw separation"></i>
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
