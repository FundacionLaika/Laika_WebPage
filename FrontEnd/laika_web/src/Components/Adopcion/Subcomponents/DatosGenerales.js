import React from "react";

export default class DatosGenerales extends React.Component {
	render() {
		return (
			<div>
				<label htmlFor="visitaDeAdopcion">Visita de Adopcion: </label>
				<input
					id="visitaDeAdopcion"
					type="date"
					name="visitaDeAdopcion"
					value={this.props.visitaDeAdopcion}
					onChange={this.props.handleChange}
				/>

				<label htmlFor="adoptante">Adoptante: </label>
				<input
					type="text"
					id="adoptante"
					name="adoptante"
					value={this.props.adoptante}
					onChange={this.props.handleChange}
				/>

				<label htmlFor="adoptado">Adoptado: </label>
				<input
					type="text"
					id="adoptado"
					name="adoptado"
					value={this.props.adoptado}
					onChange={this.props.handleChange}
				/>

				<label htmlFor="telefono">Telefono: </label>
				<input
					type="text"
					id="telefono"
					name="telefono"
					value={this.props.telefono}
					onChange={this.props.handleChange}
				/>

				<label htmlFor="fechaAdopcion">Visita de Adopcion: </label>
				<input
					id="fechaAdopcion"
					type="date"
					name="fechaAdopcion"
					value={this.props.fechaAdopcion}
					onChange={this.props.handleChange}
				/>
			</div>
		);
	}
}
