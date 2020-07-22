import React from "react";
import "./DataGrid/Styles/DataGrid.css";

const DatePickerInput = React.forwardRef((props, ref) => (
	<div ref={ref} className="fecha">
		<label htmlFor={props.id} className="inp">
			<input
				id={props.id}
				type="text"
				name={props.id}
				value={props.value}
				onClick={props.onClick}
				readOnly
				placeholder="&nbsp;"
			/>
			<span className="label">{props.title}</span>
			<span className="focus-bg"></span>
		</label>
	</div>
));

export const DatePickerInput2 = React.forwardRef((props, ref) => (
	<div ref={ref} className="fechaPicker">
		<input
			id={props.id}
			type="text"
			name={props.id}
			value={props.value}
			onClick={props.onClick}
			readOnly
			placeholder="&nbsp;"
			className="inputFechaDG"
		/>
	</div>
));

export default DatePickerInput;
