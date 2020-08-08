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
        console.log(this.props.cuentaPropia);
        console.log(this.state.correo);
        if (this.props.cuentaPropia !== this.state.correo) {
            const conf = window.confirm("Desea eliminar la cuenta");
            if (conf) this.props.deleteRow();
        } else {
            window.alert("No puede eliminar su propia cuenta");
        }
    };

    render() {
        return (
            <div className="rowDG">
                <div className="dg-col1">
                    <textarea
                        id={this.props.id}
                        type="text"
                        name="nombre"
                        value={this.props.nombre}
                        onChange={this.props.handleChange}
                        placeholder="Nombre"
                    />
                </div>
                <div className="dg-col2">
                    <textarea
                        id={this.props.id}
                        type="text"
                        name="apellido"
                        value={this.props.apellido}
                        onChange={this.props.handleChange}
                        placeholder="Apellido"
                    />
                </div>
                <div className="dg-col3">
                    <textarea
                        id={this.props.id}
                        type="text"
                        name="correo"
                        value={this.props.correo}
                        onChange={this.props.handleChange}
                        placeholder="Correo"
                    />
                </div>
                <div className="dg-col4">
                    <textarea
                        id={this.props.id}
                        type="text"
                        name="contrasena"
                        value={this.props.contrasena}
                        onChange={this.props.handleChange}
                        placeholder="Contraseña"
                    />
                </div>
                <div className="dg-col5">
                    <textarea
                        id={this.props.id}
                        type="text"
                        name="rol"
                        value={this.props.rol}
                        onChange={this.props.handleChange}
                        placeholder="Rol"
                    />
                </div>

                <div className="botonBorrarDG">
                    <button onClick={this.handleEliminarUsuario}>
                        <i
                            className="fa fa-times-circle"
                            aria-hidden="true"
                        ></i>
                    </button>
                </div>
            </div>
        );
    }
}
