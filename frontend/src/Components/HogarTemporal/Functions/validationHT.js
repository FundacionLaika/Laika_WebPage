export function validationHT(state) {
	var msg = "";
	if (!state.tipoHT) msg += "- Tipo HT";
	if (!state.nombreHT.trim()) msg += "- Nombre";
	if (!state.telefonoHT.trim()) msg += "- Teléfono";
	if (!state.fechaInicioHT) msg += "- Fecha inicio";
	if (!state.fechaFinalHT) msg += "- Fecha final";
	if (!state.calle.trim()) msg += "- Calle";
	if (!state.numero.trim()) msg += "- Número";
	if (!state.colonia.trim()) msg += "- Colonia";
	if (!state.municipio.trim()) msg += "- Municipio";
	if (!state.foto) msg += "- Foto";

	state.comentarios.forEach((row) => {
		if (!(row.observaciones.trim() && row.accion.trim() && row.fecha)) {
			msg += "- Completar campos en comentarios";
			return;
		}
	});

	if (msg) {
		return { isValid: false, msg: msg };
	} else {
		return { isValid: true };
	}
}
