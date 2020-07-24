import React from "react";
import SelectList from "../../../SharedComponents/SelectList";

export default class FiltroGeneral extends React.Component {
	state = {
		plainArray:["Macho", "Hembra"]
	}
	render() {
		return (
			<div>
				<SelectList id="Genero" options={this.state.plainArray} placeholder="Género"/>
			</div>
		);
	}
}
