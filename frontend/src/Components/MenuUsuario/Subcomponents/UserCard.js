import React from "react";
import "../Styles/UserCard.css";
import ModalAdmin from "./ModalAdmin";

export default function UserCard(props) {
	return (
		<div className="user-card">
			<ModalAdmin user={props.user}/>

			<div className="image-wrapper">
				<img src={props.user.Foto} alt=""/>
			</div>

			<div className="userInfo">
				<p className="user-name"> {props.user.Nombre + " " + props.user.Apellidos} </p>

				<div className="rowUser">
					<i aria-hidden="true" className="fa fa-envelope"></i>
					<p> {props.user.Correo} </p>
				</div>

				<div className="rowUser">
					<i aria-hidden="true" className="fas fa-phone"></i>
					<p> {props.user.Telefono} </p>
				</div>
			</div>

			<p className="user-role"> {props.user.Rol} </p>
		</div>
	);
}
