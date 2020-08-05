import React from "react";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";
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
			text: "NombreResponsable",
			value: "nombreResponsable",
			image: { avatar: true, src: "/icon-nombre-responsable.png" },
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
					<Dropdown
						className="dropdownBusqueda"
						fluid
						selection
						options={this.opcionesFiltroKeyword}
						defaultValue={this.opcionesFiltroKeyword[0].value}
					/>
					<div className="botonBuscar">
						<button className="effect effect-1" type="submit">
							<span>Buscar</span>
						</button>
					</div>
				</div>

				<div className="ordenarPor">
					<span>
						Ordenar por:{" "}
						<Dropdown
							inline
							options={this.opcionesOrdenar}
							defaultValue={this.opcionesOrdenar[0].value}
						/>
					</span>

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

				<div className="exportar">
					<Link to="/Laika/GenerarPDF">
					<button className="botonExportar">
					<div>
						<div className="pencil"></div>
						<div className="folder">
							<div className="paper"></div>
						</div>
					</div>
					Generar PDF
				</button>
				
				
					</Link>
				</div>
			</div>
		);
	}
}
