import React, { Component } from "react";
import "../Styles/Checkboxes.css";

class CartillaVacunacion extends Component {
	render() {
		return (
			<div className="cartillaVacunacion">
				<div className="puppy">
					<div className="cb cb-cv">
						<input
							type="checkbox"
							id="puppy"
							name="puppy"
							value="puppy"
							checked={this.props.puppy}
							onChange={this.props.handleChange}
						/>
						<label htmlFor="puppy">
							<span></span>
						</label>
					</div>

					<div id="lb">
						<label>Puppy</label>
					</div>

					<div id="dt">
						<input
							type="date"
							id="fechaPuppy"
							name="fechaPuppy"
							value={this.props.fechaPuppy}
							onChange={this.props.handleChange}
						/>
					</div>
				</div>

				<div className="refuerzoPuppy">
					<div className="cb cb-cv">
						<input
							type="checkbox"
							id="refuerzoPuppy"
							name="refuerzoPuppy"
							value="refuerzoPuppy"
							checked={this.props.refuerzoPuppy}
							onChange={this.props.handleChange}
						/>
						<label htmlFor="refuerzoPuppy">
							<span></span>
						</label>
					</div>

					<div id="lb">
						<label>Refuerzo Puppy</label>
					</div>

					<div id="dt">
						<input
							type="date"
							id="fechaRefuerzoPuppy"
							name="fechaRefuerzoPuppy"
							value={this.props.fechaRefuerzoPuppy}
							onChange={this.props.handleChange}
						/>
					</div>
				</div>

				<div className="multiple">
					<div className="cb cb-cv">
						<input
							type="checkbox"
							id="multiple"
							name="multiple"
							value="multiple"
							checked={this.props.multiple}
							onChange={this.props.handleChange}
						/>
						<label htmlFor="multiple">
							<span></span>
						</label>
					</div>

					<div id="lb">
						<label>Múltiple</label>
					</div>

					<div id="dt">
						<input
							type="date"
							id="fechaMultiple"
							name="fechaMultiple"
							value={this.props.fechaMultiple}
							onChange={this.props.handleChange}
						/>
					</div>
				</div>
				<div className="refuerzoMultiple">
					<div className="cb cb-cv">
						<input
							type="checkbox"
							id="refuerzoMultiple"
							name="refuerzoMultiple"
							value="refuerzoMultiple"
							checked={this.props.refuerzoMultiple}
							onChange={this.props.handleChange}
						/>
						<label htmlFor="refuerzoMultiple">
							<span></span>
						</label>
					</div>

					<div id="lb">
						<label>Refuerzo Múltiple</label>
					</div>

					<div id="dt">
						<input
							type="date"
							id="fechaRefuerzoMultiple"
							name="fechaRefuerzoMultiple"
							value={this.props.fechaRefuerzoMultiple}
							onChange={this.props.handleChange}
						/>
					</div>
				</div>
				<div className="rabia">
					<div className="cb cb-cv">
						<input
							type="checkbox"
							id="rabia"
							name="rabia"
							value="rabia"
							checked={this.props.rabia}
							onChange={this.props.handleChange}
						/>
						<label htmlFor="rabia">
							<span></span>
						</label>
					</div>

					<div id="lb">
						<label>Rabia</label>
					</div>

					<div id="dt">
						<input
							type="date"
							id="fechaRabia"
							name="fechaRabia"
							value={this.props.fechaRabia}
							onChange={this.props.handleChange}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default CartillaVacunacion;