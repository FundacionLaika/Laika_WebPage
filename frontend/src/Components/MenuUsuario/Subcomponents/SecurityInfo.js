import React, { useState } from "react";
import "../Styles/SecurityInfo.css";

function SecurityInfo() {
	const [state, setState] = useState({
		contrasena: "",
		confirmacion: "",
	});

	function handleChange(event) {
		setState({ ...state, [event.target.name]: event.target.value });
	}

	return (
		<div className="securityContainer">
			<div className="securityTitle">
				<div className="secTitle1">
					<i class="fa fa-key"></i>
				</div>
				<div className="secTitle2">
					<label>Cambiar contraseña</label>
				</div>
			</div>
			<div className="securityPWD">
				<label htmlFor="contrasena" className="inp">
					<input
						id="contrasena"
						type="text"
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
					<input
						id="confirmacion"
						type="text"
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
				<input
					className="btnSecurity"
					type="button"
					value="Guardar"
				/>
			</div>
		</div>
	);
}

export default SecurityInfo;
