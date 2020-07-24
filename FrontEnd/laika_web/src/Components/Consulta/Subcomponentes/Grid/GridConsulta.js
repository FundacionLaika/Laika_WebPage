import React from "react";
import GridAdopcion from "./SubGrids/GridAdopcion";
import GridExpedienteMedico from "./SubGrids/GridExpedienteMedico";
import GridGeneral from "./SubGrids/GridGeneral";
import GridHogarTemporal from "./SubGrids/GridHogarTemporal";

export default class GridConsulta extends React.Component {
	render() {
		return (
			<div>
				{(() => {
					switch (this.props.tarjeta) {
						case "General":
							if (this.props.data.length && this.props.transaccionCompletada) {
								return <GridGeneral	data={this.props.data} concatDate={this.props.concatDate}/>
							}
							break;

						case "ExpedienteMedico":
							if (this.props.data.length && this.props.transaccionCompletada) {
								return <GridExpedienteMedico data={this.props.data} concatDate={this.props.concatDate}/>
							}
							break;

						case "HogarTemporal":
							if (this.props.data.length && this.props.transaccionCompletada) {
								return <GridHogarTemporal data={this.props.data} concatDate={this.props.concatDate}/>
							}
							break;

						case "Adopcion":
							if (this.props.data.length && this.props.transaccionCompletada) {
								return <GridAdopcion data={this.props.data} concatDate={this.props.concatDate}/>
							}
						break;

						default:
							return null;
					}
				})()}
			</div>
		);
	}
}
