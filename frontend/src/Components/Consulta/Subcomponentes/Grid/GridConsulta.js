import React from "react";
import GridAdopcion from "./SubGrids/GridAdopcion";
import GridExpedienteMedico from "./SubGrids/GridExpedienteMedico";
import GridGeneral from "./SubGrids/GridGeneral";
import GridHogarTemporal from "./SubGrids/GridHogarTemporal";
import "../../Styles/Consulta.css";

export default class GridConsulta extends React.Component {
	render() {
		return (
			<div className="gridConsulta">
				{(() => {
					switch (this.props.tarjeta) {
						case "General":
							return (
								<GridGeneral
									concatAddress={this.props.concatAddress}
									filtros={this.props.filtros}
									formatDate={this.props.formatDate}
									openModal={this.props.openModal}
									setID={this.props.setID}
								/>
							);

						case "ExpedienteMedico":
							return (
								<GridExpedienteMedico
									concatAddress={this.props.concatAddress}
									filtros={this.props.filtros}
									formatDate={this.props.formatDate}
									openModal={this.props.openModal}
									setID={this.props.setID}
								/>
							);

						case "HogarTemporal":
							return (
								<GridHogarTemporal
									concatAddress={this.props.concatAddress}
									filtros={this.props.filtros}
									formatDate={this.props.formatDate}
									openModal={this.props.openModal}
									setID={this.props.setID}
								/>
							);

						case "Adopcion":
							return (
								<GridAdopcion
									concatAddress={this.props.concatAddress}
									filtros={this.props.filtros}
									formatDate={this.props.formatDate}
									openModal={this.props.openModal}
									setID={this.props.setID}
								/>
							);

						default:
							return null;
					}
				})()}
			</div>
		);
	}
}
