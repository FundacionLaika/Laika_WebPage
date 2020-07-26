import React from "react";
import SelectList from "../../../../SharedComponents/SelectList";
import MultiSelectList from "../../../../SharedComponents/MultiSelectList";

export default class FiltroExpedienteMedico extends React.Component {
	state = {
		options1: [
			{ value: "puppy", label: "Puppy" },
			{ value: "refuerzoPuppy", label: "Refuerzo Puppy" },
			{ value: "multiple", label: "Múltiple" },
			{ value: "refuerzoMultiple", label: "Refuerzo Múltiple" },
			{ value: "rabia", label: "Rabia" },
		],
		options2: [
			{ value: "Sí", label: "Sí" },
			{ value: "No", label: "No" },
		],
		options3: [
			{ value: "atropellamiento", label: "Atropellamiento" },
			{ value: "tvt", label: "TVT" },
			{ value: "sarnaPiel", label: "Sarna/Piel" },
			{ value: "viral", label: "Viral" },
			{ value: "embarazo", label: "Embarazo" },
			{ value: "cachorros", label: "Cachorros" },
			{ value: "hemoparasitos", label: "Hemoparásitos" },
			{ value: "otro", label: "Otro" },
		],
	};

	render() {
		return (
			<div>
				<MultiSelectList
					options={this.state.options1}
					placeholder="Vacunas"
					handleList={this.props.handleList}
				/>
				<SelectList
					options={this.state.options2}
					placeholder="Esterilizado"
					handleList={this.props.handleList}
				/>
				<MultiSelectList
					options={this.state.options3}
					placeholder="Diagnóstico"
					handleList={this.props.handleList}
				/>
			</div>
		);
	}
}
