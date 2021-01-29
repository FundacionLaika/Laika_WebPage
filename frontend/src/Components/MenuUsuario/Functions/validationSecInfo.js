export function validationSecInfo(state) {
	var msg = "";
	if (!state.contrasena.trim()) msg += "- Contraseña -";
	if (!state.confirmacion.trim()) msg += "- Confirmar contraseña -";

	if (msg) {
		return { isValid: false, msg: msg };
	} else {
		if (state.contrasena !== state.confirmacion) {
			return {
				isValid: false,
				msg: "La contraseña no coincide con la confirmación",
			};
		} else {
			return { isValid: true };
		}
	}
}
