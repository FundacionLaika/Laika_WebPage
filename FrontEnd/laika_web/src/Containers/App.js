import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import MenuBar from "../Components/MenuBar/MenuBar";
import Login from "../Components/Login/Login";
import Consulta from "../Components/Consulta/Consulta";
import RegistroGeneral from "../Components/RegistroGeneral/RegistroGeneral";
import ExpedienteMedico from "../Components/ExpedienteMedico/ExpedienteMedico";
import HogarTemporal from "../Components/HogarTemporal/HogarTemporal";
import Adopcion from "../Components/Adopcion/Adopcion";
import GenerarPDF from "../Components/GenerarPDF/GenerarPDF";
import MenuUsuario from "../Components/MenuUsuario/MenuUsuario";

function App() {
	return (
		<div className="App">
			<Router>
				<Route path="/" render={() => <MenuBar />} />
				<Switch>
					{/* El Switch solo hara render de un componente a la vez */}
					{/* exact se encarga que el componente se muestre solo cuando el path es esxactamente igual el especificado*/}
					<Route path="/Login" exact render={() => <Login />} />
					{/*Login es la primera página mostrada*/}
					<Route path="/Consulta" exact component={Consulta} />
					<Route
						path="/RegistroGeneral"
						exact
						component={RegistroGeneral}
					/>
					<Route
						path="/ExpedienteMedico"
						exact
						component={ExpedienteMedico}
					/>

					<Route
						path="/HogarTemporal"
						exact
						component={HogarTemporal}
					/>

					<Route
						path="/GenerarPDF"
						exact
						component={GenerarPDF}
					/>

					<Route
						path="/MenuUsuario"
						exact
						component={MenuUsuario}
					/>

					<Route path="/Adopcion" exact component={Adopcion} />

					{/* Primer Render de la app */}
					<Route
						path="/"
						render={() => (
							<div>
								<div className="App-header">
									<h1>
										Pagina no
										<p className="red">Disponible</p>
									</h1>
								</div>
							</div>
						)}
					/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
