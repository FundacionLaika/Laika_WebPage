import React from "react";

const DatePickerInput = React.forwardRef((props, ref) => (
	<div ref={ref} className="fecha">
		<label htmlFor={props.id} className="inp">
			<input
				id={props.id}
				type="text"
				name={props.id}
				value={props.value}
				onClick={props.onClick}
				placeholder="&nbsp;"
			/>
			<span className="label">{props.title}</span>
			<span className="focus-bg"></span>
		</label>
	</div>
));

export default DatePickerInput;
