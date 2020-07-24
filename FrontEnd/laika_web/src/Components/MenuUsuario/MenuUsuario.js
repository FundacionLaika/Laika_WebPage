import React, { Component } from "react";
import shortid from "shortid";
import Foto from "../SharedComponents/Foto";
import UsuarioGrid from "./UsuarioGrid";
import { Link } from "react-router-dom";
import auth from "../Auth/Auth";

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
            contrasenaNueva: "",
            confirmarContrasena: "",
            cambiosContrasena: false,
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
    };

    onSubmit = (event) => {
        if (event.target.name === "cambiosCorreo") {
            this.setState({
                [event.target.name]: true,
            });
            this.validateCorreo();
        } else if (event.target.name === "cambiosContrasena") {
            this.setState({
                [event.target.name]: true,
            });
            this.validateContra();
        } else {
            auth.logout(() => {
                this.props.history.push("/");
            });
            this.props.cambioRuta(false);
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
        reader.readAsDataURL(event.target.files[0]);
    };

    validateCorreo = () => {
        let errorCorreo = "";
        let errorConfirmarCorreo = "";

        console.log("Cambios correo");
        if (!this.state.correoNuevo) errorCorreo = "Introduzca un correo";

        if (!this.state.confirmarCorreo)
            errorConfirmarCorreo = "Introduzca un correo";

        if (
            this.state.confirmarCorreo !== this.state.correoNuevo ||
            !this.state.correoNuevo
        ) {
            errorCorreo = "Los correos no son iguales";
            errorConfirmarCorreo = "Los correos no son iguales";
        } else {
            this.setState(
                Object.assign(this.state.usuario, {
                    correo: this.state.correoNuevo,
                })
            );
        }

        //si un mensaje fue actualiza se actualizara sus estados para poder mostrarlos o quitarlos de la tarjeta de registro
        if (errorCorreo || errorConfirmarCorreo) {
            this.setState({
                errorCorreo,
                errorConfirmarCorreo,
            });
        } else {
            this.setState({
                errorCorreo: "",
                errorConfirmarCorreo: "",
            });
        }
        console.log(this.state);
    };

    validateContra = () => {
        let errorContrasena = "";
        let errorConfirmarContrasena = "";

        console.log("Cambios Contra");
        if (!this.state.contrasenaNueva)
            errorContrasena = "Introduzca un correo";

        if (!this.state.confirmarContrasena)
            errorConfirmarContrasena = "Introduzca un correo";

        if (
            this.state.contrasenaNueva !== this.state.confirmarContrasena ||
            !this.state.contrasenaNueva
        ) {
            errorContrasena = "Los correos no son iguales";
            errorConfirmarContrasena = "Los correos no son iguales";
        } else {
            this.setState(
                Object.assign(this.state.usuario, {
                    contrasena: this.state.contrasenaNueva,
                })
            );
        }

        //si un mensaje fue actualiza se actualizara sus estados para poder mostrarlos o quitarlos de la tarjeta de registro
        if (errorContrasena || errorConfirmarContrasena) {
            this.setState({
                errorContrasena,
                errorConfirmarContrasena,
            });
        } else {
            this.setState({
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
            <div className="containerUs">
                <div className="item-amu">
                    <h2 className="f4 b">Información del usuario</h2>
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

                <div className="item-bmu">
                    <div>
                        <div className="pa2">
                            <label className="f4 ph3 labelD">
                                Cambiar Correo
                            </label>
                        </div>
                        <div>
                            <div className="center w-50">
                                <label htmlFor="correoNuevo" className="inp">
                                    <input
                                        type="text"
                                        name="correoNuevo"
                                        onChange={this.handleChange}
                                        placeholder="&nbsp;"
                                    />
                                    <span className="label">Correo</span>
                                    <span className="focus-bg"></span>
                                    <div className="f6 red">
                                        {this.state.errorCorreo}
                                    </div>
                                </label>
                            </div>
                            <div className="center w-50 pt30">
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
                                    <span className="label">
                                        Confirmar
                                    </span>
                                    <span className="focus-bg"></span>
                                    <div className="f6 red">
                                        {this.state.errorConfirmarCorreo}
                                    </div>
                                </label>
                            </div>
                            <button
                                className="f5 pa2 mv3 br3 bw1 b--blue pointer hover-bg-blue hover-white b ba"
                                onClick={this.onSubmit}
                                name="cambiosCorreo"
                            >
                                Confirmar Correo
                            </button>
                        </div>
                    </div>

                    <div className="pa2">
                        <label className="f4 ph3 labelD">
                            Cambiar Contrasena
                        </label>
                    </div>
                    <div>
                        <div className="center w-50">
                            <label htmlFor="Contrasena" className="inp">
                                <input
                                    type="text"
                                    name="contrasenaNueva"
                                    onChange={this.handleChange}
                                    placeholder="&nbsp;"
                                />
                                <span className="label">Contraseña</span>
                                <span className="focus-bg"></span>
                                <div className="f6 red">
                                    {this.state.errorContrasena}
                                </div>
                            </label>
                        </div>

                        <div className="center w-50 pt30">
                            <label htmlFor="confirmarContra" className="inp">
                                <input
                                    type="text"
                                    name="confirmarContrasena"
                                    onChange={this.handleChange}
                                    placeholder="&nbsp;"
                                />
                                <span className="label">Confirmar</span>
                                <span className="focus-bg"></span>
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
                            Confirmar Contraseñas
                        </button>
                    </div>
                </div>

                {this.state.usuario.rol === "Administrador" ? (
                    <div className="item-cmu">
                        <div>
                            <h2 className="center blue">Tabla de Usuarios</h2>

                            <UsuarioGrid
                                data={this.state.usuarios}
                                modifyRow={this.modifyRow}
                                addRow={this.addRow}
                                deleteRow={this.deleteRow}
                            />
                        </div>
                        <div className="pv5 center">
                            <Link to="/">
                                <button
                                    className="f4 pa2 br3 bw1 b--black pointer hover-bg-black hover-white b ba"
                                    onClick={this.onSubmit}
                                >
                                    Cerrar Sesion
                                </button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="pv5 center item-cmu">
                        <Link to="/">
                            <button
                                className="f4 pa2 br3 bw1 b--black pointer hover-bg-black hover-white b ba"
                                onClick={this.onSubmit}
                            >
                                Cerrar Sesion
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        );
    }
}

export default MenuUsuario;
