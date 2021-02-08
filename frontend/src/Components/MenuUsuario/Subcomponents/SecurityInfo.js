import React, { useState } from "react";
import "../Styles/SecurityInfo.css";
import { validationSecInfo } from "../Functions/validationSecInfo";
import AlertTitle from "@material-ui/lab/AlertTitle";
import Collapse from "@material-ui/core/Collapse";
import Alert from "@material-ui/lab/Alert";

function SecurityInfo(props) {
	const [state, setState] = useState({
		contrasena: "",
		confirmacion: "",
	});

	const [openError, setOpenError] = React.useState(false);
	const [openSuccess, setOpenSuccess] = React.useState(false);
	const [message, setMsg] = React.useState("");

	function handleChange(event) {
		setState({ ...state, [event.target.name]: event.target.value });
	}

	async function updatePassword(ID_Usuario, contrasena) {
		var response = await fetch("http://localhost:3001/changePassword", {
			method: "put",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ ID_Usuario, contrasena }),
		});
	
		return response.status;
	}

	return (
		<div className="securityContainer">
			<div className="alertSec">
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
						<AlertTitle>Contraseña cambiada exitosamente</AlertTitle>
					</Alert>
				</Collapse>
			</div>

			<div className="securityTitle">
				<div className="secTitle1">
					<i className="fa fa-key"></i>
				</div>
				<div className="secTitle2">
					<label>Cambiar contraseña</label>
				</div>
			</div>
			<div className="securityPWD">
				<label htmlFor="contrasena" className="inp">
					<input autocomplete="off"
						id="contrasena"
						type="password"
						name="contrasena"
						value={state.contrasena}
						onChange={handleChange}
						placeholder="&nbsp;"
					/>
					<span className="label">Nueva contraseña</span>
					<span className="focus-bg"></span>
				</label>
			</div>
			<div className="securityCPWD">
				<label htmlFor="confirmacion" className="inp">
					<input autocomplete="off"
						id="confirmacion"
						type="password"
						name="confirmacion"
						value={state.confirmacion}
						onChange={handleChange}
						placeholder="&nbsp;"
					/>
					<span className="label">Confirmar contraseña</span>
					<span className="focus-bg"></span>
				</label>
			</div>
			<div className="btnSecurityBlock">
				<input autocomplete="off"
					className="btnSecurity"
					type="button"
					value="Guardar"
					onClick={async () => {
						const valid = validationSecInfo(state);
						if (valid.isValid) {
							const status = await updatePassword(
								props.ID_Usuario,
								state.contrasena
							);
							if (status === 200) {
								setOpenError(false);
								setOpenSuccess(true);
							} else {
								valid.msg =
									"No se ha podido actualizar la contraseña. Error en el servidor.";
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

export default SecurityInfo;
