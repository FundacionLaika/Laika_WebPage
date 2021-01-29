export function validationAdop(state) {
    var msg = "";
    if (!state.adoptante.trim()) msg += "- Nombre adoptante"; 
    if (!state.telefono.trim()) msg += "- Teléfono"; 
    if (!state.medioAdopcion) msg += "- Medio de adopción"; 
    if (!state.visitaDeAdopcion) msg += "- Visita de adopción"; 
    if (!state.municipio.trim()) msg += "- Municipio";
    if (!state.foto) msg += "- Foto"; 

    state.comentarios.forEach((row) => {
        if (!(row.observaciones.trim() && row.accion.trim() && row.fecha)) {
            msg += "- Completar campos en comentarios";
            return;
        }
    });

    if (msg) {
        return {isValid: false, msg: msg};
    } else {
        return {isValid: true};
    }
}