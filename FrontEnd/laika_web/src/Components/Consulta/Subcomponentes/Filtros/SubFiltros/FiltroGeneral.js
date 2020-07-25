import React from "react";
import SelectList from "../../../../SharedComponents/SelectList";

export default class FiltroGeneral extends React.Component {
	state = {
		plainArray: ["Macho", "Hembra"],
	};
	render() {
		return (
			<div>
				<SelectList
					id="Genero"
					options={this.state.plainArray}
					placeholder="Género"
					onSelect={(selectedList, selectedItem) =>
						this.props.onSelect(
							selectedList,
							selectedItem,
							"Genero"
						)
					}
					onRemove={(selectedList, removedItem) =>
						this.props.onRemove(selectedList, removedItem, "Genero")
					}
					selectedValues={this.props.filtros.genero.length ? [this.props.filtros.genero] : ""}
				/>
			</div>
		);
	}
}
