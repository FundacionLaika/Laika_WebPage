import React from "react";
import { Button, Modal, Icon } from "semantic-ui-react";

function ModalBorrarUsuarioCon(props) {
	const [state, setState] = React.useState({
		open: true,
		dimmer: "blurring",
		size: "tiny"
	});
	const { open, dimmer } = state;

	return (
		<div>
			<Modal
				size={state.size}
				dimmer={dimmer}
				open={open}
				onClose={() => {
					props.closeModal3();
					setState({ open: false });
				}}
			>
				<Modal.Header>Eliminación de usuario</Modal.Header>
				<Modal.Content>{props.msgDeleteUser}</Modal.Content>
				<Modal.Actions>
					<Button
						color="red"
						inverted
						onClick={() => {
							props.closeModal3();
							setState({ open: false });
						}}
					>
						<Icon name="close" /> Cerrar
					</Button>
				</Modal.Actions>
			</Modal>
		</div>
	);
}

export default ModalBorrarUsuarioCon;
