import React from "react";
import "../Styles/UserCard.css";

export default function UserCard() {
	return (
		<div className="user-card">
			<i aria-hidden="true" className="fas fa-pencil"></i>

			<div className="image-wrapper">
				<img src="https://source.unsplash.com/H982yXJ7vOk/450x450" />
			</div>

			<div className="userInfo">
				<p className="user-name"> Agus Quintanar </p>

				<div className="rowUser">
					<i aria-hidden="true" className="fa fa-envelope"></i>
					<p> {"agusquintanar17@gmail.com"} </p>
				</div>

				<div className="rowUser">
					<i aria-hidden="true" className="fas fa-phone"></i>
					<p> {"3310743933"} </p>
				</div>
			</div>

			<p className="user-role">SENIOR CREATIVE DIRECTOR</p>
		</div>
	);
}
