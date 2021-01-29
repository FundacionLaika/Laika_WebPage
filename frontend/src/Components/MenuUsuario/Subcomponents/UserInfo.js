import React, { useState } from "react";
import FotoUsuario from "./FotoUsuario";
import "../Styles/UsuarioGeneral.css";
import { validationUserInfo } from "../Functions/validationUserInfo";
import AlertTitle from "@material-ui/lab/AlertTitle";
import Collapse from "@material-ui/core/Collapse";
import Alert from "@material-ui/lab/Alert";

function UserInfo() {
	const [state, setState] = useState({
		nombre: "",
		apellidos: "",
		correo: "",
		telefono: "",
		foto: null,
	});

	const [openError, setOpenError] = React.useState(false);
	const [openSuccess, setOpenSuccess] = React.useState(false);
	const [message, setMsg] = React.useState("");

	function onChage(event) {
		setState({
			...state,
			[event.target.name]: event.target.value,
		});
	}

	function imageHandler(event) {
		try {
			const reader = new FileReader();
			const foto = event.target.id;

			reader.onload = () => {
				if (reader.readyState === 2) {
					setState({ ...state, [foto]: reader.result });
				}
			};
			reader.readAsDataURL(event.target.files[0]);
		} catch (error) {}
	}

	return (
		<div className="datosGeneralesUsuario">
			<Collapse in={openError}>
				<Alert
					onClose={() => {
						setOpenError(false);
					}}
					variant="outlined"
					severity="error"
				>
					<AlertTitle>
						Error - Faltan llenar los siguientes campos
					</AlertTitle>
					{message}
				</Alert>
			</Collapse>

			<Collapse in={openSuccess}>
				<Alert
					onClose={() => {
						setOpenSuccess(false);
					}}
					variant="outlined"
					severity="success"
				>
					<AlertTitle>Registro exitoso</AlertTitle>
				</Alert>
			</Collapse>

			<div className="blockGeneralFoto">
				<div className="blockFoto">
					<FotoUsuario
						id="foto"
						imageHandler={imageHandler}
						foto={state.foto}
					/>
				</div>
				<div className="blockLabel">
					<label>Nombre:</label>
				</div>
				<div className="blockLabel2">
					<label>Rol:</label>
				</div>
			</div>

			<div className="blockGeneral">
				<div className="blockDatosUsuario">
					<label htmlFor="nombreUsuario" className="inp">
						<input
							id="nombreUsuario"
							type="text"
							name="nombre"
							value={state.nombre}
							onChange={onChage}
							placeholder="&nbsp;"
						/>
						<span className="label">Nombre</span>
						<span className="focus-bg"></span>
					</label>
				</div>
				<div className="blockDatosUsuario2">
					<label htmlFor="appellidosUsuario" className="inp">
						<input
							id="apellidosUsuario"
							type="text"
							name="apellidos"
							value={state.apellidos}
							onChange={onChage}
							placeholder="&nbsp;"
						/>
						<span className="label">Apellidos</span>
						<span className="focus-bg"></span>
					</label>
				</div>
			</div>

			<div className="blockGeneral">
				<div className="blockDatosUsuario">
					<label htmlFor="correoUsuario" className="inp">
						<input
							id="correoUsuario"
							type="text"
							name="correo"
							value={state.correo}
							onChange={onChage}
							placeholder="&nbsp;"
						/>
						<span className="label">Correo electrónico</span>
						<span className="focus-bg"></span>
					</label>
				</div>
				<div className="blockDatosUsuario2">
					<label htmlFor="telUsuario" className="inp">
						<input
							id="telUsuario"
							type="text"
							name="telefono"
							value={state.telefono}
							onChange={onChage}
							placeholder="&nbsp;"
						/>
						<span className="label">Télefono</span>
						<span className="focus-bg"></span>
					</label>
				</div>
			</div>
			<div className="blockGuardarUsuario">
				<input
					className="btnGuardarUsuario"
					type="button"
					value="Guardar"
					onClick={() => {
						const valid = validationUserInfo(state);
						if (valid.isValid) {
							// do submit
							setOpenError(false);
							setOpenSuccess(true);
						} else {
							setMsg(valid.msg);
							setOpenSuccess(false);
							setOpenError(true);
						}
					}}
				/>
			</div>
		</div>
	);
}

export default UserInfo;
