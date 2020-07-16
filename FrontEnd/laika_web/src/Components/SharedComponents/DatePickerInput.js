import React from "react";

const DatePickerInput = ({ value, onClick ,id,title}) => (
	<div className="fecha example-custom-input">
		<label htmlFor={id} className="inp">
			<input
				id={id}
				type="text"
				name={id}
				value={value}
				onClick={onClick}
				placeholder="&nbsp;"
			/>
			<span className="label">{title}</span>
			<span className="focus-bg"></span>
		</label>
	</div>
);

export default DatePickerInput;