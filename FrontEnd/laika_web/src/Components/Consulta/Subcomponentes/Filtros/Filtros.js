import React from "react";
import FiltroAdopcion from "./SubFiltros/FiltroAdopcion";
import FiltroExpedienteMedico from "./SubFiltros/FiltroExpedienteMedico";
import FiltroGeneral from "./SubFiltros/FiltroGeneral";
import FiltroHogarTemporal from "./SubFiltros/FiltroHogarTemporal";
import FiltroGlobal from "./SubFiltros/FiltroGlobal";
import FiltroRegistros from "./SubFiltros/FiltroRegistros";
import "../../Styles/Consulta.css";

export default class Filtros extends React.Component {
	multiSelectList2Array = (objeto, opciones) => {
		var opcionesSeleccionadas = [];
		opciones.forEach((opcion) => {
			if (objeto[this.props.convert2CamelCase(opcion)] === "1")
				opcionesSeleccionadas.push(opcion);
		});
		return opcionesSeleccionadas;
	};

	render() {
		return (
			<div className="filtros">
				<div>
					<FiltroGlobal
						filtros={this.props.filtros}
						handleKeyWord={this.props.handleKeyWord}
					/>
				</div>
				<div>
					<FiltroRegistros
						handleFiltroRegistros={this.props.handleFiltroRegistros}
						registroSeleccionado={this.props.filtros.tarjeta}
					/>
				</div>
				<div>
					{(() => {
						switch (this.props.filtros.tarjeta) {
							case "General":
								if (
									this.props.dataLength &&
									this.props.transaccionCompletada
								) {
									return (
										<FiltroGeneral
											filtros={this.props.filtros}
											handleList={this.props.handleList}
										/>
									);
								}
								break;

							case "ExpedienteMedico":
								if (
									this.props.dataLength &&
									this.props.transaccionCompletada
								) {
									return (
										<FiltroExpedienteMedico
											filtros={this.props.filtros}
											handleList={this.props.handleList}
										/>
									);
								}
								break;

							case "HogarTemporal":
								if (
									this.props.dataLength &&
									this.props.transaccionCompletada
								) {
									return (
										<FiltroHogarTemporal
											filtros={this.props.filtros}
											handleList={this.props.handleList}
										/>
									);
								}
								break;

							case "Adopcion":
								if (
									this.props.dataLength &&
									this.props.transaccionCompletada
								) {
									return (
										<FiltroAdopcion
											filtros={this.props.filtros}
											handleList={this.props.handleList}
										/>
									);
								}
								break;

							default:
								return null;
						}
					})()}
				</div>
			</div>
		);
	}
}
