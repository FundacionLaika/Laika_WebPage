import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import MenuBar from "../Components/MenuBar/MenuBar";
import RegistroGeneral from "../Components/RegistroGeneral/RegistroGeneral";
import Login from "../Components/Login/Login";
import Consulta from "../Components/Consulta/Consulta";


function App() {
    return (
        <div className="App">
            <Router>
                <Route path="/Components" render={() => <MenuBar />} />
                <Switch>
                    {/* El Switch solo hara render de un componente a la vez */}
                    {/* exact se encarga que el componente se muestre solo cuando el path es esxactamente igual el especificado*/}
                    <Route
                        path="/Components/RegistroGeneral/RegistroGeneral"
                        exact
                        component={RegistroGeneral}
                    />
                    <Route
                        path="/Components/Consulta/Consulta"
                        exact
                        component={Consulta}
                    />

                    {/* Primer Render de la app */}
                    <Route path="/" exact render={() => <Login />} />
                    {/*Cuando el path metido en el buscador no existe en la app muestra esta página*/}
                    <Route
                        path="/"
                        render={() => (
                            <div>
                                <div className="App-header">
                                    <h1>
                                        Pagina no{" "}
                                        <text className="red">Disponible</text>
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
