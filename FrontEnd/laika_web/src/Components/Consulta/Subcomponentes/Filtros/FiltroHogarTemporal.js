import React from "react";
import SelectList from "../../../SharedComponents/SelectList";

export default class FiltroHogarTemporal extends React.Component {
	state = {
		plainArray: ["Veterinaria","Persona"]
	}
	render() {
		return (
			<div>
				<SelectList options={this.state.plainArray} placeholder="Tipo de HT"/>
			</div>
		);
	}
}
