import React, { Component } from "react";
import shortid from "shortid";
import Foto from "../SharedComponents/Foto";
import UsuarioGrid from "./UsuarioGrid";
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
            usuarios: [],
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

    addRow = (event) => {
        event.preventDefault();
        const newRow = {
            id: shortid.generate(),
            nombre: "",
            apeido: "",
            correo: "",
            contrasena: "",
            rol: "",
        };
        this.setState((state) => ({
            usuarios: [newRow, ...state.usuarios],
        }));
    };

    deleteRow = (id) => {
        this.setState((state) => ({
            usuarios: state.usuarios.filter((row) => row.id !== id),
        }));
    };

    modifyRow = (event) => {
        let dataTemp = this.state.usuarios;

        dataTemp.forEach((element) => {
            if (element.id === event.target.id) {
                if (event.target.name === "nombre")
                    element.nombre = event.target.value;
                else if (event.target.name === "apellido")
                    element.apellido = event.target.value;
                else if (event.target.name === "correo")
                    element.correo = event.target.value;
                else if (event.target.name === "contrasena")
                    element.contrasena = event.target.value;
                else if (event.target.name === "rol")
                    element.rol = event.target.value;
            }
        });

        this.setState({
            usuarios: dataTemp,
        });
    };

    render() {
        return (
            <div>
                <div>
                    <h2 className="blue b">Información del usuario</h2>
                    <Foto
                        id="fotoDefault"
                        foto={this.state.usuario.fotoPerfil}
                        imageHandler={this.imageHandler}
                    />
                    <div className="pa3 flex justify-center flex-column">
                        <div className="labelD">
                            <label>Nombre: {this.state.usuario.nombre}</label>
                        </div>
                        <br />
                        <div className="labelD">
                            <label>
                                Apellido: {this.state.usuario.apellido}
                            </label>
                        </div>
                        <br />
                        <div className="labelD">
                            <label>Correo: {this.state.usuario.correo}</label>
                        </div>
                        <br />
                        <div className="labelD">
                            <label>
                                Contraseña: {this.state.usuario.contrasena}
                            </label>
                        </div>
                        <br />
                        <div className="labelD">
                            <label>Rol: {this.state.usuario.rol}</label>
                        </div>
                    </div>
                </div>
                <br />

                <div className="pa2">
                    <label className="ph3 labelD">Cambiar Contrasena</label>
                    <button
                        className="f5 pa2 br3 bw1 b--blue pointer hover-bg-blue hover-white b ba"
                        onClick={this.onSubmit}
                        name="cambiarContrasena"
                    >
                        Cambiar
                    </button>
                </div>
                {this.state.cambiarContrasena === true ? (
                    <div>
                        <div className="center w-33">
                            <label htmlFor="Contrasena" className="inp">
                                <input
                                    type="text"
                                    name="contrasenaNueva"
                                    onChange={this.handleChange}
                                    placeholder="&nbsp;"
                                />
                                <span className="label w-20">Contraseña</span>
                                <div className="f6 red">
                                    {this.state.errorContrasena}
                                </div>
                            </label>
                        </div>

                        <div className="center w-33 pt30">
                            <label htmlFor="confirmarContra" className="inp">
                                <input
                                    type="text"
                                    name="confirmarContrasena"
                                    onChange={this.handleChange}
                                    placeholder="&nbsp;"
                                />
                                <span className="label w-20">Confirmar</span>
                                <div className="f6 red">
                                    {this.state.errorConfirmarContrasena}
                                </div>
                            </label>
                        </div>
                        <button
                            onClick={this.onSubmit}
                            className="f5 pa2 mv3 br3 bw1 b--blue pointer hover-bg-blue hover-white b ba "
                            name="cambiosContrasena"
                        >
                            Confirmar Cambios
                        </button>
                    </div>
                ) : null}

                <div className="pa2">
                    <label className="ph3 labelD">Cambiar Correo</label>
                    <button
                        className="f5 pa2 br3 bw1 b--blue pointer hover-bg-blue hover-white b ba"
                        onClick={this.onSubmit}
                        name="cambiarCorreo"
                    >
                        Cambiar
                    </button>
                </div>
                {this.state.cambiarCorreo === true ? (
                    <div>
                        <div>
                            <div className="center w-33">
                                <label htmlFor="correoNuevo" className="inp">
                                    <input
                                        type="text"
                                        name="correoNuevo"
                                        onChange={this.handleChange}
                                        placeholder="&nbsp;"
                                    />
                                    <span className="label w-20">Correo</span>
                                    <div className="f6 red">
                                        {this.state.errorCorreo}
                                    </div>
                                </label>
                            </div>
                            <div className="center w-33 pt30">
                                <label
                                    htmlFor="confirmarCorreo"
                                    className="inp"
                                >
                                    <input
                                        type="text"
                                        name="confirmarCorreo"
                                        onChange={this.handleChange}
                                        placeholder="&nbsp;"
                                    />
                                    <span className="label w-20">
                                        Confirmar
                                    </span>
                                    <div className="f6 red">
                                        {this.state.errorConfirmarCorreo}
                                    </div>
                                </label>
                            </div>
                            <button
                                className="f5 pa2 mv3 br3 bw1 b--blue pointer hover-bg-blue hover-white b ba"
                                onClick={this.onSubmit}
                                name="cambiosContrasena"
                            >
                                Confirmar Cambios
                            </button>
                        </div>
                    </div>
                ) : null}

                {this.state.usuario.rol === "Administrador" ? (
                    <div>
                        <h1>Panel Admin</h1>
                        <h3>Tabla de Usuarios</h3>

                        {/* <button className="f5 pa2 br3 bw1 b--green pointer hover-bg-green hover-white b ba">
                            Agregar Usuario
                        </button>
                        <button className="f5 pa2 br3 bw1 b--red pointer hover-bg-red hover-white b ba">
                            Eliminar Usuario
                        </button> */}
                    </div>
                ) : null}

                <UsuarioGrid
                    data={this.state.usuarios}
                    modifyRow={this.modifyRow}
                    addRow={this.addRow}
                    deleteRow={this.deleteRow}
                />

                <div className="pt5">
                    <Link to="/">
                        <button className="f4 pa2 br3 bw1 b--black pointer hover-bg-black hover-white b ba">
                            Cerrar Sesion
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default MenuUsuario;
