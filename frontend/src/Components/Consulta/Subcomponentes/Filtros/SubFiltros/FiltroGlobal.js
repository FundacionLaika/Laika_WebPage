import React from "react";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./Styles/FiltroGlobal.css";

export default class FiltroGlobal extends React.Component {
	opcionesFiltroKeyword = [
		{
			key: "Nombre Rescatado",
			text: "Nombre Rescatado",
			value: "nombreRescatado",
			image: { avatar: true, src: "/icon-nombre-rescatado.png" },
		},
		{
			key: "Nombre Adoptado",
			text: "Nombre Adoptado",
			value: "nombreAdoptado",
			image: { avatar: true, src: "/icon-nombre-adoptado.png" },
		},
		{
			key: "ID",
			text: "ID",
			value: "id",
			image: { avatar: true, src: "/icon-id-2.png" },
		},
		{
			key: "Nombre Adoptante",
			text: "Nombre Adoptante",
			value: "nombreAdoptante",
			image: { avatar: true, src: "/icon-nombre-adoptante.png" },
		},
		{
			key: "Nombre Responsable",
			text: "Nombre Responsable",
			value: "nombreResponsable",
			image: { avatar: true, src: "/icon-nombre-responsable.png" },
		},
	];

	opcionesOrdenar = [
		{
			key: "Nombre Rescatado",
			text: "Nombre Rescatado",
			value: "nombreRescatado",
			image: { avatar: true, src: "/icon-nombre-rescatado.png" },
		},
		{
			key: "Nombre Adoptado",
			text: "Nombre Adoptado",
			value: "nombreAdoptado",
			image: { avatar: true, src: "/icon-nombre-adoptado.png" },
		},
		{
			key: "ID",
			text: "ID",
			value: "id",
			image: { avatar: true, src: "/icon-id-2.png" },
		},
		{
			key: "Fecha de Adopción",
			text: "Fecha de Adopción",
			value: "fechaAdopcion",
			image: { avatar: true, src: "/icon-fecha-adopcion.png" },
		},
		{
			key: "Nombre Adoptante",
			text: "Nombre Adoptante",
			value: "nombreAdoptante",
			image: { avatar: true, src: "/icon-nombre-adoptante.png" },
		},
		{
			key: "Nombre Responsable",
			text: "Nombre Responsable",
			value: "nombreResponsable",
			image: { avatar: true, src: "/icon-nombre-responsable.png" },
		},
	];

	render() {
		return (
			<div className="filtroGlobal">
				<div className="barraBusqueda">
					<input autocomplete="off"
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
					<Dropdown
						style={{
							backgroundColor: "#3c9099",
							borderRadius: "0 1.1rem 1.1rem 0",
							textAlign: "center",
							alignSelf: "center",
							fontFamily: "Raleway",
							fontSize: "1em",
							color: "white",
							
						}}

						className="dropdownBusqueda"
						fluid
						selection
						options={this.opcionesFiltroKeyword}
						defaultValue={this.opcionesFiltroKeyword[0].value}
						onChange={(event, data) =>
							this.props.onChangeDropdown(
								"filtroPorKeyWord",
								data.value
							)
						}
					/>
				</div>

				<div className="ordenarPor">
					<div className="ordenarDrop">
						<span>Ordenar por: </span>

						<div>
							<Dropdown
								inline
								options={this.opcionesOrdenar}
								defaultValue={this.opcionesOrdenar[0].value}
								onChange={(event, data) =>
									this.props.onChangeDropdown(
										"ordenarPor",
										data.value
									)
								}
							/>
						</div>
					</div>

					<div className="ordenarToggle">
						<button
							className={
								this.props.filtros.ordenarDeMenorAMayor
									? "orderBtn orderAsc"
									: "orderBtn orderDesc"
							}
							onClick={this.props.handleOrdenarToggle}
						>
							<i className="fa fa-sort-amount-asc"></i>
						</button>
					</div>
				</div>
			</div>
		);
	}
}
