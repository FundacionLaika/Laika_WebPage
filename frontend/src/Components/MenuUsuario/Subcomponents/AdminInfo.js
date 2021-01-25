import React from "react";
import "../Styles/AdminInfo.css";

function AdminInfo() {
	return (
		<div className="adminContainer">
			<div className="adminTitle">
				<div className="adminTitle1">
					<i class="fa fa-users"></i>
				</div>
				<div className="adminTitle2">Administración de usuarios</div>
			</div>
			<div className="gridUsuarios"></div>
			<div className="btnGuardarAdmin"></div>
		</div>
	);
}

export default AdminInfo;
