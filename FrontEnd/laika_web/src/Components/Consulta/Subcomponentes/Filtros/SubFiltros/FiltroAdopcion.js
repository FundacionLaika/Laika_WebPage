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
		fechaInicioAdop: null,
		fechaFinalAdop: null,
	};

	/*Manejador de dates*/
	handleDate = (fecha, name) => {
		this.setState({
			[name]: fecha,
		});
		console.log(this.state);
	};

	render() {
		console.log();
		return (
			<div className="filtroAdopcion">
				<div className="filtroMedioAdopcion">
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
					/>
				</div>
				<div className="filtroRangoFechaAdopcion">
					<DatePicker
						selectsStart
						startDate={this.state.fechaInicioAdop}
						endDate={this.state.fechaFinalAdop}
						isClearable
						useWeekdaysShort
						fixedHeight
						autoComplete="true"
						id="fechaInicioAdop"
						name="fechaInicioAdop"
						locale="es"
						dateFormat="dd/MM/yyyy"
						selected={this.state.fechaInicioAdop}
						onChange={(date) =>
							this.handleDate(date, "fechaInicioAdop")
						}
						placeholderText="Fecha Inicio"
						customInput={
							<Input icon="calendar" iconPosition="left" />
						}
					/>
					<DatePicker
						selectsEnd
						startDate={this.state.fechaInicioAdop}
						endDate={this.state.fechaFinalAdop}
						isClearable
						useWeekdaysShort
						fixedHeight
						autoComplete="true"
						id="fechaFinalAdop"
						name="fechaFinalAdop"
						locale="es"
						dateFormat="dd/MM/yyyy"
						selected={this.state.fechaFinalAdop}
						onChange={(date) =>
							this.handleDate(date, "fechaFinalAdop")
						}
						placeholderText="Fecha Final"
						customInput={
							<Input icon="calendar" iconPosition="left" />
						}
					/>
				</div>
			</div>
		);
	}
}
