import React, { useState, useEffect } from "react";
import FotoUsuario from "./FotoUsuario";
import "../Styles/UsuarioGeneral.css";
import { validationUserInfo } from "../Functions/validationUserInfo";
import AlertTitle from "@material-ui/lab/AlertTitle";
import Collapse from "@material-ui/core/Collapse";
import Alert from "@material-ui/lab/Alert";

async function fetchUser(ID_Usuario) {
	var response = await fetch("http://localhost:3001/usuario", {
		method: "post",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ ID_Usuario }),
	});

	if (response.status !== 200) return null;
	var json = await response.json();

	return json;
}

async function updateUser(ID_Usuario, state) {
	var response = await fetch("http://localhost:3001/usuario", {
		method: "put",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ ID_Usuario, ...state }),
	});

	return response.status;
}

function UserInfo(props) {
	const [state, setState] = useState({
		nombre: "",
		apellidos: "",
		correo: "",
		telefono: "",
		rol: "",
		foto: null,
	});

	useEffect(() => {
		async function fetchData() {
			const userData = await fetchUser(props.ID_Usuario);
			if (!userData) return;

			var foto = null;
			if (userData && userData.Foto) {
				var buffer = Buffer.from(userData.Foto.data);
				foto = buffer.toString("utf8");
			}

			setState({
				nombre: userData.Nombre,
				apellidos: userData.Apellidos,
				correo: userData.Correo,
				telefono: userData.Telefono,
				rol: userData.Rol,
				foto: foto,
			});
		}
		fetchData();
	}, [props]);

	const [openError, setOpenError] = React.useState(false);
	const [openSuccess, setOpenSuccess] = React.useState(false);
	const [message, setMsg] = React.useState("");

	function onChange(event) {
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
					<AlertTitle> Datos guardados exitosamente.</AlertTitle>
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
					<label> Nombre: <span> {state.nombre} </span></label>
				</div>
				<div className="blockLabel2">
					<label>Rol: <span> {state.rol} </span> </label>
				</div>
			</div>

			<div className="blockGeneral">
				<div className="blockDatosUsuario">
					<label htmlFor="nombreUsuario" className="inp">
						<input autocomplete="off"
							id="nombreUsuario"
							type="text"
							name="nombre"
							value={state.nombre}
							onChange={onChange}
							placeholder="&nbsp;"
						/>
						<span className="label">Nombre</span>
						<span className="focus-bg"></span>
					</label>
				</div>
				<div className="blockDatosUsuario2">
					<label htmlFor="appellidosUsuario" className="inp">
						<input autocomplete="off"
							id="apellidosUsuario"
							type="text"
							name="apellidos"
							value={state.apellidos}
							onChange={onChange}
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
						<input autocomplete="off"
							id="correoUsuario"
							type="text"
							name="correo"
							value={state.correo}
							onChange={onChange}
							placeholder="&nbsp;"
						/>
						<span className="label">Correo electrónico</span>
						<span className="focus-bg"></span>
					</label>
				</div>
				<div className="blockDatosUsuario2">
					<label htmlFor="telUsuario" className="inp">
						<input autocomplete="off"
							id="telUsuario"
							type="text"
							name="telefono"
							value={state.telefono}
							onChange={onChange}
							placeholder="&nbsp;"
						/>
						<span className="label">Télefono</span>
						<span className="focus-bg"></span>
					</label>
				</div>
			</div>
			<div className="blockGuardarUsuario">
				<input autocomplete="off"
					className="btnGuardarUsuario"
					type="button"
					value="Guardar"
					onClick={async () => {
						const valid = validationUserInfo(state);
						if (valid.isValid) {
							const status = await updateUser(
								props.ID_Usuario,
								state
							);
							if (status === 200) {
								setOpenError(false);
								setOpenSuccess(true);
							} else {
								valid.msg =
									"No se ha podido actualizar el usuario. Error en el servidor.";
								setMsg(valid.msg);
								setOpenSuccess(false);
								setOpenError(true);
							}
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
