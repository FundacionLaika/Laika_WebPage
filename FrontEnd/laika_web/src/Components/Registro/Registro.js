import React from "react";

class Registro extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			correo: "",
			nombre: "",
			apeido: "",
			contrasena: "",
			confirmacionContrasena: "",
		};
	}

	//* --------------- Funciones para recibir el Input ---------------

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	onSubmitRegister = (event) => {
		this.validate();
		//Todo Falta agregar funcianamiento con el servidor
	};

	//Valida si se metieron datos correctos a la página
	//Todo: Esta función después será tarea del servidor
	//Todo: usar expresiones regulares para mas validacion como numeros en nombres y un correo existente
	validate = () => {
		let errorCorreo = "";
		let errorNombre = "";
		let errorApeido = "";
		let errorContrasena = "";
		let errorConfirmacionContraseña = "";

		//Si uno de las condiciconales se cumple actualiza una de las variables de mensajes de error
		if (!this.state.correo) errorCorreo = "Introduzca un correo";
		else if (!this.state.correo.includes("@"))
			errorCorreo = "Correo invalido";

		if (!this.state.nombre) errorNombre = "Introduzca un nombre";

		if (!this.state.apeido) errorApeido = "Introduzca un apeido";

		if (!this.state.contrasena)
			errorContrasena = "Introduzca una contrasena";

		if (!this.state.confirmacionContrasena)
			errorConfirmacionContraseña = "Introduzca una contrasena";

		if (this.state.confirmacionContrasena !== this.state.contrasena) {
			errorContrasena = "Las contraseñas no son iguales";
			errorConfirmacionContraseña = "Las contraseñas no son iguales";
		}

		//si un mensaje fue actualiza se actulizara sus estados para poder mostrarlos o quitarlos de la tarjeta de registro
		if (
			errorCorreo ||
			errorNombre ||
			errorApeido ||
			errorContrasena ||
			errorConfirmacionContraseña
		) {
			this.setState({
				errorCorreo,
				errorNombre,
				errorApeido,
				errorContrasena,
				errorConfirmacionContraseña,
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
									htmlFor="apeido"
								>
									Apeido
								</label>
								<input
									className="pa2 input-reset ba bg-transparent hover-white w-100"
									type="text"
									name="apeido"
									onChange={this.handleChange} //Funcion para actulizar el input
								/>
								<div style={{ fontSize: 12, color: "red" }}>
									{/*Div de mensaje de erro*/}
									{this.state.errorApeido}
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
									name="confirmarContrasena"
									onChange={this.handleChange} //Actualizara el valor de la variable
								/>
								<div style={{ fontSize: 12, color: "red" }}>
									{/*Div de mensaje de erro*/}
									{this.state.errorConfirmacionContraseña}
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
						</div>
					</div>
				</main>
			</article>
		);
	}
}

export default Registro;
