import React from "react";
import MultiSelectList from "../../../../SharedComponents/MultiSelectList";

export default class FiltroAdopcion extends React.Component {
	state = {
		plainArray: ["Instagram", "Facebook", "Petco", "Referencia", "Otro"],
	};
	render() {
		return (
			<div>
				<MultiSelectList
					id="Medio"
					options={this.state.plainArray}
					placeholder="Medio de adopción"
					onSelect={(selectedList, selectedItem) =>
						this.props.onSelect(selectedList, selectedItem, "Medio")
					}
					onRemove={(selectedList, removedItem) =>
						this.props.onRemove(selectedList, removedItem, "Medio")
					}
				/>
			</div>
		);
	}
}
