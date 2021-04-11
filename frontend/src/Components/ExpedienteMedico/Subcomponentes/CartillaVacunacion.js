import React, { Component } from "react";
import "../Styles/Checkboxes.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import "../../SharedComponents/Styles/TextArea.css";
import es from "date-fns/locale/es";
import DatePickerInput from "../../SharedComponents/DatePickerInput.js";
registerLocale("es", es);

class CartillaVacunacion extends Component {
	render() {
		return (
			<div>
				<div className="headerCartillaVacunacion">
					{" "}
					<i
						aria-hidden="true"
						className="fa fa-medkit fa-fw separation"
					></i>
					Cartilla de vacunación
				</div>
				<div className="cartillaVacunacion">
					<div className="puppy">
						<div className="cb cb-cv">
							<input autoComplete="off"
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
							<DatePicker
								isClearable
								useWeekdaysShort
								fixedHeight
								autoComplete
								customInput={<DatePickerInput />}
								title="Fecha Puppy"
								id="fechaPuppy"
								name="fechaPuppy"
								locale="es"
								selected={this.props.fechaPuppy}
								dateFormat="dd/MM/yyyy"
								onChange={(date) =>
									this.props.handleDate(date, "fechaPuppy")
								}
							/>
						</div>
					</div>

					<div className="refuerzoPuppy">
						<div className="cb cb-cv">
							<input autoComplete="off"
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
							<DatePicker
								isClearable
								useWeekdaysShort
								fixedHeight
								autoComplete
								customInput={<DatePickerInput />}
								title="Fecha RP"
								id="fechaRefuerzoPuppy"
								name="fechaRefuerzoPuppy"
								locale="es"
								selected={this.props.fechaRefuerzoPuppy}
								dateFormat="dd/MM/yyyy"
								onChange={(date) =>
									this.props.handleDate(
										date,
										"fechaRefuerzoPuppy"
									)
								}
							/>
						</div>
					</div>

					<div className="multiple">
						<div className="cb cb-cv">
							<input autoComplete="off"
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
							<DatePicker
								isClearable
								useWeekdaysShort
								fixedHeight
								autoComplete
								customInput={<DatePickerInput />}
								title="Fecha Múltiple"
								id="fechaMultiple"
								name="fechaMultiple"
								locale="es"
								selected={this.props.fechaMultiple}
								dateFormat="dd/MM/yyyy"
								onChange={(date) =>
									this.props.handleDate(date, "fechaMultiple")
								}
							/>
						</div>
					</div>
					<div className="refuerzoMultiple">
						<div className="cb cb-cv">
							<input autoComplete="off"
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
							<DatePicker
								isClearable
								useWeekdaysShort
								fixedHeight
								autoComplete
								customInput={<DatePickerInput />}
								title="Fecha RM"
								id="fechaRefuerzoMultiple"
								name="fechaRefuerzoMultiple"
								locale="es"
								selected={this.props.fechaRefuerzoMultiple}
								dateFormat="dd/MM/yyyy"
								onChange={(date) =>
									this.props.handleDate(
										date,
										"fechaRefuerzoMultiple"
									)
								}
							/>
						</div>
					</div>
					<div className="rabia">
						<div className="cb cb-cv">
							<input autoComplete="off"
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
							<DatePicker
								isClearable
								useWeekdaysShort
								fixedHeight
								autoComplete
								customInput={<DatePickerInput />}
								title="Fecha Rabia"
								id="fechaRabia"
								name="fechaRabia"
								locale="es"
								selected={this.props.fechaRabia}
								dateFormat="dd/MM/yyyy"
								onChange={(date) =>
									this.props.handleDate(date, "fechaRabia")
								}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CartillaVacunacion;
