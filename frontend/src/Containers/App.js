import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import ErrorPage from "../Components/SharedComponents/ErrorPage";
import Calendario from "../Components/Calendario/Calendario";

function saveUserSession(ID_User, isAuth) {
    sessionStorage.setItem(
        "userSession",
        JSON.stringify({
            ID_User,
            isAuth,
        })
    );
}

function getUserSession() {
    const tokenString = sessionStorage.getItem("userSession");
    const userToken = JSON.parse(tokenString);
    return userToken;
}

function App() {
    const userSession = getUserSession();
    var authenticated = false;
    var ID_Usuario = "";

    if (userSession) {
        const { ID_User, isAuth } = userSession;
        if (ID_User && isAuth) {
            authenticated = isAuth;
            ID_Usuario = ID_User;
        }
    }

    const [isAuth, setIsAuth] = useState(authenticated);

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
                        <Login
                            setAuth={setAuth}
                            saveUserSession={saveUserSession}
                        />
                    </Route>

                    <ProtectedRoute
                        path="/Laika/Consulta"
                        exact
                        component={Consulta}
                        isAuth={isAuth}
                    />

                    <ProtectedRoute
                        path="/Laika/Calendario"
                        exact
                        component={Calendario}
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
                        ID_Usuario={ID_Usuario}
                    />

                    <ProtectedRoute
                        path="/Laika/Adopcion"
                        exact
                        component={Adopcion}
                        isAuth={isAuth}
                    />

                    <Route>
                        <ErrorPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
