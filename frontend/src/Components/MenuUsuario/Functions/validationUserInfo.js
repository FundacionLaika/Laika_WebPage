export function validationUserInfo(state) {
	var msg = "";
	if (!state.nombre.trim()) msg += "- Nombre";
	if (!state.apellidos.trim()) msg += "- Apellidos";
	if (!state.correo.trim()) {
		msg += "- Correo";
	} else {
		if (!validateEmail(state.correo.trim())) {
			msg += "- Correo inválido";
		}
	}
	if (!state.telefono.trim()) msg += "- Teléfono";

	if (msg) {
		return { isValid: false, msg: msg };
	} else {
		return { isValid: true };
	}
}

function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}
