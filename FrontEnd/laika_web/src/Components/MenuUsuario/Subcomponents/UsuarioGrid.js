import React from "react";
import { Link } from "react-router-dom";
import RowUsuario from "./RowUsuario";
import "../Styles/MenuUsuario.css";

export default class UsuarioGrid extends React.Component {
    render() {
        return (
            <div className="pt3">
                <Link to="/Registro">
                    <button className="f5 pa2 mb3 br3 bw1 b--blue pointer hover-bg-blue hover-white b ba ">
                        Agregar
                    </button>
                </Link>
                <div className="flex justify-center center w-80">
                    <label className="fl w-20">Nombre</label>
                    <label className="fl w-20">Apellido</label>
                    <label className="fl w-20">Correo</label>
                    <label className="fl w-20">Contraseña</label>
                    <label className="fl w-20">Rol</label>
                </div>
                {this.props.data.map((row) => (
                    <RowUsuario
                        key={row.id}
                        id={row.id}
                        nombre={row.Nombre}
                        apellido={row.Apellidos}
                        correo={row.Correo}
                        cuentaPropia={this.props.cuentaPropia}
                        contrasena={row.Contrasena}
                        rol={row.Rol}
                        handleChange={this.props.modifyRow}
                        deleteRow={() => this.props.deleteRow(row.ID_Usuario)}
                    />
                ))}
            </div>
        );
    }
}
