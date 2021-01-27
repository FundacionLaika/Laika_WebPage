import React from "react";
import "../Styles/AdminInfo.css";
import ModalAdminRG from "./ModalAdminRG";

function AdminInfo() {
	return (
		<div className="adminContainer">
			<div className="adminTitle">
				<div className="adminTitle1">
					<i className="fa fa-users"></i>
				</div>
				<div className="adminTitle2">Administración de usuarios</div>
			</div>
			<div className="gridUsuarios">
				<ModalAdminRG/>	
			</div>
			<div className="btnGuardarAdmin"></div>
		</div>
	);
}

export default AdminInfo;
