import React from "react";
import Select from "react-select";

export default class MultiSelectList extends React.Component {

	render() {
		return (
			<div>
				<Select
					className="basic-single"
					classNamePrefix="select"
					isClearable
					isSearchable
					autoFocus
					name="color"
					isMulti
					closeMenuOnSelect={false}
					noOptionsMessage={() => "Búsqueda no encontrada"}
					placeholder={this.props.placeholder}
					options={this.props.options}
					onChange={this.props.handleList}
				/>
			</div>
		);
	}
}
