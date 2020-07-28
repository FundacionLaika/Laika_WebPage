import React from "react";
import "./Styles/FiltroGlobal.css";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
export default class FiltroGlobal extends React.Component {

	opciones = [
		{
			key: "Nombre Rescatado (Menor a Mayor)",
			text: "Jenny Hess",
			value: "Jenny Hess",
			image: { avatar: true, src: "/images/avatar/small/jenny.jpg" },
		},
		{
			key: "Elliot Fu",
			text: "Elliot Fu",
			value: "Elliot Fu",
			image: { avatar: true, src: "/images/avatar/small/elliot.jpg" },
		},
		{
			key: "Stevie Feliciano",
			text: "Stevie Feliciano",
			value: "Stevie Feliciano",
			image: { avatar: true, src: "/images/avatar/small/stevie.jpg" },
		},
		{
			key: "Christian",
			text: "Christian",
			value: "Christian",
			image: { avatar: true, src: "/images/avatar/small/christian.jpg" },
		},
	];

	render() {
		return (
			<div className="filtroGlobal">
				<div className="barraBusqueda">
					<input
						className="search__input"
						type="text"
						placeholder="Buscar"
						value={this.props.filtros.keyword}
						onChange={(event) =>
							this.props.handleKeyWord(event.target.value)
						}
					/>
				</div>
				<div className="seleccionarBusqueda">
					<button className="search-btn" type="submit">
						<span>Search</span>
					</button>
						<Dropdown
							fluid
							selection
							options={this.opciones}
							defaultValue={this.opciones[0].value}
						/>
				</div>

				<span>
					Show me posts by{" "}
					<Dropdown
						inline
						options={this.opciones}
						defaultValue={this.opciones[0].value}
					/>
				</span>

				<div className="exportar"></div>
			</div>
		);
	}
}
