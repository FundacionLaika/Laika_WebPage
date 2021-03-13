import React, { useState } from "react";
import "./Styles/MenuUsuario.css";
import { withRouter, Link } from "react-router-dom";
import UserInfo from "./Subcomponents/UserInfo";
import SecurityInfo from "./Subcomponents/SecurityInfo";
import AdminInfo from "./Subcomponents/AdminInfo";

function MenuUsuario(props) {

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
						<input autoComplete="off"
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
						<input autoComplete="off"
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
							className="fa fa-address-book fa-2x iconUsuario"
						></i>
					</div>
					<div className="sideBarBtn">
						<input autoComplete="off"
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

				<Link to="/">
					<div className="sideBarBlock btnLogout">
						<div className="sideBarIcon">
							<i
								style={{ color: "red" }}
								className="fa fa-sign-out fa-2x iconUsuario"
							></i>
						</div>
						<div className="sideBarBtn">
							<input autoComplete="off"
								style={{ color: "red" }}
								type="button"
								className="btnMenuUsuario"
								value="Log out"
								onClick={() => {
									sessionStorage.clear();
								}}
							/>
						</div>
					</div>
				</Link>
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
