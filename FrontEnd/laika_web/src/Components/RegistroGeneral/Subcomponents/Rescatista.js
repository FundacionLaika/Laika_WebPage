import React from "react";
import "../Styles/Rescatistas.css";

export default (props) => (
	<div className="rowRescatista">
		<div className="rowRescatistaText">{props.rescatista.text}</div>
		<div className="rowRescatistaBorrar botonBorrarRescatista">
			<button onClick={props.onDelete}>
				<i className="fa fa-times-circle" aria-hidden="true"></i>
			</button>
		</div>
	</div>
);
