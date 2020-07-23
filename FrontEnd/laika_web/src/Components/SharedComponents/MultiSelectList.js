import React from "react";
import { Multiselect } from "multiselect-react-dropdown";

export default class MultiSelectList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			plainArray: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
		};
		this.style = {
			chips: {
				background: "blue",
			},
			searchBox: {
				border: "none",
				"border-bottom": "1px solid blue",
				"border-radius": "0px",
			},
			multiselectContainer: {
				color: "blue",
			},
		};
	}

	render() {
		return (
			<div>
				<Multiselect
					options={this.state.plainArray}
					isObject={false}
					avoidHighlightFirstOption={true}
					emptyRecordMsg="Búsqueda no encontrada"
					hidePlaceholder={true}
                    showCheckbox={true}
                    closeOnSelect={false}
                    style={this.style}
                    closeIcon="cancel"
				/>
			</div>
		);
	}
}
