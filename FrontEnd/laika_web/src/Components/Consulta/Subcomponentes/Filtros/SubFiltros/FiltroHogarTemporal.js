import React from "react";
import MultiSelectList from "../../../../SharedComponents/MultiSelectList";

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
				<MultiSelectList
					options={this.state.options}
					placeholder="Tipo de HT"
					handleList={(selectedOption, action) =>
						this.props.handleList(
							selectedOption,
							action,
							"tipoHogar",
							false
						)
					}
				/>
			</div>
		);
	}
}
