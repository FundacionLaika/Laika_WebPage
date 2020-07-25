import React from "react";
import FiltroAdopcion from "./SubFiltros/FiltroAdopcion";
import FiltroExpedienteMedico from "./SubFiltros/FiltroExpedienteMedico";
import FiltroGeneral from "./SubFiltros/FiltroGeneral";
import FiltroHogarTemporal from "./SubFiltros/FiltroHogarTemporal";
import FiltroGlobal from "./SubFiltros/FiltroGlobal";
import FiltroRegistros from "./SubFiltros/FiltroRegistros";

export default class Filtros extends React.Component {

	multiSelectList2Array = (objeto, opciones) => {
        var opcionesSeleccionadas = [];
        opciones.forEach((opcion) => {
			if (objeto[this.props.convert2CamelCase(opcion)] === "1") opcionesSeleccionadas.push(opcion);
        });
		return opcionesSeleccionadas;
	};

	render() {
		return (
			<div>
				<div>
					<button> Aplicar Filtro </button>
				</div>
				<div>
					<FiltroGlobal filtros={this.props.filtros} />
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
											onSelect={this.props.onSelect}
											onRemove={this.props.onRemove}
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
											onSelect={this.props.onSelect}
                                            onRemove={this.props.onRemove}
                                            multiSelectList2Array={this.multiSelectList2Array}
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
											onSelect={this.props.onSelect}
											onRemove={this.props.onRemove}
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
											onSelect={this.props.onSelect}
                                            onRemove={this.props.onRemove}
                                            multiSelectList2Array={this.multiSelectList2Array}
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
