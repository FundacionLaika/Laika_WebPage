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
					id="medioAdopcion"
					options={this.state.plainArray}
					placeholder="Medio de adopción"
					onSelect={(selectedList, selectedItem) =>
						this.props.onSelect(selectedList, selectedItem, "medioAdopcion")
					}
					onRemove={(selectedList, removedItem) =>
						this.props.onRemove(selectedList, removedItem, "medioAdopcion")
					}
				/>
			</div>
		);
	}
}
