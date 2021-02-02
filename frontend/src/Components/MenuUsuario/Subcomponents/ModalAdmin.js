import React, { useState } from "react";
import "../Styles/UserCard.css";

import {
	Button,
	Modal,
	Icon,
	Dropdown,
	Header,
	Input,
} from "semantic-ui-react";
import "../Styles/ModalAdmin.css";
import FotoUsuarioModal from "./FotoUsuarioModal";

function ModalAdmin(props) {
	const [state, setState] = React.useState({
		open: true,
		dimmer: "blurring",
	});

	const { open, dimmer } = state;

	const [secondOpen, setSecondOpen] = React.useState(false);

	const [stateUser, setStateUser] = useState({
		nombre: props.user ? props.user.Nombre : "",
		apellidos: props.user ? props.user.Apellidos : "",
		correo: props.user ? props.user.Correo : "",
		telefono: props.user ? props.user.Telefono : "",
		rol: props.user ? props.user.Rol : "",
		contrasena: props.user ? props.user.Contrasena : "",
		foto: props.user ? props.user.Foto : "",
	});

	console.log(props.user);

	const countryOptions = [
		{ key: "voluntario", value: "voluntario", text: "Voluntario" },
		{ key: "administrador", value: "administrador", text: "Administrador" },
	];

	function handleChange(event) {
		setStateUser({ ...stateUser, [event.target.name]: event.target.value });
	}

	function handleSelect(event, data) {
		setStateUser({ ...stateUser, rol: data.value });
	}

	function handleRestablecer() {
		setStateUser({
			nombre: "",
			apellidos: "",
			correo: "",
			telefono: "",
			rol: "",
			contrasena: "",
			foto: null,
		});
	}

	function imageHandler(event) {
		try {
			const reader = new FileReader();
			const foto = event.target.id;

			reader.onload = () => {
				if (reader.readyState === 2) {
					setStateUser({ ...stateUser, [foto]: reader.result });
				}
			};
			reader.readAsDataURL(event.target.files[0]);
		} catch (error) {}
	}

	return (
		<div>
			<Modal
				dimmer={dimmer}
				open={open}
				onClose={() => {
					props.close();
					setState({ open: false });
				}}
			>
				<Modal.Header>Resgistrar usuario</Modal.Header>
				<Modal.Content image>
					<FotoUsuarioModal
						id="foto"
						imageHandler={imageHandler}
						foto={stateUser.foto}
					/>
					<Modal.Description className="descriptionRG">
						<Header style={{ marginLeft: "10.5%" }}>
							Datos de usuario
						</Header>
						<div className="containerUserRG">
							<div className="blockModal">
								<div className="block1RG">
									<Input
										size="large"
										icon="address card"
										iconPosition="left"
										placeholder="Nombre"
										name="nombre"
										onChange={handleChange}
									/>
								</div>
								<div className="block2RG">
									<Input
										size="large"
										icon="address book"
										iconPosition="left"
										placeholder="Apellidos"
										name="apellidos"
										onChange={handleChange}
									/>
								</div>
							</div>

							<div className="blockModal">
								<div className="block1RG">
									<Input
										size="large"
										icon="envelope"
										iconPosition="left"
										placeholder="Correo"
										name="correo"
										onChange={handleChange}
									/>
								</div>
								<div className="block2RG">
									<Input
										size="large"
										icon="call"
										iconPosition="left"
										placeholder="Teléfono"
										name="telefono"
										onChange={handleChange}
									/>
								</div>
							</div>

							<div className="blockModal">
								<div className="block1RG">
									<Dropdown
										style={{
											width: "78.5%",
											height: "97%",
										}}
										button
										name="rol"
										selection
										className="icon selectRol"
										labeled
										icon="group"
										options={countryOptions}
										placeholder="Rol"
										onChange={handleSelect}
									/>
								</div>
								<div className="block2RG">
									<Input
										size="large"
										icon="key"
										iconPosition="left"
										placeholder="Contraseña"
										name="contrasena"
										onChange={handleChange}
									/>
								</div>
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
						onClick={() => {
							props.close();
							setState({ open: false });
							handleRestablecer();
						}}
					>
						<Icon name="cancel" /> Cancelar
					</Button>

					<Button
						style={{
							borderRadius: "0.4rem",
							margin: "0% 1% 0% 0%",
						}}
						color="green"
						inverted
						onClick={() => {
							if (
								stateUser.nombre &&
								stateUser.apellidos &&
								stateUser.correo &&
								stateUser.telefono &&
								stateUser.rol &&
								stateUser.contrasena &&
								stateUser.foto
							) {
								props.close();
								setState({ open: false });
								handleRestablecer();
								// Funcion de insertar nuevo usuario
							} else {
								setSecondOpen(true);
							}
						}}
					>
						<Icon name="checkmark" /> Registrar
					</Button>
				</Modal.Actions>
				<Modal
					onClose={() => setSecondOpen(false)}
					open={secondOpen}
					size="small"
				>
					<Modal.Header>Registro de usuario</Modal.Header>
					<Modal.Content>
						<p>
							Debe llenar todos los campos para que el registro
							sea exitoso
						</p>
					</Modal.Content>
					<Modal.Actions>
						<Button
							style={{
								borderRadius: "0.4rem",
								margin: "0% 2% 0% 0%",
							}}
							color="red"
							inverted
							onClick={() => setSecondOpen(false)}
						>
							<Icon name="cancel" /> Continuar
						</Button>
					</Modal.Actions>
				</Modal>
			</Modal>
		</div>
	);
}

export default ModalAdmin;
