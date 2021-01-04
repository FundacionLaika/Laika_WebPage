import React from "react";
import MultiSelectList from "../../../../SharedComponents/MultiSelectList";
import "semantic-ui-css/semantic.min.css";
import "./Styles/FiltroGeneral.css";

export default class FiltroGeneral extends React.Component {
	color1 = "#FF5630";
	color2 = "#B6E124";
	color3 = "#24E1AD";

	state = {
		options1: [
			{
				value: "macho",
				label: "Macho",
				color: this.color1,
				isDisabled: false,
			},
			{
				value: "hembra",
				label: "Hembra",
				color: this.color1,
				isDisabled: false,
			},
		],
		options2: [
			{
				value: "canino",
				label: "Canino",
				color: this.color2,
			},
			{
				value: "felino",
				label: "Felino",
				color: this.color2,
			},
			{
				value: "otro",
				label: "Otro",
				color: this.color2,
			},
		],
		options3: [
			{
				value: "activo",
				label: "Activo",
				color: this.color3,
			},
			{
				value: "fallecido",
				label: "Fallecido",
				color: this.color3,
			},
			{
				value: "enTratamiento",
				label: "En tratamiento",
				color: this.color3,
			},
			{
				value: "adoptado",
				label: "Adoptado",
				color: this.color3,
			},
		],
	};

	handleEvent = (selectedOption) => {
		var stateCopy = this.state;

		if (selectedOption == null || selectedOption.length === 0) {
			stateCopy.options1[0].isDisabled = false;
			stateCopy.options1[1].isDisabled = false;

			this.setState(stateCopy);
		} else if (selectedOption[0].value === "macho") {
			stateCopy.options1[0].isDisabled = false;
			stateCopy.options1[1].isDisabled = true;

			this.setState(stateCopy);
		} else if (selectedOption[0].value === "hembra") {
			stateCopy.options1[0].isDisabled = true;
			stateCopy.options1[1].isDisabled = false;

			this.setState(stateCopy);
		}
	};

	render() {
		return (
			<div className="filtroGeneral">
				<div className="filtroGenero">
					<div className="nombreFiltro">
						<span>
							{" "}
							<i
								className="fa fa-venus-mars fa-fw"
								aria-hidden="true"
							></i>{" "}
							Género{" "}
						</span>
					</div>
					<div className="multiselectFiltro">
						<MultiSelectList
							options={this.state.options1}
							placeholder="Género"
							handleList={(selectedOption, action) => {
								this.props.handleList(
									selectedOption,
									action,
									"genero",
									false
								);
								this.handleEvent(selectedOption);
							}}
							defaultValue={this.props.handleMultiSelectDefaultValues(this.state.options1, this.props.filtros.genero, false)}
						/>
					</div>
				</div>

				<div className="filtroEspecie">
					<div className="nombreFiltro">
						<span>
							{" "}
							<i
								className="fa fa-paw fa-fw"
								aria-hidden="true"
							></i>{" "}
							Especie{" "}
						</span>
					</div>
					<div className="multiselectFiltro">
						<MultiSelectList
							options={this.state.options2}
							placeholder="Especie"
							handleList={(selectedOption, action) => {
								this.props.handleList(
									selectedOption,
									action,
									"especie",
									true
								);
								this.handleEvent(selectedOption);
							}}
							defaultValue={this.props.handleMultiSelectDefaultValues(this.state.options2, this.props.filtros.especie, true)}

						/>
					</div>
				</div>

				<div className="filtroEstatus">
					<div className="nombreFiltro">
						<span>
							{" "}
							<i
								className="fa fa-info-circle fa-fw"
								aria-hidden="true"
							></i>{" "}
							Estatus{" "}
						</span>
					</div>
					<div className="multiselectFiltro">
						<MultiSelectList
							options={this.state.options3}
							placeholder="Estatus"
							handleList={(selectedOption, action) => {
								this.props.handleList(
									selectedOption,
									action,
									"estatus",
									true
								);
								this.handleEvent(selectedOption);
							}}
							defaultValue={this.props.handleMultiSelectDefaultValues(this.state.options3, this.props.filtros.estatus, true)}
						/>
					</div>
				</div>
			</div>
		);
	}
}
