import React from "react";
import MultiSelectList from "../../../../SharedComponents/MultiSelectList";

export default class FiltroAdopcion extends React.Component {
	color = '#5243AA'
	state = {
		options: [
			{ value: "instagram", label: "Instagram",color: this.color },
			{ value: "facebook", label: "Facebook",color:this.color },
			{ value: "petco", label: "Petco",color: this.color },
			{ value: "referencia", label: "Referencia", color:this.color },
			{ value: "otro", label: "Otro", color: this.color },
		],
	};
	render() {
		return (
			<div>
				<MultiSelectList
					options={this.state.options}
					placeholder="Medio de adopción"
					handleList={(selectedOption, action) =>
						this.props.handleList(
							selectedOption,
							action,
							"medioAdopcion",
							true
						)
					}
				/>
			</div>
		);
	}
}
