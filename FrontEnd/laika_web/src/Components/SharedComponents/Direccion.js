import React, { Component } from "react";
import "./Styles/Direccion.css";

class Direccion extends Component {
	render() {
		return (
			<div className="direccion">
				<div className="labelDireccion">
					<label>Dirección</label>
				</div>
				<div className="calle">
					<label htmlFor="calle" className="inp">
						<input
							type="text"
							id="calle"
							name="calle"
							value={this.props.calle}
							onChange={this.props.handleChange}
							placeholder="&nbsp;"
						/>
						<span className="label">Calle</span>
						<span className="focus-bg"></span>
					</label>
				</div>
				<div className="numero">
					<label htmlFor="numero" className="inp">
						<input
							type="text"
							id="numero"
							name="numero"
							value={this.props.numero}
							onChange={this.props.handleChange}
							placeholder="&nbsp;"
						/>
						<span className="label">Número</span>
						<span className="focus-bg"></span>
					</label>
				</div>
				<div className="colonia">
					<label htmlFor="colonia" className="inp">
						<input
							type="text"
							id="colonia"
							name="colonia"
							value={this.props.colonia}
							onChange={this.props.handleChange}
							placeholder="&nbsp;"
						/>
						<span className="label">Colonia</span>
						<span className="focus-bg"></span>
					</label>
				</div>
				<div className="municipio">
					<label htmlFor="municipio" className="inp">
						<input
							type="text"
							id="municipio"
							name="municipio"
							value={this.props.municipio}
							onChange={this.props.handleChange}
							placeholder="&nbsp;"
						/>
						<span className="label">Municipio</span>
						<span className="focus-bg"></span>
					</label>
				</div>
			</div>
		);
	}
}

export default Direccion;
