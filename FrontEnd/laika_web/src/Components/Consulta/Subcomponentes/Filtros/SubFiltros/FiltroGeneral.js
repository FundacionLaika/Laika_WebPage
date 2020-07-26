import React from "react";
import SelectList from "../../../../SharedComponents/SelectList";

export default class FiltroGeneral extends React.Component {
	state = {
		options: [
			{ value: "macho", label: "Macho" },
			{ value: "hembra", label: "Hembra" },
		],
	};
	render() {
		return (
			<div>
				<SelectList
					options={this.state.options}
					placeholder="Género"
					handleList={this.props.handleList}
				/>
			</div>
		);
	}
}
