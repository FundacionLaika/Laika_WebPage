import React from "react";

const DatePickerInput = ({ value, onClick }) => (
	<div className="fecha example-custom-input">
		<label htmlFor="fecha" className="inp">
			<input
				id="fecha"
				type="text"
				name="fecha"
				value={value}
				onClick={onClick}
				placeholder="&nbsp;"
			/>
			<span className="label">Fecha</span>
			<span className="focus-bg"></span>
		</label>
	</div>
);

export default DatePickerInput;