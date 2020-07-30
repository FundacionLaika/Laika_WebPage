import React from "react";
import FiltroAdopcion from "./SubFiltros/FiltroAdopcion";
import FiltroExpedienteMedico from "./SubFiltros/FiltroExpedienteMedico";
import FiltroGeneral from "./SubFiltros/FiltroGeneral";
import FiltroHogarTemporal from "./SubFiltros/FiltroHogarTemporal";
import FiltroGlobal from "./SubFiltros/FiltroGlobal";
import FiltroRegistros from "./SubFiltros/FiltroRegistros";
import "../../Styles/Consulta.css";
import "./SubFiltros/Styles/SubFiltros.css";

export default class Filtros extends React.Component {
	render() {
		return (
			<div className="filtros">
				<div>
					<FiltroGlobal
						filtros={this.props.filtros}
						handleKeyWord={this.props.handleKeyWord}
						handleOrdenarToggle={this.props.handleOrdenarToggle}
					/>
				</div>
				<div>
					<FiltroRegistros
						handleFiltroRegistros={this.props.handleFiltroRegistros}
						registroSeleccionado={this.props.filtros.tarjeta}
					/>
				</div>
				<div className="subfiltros">
					{(() => {
						switch (this.props.filtros.tarjeta) {
							case "General":
								return (
									<FiltroGeneral
										filtros={this.props.filtros}
										handleList={this.props.handleList}
									/>
								);

							case "ExpedienteMedico":
								return (
									<FiltroExpedienteMedico
										filtros={this.props.filtros}
										handleList={this.props.handleList}
									/>
								);

							case "HogarTemporal":
								return (
									<FiltroHogarTemporal
										filtros={this.props.filtros}
										handleList={this.props.handleList}
									/>
								);

							case "Adopcion":
								return (
									<FiltroAdopcion
										filtros={this.props.filtros}
										handleList={this.props.handleList}
									/>
								);

							default:
								return null;
						}
					})()}
				</div>
			</div>
		);
	}
}
