import React from "react";
import Row from "./Row";
import "../../Adopcion/Styles/Adopcion.css";
import "./Styles/DataGrid.css";
import "../Styles/Boton.css";

export default class DataGrid extends React.Component {
	render() {
		return (
			<div className="DGAArea">
				<div className="agregarDG">
					<button
						className="btn btn-4 btn-sep icon-plus"
						onClick={this.props.addRow}
					>
						Agregar Fila
					</button>
				</div>

				<div className="headerGA">
					<div>
						<label>Observaciones</label>
					</div>

					<div>
						<label>Acción</label>
					</div>

					<div>
						<label>Fecha</label>
					</div>
				</div>
				{this.props.data.map((row) => (
					<Row
						className="rowGA"
						key={row.id}
						id={row.id}
						observaciones={row.observaciones}
						accion={row.accion}
						fecha={row.fecha}
						modifyRow={this.props.modifyRow}
						deleteRow={() => this.props.deleteRow(row.id)}
					/>
				))}
			</div>
		);
	}
}
