import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import "./Login.css";
import auth from "../Auth/Auth";

//Todo crear un arreglo de las diferentes páginas

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            correoLogin: "",
            contrasenaLogin: "",
            usuarioValido: false,
            arrImg: [
                "pup1.jpg",
                "pup2.jpg",
                "pup3.jpg",
                "pup4.jpg",
                "pup5.jpg",
                "pup6.jpg",
                "pup7.jpg",
                "pup8.jpg",
                "pup9.jpg",
                "pup10.jpg",
            ],
        };
    }

    //Actualiza el estado de los inputs.
    //cuando un input es actualizado llama a esta función y con el nombre los inputs identifica cual debe de modificar
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    //Valida si se metieron datos correctos a la página
    //Todo: Esta función después será tarea del servidor
    validate = () => {
        let errorCorreo = "";
        let errorContrasena = "";

        //TODO Agregar después la validacion -> !this.state.correoLogin.includes("@") ||
        if (this.state.correoLogin !== "Hello") {
            errorCorreo = "Correo invalido";
        }

        if (this.state.contrasenaLogin !== "bye") {
            errorContrasena = "Contraseña invalida";
        }

        if (errorCorreo || errorContrasena) {
            this.setState({ errorCorreo, errorContrasena });
            return false;
        } else {
            this.setState({ errorCorreo: "", errorContrasena: "" });
        }
        return true;
    };

    onSubmitSignIn = () => {
        // this.validate();
        //          this.setState({ usuarioValido: true });
        //          this.props.cambioRuta(true);

        fetch("http://localhost:3001/login", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                correo: this.state.correoLogin,
                contrasena: this.state.contrasenaLogin,
            }),
        })
            .then((response) => response.json())
            .then((usuario) => {
                console.log(usuario);
                if (usuario.Contrasena) {
                    auth.login(() => {
                        this.props.history.push("/Consulta");
                        this.props.cambioRuta(this.state.correoLogin);
                    });
                }
            });
    };

    render() {
        return (
            <div>
                <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 bg-light-green center">
                    <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset
                                id="sign_up"
                                className="ba b--transparent ph0 mh0"
                            >
                                <legend className="f1 fw6 ph0 mh0">
                                    Iniciar Sesión
                                </legend>
                                <div className="mt3">
                                    <label
                                        className="db fw6 lh-copy f6"
                                        htmlFor="email-address"
                                    >
                                        Correo
                                    </label>
                                    <input
                                        className="b pa2 input-reset ba bg-transparent hover-white w-100"
                                        type="email"
                                        name="correoLogin"
                                        id="correoLogin"
                                        placeholder="Ingresa tu correo"
                                        onChange={this.handleChange} //En cada cambio del input se llamara la funcion onPasswordChange
                                    />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.errorCorreo}
                                    </div>
                                </div>
                                <div className="mv3">
                                    <label
                                        className="db fw6 lh-copy f6"
                                        htmlFor="password"
                                    >
                                        Contraseña
                                    </label>
                                    <input
                                        className="b pa2 input-reset ba bg-transparent hover-white w-100"
                                        type="password"
                                        name="contrasenaLogin"
                                        placeholder="Ingresa tu contraseña"
                                        onChange={this.handleChange} //En cada cambio del input se llamara la funcion onPasswordChange
                                    />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.errorContrasena}
                                    </div>
                                </div>
                            </fieldset>
                            <div className="">
                                <input
                                    onClick={this.onSubmitSignIn} // Llama a la función onSubmitSignIn cada vez que se da click al boton
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                    type="submit"
                                    value="SignIn"
                                />
                            </div>
                            {this.state.usuarioValido === true ? (
                                <Redirect to="/Consulta" />
                            ) : null}
                        </div>
                    </main>
                </article>
            </div>
        );
    }
}

export default withRouter(Login);
