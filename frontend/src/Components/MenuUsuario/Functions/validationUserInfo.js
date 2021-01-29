export function validationUserInfo(state) {
	var msg = "";
	if (!state.nombre.trim()) msg += "- Nombre -";
	if (!state.apellidos.trim()) msg += "- Apellidos -";
	if (!state.correo.trim()) msg += "- Correo -";
	if (!state.telefono.trim()) msg += "- Teléfono -";

	if (msg) {
		return { isValid: false, msg: msg };
	} else {
		return { isValid: true };
	}
}
