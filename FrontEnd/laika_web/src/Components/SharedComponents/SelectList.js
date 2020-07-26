import React from "react";
import Select from 'react-select';


export default class SelectList extends React.Component {
	render() {
		return (
			<div>
				<Select
					className="basic-single"
					classNamePrefix="select"
					isClearable
					isSearchable
					name="color"
					noOptionsMessage={() => 'Búsqueda no encontrada'}
					placeholder={this.props.placeholder}
					options={this.props.options}
				/>
			</div>
		);
	}
}
