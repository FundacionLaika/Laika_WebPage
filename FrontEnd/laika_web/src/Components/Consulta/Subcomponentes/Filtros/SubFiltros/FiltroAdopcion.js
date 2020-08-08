import React from "react";
import MultiSelectList from "../../../../SharedComponents/MultiSelectList";
import { Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import "./Styles/FiltroAdopcion.css";
import es from "date-fns/locale/es";
registerLocale("es", es);

export default class FiltroAdopcion extends React.Component {
	color = "#5243AA";
	state = {
		options: [
			{ value: "instagram", label: "Instagram", color: this.color },
			{ value: "facebook", label: "Facebook", color: this.color },
			{ value: "petco", label: "Petco", color: this.color },
			{ value: "referencia", label: "Referencia", color: this.color },
			{ value: "otro", label: "Otro", color: this.color },
		],
	};

	render() {
		console.log();
		return (
			<div className="filtroAdopcion">
				<div className="filtroMedioAdopcion">
					<div className="nombreFiltro">
						<span>
							{" "}
							<i className="fa fa-handshake-o fa-fw" aria-hidden="true"></i> Medio de Adopción{" "}
						</span>
					</div>
					<div className="multiselectFiltro">
						<MultiSelectList
							options={this.state.options}
							placeholder="Medio de adopción"
							handleList={(selectedOption, action) =>
								this.props.handleList(
									selectedOption,
									action,
									"medioAdopcion",
									true
								)
							}
							defaultValue={this.props.handleMultiSelectDefaultValues(this.state.options, this.props.filtros.medioAdopcion, true)}

						/>
					</div>
				</div>
				<div className="filtroRangoFechaAdopcion">
					<div className="nombreFiltro">
						<span>
							{" "}
							<i className="fa fa-calendar fa-fw" aria-hidden="true"></i> Rango de fecha de Adopción{" "}
						</span>
					</div>
					<div className="multiselectFiltro">
						<div className="fInicio">
							<DatePicker
								selectsStart
								startDate={this.props.filtros.rangoFechaAdopcion.fechaInicioAdop}
								endDate={this.props.filtros.rangoFechaAdopcion.fechaFinalAdop}
								isClearable
								useWeekdaysShort
								fixedHeight
								autoComplete="true"
								id="fechaInicioAdop"
								name="fechaInicioAdop"
								locale="es"
								dateFormat="dd/MM/yyyy"
								selected={this.props.filtros.rangoFechaAdopcion.fechaInicioAdop}
								onChange={(date) =>
									this.props.handleDate(date, "rangoFechaAdopcion", "fechaInicioAdop")
								}
								placeholderText="Fecha Inicio"
								customInput={
									<Input
										icon="calendar"
										iconPosition="left"
									/>
								}
							/>
						</div>
						<div className="fFinal">
							<DatePicker
								selectsEnd
								startDate={this.props.filtros.rangoFechaAdopcion.fechaInicioAdop}
								endDate={this.props.filtros.rangoFechaAdopcion.fechaFinalAdop}
								isClearable
								useWeekdaysShort
								fixedHeight
								autoComplete="true"
								id="fechaFinalAdop"
								name="fechaFinalAdop"
								locale="es"
								dateFormat="dd/MM/yyyy"
								selected={this.props.filtros.rangoFechaAdopcion.fechaFinalAdop}
								onChange={(date) =>
									this.props.handleDate(date, "rangoFechaAdopcion", "fechaFinalAdop")
								}
								placeholderText="Fecha Final"
								customInput={
									<Input
										icon="calendar"
										iconPosition="left"
									/>
								}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
