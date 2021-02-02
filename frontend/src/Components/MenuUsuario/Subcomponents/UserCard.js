import React from "react";
import "../Styles/UserCard.css";

function validateData(data) {
    return data ? data : "No hay Información";
}

export default function UserCard(props) {
    return (
        <div className="user-card">
            <i
                aria-hidden="true"
                className="fas fa-pencil"
                onClick={() => {
					props.changeUserID(props.user.ID_Usuario);
					props.openModal();
				}}
            ></i>
            <div className="image-wrapper">
                <img src={props.user.Foto} alt="" />
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
