import React, { Component } from "react";

class GenerarPDF extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: false,
			general: false,
			medico: false,
			hogar: false,
			adopcion: false,
		};
	}

	handleChange = (event) => {
		const val = event.target.checked;
		if (event.target.name === "todo") {
			this.setState({
				todo: !this.state.todo,
				general: !this.state.todo,
				medico: !this.state.todo,
				hogar: !this.state.todo,
				adopcion: !this.state.todo,
			});
		} else {
			this.setState({
				todo: false,
				[event.target.name]: val,
			});
		}
		// console.log(this.state);
		// console.log(event.target.name);
		// console.log(value);
	};

	onSubmit = (event) => {
		console.log(this.state);
	};

	render() {
		return (
			<div>
				<br />
				<br />
				<div className="center w-33 bg-light-gray">
					<nav>
						<h3 className="f3 b white fondo pa2">Generar PDF</h3>
					</nav>
					<div className="ma2 f4">
						<label className="ma2" htmlFor="todo">
							Seleccionar Todo
						</label>
						<input
							type="checkbox"
							name="todo"
							value="todo"
							checked={this.state.todo}
							onChange={this.handleChange}
						/>
					</div>
					<div className="ma2 f4">
						<label className="ma2" htmlFor="general">
							Datos Generales
						</label>
						<input
							type="checkbox"
							checked="checked"
							name="general"
							value="general"
							checked={this.state.general}
							onChange={this.handleChange}
						/>
					</div>
					<div className="ma2 f4">
						<label className="ma2" htmlFor="medico">
							Expediente Medico
						</label>
						<input
							type="checkbox"
							name="medico"
							value="medico"
							checked={this.state.medico}
							onChange={this.handleChange}
						/>
					</div>
					<div className="ma2 f4">
						<label className="ma2" htmlFor="medico">
							Hogar Temporal
						</label>
						<input
							type="checkbox"
							name="hogar"
							value="hogar"
							checked={this.state.hogar}
							onChange={this.handleChange}
						/>
					</div>
					<div className="ma2 f4">
						<label className="ma2" htmlFor="medico">
							Adopcion
						</label>
						<input
							className="pv3"
							type="checkbox"
							name="adopcion"
							value="adopcion"
							checked={this.state.adopcion}
							onChange={this.handleChange}
						/>
					</div>

					<div className="pt3 pb3">
						<button
							className="f4 white bold bg-light-purple pa1 ph2 bw0 bg-transparent pointer"
							onClick={this.onSubmit}
						>
							Confirmar
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default GenerarPDF;
