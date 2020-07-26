import React from "react";
import Select from "react-select";
import chroma from "chroma-js";

const colourStyles = {
	control: (styles) => ({ ...styles, backgroundColor: "white" }),
	option: (styles, { data, isDisabled, isFocused, isSelected }) => {
		const color = chroma(data.color);
		return {
			...styles,
			backgroundColor: isDisabled
				? null
				: isSelected
				? data.color
				: isFocused
				? color.alpha(0.1).css()
				: null,
			color: isDisabled
				? "#ccc"
				: isSelected
				? chroma.contrast(color, "white") > 2
					? "white"
					: "black"
				: data.color,
			cursor: isDisabled ? "not-allowed" : "default",

			":active": {
				...styles[":active"],
				backgroundColor:
					!isDisabled &&
					(isSelected ? data.color : color.alpha(0.3).css()),
			},
		};
	},
	multiValue: (styles, { data }) => {
		const color = chroma(data.color);
		return {
			...styles,
			backgroundColor: color.alpha(0.1).css(),
		};
	},
	multiValueLabel: (styles, { data }) => ({
		...styles,
		color: data.color,
	}),
	multiValueRemove: (styles, { data }) => ({
		...styles,
		color: data.color,
		":hover": {
			backgroundColor: data.color,
			color: "white",
		},
	}),
};
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
					styles={colourStyles}
				/>
			</div>
		);
	}
}
