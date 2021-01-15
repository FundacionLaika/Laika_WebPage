import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import MenuBar from "../Components/SharedComponents/MenuBar";
import Login from "../Components/Login/Login";
import Registro from "../Components/RegistroUsuario/Registro";
import Consulta from "../Components/Consulta/Consulta";
import RegistroGeneral from "../Components/RegistroGeneral/RegistroGeneral";
import ExpedienteMedico from "../Components/ExpedienteMedico/ExpedienteMedico";
import HogarTemporal from "../Components/HogarTemporal/HogarTemporal";
import Adopcion from "../Components/Adopcion/Adopcion";
import MenuUsuario from "../Components/MenuUsuario/MenuUsuario";
import { ProtectedRoute } from "../Components/SharedComponents/ProtectedRoute";
import auth from "../Components/Auth/Auth";
import DocumentoPDF from "../Components/SharedComponents/DocumentosPDF/DocumentoPDF";

const initialState = {
    iniciadoSesion: auth.esAutenticado(),
    correoUsuario: "",
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        document.title = "Administración | Fundación Laika";
    }

    cambioRuta = (usuario) => {
        this.setState({
            iniciadoSesion: auth.esAutenticado(),
            correoUsuario: usuario,
        });
    };

    render() {
        return (
            <div className="App">
                <Router>
                    <Route
                        path="/Laika"
                        render={() => (
                            <MenuBar correoUsuario={this.state.correoUsuario} />
                        )}
                    />

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
                            exact
                            path="/Laika/Registro/:correoUsuario"
                            component={Registro}
                        />

                        <ProtectedRoute
                            path="/Laika/Consulta"
                            exact
                            component={Consulta}
                        />
                        {/* <Route /> */}
                        <ProtectedRoute
                            path="/Laika/RegistroGeneral"
                            exact
                            component={RegistroGeneral}
                        />
                        <ProtectedRoute
                            path="/Laika/ExpedienteMedico"
                            exact
                            component={ExpedienteMedico}
                        />

                        <ProtectedRoute
                            path="/Laika/HogarTemporal"
                            exact
                            component={HogarTemporal}
                        />

                        <ProtectedRoute
                            path={"/Laika/MenuUsuario/:correoUsuario"}
                            exact
                            component={MenuUsuario}
                        />

                        <ProtectedRoute
                            path="/Laika/Adopcion"
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