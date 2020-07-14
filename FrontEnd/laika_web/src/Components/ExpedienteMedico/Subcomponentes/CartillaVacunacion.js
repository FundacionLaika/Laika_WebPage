import React, { Component } from "react";
import "../Styles/Checkboxes.css";

class CartillaVacunacion extends Component {
	render() {
		return (
			<div className="cartillaVacunacion cbx">
				<div className="puppy">
					<input
						type="checkbox"
						id="puppy"
						name="puppy"
						value="puppy"
						checked={this.props.puppy}
						onChange={this.props.handleChange}
					/>

					<label htmlFor="puppy" class="label">
						Puppy
					</label>

					<input
						type="date"
						id="fechaPuppy"
						name="fechaPuppy"
						value={this.props.fechaPuppy}
						onChange={this.props.handleChange}
					/>
				</div>
				<div className="refuerzoPuppy">
					<input
						type="checkbox"
						id="refuerzoPuppy"
						name="refuerzoPuppy"
						value="refuerzoPuppy"
						checked={this.props.refuerzoPuppy}
						onChange={this.props.handleChange}
					/>
					<label htmlFor="refuerzoPuppy">Refuerzo Puppy</label>

					<input
						type="date"
						id="fechaRefuerzoPuppy"
						name="fechaRefuerzoPuppy"
						value={this.props.fechaRefuerzoPuppy}
						onChange={this.props.handleChange}
					/>
				</div>
				<div className="multiple">
					<input
						type="checkbox"
						id="multiple"
						name="multiple"
						value="multiple"
						checked={this.props.multiple}
						onChange={this.props.handleChange}
					/>
					<label htmlFor="multiple">Múltiple</label>
					<input
						type="date"
						id="fechaMultiple"
						name="fechaMultiple"
						value={this.props.fechaMultiple}
						onChange={this.props.handleChange}
					/>
				</div>
				<div className="refuerzoMultiple">
					<input
						type="checkbox"
						id="refuerzoMultiple"
						name="refuerzoMultiple"
						value="refuerzoMultiple"
						checked={this.props.refuerzoMultiple}
						onChange={this.props.handleChange}
					/>
					<label htmlFor="refuerzoMultiple">Refuerzo Múltiple</label>
					<input
						type="date"
						id="fechaRefuerzoMultiple"
						name="fechaRefuerzoMultiple"
						value={this.props.fechaRefuerzoMultiple}
						onChange={this.props.handleChange}
					/>
				</div>
				<div className="rabia">
					<input
						type="checkbox"
						id="rabia"
						name="rabia"
						value="rabia"
						checked={this.props.rabia}
						onChange={this.props.handleChange}
					/>
					<label htmlFor="rabia">Rabia</label>
					<input
						type="date"
						id="fechaRabia"
						name="fechaRabia"
						value={this.props.fechaRabia}
						onChange={this.props.handleChange}
					/>
				</div>
			</div>
		);
	}
}

export default CartillaVacunacion;
