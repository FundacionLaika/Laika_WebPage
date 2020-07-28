import React from "react";
import MultiSelectList from "../../../../SharedComponents/MultiSelectList";
import { Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default class FiltroGeneral extends React.Component {
	color = "#FF5630";
	state = {
		options: [
			{
				value: "macho",
				label: "Macho",
				color: this.color,
				isDisabled: false,
			},
			{
				value: "hembra",
				label: "Hembra",
				color: this.color,
				isDisabled: false,
			},
		],
	};

	handleEvent = (selectedOption) => {
		var stateCopy = this.state;

		if (selectedOption == null || selectedOption.length === 0) {
			stateCopy.options[0].isDisabled = false;
			stateCopy.options[1].isDisabled = false;

			this.setState(stateCopy);
		} else if (selectedOption[0].value === "macho") {
			stateCopy.options[0].isDisabled = false;
			stateCopy.options[1].isDisabled = true;

			this.setState(stateCopy);
		} else if (selectedOption[0].value === "hembra") {
			stateCopy.options[0].isDisabled = true;
			stateCopy.options[1].isDisabled = false;

			this.setState(stateCopy);
		}
	};

	render() {
		return (
			<div>
				<Input icon="birthday cake" iconPosition="left" />
				<MultiSelectList
					options={this.state.options}
					placeholder="Género"
					handleList={(selectedOption, action) => {
						this.props.handleList(
							selectedOption,
							action,
							"genero",
							false
						);
						this.handleEvent(selectedOption);
					}}
				/>
			</div>
		);
	}
}
