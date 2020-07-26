import React from "react";
import MultiSelectList from "../../../../SharedComponents/MultiSelectList";

export default class FiltroExpedienteMedico extends React.Component {
	color1 = '#0052CC'
	color2 = '#8C4966'
	color3 = '#FF8B00'
	state = {
		options1: [
			{ value: "puppy", label: "Puppy", color: this.color1 },
			{ value: "refuerzoPuppy", label: "Refuerzo Puppy",color: this.color1 },
			{ value: "multiple", label: "Múltiple", color: this.color1 },
			{ value: "refuerzoMultiple", label: "Refuerzo Múltiple",color:this.color1 },
			{ value: "rabia", label: "Rabia",color: this.color1 },
		],
		options2: [
			{ value: "Sí", label: "Sí", color: this.color2, isDisabled: false},
			{ value: "No", label: "No", color: this.color2, isDisabled: false },
		],
		options3: [
			{ value: "atropellamiento", label: "Atropellamiento", color: this.color3},
			{ value: "tvt", label: "TVT", color: this.color3},
			{ value: "sarnaPiel", label: "Sarna/Piel", color: this.color3},
			{ value: "viral", label: "Viral", color: this.color3},
			{ value: "embarazo", label: "Embarazo", color: this.color3},
			{ value: "cachorros", label: "Cachorros", color: this.color3},
			{ value: "hemoparasitos", label: "Hemoparásitos", color: this.color3},
			{ value: "otro", label: "Otro", color: this.color3},
		],
	};

	render() {
		return (
			<div>
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
				<MultiSelectList
					options={this.state.options2}
					placeholder="Esterilizado"
					handleList={(selectedOption, action) =>
						this.props.handleList(
							selectedOption,
							action,
							"esterilizado",
							false
						)
					}
				/>
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
		);
	}
}
