import React from "react";

export default class Row extends React.Component {
	state = {
		id: this.props.id,
		observaciones: this.props.observaciones,
		accion: this.props.accion,
		fecha: this.props.fecha,
	};

	render() {
		return (
			<div className="rowGA">
				<div className="observacionesGA">
					<textarea
						id={this.props.id}
						type="text"
						name="observaciones"
						value={this.props.observaciones}
						onChange={this.props.handleChange}
                        rows="3"
					/>
				</div>
				<div className="accionGA">
					<textarea
						id={this.props.id}
						type="text"
						name="accion"
						value={this.props.accion}
						onChange={this.props.handleChange}
                        rows="3"
					/>
				</div>
				<div className="fechaGA">
					<input
						id={this.props.id}
						type="date"
						name="fecha"
						value={this.props.fecha}
						onChange={this.props.handleChange}
						placeholder="Fecha"
					/>
				</div>
				<div className="botonBorrar">
					<button onClick={this.props.deleteRow}>-</button>
				</div>
			</div>
		);
	}
}
