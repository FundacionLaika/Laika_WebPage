import React from "react";
import "../Styles/AdminInfo.css";
import UserCard from "./UserCard.js";
import ModalAdmin from "./ModalAdmin";

function AdminInfo() {
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
				<ModalAdmin/>	
			</div>
			<div className="btnGuardarAdmin"></div>
		</div>
	);
}

export default AdminInfo;
