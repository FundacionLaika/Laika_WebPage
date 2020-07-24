import React from "react";
import SelectList from "../../../../SharedComponents/SelectList";

export default class FiltroHogarTemporal extends React.Component {
	state = {
		plainArray: ["Veterinaria","Persona"]
	}
	render() {
		return (
			<div>
				<SelectList id="TipoHT" options={this.state.plainArray} placeholder="Tipo de HT" onSelect={this.props.onSelect} onRemove={this.props.onRemove}/>
			</div>
		);
	}
}
