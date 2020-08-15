import React, { Component } from "react";
import shortid from "shortid";
import InfoUsuario from "./Subcomponents/InfoUsuario";
import UsuarioGrid from "./Subcomponents/UsuarioGrid";
import CambiarDatos from "./Subcomponents/CambiarDatos";
import { Link } from "react-router-dom";
import auth from "../Auth/Auth";
import "./Styles/MenuUsuario.css";

class MenuUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: {
                nombre: "",
                apellido: "",
                correo: "",
                contrasena: "",
                fotoPerfil: "/iconoPerro.png",
                rol: "Voluntario",
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

    componentDidMount() {
        console.log("usuario: ", this.props.match.params.correoUsuario);
        fetch("http://localhost:3001/usuarios", {
            method: "get",
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((usuarios) => {
                for (let i = 0; i < usuarios.length; i++) {
                    if (
                        usuarios[i].Correo ===
                        this.props.match.params.correoUsuario
                    ) {
                        this.setState(
                            Object.assign(this.state.usuario, {
                                nombre: usuarios[i].Nombre,
                                apellido: usuarios[i].Apellidos,
                                correo: usuarios[i].Correo,
                                contrasena: usuarios[i].Contrasena,
                                fotoPerfil: "/iconoPerro.png",
                                rol: usuarios[i].Rol,
                            })
                        );
                    }
                    if (usuarios[i].Foto !== null) {
                        // console.log(usuarios[i].Foto);
                        // this.setState(
                        //     Object.assign(this.state.usuario, {
                        //         fotoPerfil: usuarios[i].Foto.data,
                        //     })
                        // );
                    }
                }
                if (usuarios) {
                    usuarios = Array.from(usuarios);
                    this.setState({
                        usuarios: usuarios,
                    });
                }
            });
    }

    actualizarUsuarios() {
        fetch("http://localhost:3001/usuarios", {
            method: "get",
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((usuarios) => {
                if (usuarios) {
                    this.setState({
                        usuarios: usuarios,
                    });
                }
            });
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
            let esValido = this.validateCorreo();

            if (esValido) {
                fetch("http://localhost:3001/cambiarCorreo", {
                    method: "put",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        correo: this.state.usuario.correo,
                        correoNuevo: this.state.correoNuevo,
                    }),
                })
                    .then((response) => response.json())
                    .then((resp) => {
                        this.setState(
                            Object.assign(this.state.usuario, {
                                correo: resp,
                            })
                        );
                    });
                this.actualizarUsuarios();
            }
        } else if (event.target.name === "cambiosContrasena") {
            this.setState({
                [event.target.name]: true,
            });
            let esValido = this.validateContra();

            if (esValido) {
                fetch("http://localhost:3001/cambiarContrasena", {
                    method: "put",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        correo: this.state.usuario.correo,
                        contrasena: this.state.contrasenaNueva,
                    }),
                })
                    .then((response) => response.json())
                    .then((resp) => {
                        this.setState(
                            Object.assign(this.state.usuario, {
                                contrasena: resp,
                            })
                        );
                    });
                this.actualizarUsuarios();
            }
        } else {
            this.props.match.params.correoUsuario = "";
            console.log(this.props.match.params.correoUsuario);
            auth.logout(() => {
                this.props.history.push("/");
            });
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

                const fd = new FormData();

                fetch("http://localhost:3001/subirImagenPerfil", {
                    method: "put",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        correo: this.state.usuario.correo,
                        foto: reader.result,
                    }),
                })
                    .then((response) => response.json())
                    .then((resp) => {
                        console.log(resp);
                        this.setState(
                            Object.assign(this.state.usuario, {
                                fotoPerfil: resp,
                            })
                        );
                    });
            }
        };
        console.log("reader: ", this.state.usuario.fotoPerfil);
        console.log("file: ", event.target.files[0]);
        reader.readAsDataURL(event.target.files[0]);
    };

    validateCorreo = () => {
        let errorCorreo = "";
        let errorConfirmarCorreo = "";

        //si un mensaje fue actualiza se actualizara sus estados para poder mostrarlos o quitarlos de la tarjeta de registro
        if (errorCorreo || errorConfirmarCorreo) {
            this.setState({
                errorCorreo,
                errorConfirmarCorreo,
            });
            return false;
        } else {
            this.setState({
                errorCorreo: "",
                errorConfirmarCorreo: "",
            });
        }

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
            return true;
        }
    };

    validateContra = () => {
        let errorContrasena = "";
        let errorConfirmarContrasena = "";

        if (errorContrasena || errorConfirmarContrasena) {
            this.setState({
                errorContrasena,
                errorConfirmarContrasena,
            });
            return false;
        } else {
            this.setState({
                errorContrasena: "",
                errorConfirmarContrasena: "",
            });
        }

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
            return true;
        }

        //si un mensaje fue actualiza se actualizara sus estados para poder mostrarlos o quitarlos de la tarjeta de registro
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
        fetch("http://localhost:3001/eliminarUsuario", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ID_Usuario: id,
                cuentaPropia: this.state.usuario.correo,
            }),
        }).then((response) => response.json());
        this.actualizarUsuarios();
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
            <div className="containerUs bodMenuUsuario">
                <InfoUsuario
                    className="item-amu"
                    imageHandler={this.imageHandler}
                    fotoPerfil={this.state.usuario.fotoPerfil}
                    nombre={this.state.usuario.nombre}
                    apellido={this.state.usuario.apellido}
                    correo={this.state.usuario.correo}
                    contrasena={this.state.usuario.contrasena}
                    rol={this.state.usuario.rol}
                />
                <br />

                <CambiarDatos
                    className="item-bmu"
                    handleChange={this.handleChange}
                    onSubmit={this.onSubmit}
                    errorCorreo={this.state.errorCorreo}
                    errorConfirmarCorreo={this.state.errorConfirmarCorreo}
                    errorContrasena={this.state.errorContrasena}
                    errorConfirmarContrasena={
                        this.state.errorConfirmarContrasena
                    }
                />

                {this.state.usuario.rol === "Administrador" ? (
                    <div className="item-cmu">
                        <div>
                            <div className="headerTablaUsuarios">
                                <i
                                    aria-hidden="true"
                                    className="fa fa-users fa-fw separation"
                                ></i>
                                Tabla de Usuarios
                            </div>
                            <UsuarioGrid
                                data={this.state.usuarios}
                                cuentaPropia={this.state.usuario.correo}
                                modifyRow={this.modifyRow}
                                addRow={this.addRow}
                                deleteRow={this.deleteRow}
                                correoUsuario={
                                    this.props.match.params.correoUsuario
                                }
                            />
                        </div>
                        <div className="pv5 center">
                            <Link to="/">
                                <button
                                    className="f4 pa2 br3 bw1 b--black pointer hover-bg-black hover-white b ba"
                                    onClick={this.props.onClick}
                                >
                                    Cerrar Sesion
                                </button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="pv5 center item-cmu2">
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
