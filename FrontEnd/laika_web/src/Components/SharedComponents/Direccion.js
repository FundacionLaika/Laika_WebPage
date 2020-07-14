import React, { Component } from "react";
import "./Styles/Direccion.css";

class Direccion extends Component {
	render() {
		return (
			<div className="direccion">
				<label>Dirección</label>
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
						<span class="label">Calle</span>
						<span class="focus-bg"></span>
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
						<span class="label">Número</span>
						<span class="focus-bg"></span>
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
						<span class="label">Colonia</span>
						<span class="focus-bg"></span>
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
						<span class="label">Municipio</span>
						<span class="focus-bg"></span>
					</label>
				</div>
			</div>
		);
	}
}

export default Direccion;
