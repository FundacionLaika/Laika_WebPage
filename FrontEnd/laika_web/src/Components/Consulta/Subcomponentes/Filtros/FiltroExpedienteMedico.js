import React from "react";
import SelectList from "../../../SharedComponents/SelectList";
import MultiSelectList from "../../../SharedComponents/MultiSelectList";


export default class FiltroExpedienteMedico extends React.Component {
	state = {
		plainArray1: ["Puppy","Refuerzo Puppy","Mútliple","Refuerzo Múltiple","Rabia"],
		plainArray2: ["Sí", "No"],
		plainArray3: ["Atropellamiento","TVT","Sarna/Piel","Viral","Embarazo","Cachorros","Hemoparásitos","Otro"]
	}
	render() {
		return (
			<div>
				<div>
					<MultiSelectList options={this.state.plainArray1} placeholder="Vacunas"/>
				</div>
				<div>
					<SelectList options={this.state.plainArray2} placeholder="Esterilizado"/>
				</div>
				<div>
					<MultiSelectList options={this.state.plainArray3} placeholder="Diagnóstico"/>
				</div>
			</div>
		);
	}
}
