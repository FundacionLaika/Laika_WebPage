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
	const re = new RegExp(
		/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
	);
	return re.test(email);
}
