import React from "react";
import "./Styles/BotonPDF.css";
import {
	Button,
	Modal,
	Icon,
	Image,
	Header,
	Checkbox,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import GenerarPDF from "./GenerarPDF";

function exampleReducer(state, action) {
	switch (action.type) {
		case "OPEN_MODAL":
			return { open: true, dimmer: action.dimmer, size: action.size };
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
					dispatch({
						type: "OPEN_MODAL",
						dimmer: "blurring",
						size: "fullscreen",
					})
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
				<Modal.Content image>
					<Image
						size="medium"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Icecat1-300x300.svg/1200px-Icecat1-300x300.svg.png"
						wrapped
					/>
					<Modal.Description>
						<Header>Expedientes</Header>
						<div>
							<div>
								{" "}
								<Checkbox checked="" label="Seleccionar todo" toggle />
							</div>
							<div>
								{" "}
								<Checkbox checked="" label="Datos Generales" toggle />
							</div>
							<div>
								{" "}
								<Checkbox checked="" label="Expediente Médico" toggle />
							</div>
							<div>
								{" "}
								<Checkbox checked="" label="Hogar Temporal" toggle />
							</div>
							<div>
								{" "}
								<Checkbox checked="" label="Adopción" toggle />
							</div>
						</div>
					</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
					<Button
						style={{
							borderRadius: "0.4rem",
							margin: "0% 2% 0% 0%",
						}}
						color="red"
						inverted
						onClick={() => dispatch({ type: "CLOSE_MODAL" })}
					>
						<Icon name="cancel" /> Cancelar
					</Button>
					<Link to="/PDF" target="_blank">
						<Button
							style={{
								borderRadius: "0.4rem",
								margin: "0% 1% 0% 0%",
							}}
							color="green"
							inverted
							icon="checkmark"
							onClick={() => dispatch({ type: "CLOSE_MODAL" })}
						>
							<Icon name="checkmark" /> Aceptar
						</Button>
					</Link>
				</Modal.Actions>
			</Modal>
		</div>
	);
}

export default ModalExampleDimmer;
