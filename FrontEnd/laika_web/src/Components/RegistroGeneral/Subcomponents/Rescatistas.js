import React from "react";
import RescatistaForm from "./RescatistaForm";
import Rescatista from "./Rescatista";

export default class Rescatistas extends React.Component {
	render() {
		return (
			<div className="gridRescatista">
				<div className="rescatistaForm">
					<RescatistaForm onSubmit={this.props.agregarRescatista} />
				</div>
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
