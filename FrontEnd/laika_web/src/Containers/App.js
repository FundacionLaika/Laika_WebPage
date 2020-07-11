import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import MenuBar from "../Components/MenuBar/MenuBar";
import Login from "../Components/Login/Login";
import Consulta from "../Components/Consulta/Consulta";
import RegistroGeneral from "../Components/RegistroGeneral/RegistroGeneral";
import ExpedienteMedico from "../Components/ExpedienteMedico/ExpedienteMedico";
import HogarTemporal from "../Components/HogarTemporal/HogarTemporal";

function App() {
    return (
        <div className="App">
            <Router>
                <Route path="/Components" render={() => <MenuBar />} />
                <Switch>
                    {/* El Switch solo hara render de un componente a la vez */}
                    {/* exact se encarga que el componente se muestre solo cuando el path es esxactamente igual el especificado*/}
                    <Route path="/" exact render={() => <Login />} />
                    {/*Login es la primera página mostrada*/}
                    <Route
                        path="/Components/Consulta/Consulta"
                        exact
                        component={Consulta}
                    />
                    <Route
                        path="/Components/RegistroGeneral/RegistroGeneral"
                        exact
                        component={RegistroGeneral}
                    />
                    <Route
                        path="/Components/ExpedienteMedico/ExpedienteMedico"
                        exact
                        component={ExpedienteMedico}
                    />
                    <Route
                        path="/Components/ExpedienteMedico/ExpedienteMedico"
                        exact
                        component={ExpedienteMedico}
                    />
                    <Route
                        path="/Components/HogarTemporal/HogarTemporal"
                        exact
                        component={HogarTemporal}
                    />
                    <Route
                        path="/Components/Adopcion/Adopcion"
                        exact
                        component={HogarTemporal}
                    />

                    <Route
                        path="/Components/ExpedienteMedico"
                        exact
                        component={ExpedienteMedico}
                    />

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
