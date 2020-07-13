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
			cambiarCorreo: false,
		};
	}

	handleChange = (event) => {

		console.log(this.state);
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

	onChangeData = (event) => {
		this.setState({
			[event.target.name]: true,
		});
	};

	// validate = () => {
	//     let errorCorreo = "";
	//     let errorConfirmacionCorreo = "";
	//     let errorContrasena = "";
	//     let errorConfirmacionContraseña = "";

	//     //Si uno de las condiciconales se cumple actualiza una de las variables de mensajes de error
	//     if (!this.state.correo) errorCorreo = "Introduzca un correo";
	//     else if (!this.state.correo.includes("@"))
	//         errorCorreo = "Correo invalido";

	//     if (!this.state.correo) errorCorreo = "Introduzca un correo";
	//     else if (!this.state.correo.includes("@"))
	//         errorCorreo = "Correo invalido";

	//     if (!this.state.contrasena)
	//         errorContrasena = "Introduzca una contrasena";

	//     if (!this.state.confirmacionContrasena)
	//         errorConfirmacionContraseña = "Introduzca una contrasena";

	//     if (this.state.confirmacionContrasena !== this.state.contrasena) {
	//         errorContrasena = "Las contraseñas no son iguales";
	//         errorConfirmacionContraseña = "Las contraseñas no son iguales";
	//     }

	//     //si un mensaje fue actualiza se actulizara sus estados para poder mostrarlos o quitarlos de la tarjeta de registro
	//     if (
	//         errorCorreo ||
	//         errorConfirmacionCorreo ||
	//         errorContrasena ||
	//         errorConfirmacionContraseña
	//     ) {
	//         this.setState({
	//             errorCorreo,
	//             errorConfirmacionCorreo,
	//             errorContrasena,
	//             errorConfirmacionContraseña,
	//         });
	//         return false;
	//     }
	//     return true;
	// };

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

				<div className="pa2" onClick={this.onChangeData}>
					<label className="ph3">Cambiar Contraseña</label>
					<button name="cambiarContrasena">Cambiar</button>
				</div>
				{this.state.cambiarContrasena === true ? (
					<div>
						<div>
							<label>Contrasena Nueva: </label>
							<input type="text" name="contrasenaNueva" />
						</div>
						<div>
							<label>Confirmar Contrasena: </label>
							<input type="text" name="confrimarContrasena" />
						</div>
						<button>Confirmar Cambios</button>
					</div>
				) : null}

				<div className="pa2" onClick={this.onChangeData}>
					<label className="ph3">Cambiar Correo</label>
					<button name="cambiarCorreo">Cambiar</button>
				</div>
				{this.state.cambiarCorreo === true ? (
					<div>
						<div>
							<label>Correo Nuevo: </label>
							<input type="text" name="correoNuevo" />
						</div>
						<div>
							<label>Confirmar Correo: </label>
							<input type="text" name="confrimarCorreo" />
						</div>
						<button>Confirmar Cambios</button>
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
