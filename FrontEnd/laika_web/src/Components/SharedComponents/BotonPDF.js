import React from "react";
import { Button, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";
import GenerarPDF from "./GenerarPDF";

function exampleReducer(state, action) {
	switch (action.type) {
		case "OPEN_MODAL":
			return { open: true, dimmer: action.dimmer };
		case "CLOSE_MODAL":
			return { open: false };
		default:
			throw new Error();
	}
}

function ModalExampleDimmer() {
	const [state, dispatch] = React.useReducer(exampleReducer, {
		open: false,
		dimmer: undefined,
	});
	const { open, dimmer } = state;

	return (
		<div>
			<button
				className="generarPDFTarjeta"
				title="Generar PDF"
				onClick={() =>
					dispatch({ type: "OPEN_MODAL", dimmer: "blurring" })
				}
			>
				<i aria-hidden="true" className="fa fa-file-pdf-o fa-fw"></i>
			</button>

			<Modal
				dimmer={dimmer}
				open={open}
				onClose={() => dispatch({ type: "CLOSE_MODAL" })}
			>
				<Modal.Header>Selecciona las opciones a imprimir</Modal.Header>
				<Modal.Content>
					<GenerarPDF />
				</Modal.Content>
				<Modal.Actions>
					<Button
						negative
						onClick={() => dispatch({ type: "CLOSE_MODAL" })}
					>
						Disagree
					</Button>
					<Link to="/PDF" target="_blank">
						<Button
							positive
							onClick={() => dispatch({ type: "CLOSE_MODAL" })}
						>
							Agree
						</Button>
					</Link>
				</Modal.Actions>
			</Modal>
		</div>
	);
}

export default ModalExampleDimmer;
