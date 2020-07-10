import React, { Component } from "react";

class Esterilizacion extends Component {
	state = {
		esterilizado: "",
		citaEsterilizacion: "",
		fechaEsterilizacion: new Date(),
	};

	handleChange = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
		this.setState({
			[event.target.name]: event.target.value,
		});
	};
	render() {
		return (
			<div>
				<label>Esterilización</label>
                <br />
                <div>
                    <label>Esterilizado</label>
                    <input
                        type="radio"
                        name="esterilizado"
                        value="Si"
                        checked={this.state.esterilizado === "Si"}
                        onChange={this.handleChange}
                    />
                    <input
                        type="radio"
                        name="esterilizado"
                        value="No"
                        checked={this.state.esterilizado === "No"}
                        onChange={this.handleChange}
                    />
                </div>
                
                <div>
                    <label>¿Desea agendar cita?</label>
                    <input
                        type="radio"
                        name="citaEsterilizacion"
                        value="Si"
                        checked={this.state.citaEsterilizacion === "Si"}
                        onChange={this.handleChange}
                    />
                    <input
                        type="radio"
                        name="citaEsterilizacion"
                        value="No"
                        checked={this.state.citaEsterilizacion === "No"}
                        onChange={this.handleChange}
                    />
                </div>
				



				<input
					type="date"
					id="fechaEsterilizacion"
					name="fechaEsterilizacion"
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}

export default Esterilizacion;
