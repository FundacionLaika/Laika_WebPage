import React from "react";
import shortid from "shortid";

export default class RescatismaForm extends React.Component {
	state = {
		text: ""
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
      		text: this.state.text,
		});
    	this.setState({
      		text: ""
    	});
  	};

	render() {
		return (
      		<div onSubmit={this.handleSubmit}>
        		<input
          			name="text"
          			value={this.state.text}
          			onChange={this.handleChange}
          			placeholder="Nombre del rescatista"
        		/>
        		<button onClick={this.handleSubmit}>Agregar Rescatista</button>
      		</div>
    	);
  	}
}