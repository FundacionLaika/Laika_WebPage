import React from "react";
import RowMed from "./RowMed";
import "../Styles/DataGridMed.css";
import "../../SharedComponents/Styles/Boton.css";

export default class DataGridMed extends React.Component {
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

				<div className="headerDG">
					<div>
						<label>Fecha Inicio</label>
					</div>

					<div>
						<label>Fecha Final</label>
					</div>

					<div>
						<label>Comentarios</label>
					</div>
					<div>
						<label>Acción</label>
					</div>

					<div>
						<label>Cita médica</label>
					</div>
				</div>
				{this.props.data.map((row) => (
					<RowMed
						className="rowDG"
						key={row.id}
						id={row.id}
						fechaInicio={row.fechaInicio}
						fechaFinal={row.fechaFinal}
						comentarios={row.comentarios}
						accion={row.accion}
						citaMedica={row.citaMedica}
						modifyRow={this.props.modifyRow}
						deleteRow={() => this.props.deleteRow(row.id)}
					/>
				))}
			</div>
		);
	}
}
