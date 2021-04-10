import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Styles/MenuUsuario.css";
import { withRouter } from "react-router-dom";
import UserInfo from "./Subcomponents/UserInfo";
import SecurityInfo from "./Subcomponents/SecurityInfo";
import AdminInfo from "./Subcomponents/AdminInfo";

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

function MenuUsuario(props) {
	const [state, setState] = useState({
		nombre: "",
		apellidos: "",
		correo: "",
		telefono: "",
		rol: "",
		foto: null,
	});

	const [borderState, setBorderState] = useState({
		btnGeneral: "3px solid #00acee",
		btnSeguridad: "",
		btnAdmin: "",
	});

	const [foregroundState, setForegroundState] = useState({
		btnGeneral: "#000",
		btnSeguridad: "",
		btnAdmin: "",
	});

	const history = useHistory();

	function logoutSession () {
		sessionStorage.clear();
		window.location.reload();
		history.push("/");
	}

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

	function handleClick(name) {
		setBorderState({ [name]: "3px solid #00acee" });
		setForegroundState({ [name]: "#000" });
	}

	return (
		<div className="menuUsuarioContainer">
			<div className="sideBarContainer">
				<div
					className="sideBarBlock"
					onClick={() => {
						handleClick("btnGeneral");
					}}
				>
					<div className="sideBarIcon">
						<i
							style={{ color: foregroundState.btnGeneral }}
							className="fa fa-address-card fa-2x iconUsuario"
						></i>
					</div>
					<div className="sideBarBtn">
						<input
							autocomplete="off"
							style={{
								borderRight: borderState.btnGeneral,
								color: foregroundState.btnGeneral,
							}}
							type="button"
							className="btnMenuUsuario"
							value="General"
						/>
					</div>
				</div>

				<div
					className="sideBarBlock"
					onClick={() => {
						handleClick("btnSeguridad");
					}}
				>
					<div className="sideBarIcon">
						<i
							style={{ color: foregroundState.btnSeguridad }}
							className="fa fa-lock fa-2x iconUsuario"
						></i>
					</div>
					<div className="sideBarBtn">
						<input
							autocomplete="off"
							style={{
								borderRight: borderState.btnSeguridad,
								color: foregroundState.btnSeguridad,
							}}
							type="button"
							className="btnMenuUsuario"
							value="Seguridad"
						/>
					</div>
				</div>

				{state.rol === "Administrador" ? <div
					className="sideBarBlock"
					onClick={() => {
						handleClick("btnAdmin");
					}}
				>
					<div className="sideBarIcon">
						<i
							style={{ color: foregroundState.btnAdmin }}
							className="fa fa-address-book fa-2x iconUsuario"
						></i>
					</div>
					<div className="sideBarBtn">
						<input
							autocomplete="off"
							style={{
								borderRight: borderState.btnAdmin,
								color: foregroundState.btnAdmin,
							}}
							type="button"
							className="btnMenuUsuario"
							value="Administración"
						/>
					</div>
				</div>: null}


					<div className="sideBarBlock btnLogout">
						<div className="sideBarIcon">
							<i
								style={{ color: "red" }}
								className="fa fa-sign-out fa-2x iconUsuario"
							></i>
						</div>
						<div className="sideBarBtn">
							<input
								autocomplete="off"
								style={{ color: "red" }}
								type="button"
								className="btnMenuUsuario"
								value="Log out"
								onClick={logoutSession}
							/>
						</div>
					</div>
			</div>
			<div className="dataUsuario">
				{foregroundState.btnGeneral && (
					<UserInfo ID_Usuario={props.ID_Usuario} />
				)}
				{foregroundState.btnSeguridad && (
					<SecurityInfo ID_Usuario={props.ID_Usuario} />
				)}
				{foregroundState.btnAdmin && (
					<AdminInfo ID_Usuario={props.ID_Usuario} />
				)}
			</div>
		</div>
	);
}

export default withRouter(MenuUsuario);
