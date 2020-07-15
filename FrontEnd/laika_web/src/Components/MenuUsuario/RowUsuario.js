import React from "react";

export default class RowUsuario extends React.Component {
    state = {
        id: this.props.id,
        nombre: this.props.nombre,
        apellido: this.props.apellido,
        correo: this.props.correo,
        contrasena: this.props.contrasena,
        rol: this.props.rol,
    };

    render() {
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                    id={this.props.id}
                    type="text"
                    name="nombre"
                    value={this.props.nombre}
                    onChange={this.props.handleChange}
                    placeholder="Nombre"
                />
                <input
                    id={this.props.id}
                    type="text"
                    name="apellido"
                    value={this.props.apellido}
                    onChange={this.props.handleChange}
                    placeholder="Apellido"
                />
                <textarea
                    id={this.props.id}
                    type="text"
                    name="correo"
                    value={this.props.correo}
                    onChange={this.props.handleChange}
                    placeholder="Correo"
                />
                <textarea
                    id={this.props.id}
                    type="text"
                    name="contrasena"
                    value={this.props.contrasena}
                    onChange={this.props.handleChange}
                    placeholder="Contraseña"
                />
                <input
                    id={this.props.id}
                    type="text"
                    name="rol"
                    value={this.props.rol}
                    onChange={this.props.handleChange}
                    placeholder="Rol"
                />
                <button onClick={this.props.deleteRow}>-</button>
            </div>
        );
    }
}
