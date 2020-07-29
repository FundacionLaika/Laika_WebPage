import React from "react";
import "../Styles/Rescatistas.css";

export default (props) => (
	<div>
		<div className="rowRescatistaText">{props.rescatista.text}</div>
		<div className="rowRescatistaBorrar">
			<button className="botonBorrarRescatista" onClick={props.onDelete}>
				<i className="fa fa-times-circle" aria-hidden="true"></i>
			</button>
		</div>
	</div>
);
