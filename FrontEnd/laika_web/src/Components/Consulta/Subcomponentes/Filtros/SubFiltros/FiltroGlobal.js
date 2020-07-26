import React from "react";
import "./Styles/FiltroGlobal.css";
import { Dropdown, Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
export default class FiltroGlobal extends React.Component {
	options = [
		{ key: 1, text: "Choice 1", value: 1 },
		{ key: 2, text: "Choice 2", value: 2 },
		{ key: 3, text: "Choice 3", value: 3 },
	];

	friendOptions = [
		{
			key: "Jenny Hess",
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
					<Menu compact>
						<Dropdown
							text="Dropdown"
							options={this.options}
							simple
							item
						/>
					</Menu>
				</div>

				<span>
					Show me posts by{" "}
					<Dropdown
						inline
						options={this.friendOptions}
						defaultValue={this.friendOptions[0].value}
					/>
				</span>

				<div className="exportar"></div>
			</div>
		);
	}
}
