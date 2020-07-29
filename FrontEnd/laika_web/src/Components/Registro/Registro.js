import React from "react";
import { Redirect } from "react-router-dom";

class Registro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            correo: "",
            nombre: "",
            apellido: "",
            contrasena: "",
            confirmacionContrasena: "",
            rol: "Voluntario",
            usuarioCreado: false,
        };
    }

    //* --------------- Funciones para recibir el Input ---------------

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onSubmitRegister = (event) => {
        //Todo Falta agregar funcianamiento con el servidor
        if (this.validate()) {
            fetch("http://localhost:3001/registro", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nombre: this.state.nombre,
                    apellidos: this.state.apellido,
                    correo: this.state.correo,
                    contrasena: this.state.contrasena,
                    rol: this.state.rol,
                }),
            })
                .then((response) => response.json())
                .then((usuario) => {
                    if (usuario) {
                        this.setState({
                            usuarioCreado: true,
                        });
                    }
                });
        }
    };

    //Valida si se metieron datos correctos a la página
    //Todo: Esta función después será tarea del servidor
    //Todo: usar expresiones regulares para mas validacion como numeros en nombres y un correo existente
    validate = () => {
        let errorCorreo = "";
        let errorNombre = "";
        let errorApellido = "";
        let errorContrasena = "";
        let errorConfirmacionContrasena = "";

        //Si uno de las condiciconales se cumple actualiza una de las variables de mensajes de error
        if (!this.state.correo) errorCorreo = "Introduzca un correo";

        if (!this.state.nombre) errorNombre = "Introduzca un nombre";

        if (!this.state.apellido) errorApellido = "Introduzca un apellido";

        if (!this.state.contrasena)
            errorContrasena = "Introduzca una contrasena";

        if (!this.state.confirmacionContrasena)
            errorConfirmacionContrasena = "Introduzca una contrasena";

        if (this.state.confirmacionContrasena !== this.state.contrasena) {
            errorContrasena = "Las contraseñas no son iguales";
            errorConfirmacionContrasena = "Las contraseñas no son iguales";
        }

        //si un mensaje fue actualiza se actulizara sus estados para poder mostrarlos o quitarlos de la tarjeta de registro
        if (
            errorCorreo ||
            errorNombre ||
            errorApellido ||
            errorContrasena ||
            errorConfirmacionContrasena
        ) {
            this.setState({
                errorCorreo,
                errorNombre,
                errorApellido,
                errorContrasena,
                errorConfirmacionContrasena,
            });
            return false;
        }
        return true;
    };

    render() {
        return (
            <article className="br3 ba b--black-10 bg-light-green mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset
                            id="sign_up"
                            className="ba b--transparent ph0 mh0"
                        >
                            <legend className="f1 fw6 ph0 mh0">
                                Registrar Cuenta
                            </legend>

                            <div className="mt3">
                                <label
                                    className="db fw6 lh-copy f6"
                                    htmlFor="correo"
                                >
                                    Correo
                                </label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-white w-100"
                                    type="email"
                                    name="correo"
                                    onChange={this.handleChange} //Funcion para actulizar el input
                                />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.errorCorreo}
                                </div>
                            </div>

                            <div className="mt3">
                                <label
                                    className="db fw6 lh-copy f6"
                                    htmlFor="nombre"
                                >
                                    Nombre
                                </label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-white w-100"
                                    type="text"
                                    name="nombre"
                                    onChange={this.handleChange} //Funcion para actulizar el input
                                />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {/*Div de mensaje de erro*/}
                                    {this.state.errorNombre}
                                </div>
                            </div>

                            <div className="mt3">
                                <label
                                    className="db fw6 lh-copy f6"
                                    htmlFor="apellido"
                                >
                                    Apellido
                                </label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-white w-100"
                                    type="text"
                                    name="apellido"
                                    onChange={this.handleChange} //Funcion para actulizar el input
                                />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {/*Div de mensaje de erro*/}
                                    {this.state.errorApellido}
                                </div>
                            </div>

                            <div className="mv3">
                                <label
                                    className="db fw6 lh-copy f6"
                                    htmlFor="contrasena"
                                >
                                    Contrasena
                                </label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-white w-100"
                                    type="password"
                                    name="contrasena"
                                    onChange={this.handleChange} //Funcion para actulizar el input
                                />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {/*Div de mensaje de erro*/}
                                    {this.state.errorContrasena}
                                </div>
                            </div>

                            <div className="mv3">
                                <label
                                    className="db fw6 lh-copy f6"
                                    htmlFor="confirmacionContrasena"
                                >
                                    Confirmar Contraseña
                                </label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-white w-100"
                                    type="password"
                                    name="confirmacionContrasena"
                                    onChange={this.handleChange} //Actualizara el valor de la variable
                                />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {/*Div de mensaje de erro*/}
                                    {this.state.errorConfirmacionContrasena}
                                </div>
                            </div>
                            <div className="Rol">
                                <div className="select">
                                    <select
                                        className="select-text"
                                        required
                                        id="Rol"
                                        name="rol"
                                        value={this.tipoHT}
                                        onChange={this.handleChange}
                                    >
                                        <option
                                            className="pad"
                                            value=""
                                        ></option>
                                        <option
                                            className="pad"
                                            value="Voluntario"
                                            selected
                                        >
                                            Voluntario
                                        </option>
                                        <option
                                            className="pad"
                                            value="Administrador"
                                        >
                                            Administrador
                                        </option>
                                    </select>
                                    <span className="select-highlight"></span>
                                    <span className="select-bar"></span>
                                    <label className="select-label">
                                        Tipo de HT
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                        <div className="">
                            <input
                                onClick={this.onSubmitRegister} //Funcion para subir todos los inputs
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib "
                                type="submit"
                                value="Registrar"
                            />
                            {this.state.usuarioCreado ? (
                                <Redirect to="/MenuUsuario" />
                            ) : null}
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Registro;
