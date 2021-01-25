import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Styles/Login.css";
import "./Styles/Images.css";
import image1 from "./Images/image1.jpg";
import image2 from "./Images/image2.jpg";
import image3 from "./Images/image3.jpg";
import image4 from "./Images/image4.jpg";

async function fetchData(state) {
	var response = await fetch(
		"http://localhost:3001/Login",
		{
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(state),
		}
	);
	return response;
}

function Login(props) {
	const [state, setState] = useState({correo:"", contrasena: ""});

	const history = useHistory();

	function handleClick() {
		history.push("/Laika/Consulta");
	}

	function handleChange(event) {
		state[event.target.name] = event.target.value;
	}

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
						onChange={handleChange}
						name="correo"
					/>
					<input
						type="password"
						className="formF animation a4"
						placeholder="  &#xf084;   Contraseña"
						onChange={handleChange}
						name="contrasena"
					/>
					{/* <p className="animation a5">
						<a href="#">Forgot Password</a>
					</p> */}
					<button
						className="buttonForm animation a6"
						onClick={ async () => {
							const data = await fetchData(state);
							console.log(data);
							console.log(data.status);

							if (data.status === 200) {
								props.setAuth(true);
								handleClick();
							} 
						}}
					>
						Ingresar
					</button>
				</div>
			</div>
		</div>
	);
}
export default Login;
