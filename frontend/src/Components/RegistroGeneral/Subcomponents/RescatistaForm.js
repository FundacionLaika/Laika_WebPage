import React from "react";
import shortid from "shortid";

export default class RescatismaForm extends React.Component {
	state = {
		text: "",
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit({
			id: shortid.generate(),
			text: this.state.text,
		});
		this.setState({
			text: "",
		});
	};

	render() {
		return (
			<div onSubmit={this.handleSubmit}>
				<div className="ui left icon input fluid">
					<input autocomplete="off"
						style={{borderRadius:"1rem 0 0 0"}}
						type="text"
						name="text"
						value={this.state.text}
						onChange={this.handleChange}
						placeholder="Nombre del rescatista"
					/>
					<i aria-hidden="true" className="users icon"></i>
					<button
						className="ui animated button"
						onClick={this.handleSubmit}
						style={{borderRadius:"0 1rem 0 0"}}
					>
						<div className="visible content">
							Agregar Rescatista
						</div>
						<div className="hidden content">
							<i aria-hidden="true" className="arrow right icon"></i>
						</div>
					</button>
				</div>
			</div>
		);
	}
}
