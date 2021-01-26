import React, { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from "react-router-dom";
import "./App.css";

import MenuBar from "../Components/SharedComponents/MenuBar";
import Login from "../Components/Login/Login";
import Consulta from "../Components/Consulta/Consulta";
import RegistroGeneral from "../Components/RegistroGeneral/RegistroGeneral";
import ExpedienteMedico from "../Components/ExpedienteMedico/ExpedienteMedico";
import HogarTemporal from "../Components/HogarTemporal/HogarTemporal";
import Adopcion from "../Components/Adopcion/Adopcion";
import MenuUsuario from "../Components/MenuUsuario/MenuUsuario";
import ProtectedRoute from "../Components/SharedComponents/ProtectedRoute";

// function setData(obj) {
// 	sessionStorage.setItem("data", JSON.stringify(obj));
// }

// function getData() {
// 	const tokenString = sessionStorage.getItem("data");
// 	const userToken = JSON.parse(tokenString);
// 	console.log(userToken);
// }

function App() {
	const [isAuth, setIsAuth] = useState(true);

	function setAuth(boolean) {
		setIsAuth(boolean);
	}

	useEffect(() => {
		document.title = "Administración | Fundación Laika";
	});

	return (
		<div className="App">
			<Router>
				<Route path="/Laika" render={MenuBar} />

				<Switch>
					<Route path="/" exact>
						<Login setAuth={setAuth} />
					</Route>

					<ProtectedRoute
						path="/Laika/Consulta"
						exact
						component={Consulta}
						isAuth={isAuth}
					/>

					<ProtectedRoute
						path="/Laika/RegistroGeneral"
						exact
						component={RegistroGeneral}
						isAuth={isAuth}
					/>
					<ProtectedRoute
						path="/Laika/ExpedienteMedico"
						exact
						component={ExpedienteMedico}
						isAuth={isAuth}
					/>

					<ProtectedRoute
						path="/Laika/HogarTemporal"
						exact
						component={HogarTemporal}
						isAuth={isAuth}
					/>

					<ProtectedRoute
						path={"/Laika/MenuUsuario"}
						exact
						component={MenuUsuario}
						isAuth={isAuth}
					/>

					<ProtectedRoute
						path="/Laika/Adopcion"
						exact
						component={Adopcion}
						isAuth={isAuth}
					/>

					<Route>
						<div>
							<div className="App-header">
								<h1>
									Pagina no
									<p className="red">Disponible</p>
								</h1>
							</div>
						</div>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
