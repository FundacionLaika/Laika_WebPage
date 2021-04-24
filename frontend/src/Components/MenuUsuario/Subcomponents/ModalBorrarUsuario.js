import React from "react";
import { Button, Modal, Icon } from "semantic-ui-react";

function ModalBorrarUsuario(props) {
	const [state, setState] = React.useState({
		open: true,
		dimmer: "blurring",
		size: "tiny",
	});
	const { open, dimmer } = state;

	return (
		<div>
			<Modal
				size={state.size}
				dimmer={dimmer}
				open={open}
				onClose={() => {
					props.closeModal2();
					setState({ open: false });
				}}
			>
				<Modal.Header>
					¿Seguro que desea borrar al usuario?
				</Modal.Header>
				<Modal.Content>
					Una vez borrado el usuario los cambios no podrán recuperarse
				</Modal.Content>
				<Modal.Actions>
					<Button
						color="red"
						inverted
						onClick={() => {
							props.closeModal2();
							setState({ open: false });
						}}
					>
						<Icon name="cancel" /> Cancelar
					</Button>
					<Button
						color="green"
						inverted
						onClick={async () => {
							var success = await props.deleteUser(
								props.userID,
								props.removeUser
							);

							if (success) {
								props.setMsgDeleteUser(
									"Usuario borrado con éxito"
								);
							} else {
								props.setMsgDeleteUser(
									"EL usuario no pudo ser borrado"
								);
							}

							props.closeModal2();
							setState({ open: false });
							props.openModal3();
						}}
					>
						<Icon name="checkmark" /> Aceptar
					</Button>
				</Modal.Actions>
			</Modal>
		</div>
	);
}

export default ModalBorrarUsuario;
