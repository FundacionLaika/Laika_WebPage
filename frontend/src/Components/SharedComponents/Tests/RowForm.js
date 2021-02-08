import React from "react";
import shortid from "shortid";

export default class RowForm extends React.Component {
	state = {
		comentarios: "",
		accion: "",
		fecha: ""
	};

	handleChange = event => {
		this.setState({
    		[event.target.name]: event.target.value
    	});
  	};

	handleSubmit = event => {
		event.preventDefault();
    	this.props.onSubmit({
      		id: shortid.generate(),
			comentarios: this.state.comentarios,
			accion: this.state.accion,
			fecha: this.state.fecha
		});
    	this.setState({
			comentarios: "",
			accion: "",
			fecha: ""
    	});
  	};

	render() {
		return (
      		<div onSubmit={this.handleSubmit}>
				<textarea
					id="comentarios"
					type="text"
					name="comentarios"
					value={this.state.comentarios}
					onChange={this.handleChange}
					placeholder="Comentarios"
				/>
				<textarea
					id="accion"
					type="text"
					name="accion"
					value={this.state.accion}
					onChange={this.handleChange}
					placeholder="Accion"
				/>
				<input autocomplete="off"
					id="fecha"
					type="date"
					name="fecha"
					value={this.state.fecha}
					onChange={this.handleChange}
					placeholder="Fecha"
				/>

        		<button onClick={this.handleSubmit}>Agregar Fila</button>
      		</div>
    	);
  	}
}