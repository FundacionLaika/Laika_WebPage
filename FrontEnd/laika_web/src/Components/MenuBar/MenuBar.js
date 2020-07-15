import React from "react";
import { Link } from "react-router-dom";
import "./MenuBar.css";

const MenuBar = () => {
    return (
        <div className="navBar">
            <div className="navBar-header">
                <div>
                    <img src="/laikalogo.png" alt="logo" id="logo" />
                </div>

                <div>
                    <Link
                        to="/Consulta"
                        style={{
                            color: "inherit",
                            textDecoration: "inherit",
                        }}
                    >
                        <i className="fa fa-search fa-fw pointer"></i>
                        Consulta
                    </Link>
                </div>

                <div>
                    <Link
                        to="/RegistroGeneral"
                        style={{
                            color: "inherit",
                            textDecoration: "inherit",
                        }}
                    >
                        <i className="fa fa-pencil-square-o fa-fw pointer"></i>
                        Registro
                    </Link>
                </div>

                <div>
                    <Link
                        to="/MenuUsuario"
                        style={{
                            color: "inherit",
                            textDecoration: "inherit",
                        }}
                    >
                        <img
                            src="/user.ico"
                            alt="user"
                            id="user"
                            className="pointer"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;
