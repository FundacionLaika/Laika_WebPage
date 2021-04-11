import React from "react";

export default class DireccionRescate extends React.Component {
	render() {
		return (
			<div>
				<input autoComplete="off"
					name="calle"
					value={this.props.calle}
					onChange={this.props.handleChange}
				/>

				<input autoComplete="off"
					name="numero"
					value={this.props.numero}
					onChange={this.props.handleChange}
				/>

				<input autoComplete="off"
					name="colonia"
					value={this.props.colonia}
					onChange={this.props.handleChange}
				/>

				<input autoComplete="off"
					name="municipio"
					value={this.props.municipio}
					onChange={this.props.handleChange}
				/>
			</div>
		);
	}
}
