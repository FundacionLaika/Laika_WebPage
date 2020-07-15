import React, { Component } from "react";
import Foto from "../SharedComponents/Foto";
import { Link } from "react-router-dom";

class MenuUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: {
                nombre: "Andres",
                apellido: "Diaz de Leon",
                correo: "Hello",
                contrasena: "bye",
                fotoPerfil: "/iconoPerro.png",
                rol: "Administrador",
            },
            cambiarContrasena: false,
            contrasenaNueva: "",
            confirmarContrasena: "",
            cambiosContrasena: false,
            cambiarCorreo: false,
            correoNuevo: "",
            confirmarCorreo: "",
            cambiosCorreo: false,
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
        console.log("H: " + event.target.value);
    };

    onSubmit = (event) => {
        this.setState({
            [event.target.name]: true,
        });
        if (
            event.target.name === "cambiosCorreo" ||
            event.target.name === "cambiosContrasena"
        ) {
            this.validate();
        }
    };

    imageHandler = (event) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState(
                    Object.assign(this.state.usuario, {
                        fotoPerfil: reader.result,
                    })
                );
            }
        };
        console.log(event.target.id);
        reader.readAsDataURL(event.target.files[0]);
    };

    validate = () => {
        let errorCorreo = "";
        let errorConfirmarCorreo = "";
        let errorContrasena = "";
        let errorConfirmarContrasena = "";

        //Si uno de las condiciconales se cumple actualiza una de las variables de mensajes de error

        console.log(this.state.cambiarCorreo);
        if (this.state.cambiosContrasena) {
            if (!this.state.contrasenaNueva)
                errorContrasena = "Introduzca una contraseña";

            if (!this.state.confirmarContrasena)
                errorConfirmarContrasena = "Introduzca una contraseña";

            if (this.state.confirmarContrasena !== this.state.contrasenaNueva) {
                errorContrasena = "Las contraseñas no son iguales";
                errorConfirmarContrasena = "Las contraseñas no son iguales";
            } else {
                this.setState({
                    contrasena: this.state.cambiarContrasena,
                });
            }
        } else if (this.state.cambiosCorreo) {
            if (!this.state.correoNuevo) errorCorreo = "Introduzca un correo";
            else if (!this.state.correoNuevo.includes("@"))
                errorCorreo = "Correo invalido";

            if (!this.state.confirmarCorreo)
                errorCorreo = "Introduzca un correo";
            else if (!this.state.confirmarCorreo.includes("@"))
                errorCorreo = "Correo invalido";

            if (this.state.confirmarCorreo !== this.state.correoNuevo) {
                errorContrasena = "Los correos no son iguales";
                errorConfirmarContrasena = "Los correos no son iguales";
            }
        }

        //si un mensaje fue actualiza se actualizara sus estados para poder mostrarlos o quitarlos de la tarjeta de registro
        if (
            errorCorreo ||
            errorConfirmarCorreo ||
            errorContrasena ||
            errorConfirmarContrasena
        ) {
            this.setState({
                errorCorreo,
                errorConfirmarCorreo,
                errorContrasena,
                errorConfirmarContrasena,
            });
        } else {
            this.setState({
                errorCorreo: "",
                errorConfirmarCorreo: "",
                errorContrasena: "",
                errorConfirmarContrasena: "",
            });
        }
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <div className="">
                    <h3>Información del usuario</h3>
                    <Foto
                        id="fotoDefault"
                        foto={this.state.usuario.fotoPerfil}
                        imageHandler={this.imageHandler}
                    />
                    <p>Nombre: {this.state.usuario.nombre}</p>
                    <p>Apellido: {this.state.usuario.apellido}</p>
                    <p>Correo: {this.state.usuario.correo}</p>
                    <p>contrasena: {this.state.usuario.contrasena}</p>
                    <p>Rol: {this.state.usuario.rol}</p>
                </div>

                <div className="pa2">
                    <label className="ph3">Cambiar Contrasena</label>
                    <button onClick={this.onSubmit} name="cambiarContrasena">
                        Cambiar
                    </button>
                </div>
                {this.state.cambiarContrasena === true ? (
                    <div>
                        <div>
                            <label>Contrasena Nueva: </label>
                            <input type="text" name="contrasenaNueva" />
                            <div className="f6 red">
                                {this.state.errorContrasena}
                            </div>
                        </div>
                        <div>
                            <label>Confirmar Contrasena: </label>
                            <input type="text" name="confirmarContrasena" />
                            <div className="f6 red">
                                {this.state.errorConfirmarContrasena}
                            </div>
                        </div>
                        <button
                            onClick={this.onSubmit}
                            name="cambiosContrasena"
                        >
                            Confirmar Cambios
                        </button>
                    </div>
                ) : null}

                <div className="pa2">
                    <label className="ph3">Cambiar Correo</label>
                    <button onClick={this.onSubmit} name="cambiarCorreo">
                        Cambiar
                    </button>
                </div>
                {this.state.cambiarCorreo === true ? (
                    <div>
                        <div>
                            <label>Correo Nuevo: </label>
                            <input type="text" name="correoNuevo" />
                            <div className="f6 red">
                                {this.state.errorCorreo}
                            </div>
                        </div>
                        <div>
                            <label>Confirmar Correo: </label>
                            <input type="text" name="confirmarCorreo" />
                            <div className="f6 red">
                                {this.state.errorConfirmarCorreo}
                            </div>
                        </div>
                        <button onClick={this.onSubmit} name="cambiosCorreo">
                            Confirmar Cambios
                        </button>
                    </div>
                ) : null}

                {this.state.usuario.rol === "Administrador" ? (
                    <div>
                        <h1>Panel Admin</h1>
                        <h3>Tabla de Usuarios</h3>

                        <button>Agregar Usuario</button>
                        <button>Eliminar Usuario</button>
                    </div>
                ) : null}
                <div>
                    <Link to="/">
                        <button>Cerrar Sesion</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default MenuUsuario;
