import React, { useState } from "react";
import FotoUsuario from "./FotoUsuario";
import "../Styles/UsuarioGeneral.css";

function UserInfo() {
	const [state, setState] = useState({
		nombre: "",
		apellidos: "",
		correo: "",
		telefono: "",
		foto: null,
	});

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
					setState({ ...state,[foto]: reader.result });
				}
			};
			reader.readAsDataURL(event.target.files[0]);
		} catch (error) {}
	}

	return (
		<div className="datosGeneralesUsuario">
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
				<input className="btnGuardarUsuario" type="button" value="Guardar"/>
			</div>
		</div>
	);
}

export default UserInfo;
