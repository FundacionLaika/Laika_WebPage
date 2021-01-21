import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import "./Styles/Login.css";
import "./Styles/Images.css";
import image1 from "./Images/image1.jpg";
import image2 from "./Images/image2.jpg";
import image3 from "./Images/image3.jpg";
import image4 from "./Images/image4.jpg";

function Login() {
	return (
		<div className="container">
			<div className="leftSide">
				<div className="box box1">
					<img className="slide-1" src={image1}></img>
				</div>
				<div className="box box2">
					<img className="slide-2" src={image2}></img>
				</div>
				<div className="box box3">
					<img className="slide-3" src={image3}></img>
				</div>
				<div className="box box4">
					<img className="slide-4" src={image4}></img>
				</div>
			</div>
			<div className="rightSide">
				<div className="LogoLogin">
					<img src="/laikalogo.png" alt="laika" width="80%"></img>
				</div>
				<div className="header">
					<h2 className="animation a1">Iniciar sesión</h2>
					{/* <h4 className="animation a2">
						Log in to your account using email and password
					</h4> */}
				</div>
				<div className="formLogin">
					<input
						type="email"
						className="formF animation a3"
						placeholder="  &#xf0e0;   Correo electrónico"
					/>
					<input
						type="password"
						className="formF animation a4"
						placeholder="  &#xf084;   Correo electrónico"
					/>
					{/* <p className="animation a5">
						<a href="#">Forgot Password</a>
					</p> */}
					<button className="buttonForm animation a6">
						Ingresar
					</button>
				</div>
			</div>
		</div>
	);
}
export default Login;
