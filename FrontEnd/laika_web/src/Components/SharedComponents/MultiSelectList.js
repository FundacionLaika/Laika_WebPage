import React from "react";
import { Multiselect } from "multiselect-react-dropdown";

export default class MultiSelectList extends React.Component {
	constructor(props) {
		super(props);
		this.style = {
			chips: {
				background: "blue",
			},
			searchBox: {
				border: "none",
				borderBottom: "1px solid blue",
				borderRadius: "0px",
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
					id={this.props.id}
					onSelect={this.props.onSelect}
					onRemove={this.props.onRemove}
					options={this.props.options}
					placeholder={this.props.placeholder}
					isObject={false}
					avoidHighlightFirstOption={true}
					emptyRecordMsg="Búsqueda no encontrada"
					hidePlaceholder={true}
                    showCheckbox={true}
                    closeOnSelect={false}
                    style={this.style}
					closeIcon="cancel"
					selectedValues={this.props.selectedValues}
				/>
			</div>
		);
	}
}
