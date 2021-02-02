import React, { useState, useEffect } from "react";
import "../Styles/AdminInfo.css";
import UserCard from "./UserCard.js";
import ModalAdmin from "./ModalAdmin";

async function fetchUsers() {
	var response = await fetch("http://localhost:3001/usuarios", {
		method: "get",
		headers: { "Content-Type": "application/json" },
	});

	if (response.status !== 200) return [];
	var users = await response.json();

	users.forEach((user) => {
		var foto = null;
		if (user.Foto) {
			var buffer = Buffer.from(user.Foto.data);
			foto = buffer.toString("utf8");
		}
		user.Foto = foto;
	});

	return users;
}

function AdminInfo(props) {
	const [state, setState] = useState({
		users: [],
	});

	const [open, setOpen] = useState(false);

	useEffect(() => {
		async function fetchData() {
			const usersData = await fetchUsers();

			setState({
				users: usersData,
			});
		}
		fetchData();
	}, [props]);

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
				{state.users.map((user) => (
					<UserCard user={user} />
				))}
			</div>

			<div className="gridUsuarios">
				<button
					className="generarPDFTarjeta"
					title="Generar PDF"
					onClick={() => {
						setOpen(true);
					}}
				>
					<i
						aria-hidden="true"
						className="fa fa-file-pdf-o fa-fw"
					></i>
				</button>
				{open ? <ModalAdmin close={close} /> : null}
			</div>
			<div className="btnGuardarAdmin"></div>
		</div>
	);
}

export default AdminInfo;
