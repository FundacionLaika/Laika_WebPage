export function validationAdop(state) {
    var msg = "Faltan por llenar los siguientes campos\n";
    if (!state.adoptante.trim()) msg += "- Nombre adoptante\n"; 
    if (!state.telefono.trim()) msg += "- Teléfono\n"; 
    if (!state.medioAdopcion) msg += "- Medio de adopción\n"; 
    if (!state.visitaAdopcion) msg += "- Visita de adopción\n"; 
    if (!state.municipio.trim()) msg += "- Municipio\n";
    if (!state.foto) msg += "- Foto\n"; 

    state.comentarios.forEach((row) => {
        if (!(row.observaciones.trim() && row.accion.trim() && row.fecha)) {
            msg += "- Completar campos en comentarios";
            return;
        }
    });

    if (msg === "Faltan por llenar los siguientes campos\n") {
        return true;
    } else {
        alert(msg);
        return false;
    }
}