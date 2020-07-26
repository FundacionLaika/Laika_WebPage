import React from "react";
import SelectList from "../../../../SharedComponents/SelectList";

export default class FiltroGeneral extends React.Component {
	state = {
		options: [
			{ value: "macho", label: "Macho" ,color: '#FF5630'},
			{ value: "hembra", label: "Hembra" ,color: '#FF5630'},
		],
	};
	render() {
		return (
			<div>
				<SelectList
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
