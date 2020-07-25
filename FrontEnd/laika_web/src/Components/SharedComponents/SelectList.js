import React from "react";
import { Multiselect } from "multiselect-react-dropdown";

export default class SelectList extends React.Component {
	constructor(props) {
		super(props);
		this.style = {
			chips: {
                background: "blue",
                color:"white"
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
					options={this.props.options}
					onSelect={this.props.onSelect}
					onRemove={this.props.onRemove}
					placeholder={this.props.placeholder}
                    isObject={false}
					avoidHighlightFirstOption={true}
					emptyRecordMsg="Búsqueda no encontrada"
					hidePlaceholder={true}
                    closeOnSelect={false}
                    style={this.style}
                    selectionLimit="1"
                    closeIcon="cancel"
				/>
			</div>
		);
	}
}
