import React from "react";
import { Link } from "react-router-dom";
import "./Styles/MenuBar.css";

class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            correoUsuario: this.props.correoUsuario,
        };
    }

    render() {
        return (
            <div className="navBar">
                <div className="navBar-header">
                    <div>
                        <img src="/laikalogo.png" alt="logo" id="logo" />
                    </div>

                    <div>
                        <Link
                            to="/Laika/Consulta"
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
                            to="/Laika/RegistroGeneral"
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
                            to={`/Laika/MenuUsuario/${this.props.correoUsuario}`}
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
    }
}

export default MenuBar;
