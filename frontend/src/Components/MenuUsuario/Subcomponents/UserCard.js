import React from "react";
import "../Styles/UserCard.css";

function validateData(data) {
    return data ? data : "No hay Información";
}

export default function UserCard(props) {
    
    async function deleteUser(userID, removeUser) {
        console.log("userID", userID);
        var response = await fetch("http://localhost:3001/eliminarUsuario", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "ID_Usuario": userID }),
        });

        if (response.status !== 200) return false;
        removeUser(userID)
        
        return true;
    }

    return (
        <div className="user-card">
            <div className="cardIcons">
                <div className="editIcon">
                    <i
                        aria-hidden="true"
                        className="fa fa-pencil"
                        onClick={() => {
                            props.changeUserID(props.user.ID_Usuario);
                            props.openModal();
                        }}
                    ></i>
                </div>
                <div className="deleteIcon">
                    <i
                        aria-hidden="true"
                        className="fa fa-trash"
                        onClick={async () => {
                            deleteUser(props.user.ID_Usuario, props.removeUser);
                        }}
                    ></i>
                </div>
            </div>

            <div className="image-wrapper">
                <img
                    src={props.user.Foto ? props.user.Foto : "/defaultUser.png"}
                    alt=""
                />
            </div>

            <div className="userInfo">
                <p className="user-name">
                    {" "}
                    {props.user.Nombre && props.user.Apellidos
                        ? props.user.Nombre + " " + props.user.Apellidos
                        : "No hay Información"}{" "}
                </p>

                <div className="rowUser">
                    <i aria-hidden="true" className="fa fa-envelope"></i>
                    <p> {validateData(props.user.Correo)} </p>
                </div>

                <div className="rowUser">
                    <i aria-hidden="true" className="fas fa-phone"></i>
                    <p> {validateData(props.user.Telefono)} </p>
                </div>
            </div>

            <p className="user-role"> {validateData(props.user.Rol)} </p>
        </div>
    );
}
