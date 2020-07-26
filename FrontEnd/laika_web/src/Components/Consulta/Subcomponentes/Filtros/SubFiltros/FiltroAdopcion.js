import React from "react";
import MultiSelectList from "../../../../SharedComponents/MultiSelectList";

export default class FiltroAdopcion extends React.Component {
	state = {
		options: [
			{ value: "instagram", label: "Instagram" },
			{ value: "facebook", label: "Facebook" },
			{ value: "petco", label: "Petco" },
			{ value: "referencia", label: "Referencia" },
			{ value: "otro", label: "Otro" },
		],
	};
	render() {
		return (
			<div>
				<MultiSelectList
					options={this.state.options}
					placeholder="Medio de adopción"
				/>
			</div>
		);
	}
}
