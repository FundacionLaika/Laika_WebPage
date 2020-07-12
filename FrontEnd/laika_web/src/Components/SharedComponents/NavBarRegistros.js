import React from "react";

const NavBarRegistros = () => {
    return (
        <div className="center mt4 pa0 pb0 mb0 w-two-thirds bg-light-purple">
            <button className="mt3" name="general">
                General
            </button>
            <button className="mt3" name="medico">
                Expediente Medico
            </button>
            <button className="mt3" name="hogar">
                Hogar Temporal
            </button>
            <button className="mt3" name="adopcion">
                Adopcion
            </button>
        </div>
    );
};

export default NavBarRegistros;
