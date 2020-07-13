import React from "react";
import RowMed from "./RowMed";

export default class DataGridMed extends React.Component {
	render() {
		return (
			<div>
				<button onClick={this.props.addRow}>Agregar</button>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<label>Fecha Inicio</label>
					<label>Fecha Final</label>
					<label>Comentarios</label>
					<label>Acción</label>
					<label>Cita médica</label>
				</div>
				{this.props.data.map((row) => (
					<RowMed
						key={row.id}
						id={row.id}
						fechaInicio={row.fechaInicio}
						fechaFinal={row.fechaFinal}
						comentarios={row.comentarios}
						accion={row.accion}
						citaMedica={row.citaMedica}
						handleChange={this.props.modifyRow}
						deleteRow={() => this.props.deleteRow(row.id)}
					/>
				))}
			</div>
		);
	}
}
