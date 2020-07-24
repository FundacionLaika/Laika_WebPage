import React from "react";
import MultiSelectList from "../../../SharedComponents/MultiSelectList";

export default class FiltroAdopcion extends React.Component {
	state = {
		plainArray: ["Instagram", "Facebook", "Petco", "Referencia", "Otro"]
	}
	render() {
		return (
			<div>
				<MultiSelectList options={this.state.plainArray} placeholder="Medio de adopción"/>
			</div>
		);
	}
}
