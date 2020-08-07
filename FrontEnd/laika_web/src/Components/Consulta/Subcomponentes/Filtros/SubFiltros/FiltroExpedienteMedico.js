import React from "react";
import MultiSelectList from "../../../../SharedComponents/MultiSelectList";
import "./Styles/FiltroExpedienteMedico.css";
import "./Styles/SubFiltros.css";

export default class FiltroExpedienteMedico extends React.Component {
	color1 = "#0052CC";
	color2 = "#8C4966";
	color3 = "#FF8B00";
	state = {
		options1: [
			{ value: "puppy", label: "Puppy", color: this.color1 },
			{
				value: "refuerzoPuppy",
				label: "Refuerzo Puppy",
				color: this.color1,
			},
			{ value: "multiple", label: "Múltiple", color: this.color1 },
			{
				value: "refuerzoMultiple",
				label: "Refuerzo Múltiple",
				color: this.color1,
			},
			{ value: "rabia", label: "Rabia", color: this.color1 },
		],
		options2: [
			{ value: "Sí", label: "Sí", color: this.color2, isDisabled: false },
			{ value: "No", label: "No", color: this.color2, isDisabled: false },
		],
		options3: [
			{
				value: "atropellamiento",
				label: "Atropellamiento",
				color: this.color3,
			},
			{ value: "tvt", label: "TVT", color: this.color3 },
			{ value: "sarnaPiel", label: "Sarna/Piel", color: this.color3 },
			{ value: "viral", label: "Viral", color: this.color3 },
			{ value: "embarazo", label: "Embarazo", color: this.color3 },
			{ value: "cachorros", label: "Cachorros", color: this.color3 },
			{
				value: "hemoparasitos",
				label: "Hemoparásitos",
				color: this.color3,
			},
			{ value: "otro", label: "Otro", color: this.color3 },
		],
	};
	handleEvent = (selectedOption) => {
		var stateCopy = this.state;

		if (selectedOption == null || selectedOption.length === 0) {
			stateCopy.options2[0].isDisabled = false;
			stateCopy.options2[1].isDisabled = false;

			this.setState(stateCopy);
		} else if (selectedOption[0].value === "Sí") {
			stateCopy.options2[0].isDisabled = false;
			stateCopy.options2[1].isDisabled = true;

			this.setState(stateCopy);
		} else if (selectedOption[0].value === "No") {
			stateCopy.options2[0].isDisabled = true;
			stateCopy.options2[1].isDisabled = false;

			this.setState(stateCopy);
		}
	};
	render() {
		return (
			<div className="filtroExpedienteMedico">
				<div className="filtroVacunas">
					<div className="nombreFiltro">
						<span>
							{" "}
							<i className="fa fa-medkit fa-fw" aria-hidden="true"></i> Vacunas Recibidas{" "}
						</span>
					</div>
					<div className="multiselectFiltro">
						<MultiSelectList
							options={this.state.options1}
							placeholder="Vacunas"
							handleList={(selectedOption, action) =>
								this.props.handleList(
									selectedOption,
									action,
									"vacunas",
									true
								)
							}
						/>
					</div>
				</div>
				<div className="filtroEsterilizado">
					<div className="nombreFiltro">
						<span>
							{" "}
							<i className="fa fa-user-md fa-fw" aria-hidden="true"></i> Esterilizado{" "}
						</span>
					</div>
					<div className="multiselectFiltro">
						<MultiSelectList
							options={this.state.options2}
							placeholder="Esterilizado"
							handleList={(selectedOption, action) => {
								this.props.handleList(
									selectedOption,
									action,
									"esterilizado",
									false
								);
								this.handleEvent(selectedOption);
							}}
						/>
					</div>
				</div>
				<div className="filtroDiagnostico">
					<div className="nombreFiltro">
						<span>
							{" "}
							<i className="fa fa-stethoscope fa-fw" aria-hidden="true"></i> Diagnóstico {" "}
						</span>
					</div>
					<div className="multiselectFiltro">
						<MultiSelectList
							options={this.state.options3}
							placeholder="Diagnóstico"
							handleList={(selectedOption, action) =>
								this.props.handleList(
									selectedOption,
									action,
									"diagnostico",
									true
								)
							}
						/>
					</div>
				</div>
			</div>
		);
	}
}
