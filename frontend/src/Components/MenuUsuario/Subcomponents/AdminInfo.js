import React, { useState, useEffect } from "react";
import "../Styles/AdminInfo.css";
import UserCard from "./UserCard.js";
import ModalAdmin from "./ModalAdmin";
import ModalBorrarUsuario from "./ModalBorrarUsuario";

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

async function deleteUser(userID, removeUser) {
	console.log("userID", userID);
	var response = await fetch("http://localhost:3001/eliminarUsuario", {
		method: "post",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ ID_Usuario: userID }),
	});

	if (response.status !== 200) return false;
	removeUser(userID);

	return true;
}

function AdminInfo(props) {
	const [state, setState] = useState({
		users: [],
	});

	const [open, setOpen] = useState(false);
	const [open2, setOpen2] = useState(false);

	const [userID, setUserID] = useState("");

	function changeUserID(id) {
		setUserID(id);
	}

	useEffect(() => {
		async function fetchData() {
			const usersData = await fetchUsers();
			setState({
				users: usersData.filter(
					(item) => item.Correo !== props.state.correo
				),
			});
		}
		fetchData();
	}, [props]);

	function closeModal() {
		setOpen(false);
	}

	function openModal() {
		setOpen(true);
	}

	function closeModal2() {
		setOpen2(false);
	}

	function openModal2() {
		setOpen2(true);
	}

	function addUser(newUser) {
		const newUserM = {
			ID_Usuario: newUser.ID_Usuario,
			Nombre: newUser.nombre,
			Apellidos: newUser.apellidos,
			Correo: newUser.correo,
			Telefono: newUser.telefono,
			Rol: newUser.rol,
			CONTRASENA: newUser.contrasena,
			Foto: newUser.foto,
		};
		setState((state) => ({
			users: [newUserM, ...state.users],
		}));
	}

	function modifyUser(newUser) {
		setState((state) => ({
			users: state.users.map((user) => {
				if (user.ID_Usuario === newUser.ID_Usuario) {
					return {
						ID_Usuario: newUser.ID_Usuario,
						Nombre: newUser.nombre,
						Apellidos: newUser.apellidos,
						Correo: newUser.correo,
						Telefono: newUser.telefono,
						Rol: newUser.rol,
						CONTRASENA: newUser.contrasena,
						Foto: newUser.foto,
					};
				} else {
					return user;
				}
			}),
		}));
	}

	function removeUser(userID) {
		setState((state) => ({
			users: state.users.filter((user) => user.ID_Usuario !== userID),
		}));
	}

	return (
		<div className="adminContainer">
			<div className="adminTitle">
				<div className="adminTitle1">
					<i className="fa fa-users"></i>
				</div>
				<div className="adminTitle2">Administración de usuarios</div>
			</div>

			<div className="btnGuardarAdmin">
				<button
					className="btn btn-4 btn-sep icon-plus"
					onClick={() => {
						setUserID("");
						setOpen(true);
					}}
				>
					Agregar Usuario
				</button>
			</div>

			<div className="user-cards">
				{state.users.map((user) => (
					<UserCard
						key={user.ID_Usuario}
						user={user}
						openModal={openModal}
						openModal2={openModal2}
						changeUserID={changeUserID}
						removeUser={removeUser}
					/>
				))}
			</div>

			{open ? (
				<ModalAdmin
					closeModal={closeModal}
					userID={userID}
					fetchUsers={fetchUsers}
					modifyUser={modifyUser}
					addUser={addUser}
				/>
			) : null}
			{open2 ? (
				<ModalBorrarUsuario
                    closeModal2={closeModal2}
					userID={userID}
					removeUser={removeUser}
                    deleteUser={deleteUser}
				/>
			) : null}
		</div>
	);
}

export default AdminInfo;
