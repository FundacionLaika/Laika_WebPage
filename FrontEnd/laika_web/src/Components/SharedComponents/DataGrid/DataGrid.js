import React from "react";
import Row from "./Row";

export default class DataGrid extends React.Component {
	render() {
		return (
			<div>
				<button onClick={this.props.addRow}>Agregar</button>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<label>Observaciones</label>
					<label>Acción</label>
					<label>Fecha</label>
				</div>
				{this.props.data.map((row) => (
					<Row
						key={row.id}
						id={row.id}
						observaciones={row.observaciones}
						accion={row.accion}
						fecha={row.fecha}
						handleChange={this.props.modifyRow}
						deleteRow={() => this.props.deleteRow(row.id)}
					/>
				))}
			</div>
		);
	}
}
