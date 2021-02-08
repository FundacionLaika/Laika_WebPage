import React from "react";

export default class DireccionRescate extends React.Component {
	render() {
		return (
			<div>
				<input autocomplete="off"
					name="calle"
					value={this.props.calle}
					onChange={this.props.handleChange}
				/>

				<input autocomplete="off"
					name="numero"
					value={this.props.numero}
					onChange={this.props.handleChange}
				/>

				<input autocomplete="off"
					name="colonia"
					value={this.props.colonia}
					onChange={this.props.handleChange}
				/>

				<input autocomplete="off"
					name="municipio"
					value={this.props.municipio}
					onChange={this.props.handleChange}
				/>
			</div>
		);
	}
}
