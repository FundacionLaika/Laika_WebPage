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
	handleMultiSelectDefaultValues = (options, filter, isMultiSelect) => {
		var arrayFilter = [];

		if (isMultiSelect) {
			options.forEach(element => {
				if (filter[element.value] === "1") arrayFilter.push(element)
			});
		} 
		else {
			arrayFilter = options.filter(option => option.value === filter);
		}
		return arrayFilter;
	}

	render() {
		return (
			<div className="filtros">
				<div>
					<FiltroGlobal
						filtros={this.props.filtros}
						handleKeyWord={this.props.handleKeyWord}
						handleOrdenarToggle={this.props.handleOrdenarToggle}
						onChangeDropdown={this.props.onChangeDropdown}
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
										handleMultiSelectDefaultValues={this.handleMultiSelectDefaultValues}
									/>
								);

							case "ExpedienteMedico":
								return (
									<FiltroExpedienteMedico
										filtros={this.props.filtros}
										handleList={this.props.handleList}
										handleMultiSelectDefaultValues={this.handleMultiSelectDefaultValues}
									/>
								);

							case "HogarTemporal":
								return (
									<FiltroHogarTemporal
										filtros={this.props.filtros}
										handleList={this.props.handleList}
										handleDate={this.props.handleDate}
										handleMultiSelectDefaultValues={this.handleMultiSelectDefaultValues}
									/>
								);

							case "Adopcion":
								return (
									<FiltroAdopcion
										filtros={this.props.filtros}
										handleList={this.props.handleList}
										formatDate={this.props.formatDate}
										handleDate={this.props.handleDate}
										handleMultiSelectDefaultValues={this.handleMultiSelectDefaultValues}
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
