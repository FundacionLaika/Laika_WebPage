import React from "react";
import RescatistaForm from "./RescatistaForm";
import Rescatista from "./Rescatista";

export default class Rescatistas extends React.Component {
	render() {
		return (
			<div>
				<RescatistaForm onSubmit={this.props.agregarRescatista} />
				{this.props.rescatistas.map((rescatista) => (
					<Rescatista
						key={rescatista.id}
						onDelete={() =>
							this.props.eliminarRescatista(rescatista.id)
						}
						rescatista={rescatista}
					/>
				))}
			</div>
		);
	}
}
