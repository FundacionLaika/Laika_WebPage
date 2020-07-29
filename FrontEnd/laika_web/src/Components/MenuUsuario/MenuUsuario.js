import React, { Component } from "react";
import shortid from "shortid";
import InfoUsuario from "./Subcomponents/InfoUsuario";
import UsuarioGrid from "./Subcomponents/UsuarioGrid";
import CambiarDatos from "./Subcomponents/CambiarDatos";
import { Link } from "react-router-dom";
import auth from "../Auth/Auth";

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

    componentDidMount() {
        console.log("Mounting");
        fetch("http://localhost:3001/usuarios", {
            method: "get",
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((usuarios) => {
                for (let i = 0; i < usuarios.length; i++) {
                    if (usuarios[i].Correo === this.props.correoUsuario) {
                        this.setState(
                            Object.assign(this.state.usuario, {
                                nombre: usuarios[i].Nombre,
                                apellido: usuarios[i].Apellidos,
                                correo: usuarios[i].Nombre,
                                contrasena: usuarios[i].Contrasena,
                                fotoPerfil: "/iconoPerro.png",
                                rol: usuarios[i].Rol,
                            })
                        );
                        console.log(usuarios[i].Correo);
                    }
                }
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
            this.props.cambioRuta("");
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
    };

    validateContra = () => {
        let errorContrasena = "";
        let errorConfirmarContrasena = "";

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
        fetch("http://localhost:3001/eliminarUsuario", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ID_Usuario: id,
            }),
        }).then((response) => response.json());
        this.componentDidMount();
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
                                    onClick={this.props.onClick}
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
