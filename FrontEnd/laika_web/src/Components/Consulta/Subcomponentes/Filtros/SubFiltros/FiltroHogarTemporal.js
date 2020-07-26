import React from "react";
import SelectList from "../../../../SharedComponents/SelectList";

export default class FiltroHogarTemporal extends React.Component {
	state = {
		options: [
			{ value: "persona", label: "Persona" },
			{ value: "veterinaria", label: "Veterinaria" },
		],
	};
	render() {
		return (
			<div>
				<SelectList
					options={this.state.options}
					placeholder="Tipo de HT"
				/>
			</div>
		);
	}
}
