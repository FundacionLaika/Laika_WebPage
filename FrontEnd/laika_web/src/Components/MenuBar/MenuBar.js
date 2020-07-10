import React from "react";
import { Link } from "react-router-dom";
import "./MenuBar.css";

const MenuBar = () => {
    return (
        <nav>
            <span>
                <span className="flex justify-center fondo pa2">
                    <Link to="../Consulta/Consulta">
                        <button className="f2 ph3  bw0 bg-transparent white dim pointer">
                            Consulta
                        </button>
                    </Link>

                    <Link to="../RegistroGeneral/RegistroGeneral">
                        <button className="f2 ph3  bw0 bg-transparent white dim pointer">
                            Registro de Animal
                        </button>
                    </Link>

                    <img
                        className="der ph2 pointer"
                        width="65"
                        height="65"
                        alt="ajustes"
                        src="/Circulo.png"
                    />
                </span>
            </span>
        </nav>
    );
};

export default MenuBar;
