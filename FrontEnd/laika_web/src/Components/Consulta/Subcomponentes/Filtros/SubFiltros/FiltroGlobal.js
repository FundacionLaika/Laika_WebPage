import React from "react";
import "./Styles/FiltroGlobal.css";
export default class FiltroGlobal extends React.Component {
	render() {
		return (
			<div className="filtroGlobal">
				<div className="barraBusqueda">
					<input
						className="search__input"
						type="text"
						placeholder="Buscar"
						value={this.props.filtros.keyword}
						onChange={(event) => this.props.handleKeyWord(event.target.value)}
					/>
				</div>
				<div className="seleccionarBusqueda">
					<button className="search-btn" type="submit">
						<span>Search</span>
					</button>
				</div>
				<div className="exportar"></div>
			</div>
		);
	}
}
