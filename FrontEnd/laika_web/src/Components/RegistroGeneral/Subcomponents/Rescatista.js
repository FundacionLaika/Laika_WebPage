import React from "react";

export default (props) => (
	<div style={{ display: "flex", justifyContent: "center" }}>
		<div>{props.rescatista.text}</div>
		<button onClick={props.onDelete}>x</button>
	</div>
);
