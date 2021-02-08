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

    const [userID, setUserID] = useState("");

    function changeUserID(id) {
        setUserID(id);
    }

    useEffect(() => {
        async function fetchData() {
            const usersData = await fetchUsers();

            setState({
                users: usersData,
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
        console.log("hay hola", userID, state);
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
        </div>
    );
}

export default AdminInfo;
