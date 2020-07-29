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
									concatDate={this.props.concatDate}
									filtros={this.props.filtros}
								/>
							);

						case "ExpedienteMedico":
							return (
								<GridExpedienteMedico
									concatDate={this.props.concatDate}
									filtros={this.props.filtros}
								/>
							);

						case "HogarTemporal":
							return (
								<GridHogarTemporal
									concatDate={this.props.concatDate}
									filtros={this.props.filtros}
								/>
							);

						case "Adopcion":
							return (
								<GridAdopcion
									concatDate={this.props.concatDate}
									filtros={this.props.filtros}
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
