import React from "react";
import MultiSelectList from "../../../../SharedComponents/MultiSelectList";

export default class FiltroGeneral extends React.Component {
	color = '#FF5630'
	state = {
		options: [
			{ value: "macho", label: "Macho" ,color: this.color, isDisabled: false},
			{ value: "hembra", label: "Hembra" ,color: this.color, isDisabled: false},
		],
	};

	render() {
		return (
			<div>
				<MultiSelectList
					options={this.state.options}
					placeholder="Género"
					handleList={(selectedOption, action) =>
						this.props.handleList(
							selectedOption,
							action,
							"genero",
							false
						)
					}
				/>
			</div>
		);
	}
}
