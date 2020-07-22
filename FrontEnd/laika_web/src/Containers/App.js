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
import { ProtectedRoute } from "../Components/ProtectedRoute/ProtectedRoute";
import auth from "../Components/Auth/Auth";

const initialState = {
    iniciadoSesion: auth.esAutenticado(),
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    cambioRuta = (val) => {
        this.setState({ iniciadoSesion: auth.esAutenticado() });
        console.log("It works!!!!!");
        //Puede tener una condicional de volver al estado original para que la cuenta se borre del estado
    };

    render() {
        return (
            <div className="App">
                <Router>
                    {/* <ProtectedRoute path="/" render={() => <MenuBar />} /> */}

                    {auth.esAutenticado() === true ? (
                        <Route path="/" render={() => <MenuBar />} />
                    ) : null}
                    <Switch>
                        {/* El Switch solo hara render de un componente a la vez */}
                        {/*Login es la primera página mostrada*/}
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <Login cambioRuta={this.cambioRuta} />
                            )}
                        />

                        <ProtectedRoute
                            path="/Consulta"
                            exact
                            component={Consulta}
                        />
                        {/* <Route /> */}
                        <ProtectedRoute
                            path="/RegistroGeneral"
                            exact
                            component={RegistroGeneral}
                        />
                        <ProtectedRoute
                            path="/ExpedienteMedico"
                            exact
                            component={ExpedienteMedico}
                        />

                        <ProtectedRoute
                            path="/HogarTemporal"
                            exact
                            component={HogarTemporal}
                        />

                        <ProtectedRoute
                            path="/GenerarPDF"
                            exact
                            component={GenerarPDF}
                        />

                        <ProtectedRoute
                            path="/MenuUsuario"
                            exact
                            component={MenuUsuario}
                            // render={(props) => (
                            //     <MenuUsuario
                            //         {...props}
                            //         cambioRuta={this.cambioRuta}
                            //     />
                            // )}
                        />

                        <ProtectedRoute
                            path="/Adopcion"
                            exact
                            component={Adopcion}
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
}

export default App;
