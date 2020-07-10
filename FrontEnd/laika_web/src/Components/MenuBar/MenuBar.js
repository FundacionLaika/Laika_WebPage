import React from "react";
import "./MenuBar.css";

const MenuBar = () => {
  return (
    <nav>
      <span>
        <span className="flex justify-center fondo pa2">
          <button className="f2 ph3 bw0 bg-transparent white dim pointer">
            Consulta
          </button>

          <button className="f2 ph3  bw0 bg-transparent white dim pointer">
            Registro de Animal
          </button>
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
