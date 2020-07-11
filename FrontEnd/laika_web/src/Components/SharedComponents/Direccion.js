import React, { Component } from "react";

class Direccion extends Component {
	render() {
		return (
			<div>
				<label>Dirección</label>

				<label htmlFor="calle">Calle: </label>
				<input
					type="text"
					id="calle"
					name="calle"
					value={this.props.calle}
					onChange={this.props.handleChange}
				/>

				<label htmlFor="numero">Número: </label>
				<input
					type="text"
					id="numero"
					name="numero"
					value={this.props.numero}
					onChange={this.props.handleChange}
				/>

				<label htmlFor="colonia">Colonia: </label>
				<input
					type="text"
					id="colonia"
					name="colonia"
					value={this.props.colonia}
					onChange={this.props.handleChange}
				/>

				<label htmlFor="municipio">Municipio: </label>
				<input
					type="text"
					id="municipio"
					name="municipio"
					value={this.props.municipio}
					onChange={this.props.handleChange}
				/>
			</div>
		);
	}
}

export default Direccion;
