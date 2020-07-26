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

    handleEliminarUsuario = (event) => {
        // window.alert("Seguro que quieres eliminar el usuario");
        const conf = window.confirm("Desea eliminar la cuenta");
        if (conf) {
            this.props.deleteRow();
        } else {
            console.log("Not today");
        }
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
                <input
                    id={this.props.id}
                    type="text"
                    name="correo"
                    value={this.props.correo}
                    onChange={this.props.handleChange}
                    placeholder="Correo"
                />
                <input
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
                <button onClick={this.handleEliminarUsuario}>-</button>
            </div>
        );
    }
}
