import React, { useState } from "react";
import "./Styles/MenuUsuario.css";
import { withRouter } from "react-router-dom";
import UserInfo from "./Subcomponents/UserInfo";
import SecurityInfo from "./Subcomponents/SecurityInfo";

function MenuUsuario() {
	const [borderState, setBorderState] = useState({
		btnGeneral: "3px solid blue",
		btnSeguridad: "",
		btnAdmin: "",
	});

	const [foregroundState, setForegroundState] = useState({
		btnGeneral: "#000",
		btnSeguridad: "",
		btnAdmin: "",
	});

	function handleClick(name) {
		setBorderState({ [name]: "3px solid blue" });
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
							class="fa fa-lock fa-2x iconUsuario"
						></i>
					</div>
					<div className="sideBarBtn">
						<input
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

				<div
					className="sideBarBlock"
					onClick={() => {
						handleClick("btnAdmin");
					}}
				>
					<div className="sideBarIcon">
						<i
							style={{ color: foregroundState.btnAdmin }}
							class="fa fa-address-book fa-2x iconUsuario"
						></i>
					</div>
					<div className="sideBarBtn">
						<input
							style={{
								borderRight: borderState.btnAdmin,
								color: foregroundState.btnAdmin,
							}}
							type="button"
							className="btnMenuUsuario"
							value="Administración"
						/>
					</div>
				</div>

				<div className="sideBarBlock btnLogout">
					<div className="sideBarIcon">
						<i
							style={{ color: "red" }}
							class="fa fa-sign-out fa-2x iconUsuario"
						></i>
					</div>
					<div className="sideBarBtn">
						<input
							style={{ color: "red" }}
							type="button"
							className="btnMenuUsuario"
							value="Log out"
						/>
					</div>
				</div>
			</div>
			<div className="dataUsuario">
				{foregroundState.btnGeneral && <UserInfo />}
				{foregroundState.btnSeguridad && <SecurityInfo />}

			</div>
		</div>
	);
}

export default withRouter(MenuUsuario);
