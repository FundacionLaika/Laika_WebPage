import React, { useState } from "react";
import "../Styles/AdminInfo.css";
import UserCard from "./UserCard.js";
import ModalAdmin from "./ModalAdmin";

function AdminInfo() {
	const [state, setState] = useState(false);
	
	function close() {
		setState(false);
	}

	return (
		<div className="adminContainer">
			<div className="adminTitle">
				<div className="adminTitle1">
					<i className="fa fa-users"></i>
				</div>
				<div className="adminTitle2">Administración de usuarios</div>
			</div>

			<div className="user-cards">
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
			</div>

			<div className="gridUsuarios">
				<button
					className="generarPDFTarjeta"
					title="Generar PDF"
					onClick={() => {
						setState(true);
					}}
				>
					<i
						aria-hidden="true"
						className="fa fa-file-pdf-o fa-fw"
					></i>
				</button>
				{state ? <ModalAdmin close={close}/> : null}
			</div>
			<div className="btnGuardarAdmin"></div>
		</div>
	);
}

export default AdminInfo;
