import React from "react";

export default props => (
	<div style={{ display: "flex", justifyContent: "center" }}>
		<div>

			<textarea
				id="comentarios"
				type="text"
				name="comentarios"
				defaultValue={props.row.comentarios}
				placeholder="Comentarios"
			/>
			<textarea
				id="accion"
				type="text"
				name="accion"
				defaultValue={props.row.accion}
				placeholder="Accion"
			/>
			<input autocomplete="off"
				id="fecha"
				type="date"
				name="fecha"
				defaultValue={props.row.fecha}
				placeholder="Fecha"
			/>
    	</div>
    	<button onClick={props.onDelete}>x</button>
  	</div>
);