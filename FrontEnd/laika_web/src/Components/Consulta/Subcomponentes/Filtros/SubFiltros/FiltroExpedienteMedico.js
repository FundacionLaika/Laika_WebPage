import React from "react";
import SelectList from "../../../../SharedComponents/SelectList";
import MultiSelectList from "../../../../SharedComponents/MultiSelectList";

export default class FiltroExpedienteMedico extends React.Component {
	state = {
		plainArray1: [
			"Puppy",
			"Refuerzo Puppy",
			"Múltiple",
			"Refuerzo Múltiple",
			"Rabia",
		],
		plainArray2: ["Sí", "No"],
		plainArray3: [
			"Atropellamiento",
			"TVT",
			"Sarna/Piel",
			"Viral",
			"Embarazo",
			"Cachorros",
			"Hemoparásitos",
			"Otro",
		],
	};

	render() {
		return (
			<div>
				<div>
					<MultiSelectList
						id="Vacunas"
						options={this.state.plainArray1}
						placeholder="Vacunas"
						onSelect={(selectedList, selectedItem) =>
							this.props.onSelect(
								selectedList,
								selectedItem,
								"Vacunas"
							)
						}
						onRemove={(selectedList, removedItem) =>
							this.props.onRemove(
								selectedList,
								removedItem,
								"Vacunas"
							)
						}
					/>
				</div>
				<div>
					<SelectList
						id="Esterilizado"
						options={this.state.plainArray2}
						placeholder="Esterilizado"
						onSelect={(selectedList, selectedItem) =>
							this.props.onSelect(
								selectedList,
								selectedItem,
								"Esterilizado"
							)
						}
						onRemove={(selectedList, removedItem) =>
							this.props.onRemove(
								selectedList,
								removedItem,
								"Esterilizado"
							)
						}
					/>
				</div>
				<div>
					<MultiSelectList
						id="Diagnostico"
						options={this.state.plainArray3}
						placeholder="Diagnóstico"
						onSelect={(selectedList, selectedItem) =>
							this.props.onSelect(
								selectedList,
								selectedItem,
								"Diagnostico"
							)
						}
						onRemove={(selectedList, removedItem) =>
							this.props.onRemove(
								selectedList,
								removedItem,
								"Diagnostico"
							)
						}
					/>
				</div>
			</div>
		);
	}
}
