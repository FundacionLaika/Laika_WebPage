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
			<div className="flex justify-center">
				<div className="form-field">
					<div className="form-field__control">
						<textarea
							id={this.props.id}
							className="form-field__textarea"
							placeholder=" "
							rows="4"
							name="observaciones"
							value={this.props.observaciones}
							onChange={this.props.handleChange}
						></textarea>
						<label
							htmlFor={this.props.id}
							className="form-field__label"
						>
							Observaciones
						</label>
						<div className="form-field__bar"></div>
					</div>
				</div>

				<div className="form-field">
					<div className="form-field__control">
						<textarea
							id={this.props.id}
							className="form-field__textarea"
							placeholder=" "
							rows="4"
							name="accion"
							value={this.props.accion}
							onChange={this.props.handleChange}
						></textarea>
						<label
							htmlFor={this.props.id}
							className="form-field__label"
						>
							Acción
						</label>
						<div className="form-field__bar"></div>
					</div>
				</div>

				<div>
					<input
						id={this.props.id}
						type="date"
						name="fecha"
						value={this.props.fecha}
						onChange={this.props.handleChange}
						placeholder="Fecha"
					/>
				</div>

				<div>
					<button onClick={this.props.deleteRow}>
						<i className="fa fa-eraser fa-fw"></i>
					</button>
				</div>
			</div>
		);
	}
}
