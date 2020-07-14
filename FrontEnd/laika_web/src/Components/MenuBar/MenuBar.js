import React from "react";
import { Link } from "react-router-dom";
import "./MenuBar.css";

const MenuBar = () => {
    return (
        <nav>
            <span>
                <span className="flex justify-center fondo pa2">
                    <Link to="/Consulta/">
                        <button className="f2 ph3 pt2 b bw0 bg-transparent white dim pointer">
                            Consulta
                        </button>
                    </Link>

                    <Link to="/RegistroGeneral/">
                        <button className="f2 ph3 pt2 b bw0 bg-transparent white dim pointer">
                            Registro de Animal
                        </button>
                    </Link>

                    <div className="der">
                        <Link to="/MenuUsuario/">
                            <img
                                className="ph2 pointer dim"
                                width="65"
                                height="65"
                                alt="ajustes"
                                src="/Circulo.png"
                            />
                        </Link>
                    </div>
                </span>
            </span>
        </nav>
    );
};

export default MenuBar;
