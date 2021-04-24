import React from "react";
import { Button, Icon, Modal } from "semantic-ui-react";

function exampleReducer(state, action) {
	switch (action.type) {
		case "close":
			return { open: false };
		case "open":
			return { open: true, size: action.size, dimmer: action.dimmer };
		default:
			throw new Error("Unsupported action...");
	}
}

const ModalExampleSize = () => {
	const [state, dispatch] = React.useReducer(exampleReducer, {
		open: false,
		size: undefined,
		dimmer: undefined,
	});
	const { open, size, dimmer } = state;

	return (
		<>
			<button
				className="BotonGeneralEliminar BotonCentralEliminar"
				onClick={() =>
					dispatch({ type: "open", size: "mini", dimmer: "blurring" })
				}
			>
				Eliminar
				<i aria-hidden="true" className="fa fa-trash fa-fw"></i>
			</button>

			<Modal
				dimmer={dimmer}
				size={size}
				open={open}
				onClose={() => dispatch({ type: "close" })}
			>
				<Modal.Header>Eliminar registros del animal</Modal.Header>
				<Modal.Content>
					<p>
						¿Estás seguro que deseas eliminar permanentamente los
						registros del animal?
					</p>
				</Modal.Content>
				<Modal.Actions>
					<Button
						color="red"
						inverted
						onClick={() => dispatch({ type: "close" })}
					>
						<Icon name="cancel" />
						No
					</Button>
					<Button
						color="green"
						inverted
						onClick={() => dispatch({ type: "close" })}
					>
						<Icon name="checkmark" />
						Yes
					</Button>
				</Modal.Actions>
			</Modal>
		</>
	);
};

export default ModalExampleSize;
