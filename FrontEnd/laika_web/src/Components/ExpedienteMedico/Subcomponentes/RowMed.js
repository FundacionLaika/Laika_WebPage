import React from "react";

export default class RowMed extends React.Component {
	state = {
		id: this.props.id,
		fechaInicio: this.props.fechaInicio,
		fechaFinal: this.props.fechaFinal,
        comentarios: this.props.comentarios,
        accion: this.props.accion,
        citaMedica: this.props.citaMedica,
	};

	render() {
		return (
			<div style={{ display: "flex", justifyContent: "center" }}>
				<input
					id={this.props.id}
					type="date"
					name="fechaInicio"
					value={this.props.fechaInicio}
					onChange={this.props.handleChange}
					placeholder="Fecha"
				/>
                <input
					id={this.props.id}
					type="date"
					name="fechaFinal"
					value={this.props.fechaFinal}
					onChange={this.props.handleChange}
					placeholder="Fecha"
				/>
                <textarea
					id={this.props.id}
					type="text"
					name="comentarios"
					value={this.props.comentarios}
					onChange={this.props.handleChange}
					placeholder="Comentarios"
				/>
				<textarea
					id={this.props.id}
					type="text"
					name="accion"
					value={this.props.accion}
					onChange={this.props.handleChange}
					placeholder="Acción"
				/>
                 <input
					id={this.props.id}
					type="date"
					name="citaMedica"
					value={this.props.citaMedica}
					onChange={this.props.handleChange}
					placeholder="Fecha"
				/>
				<button onClick={this.props.deleteRow}>-</button>
			</div>
		);
	}
}
