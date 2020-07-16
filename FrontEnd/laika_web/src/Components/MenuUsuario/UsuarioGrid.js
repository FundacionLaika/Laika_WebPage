import React from "react";
import RowUsuario from "./RowUsuario";

export default class UsuarioGrid extends React.Component {
    render() {
        return (
            <div className="pt2">
                <button
                    className="f5 pa2 br3 bw1 b--blue pointer hover-bg-blue hover-white b ba "
                    onClick={this.props.addRow}
                >
                    Agregar
                </button>
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
                        nombre={row.nombre}
                        apellido={row.apellido}
                        correo={row.correo}
                        contrasena={row.contrasena}
                        rol={row.rol}
                        handleChange={this.props.modifyRow}
                        deleteRow={() => this.props.deleteRow(row.id)}
                    />
                ))}
            </div>
        );
    }
}
