import React from "react";
import SelectList from "../../../../SharedComponents/SelectList";

export default class FiltroHogarTemporal extends React.Component {
	state = {
		plainArray: ["Veterinaria", "Persona"],
	};
	render() {
		return (
			<div>
				<SelectList
					id="TipoHT"
					options={this.state.plainArray}
					placeholder="Tipo de HT"
					onSelect={(selectedList, selectedItem) =>
						this.props.onSelect(
							selectedList,
							selectedItem,
							"TipoHT"
						)
					}
					onRemove={(selectedList, removedItem) =>
						this.props.onRemove(selectedList, removedItem, "TipoHT")
					}
				/>
			</div>
		);
	}
}
